import { Box, Stack, Typography, Divider } from '@mui/material';
import maskapai from '../../../assets/Logo Maskapai.png';
import plane from '../../../assets/plane icon.png';
import { Link } from 'react-router-dom';
interface PesananCardProps {
  id: string;
  airport1: string;
  airport2: string;
  Tanggal: string;
  Jam: string;
  status: string;
}

const getStatusBackgroundColor = (status: string): string => {
  switch (status) {
    case 'Selesai':
      return '#18AF5E';
    case 'Sedang di Proses':
      return '#F1A025';
    case 'E-Tiket Terbit':
      return '#7B52AB';
    default:
      return ''; 
  }
};

const PesananCard: React.FC<PesananCardProps> = ({ id, airport1, airport2, Tanggal, Jam, status }) => {
  
  return (
    <>
      <Box borderRadius={1} border={'1px solid #C2C2C2'} py={2}>
        <Stack gap={1}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={1.25} mb={1} >
            <Typography variant="h6" fontWeight={400} color={'#757575'} sx={{ paddingLeft: '24px' }}>
              ID Pemesanan : {id}
            </Typography>
          </Stack>
          <Divider />
          <Stack px={3}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={1.25} mb={1} >
              <Stack direction={'column'} gap={2.5} >
                <Stack style={{ width: '52px' }}>
                <img style={{ width: '100%' }} src={maskapai} alt="Maskapai Logo" />
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={2.5} width={'500px'}>
                  <Typography variant="h6" fontWeight={600} color={'#505050'} >
                    {airport1}
                  </Typography>
                  <Stack>
                    <img style={{ width: '100%' }} src={plane} alt="Plane Icon" />
                  </Stack>
                  <Typography variant="h6" fontWeight={600} color={'#505050'} >
                    {airport2}
                  </Typography>
                </Stack>
                <Stack flexDirection={'unset'}>
                  <Typography variant="h6" fontWeight={600} color={'white'} sx={{ backgroundColor: getStatusBackgroundColor(status), borderRadius: '16px' }} padding={'2px 11px'}>
                    {status}
                  </Typography>
                </Stack>
              </Stack>

              <Box position={'relative'} >
                <Typography variant="h6" fontWeight={600} color={'#505050'} >
                  {Tanggal}
                </Typography>
                <Typography variant="h6" fontWeight={600} color={'#505050'} sx={{ marginBottom: '19px' }}>
                  {Jam}
                </Typography>
                <Link to={`/profil/pesanan/${id}`} style={{ textDecoration: 'none', color: '#7B52AB' }}>
                  <Typography variant="h6" fontWeight={600} color={'#7B52AB'} >
                    Selengkapnya
                  </Typography>
                </Link>    
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

const PesananCardsList: React.FC<{ data: PesananCardProps[] }> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <PesananCard
          key={index}
          id={item.id}
          airport1={item.airport1}
          airport2={item.airport2}
          Tanggal={item.Tanggal}
          Jam={item.Jam}
          status={item.status}
        />
      ))}
    </>
  );
};

export { PesananCardsList };
