import { Stack, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { PesananCardsList } from '../Profil/PesananCard';
import { UserBooking } from '../../../types/UserBooking';
import { httpFetch } from '../../../utils/http';
import { BeResponse } from '../../../types/BeResponse';

const Pesanan = () => {
  const [filterStatus, setFilterStatus] = useState('Aktif');
  const [pesananAktif, setPesananAktif] = useState<UserBooking[]>([]);
  const [pesananSelesai, setPesananSelesai] = useState<UserBooking[]>([]);
  const [pesananShown, setPesananShown] = useState<UserBooking[]>([]);

  useEffect(() => {
    httpFetch<BeResponse<UserBooking[]>>(
      'api/v1/booking/active', 
      true,
      {},
      'fsw',
    ).then(response => {
      setPesananAktif(response.data);
    });

    httpFetch<BeResponse<UserBooking[]>>(
      'api/v1/booking/finished', 
      true,
      {},
      'fsw',
    ).then(response => {
      setPesananSelesai(response.data);
    });
  }, []);

  useEffect(() => {
    if (filterStatus === 'Aktif') {
      setPesananShown(pesananAktif);
    } else {
      setPesananShown(pesananSelesai);
    }
  }, [pesananAktif, pesananSelesai, filterStatus]);

  return (
    <>
      <Stack
        px={{ md: 6, xs: 4 }}
        py={{ md: 4, xs: 4 }}
        borderRadius={1}
        border={`1px solid ${'#C2C2C2'}`}
        width={'100%'}
        maxWidth={'880px'}
        sx={{
          background: '#FFF',
        }}
        gap={2}
      >
        <Typography variant="h5" color={'#1C1C1E'} fontWeight={700}>
          Pesanan
        </Typography>
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
        <PesananCardsList data={pesananShown} />
      </Stack>
    </>
  );
};

export default Pesanan;
