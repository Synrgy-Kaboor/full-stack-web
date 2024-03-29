import { useState } from 'react';
import { Typography as MuiTypography, Stack, useMediaQuery, useTheme } from '@mui/material';
import histori1 from '../../../assets/histori1beranda.png'
import histori2 from '../../../assets/histori2beranda.png'
import histori3 from '../../../assets/histori3beranda.png'

const Typography = ({ children }: { children: string }) => (
  <MuiTypography
    variant="h3"
    sx={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      padding: '16px',
      color: 'var(--White, #FFF)', 
      fontFamily: 'Open Sans',
      fontSize: '20px', 
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '28px', 
      letterSpacing: '-0.75px', 
    }}
  >
    {children}
  </MuiTypography>
);

export const BerandaHistory = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [historyItems] = useState([
    {
      imageUrl: 'https://placekitten.com/437/250',
      text: 'Terakhir dilihat 1',
    },
    {
      imageUrl: histori1,
      text: 'Bandara Soekarno Hatta',
    },
    {
      imageUrl: histori2,
      text: 'Bandara I Gusti Ngurah Rai',
    },
    {
      imageUrl: histori3,      
      text: 'Stasiun Manggarai',
    },
  ]);

  const latestThreeItems = historyItems.slice(-3).reverse(); 

  return (
    <Stack direction={isSmallScreen ? 'column' : 'row'} gap={1} alignItems={'center'}>
      {latestThreeItems.map((item, index) => (
        <Stack key={index} sx={{ position: 'relative', width: isSmallScreen ? '98%' : '437px', maxWidth: '100%', height: isSmallScreen ? '40%' : '250px' }}>
          <img
            src={item.imageUrl}
            alt="Your Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
          />
          <Typography>{item.text}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};
