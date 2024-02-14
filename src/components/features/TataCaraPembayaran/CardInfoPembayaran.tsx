import { useState, useEffect } from 'react';
import { Card, Typography, Box, IconButton, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CardInfoPembayaran(props: { title: string; fontweight: string; label: string; item: string; expiredTime?: number; startInterval?: boolean }) {
  const [timeRemaining, setTimeRemaining] = useState<number>(Math.round(props.expiredTime || 0));
  const navigate = useNavigate();

  useEffect(() => {
    if (props.item === 'time' && props.startInterval && props.expiredTime) {
      setTimeRemaining(props.expiredTime);

      const interval = setInterval(() => {
        setTimeRemaining((prevTime: number) => Math.max(0, Math.round(prevTime - 1)));
      }, 1000);

      return () => clearInterval(interval);
    }

    if (props.expiredTime === 0) {
      navigate('/profil/pesanan');
    }
  }, [navigate, props.expiredTime, props.item, props.startInterval]);

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return (
      <div
        style={{
          display: 'flex',
          width: '118px',
          height: '27px',
          padding: '3px 21px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          borderRadius: '8px',
          background: 'var(--Secondary-01, #7B52AB)',
          fontSize: '16px',
          color: 'white',
        }}
      >
        {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
      </div>
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(props.title);
    window.alert(`"${props.title}" is copied to the clipboard!`);
  };

  return (
    <Box>
      <Typography sx={{ fontWeight: props.fontweight, mb: 1 }}>
        {props.label}
      </Typography>

      <Card variant="outlined" sx={{ padding: '18px', paddingLeft: '24px', display: 'flex', alignItems: 'center' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} flexGrow={1}>
          <Typography sx={{ fontWeight: props.fontweight }}>
            {props.title}
          </Typography>

          <IconButton onClick={props.item === 'copy' ? handleCopy : undefined}>
            {props.item === 'copy' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
                <path d="M6.33398 3.66668V17.6667C6.33398 18.2855 6.57982 18.879 7.0174 19.3166C7.45499 19.7542 8.04848 20 8.66732 20H18.0007C18.6195 20 19.213 19.7542 19.6506 19.3166C20.0882 18.879 20.334 18.2855 20.334 17.6667V7.44901C20.3339 7.13816 20.2718 6.83046 20.1512 6.54396C20.0306 6.25747 19.8539 5.99796 19.6317 5.78068L15.7642 1.99834C15.3282 1.57211 14.7428 1.33342 14.1332 1.33334H8.66732C8.04848 1.33334 7.45499 1.57918 7.0174 2.01676C6.57982 2.45435 6.33398 3.04784 6.33398 3.66668Z" stroke="url(#paint0_linear_2478_3153)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.667 20V22.3333C15.667 22.9522 15.4212 23.5457 14.9836 23.9833C14.546 24.4208 13.9525 24.6667 13.3337 24.6667H4.00033C3.38149 24.6667 2.78799 24.4208 2.35041 23.9833C1.91282 23.5457 1.66699 22.9522 1.66699 22.3333V9.50001C1.66699 8.88117 1.91282 8.28767 2.35041 7.85009C2.78799 7.4125 3.38149 7.16667 4.00033 7.16667H6.33366" stroke="url(#paint1_linear_2478_3153)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_2478_3153" x1="20.334" y1="10.6667" x2="6.33398" y2="10.6667" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3A42FF"/>
                    <stop offset="1" stop-color="#7B52AB"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_2478_3153" x1="15.667" y1="15.9167" x2="1.66699" y2="15.9167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3A42FF"/>
                    <stop offset="1" stop-color="#7B52AB"/>
                  </linearGradient>
                </defs>
              </svg>
              </svg>
            ) : props.item === 'time' ? (
              formatTime(timeRemaining)
            ) : null}
          </IconButton>
        </Stack>
      </Card>
    </Box>
  );
}
