import { Dialog, Stack, Typography, Button } from '@mui/material';
import { Notification } from '.';
import PaymentNotif from './../../../assets/paymentNotif.svg';
import CloseIcon from './../../../assets/close.svg';
import { useEffect, useState } from 'react';
import { getDayMonth } from '.';
import PaymentDetail from '../../shared/Profil/PaymentDetail';
import { PaymentInfo, emptyPayment } from '../../shared/Profil';

const Notification = () => {
  const jwtToken = localStorage.getItem('token');
  const [data, setData] = useState<Notification[]>([]);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>(emptyPayment);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fsw-backend.fly.dev/api/v1/user/notification',
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        const notifData = await response.json();
        setData(notifData.data.notification);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [data, jwtToken]);

  const handlePopUp = (id: number) => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fsw-backend.fly.dev/api/v1/booking/${id}/status`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        const notifData = await response.json();
        setPaymentInfo(notifData.data);
        console.log(notifData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    setIsOpen(true);

    console.log(paymentInfo);
  };
  return (
    <>
      <Stack
        direction={'column'}
        maxWidth={'880px'}
        alignItems={'start'}
        sx={{
          width: '100%',
          height: '100%',
          padding: '34px 43px',
          borderRadius: '8px',
          border: '1px solid #C2C2C2',
          background: 'white',
        }}
        gap={2}
      >
        <Typography
          sx={{
            color: '#000',
            fontFamily: 'Open Sans',
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: '-0.5px',
          }}
        >
          Notifikasi
        </Typography>
        {!data.length ? (
          <Typography
            sx={{
              color: '#000',
              fontFamily: 'Open Sans',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '-0.5px',
            }}
          ></Typography>
        ) : (
          data.map((item, index) => (
            <Stack
              key={index}
              direction={'row'}
              justifyContent={'center'}
              alignItems={'start'}
              sx={{
                width: '100%',
                height: '100%',
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid #C2C2C2',
                background: 'white',
                cursor: 'pointer',
              }}
              gap={2}
              onClick={() => handlePopUp(Number(item.id))}
            >
              <img src={PaymentNotif} alt='icon' />
              <Stack width={'100%'}>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  width={'100%'}
                >
                  <Typography
                    sx={{
                      color: '#1C1C1E',
                      fontFamily: 'Open Sans',
                      fontSize: '20px',
                      fontWeight: 600,
                      letterSpacing: '-0.75px',
                    }}
                  >{`${item.title}`}</Typography>
                  <Typography
                    sx={{
                      color: '#9E9E9E',
                      fontFamily: 'Open Sans',
                      fontSize: '16px',
                      fontWeight: 600,
                      letterSpacing: '-0.75px',
                    }}
                  >{`${getDayMonth(item.created_at)}`}</Typography>
                </Stack>
                <Typography
                  sx={{
                    color: '#9E9E9E',
                    fontFamily: 'Open Sans',
                    fontSize: '18px',
                    fontWeight: 600,
                    letterSpacing: '-0.75px',
                  }}
                >{`${item.detail}`}</Typography>
              </Stack>
              <Dialog open={isOpen}>
                <Stack padding={2} gap={2}>
                  <img
                    src={CloseIcon}
                    alt='icon'
                    style={{ alignSelf: 'flex-end' }}
                    onClick={() => setIsOpen(false)}
                  />
                  <PaymentDetail
                    methodName={paymentInfo!.methodName}
                    paymentDateTime={paymentInfo!.paymentDateTime}
                    totalPrice={paymentInfo!.totalPrice}
                    invoiceNumber={paymentInfo!.invoiceNumber}
                  />
                  <Button variant='outlined' color='secondary'>
                    Download
                  </Button>
                </Stack>
              </Dialog>
            </Stack>
          ))
        )}
      </Stack>
    </>
  );
};

export default Notification;
