import { Divider, Stack, Typography, useTheme } from '@mui/material';
import { sideBarItem1, exitItem } from '.';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Sidebar() {
  const navigate = useNavigate()
  const filterIcon = 'brightness(0) invert(1) sepia(0) saturate(0) hue-rotate(0deg)'
  const theme = useTheme()
  const [selectedItem, setSelectedItem] = useState<number|null>(null);

  const handleListItemClick = (index:number) => {
    setSelectedItem(index);
    navigate(`/profil${sideBarItem1[index].route}`)
  };
  return (
    <>
      <Stack
        sx={{
          border: '1px solid #C2C2C2',
          borderRadius: '8px',
          background: '#FFF',
          maxWidth: '437px',
          maxHeight: '732px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Stack 
          direction={'row'}
          gap={4}
          justifyContent={'space-around'}
          alignItems={'center'}
          padding={'30px 26px 20px 26px'}
        >
          <img src={''} alt="ava" style={{borderRadius: '50%', width: '70px', height: '70px'}}/>
          <Stack>
            <Typography variant="h6">Andre Huston</Typography>
            <Typography variant="body2" color={'#9E9E9E'}>
              informasi pribadi 16% lengkap
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ width: '100%', color: '#C2C2C2', margin: '10px 0' }} />
        { sideBarItem1.map((data, index) => (
          index !== 2 ? 
          <Stack key={index} gap={2} direction={'row'} sx={{alignItems: 'center', padding:'10px 45px', cursor: 'pointer', width: '100%',
          backgroundColor:
          selectedItem === index ? theme.palette.primary.main : 'transparent',}} 
          onClick={()=>{handleListItemClick(index)}}>
            <img src={data.icon} alt="" width={'32px'} height={'32px'} style={{ filter: selectedItem === index ? filterIcon : 'none' }}/>
            <Typography  variant='body2' sx={{color: selectedItem === index? '#ffffff' : '#505050', fontSize: '18px', 
            fontWeight:400, lineHeight: '26px', letterSpacing:'-0.15px'}}>
              {data.text}
            </Typography>
          </Stack>
          :
          <>
          <Stack key={index} gap={2} direction={'row'} sx={{alignItems: 'center', padding:'10px 45px', cursor: 'pointer', width: '100%',
          backgroundColor:
          selectedItem === index ? theme.palette.primary.main : 'transparent',}} 
          onClick={()=>{handleListItemClick(index)}}>
            <img src={data.icon} alt="" width={'32px'} height={'32px'} style={{ filter: selectedItem === index ? filterIcon : 'none'}}/>
            <Typography  variant='body2' sx={{color: selectedItem === index? '#ffffff' : '#505050', fontSize: '18px', 
            fontWeight:400, lineHeight: '26px', letterSpacing:'-0.15px'}}>
              {data.text}
            </Typography>
          </Stack>
          <Divider sx={{ width: '100%', color: '#C2C2C2', margin: '10px 0' }} />
          </>
        ))}
        <Divider sx={{ width: '100%', color: '#C2C2C2', margin: '10px 0' }} />
        <Stack gap={2} direction={'row'} sx={{alignItems: 'center', padding:'10px 45px',cursor: 'pointer', width: '100%',}} 
          onClick={()=>{console.log('keluar')}}>
            <img src={exitItem.icon} alt="" width={'32px'} height={'32px'} />
            <Typography variant='body2' sx={{color: '#505050', fontSize: '18px', 
            fontWeight:400, lineHeight: '26px', letterSpacing:'-0.15px'}}>
              {exitItem.text}
            </Typography>
          </Stack>
      </Stack>
    </>
  );
}
