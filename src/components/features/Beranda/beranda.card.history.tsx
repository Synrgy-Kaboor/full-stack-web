import { useState } from 'react';
import { Typography as MuiTypography } from '@mui/material';
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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {latestThreeItems.map((item, index) => (
        <div key={index} style={{ position: 'relative', width: '437px', height: '250px', marginRight: '16px' }}>
          <img
            src={item.imageUrl}
            alt="Your Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
          />
          <Typography>{item.text}</Typography>
        </div>
      ))}
    </div>
  );
};