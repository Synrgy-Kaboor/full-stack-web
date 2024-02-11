import { Stack, Typography, Box, Button } from '@mui/material';
//import CardFilterPlaneSchedule from '../../ui/CardFilterPlaneSchedule';
import { useState } from 'react';
import { PesananCardsList } from '../Profil/PesananCard';
import PesananData from './PesananData';

const Pesanan = () => {
  const [modalFilterOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('Aktif');

  const filteredData = filterStatus === 'Aktif' 
    ? PesananData.filter(item => item.status !== 'Selesai') 
    : filterStatus === 'Riwayat' 
      ? PesananData.filter(item => item.status === 'Selesai') 
      : PesananData;

  return (
    <>
      <Stack
        px={6}
        py={4}
        borderRadius={1}
        border={`1px solid ${'#C2C2C2'}`}
        width={'100%'}
        maxWidth={'880px'}
        sx={{
          background: '#FFF',
        }}
        gap={2}
      >
        <Stack
          direction="row"
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="h5" color={'#1C1C1E'} fontWeight={700}>
            Pesanan
          </Typography>
          <Box position={'relative'}>
            <Box
              position={'absolute'}
              alignSelf={'center'}
              right={0}
              sx={modalFilterOpen ? { display: 'flex' } : { display: 'none' }}
            >
              {/* <CardFilterPlaneSchedule /> */}
            </Box>
          </Box>
        </Stack>
        <Stack flexDirection={'row'} gap={1}>
        <Button 
  sx={{
    width:'83px', 
    background: filterStatus === 'Aktif' ? '#7B52AB' : '#C2C2C2', 
    color: 'white', 
    borderRadius:'60px', 
    fontSize:'18px', 
    textTransform:'initial',
    '&:hover': {
      background: filterStatus === 'Aktif' ? '#7B52AB' : '#C2C2C2',
    },
  }}
  onClick={() => setFilterStatus('Aktif')}
>
  Aktif
</Button>
<Button 
  sx={{
    width:'112px', 
    background: filterStatus === 'Riwayat' ? '#7B52AB' : '#C2C2C2', 
    color: 'white', 
    borderRadius:'60px', 
    fontSize:'18px',  
    textTransform:'initial',
    '&:hover': {
      background: filterStatus === 'Riwayat' ? '#7B52AB' : '#C2C2C2',
    },
  }}
  onClick={() => setFilterStatus('Riwayat')}
>
  Riwayat
</Button>


        </Stack>
        <PesananCardsList data={filteredData} />
      </Stack>
    </>
  );
};

export default Pesanan;
