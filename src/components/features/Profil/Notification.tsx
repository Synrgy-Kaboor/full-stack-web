import { Dialog, Stack, Typography, Button } from '@mui/material';
import PaymentNotif from './../../../assets/paymentNotif.svg';
import { NotificationData } from '.';
import CloseIcon from './../../../assets/close.svg';
import { useEffect, useState, useRef } from 'react';
import { getDayMonth } from '.';
import PaymentDetail from '../../shared/Profil/PaymentDetail';
import { PaymentInfo } from '../../shared/Profil';
import { useReactToPrint } from 'react-to-print';

const Notification = () => {
  const jwtToken = localStorage.getItem('token');
  const [data, setData] = useState<NotificationData[]>([]);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>();
  const [isOpen, setIsOpen] = useState(false);

  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onAfterPrint: () => setIsOpen(false),
  });

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
  }, [jwtToken]);

  const fetchingData = async (id: number) => {
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
      console.log('ini yang mau gua liat', notifData);
      return notifData.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePopUp = async (id: number) => {
    setPaymentInfo(await fetchingData(id));
    console.log('1', await fetchingData(id));
    console.log('2', paymentInfo);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    console.log('ini isOpen', isOpen);
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
            <>
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
              </Stack>
              {paymentInfo ? (
                <Dialog open={isOpen} hideBackdrop>
                  <Stack padding={2} gap={2}>
                    <img
                      src={CloseIcon}
                      alt='icon'
                      style={{ alignSelf: 'flex-end', cursor: 'pointer' }}
                      onClick={handleClose}
                    />
                    <div ref={printRef}>
                      <PaymentDetail
                        methodName={paymentInfo!.methodName}
                        paymentDateTime={
                          paymentInfo!.paymentDateTime
                            ? paymentInfo!.paymentDateTime
                            : paymentInfo.expiredTime
                        }
                        totalPrice={paymentInfo!.totalPrice}
                        invoiceNumber={paymentInfo!.invoiceNumber}
                      />
                    </div>
                    <Button
                      variant='outlined'
                      color='secondary'
                      onClick={handlePrint}
                    >
                      Download
                    </Button>
                  </Stack>
                </Dialog>
              ) : null}
            </>
          ))
        )}
      </Stack>
    </>
  );
};

export default Notification;
