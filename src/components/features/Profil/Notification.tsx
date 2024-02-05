import { Stack, Typography } from '@mui/material';
import { notificationData } from '.';
import { formatDate } from '.';
import Mail from './../../../assets/mail.svg';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const navigate = useNavigate();
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
        {notificationData.map((item, index) => (
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
            onClick={() => navigate(`/profil/notifikasi/${item.id}`)}
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
                >{`${formatDate(item.createdAt)}`}</Typography>
              </Stack>
              <Typography
                sx={{
                  color: '#9E9E9E',
                  fontFamily: 'Open Sans',
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '-0.75px',
                }}
              >{`${item.message}`}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default Notification;
