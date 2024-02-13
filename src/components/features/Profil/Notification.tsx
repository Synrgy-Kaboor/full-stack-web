import { Stack, Typography } from '@mui/material';
import { Notification } from '.';
import Mail from './../../../assets/mail.svg';
import { useEffect, useState } from 'react';
import { getDayMonth } from '.';

const Notification = () => {
  const jwtToken = localStorage.getItem('token');
  const [data, setData] = useState<Notification[]>([]);
  console.log('ini state Data', data);
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
        console.log('INI ADALAH Respondnya', notifData);
        setData(notifData.data.notification);
        console.log('ini data statae 2', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [data, jwtToken]);

  console.log(data);
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
          >
            Notifikasi
          </Typography>
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
              onClick={() => {}}
            >
              <img src={Mail} alt='icon' />
              <Stack width={'100%'}>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  width={'100%'}
                >
                  <Typography>{`${item.title}`}</Typography>
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
          ))
        )}
      </Stack>
    </>
  );
};

export default Notification;
