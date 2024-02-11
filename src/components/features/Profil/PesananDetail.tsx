import { Box, Divider, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import PesananData from '../Profil/PesananData';
import { Penumpang } from '../Profil/Penumpang';
import Copy from '../../../assets/Copy.svg';
import logo1 from '../../../assets/Logo Pesanan 1.svg';
import logo2 from '../../../assets/Logo Pesanan 2.svg';
import logo3 from '../../../assets/Logo Pesanan 3.svg';
import checker from '../../../assets/Checker.svg';
import maskapai from '../../../assets/Logo Maskapai.png';
import plane from '../../../assets/plane icon.png';

interface Pesanan {
  id: string;
  airport1: string;
  jam1: string;
  airport2: string;
  jam2: string;
  Tanggal: string;
  Jam: string;
  status: string;
  kode: string;
  nama: string;
  kelas: string;
  durasi: string;
  penumpang: Penumpang[];
}

interface PesananDetailProps {
  id: string;
  airport1: string;
  airport2: string;
  Tanggal: string;
  Jam: string;
  status: string;
  kode: string;
}

const Pesanandetail: React.FC<PesananDetailProps> = () => {
  const { id } = useParams<{ id: string }>();
  const pesanan: Pesanan | undefined = PesananData.find(item => item.id === id);

  if (!pesanan) {
    return <Typography>Pesanan not found</Typography>;
  }

  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text);
    window.alert('Kode booking telah disalin.');
  };

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
        <Typography variant='h5' fontWeight={700}>ID : {pesanan.id}</Typography>
        {pesanan.status == 'Selesai' && (
  <Stack flexDirection={'unset'}>
    <Typography
      variant="body1"
      fontWeight={400}
      color={'white'}
      sx={{ background: '#18AF5E', borderRadius: '16px' }}
      padding={'3px 10px'}
    >
      Penerbangan {pesanan.status}
    </Typography>
  </Stack>
)}
        <Box borderRadius={'8px'} border={'1px solid #C2C2C2'}>
          <Stack sx={{ margin: '20px', marginTop: '14px', marginBottom: '16px' }}>
            <Typography variant='body2' fontWeight={400} color={'#757575'}>Kode Booking</Typography>
            <Stack direction={'row'} gap={3}>
              <Typography
                sx={{
                  background: 'var(--Primary-01, linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {pesanan.kode}
              </Typography>
              <Stack width={'20px'} onClick={() => handleCopyClick(pesanan.kode)} style={{ cursor: 'pointer' }}>
                <img src={Copy} alt="copy-icon" />
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction={'row'} justifyContent={'space-between'} sx={{ margin: '20px', marginTop: '16px', marginBottom: '9px' }}>
            <Stack direction={'column'}>
              <Typography variant='body1' fontWeight={600} color={'black'}>{pesanan.nama}</Typography>
              <Typography variant='body2' fontWeight={400} color={'#757575'}>{pesanan.kelas}</Typography>
            </Stack>
            <Stack width={'52px'}>
              <img src={maskapai} alt="maskapai-logo" />
            </Stack>
          </Stack>
          <Divider />
          <Stack direction={'row'} justifyContent={'space-between'} sx={{ margin: '20px', marginTop: '26px', marginBottom: '27px' }}>
            <Stack direction={'column'}>
              <Typography variant='body2' fontWeight={400} color={'#757575'}>{pesanan.airport1}</Typography>
              <Typography variant='body1' fontWeight={600} color={'black'}>{pesanan.jam1}</Typography>
            </Stack>
            <Stack direction={'column'} alignItems={'center'}>
              <Typography variant='body2' fontWeight={400} color={'#757575'}>{pesanan.Tanggal}</Typography>
              <Stack width={'26px'}>
                <img src={plane} alt="plane-icon" />
              </Stack>
              <Typography variant='body2' fontWeight={400} color={'#757575'}>{pesanan.durasi}</Typography>
            </Stack>
            <Stack direction={'column'}>
              <Typography variant='body2' fontWeight={400} color={'#757575'}>{pesanan.airport2}</Typography>
              <Typography variant='body1' fontWeight={600} color={'black'}>{pesanan.jam2}</Typography>
            </Stack>
          </Stack>
        </Box>

        <Box borderRadius={'8px'} border={'1px solid #C2C2C2'}>
          <Typography variant='h6' fontWeight={600} color={'black'} sx={{ margin: '20px', marginTop: '14px', marginBottom: '16px' }}>Penumpang</Typography>
          <Divider />
          <Stack>
            <ul style={{ listStyle: 'none' }}>
              {pesanan.penumpang.map((penumpang, index) => (
                <li key={index}>
                  <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    sx={{
                      margin: '20px',
                      marginTop: '14px',
                      marginBottom: '16px',
                     }}
                  >
                    <Stack direction={'column'}>
                      <Stack direction={'row'} gap={1}>
                        <Typography variant='body1' fontWeight={600} color={'#757575'}>
                          {index + 1}.
                        </Typography>
                        <Typography variant='body1' fontWeight={600} color={'black'}>
                          {penumpang.name}
                        </Typography>
                      </Stack>
                      <Typography variant='body2' fontWeight={400} color={'#757575'}>
                        Bagasi Kabin 7 kg
                      </Typography>
                      <Typography variant='body2' fontWeight={400} color={'#757575'}>
                        Bagasi Tambahan
                      </Typography>
                    </Stack>
                    <Stack >
                        <Typography sx={{
                             background:
                             penumpang.age === 'Dewasa'
                               ? '#7B52AB'
                               : penumpang.age === 'Anak'
                               ? '#FFD43A'
                               : penumpang.age === 'Bayi'
                               ? '#117A42'
                               : undefined,
                            padding:'2px 11px',
                            borderRadius:'16px',
                            color:'white' 
                        }}>
                            {penumpang.age}
                        </Typography></Stack>
                  </Stack>
                </li>
              ))}
            </ul>
          </Stack>
        </Box>

        <Box borderRadius={'8px'} border={'1px solid #C2C2C2'}>
          <Typography variant='h6' fontWeight={600} color={'black'} sx={{ margin: '20px', marginTop: '14px', marginBottom: '16px' }}>Perlindungan Ekstra</Typography>
          <Divider />
          <Stack direction={'column'} gap={1} sx={{ margin: '20px', marginTop: '14px', marginBottom: '16px' }}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack direction={'row'} gap={1}>
                <Stack width={'20px'}>
                  <img src={logo1} alt="logo1" />
                </Stack>
                <Typography variant='body2' fontWeight={400} color={'#757575'}>Asuransi Perjalanan</Typography>
              </Stack>
              <Stack width={'20px'}>
                <img src={checker} alt="checker" />
              </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack direction={'row'} gap={1}>
                <Stack width={'20px'}>
                  <img src={logo2} alt="logo2" />
                </Stack>
                <Typography variant='body2' fontWeight={400} color={'#757575'}>Asuransi Bagasi</Typography>
              </Stack>
              <Stack width={'20px'}>
                <img src={checker} alt="checker" />
              </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack direction={'row'} gap={1}>
                <Stack width={'20px'}>
                  <img src={logo3} alt="logo3" />
                </Stack>
                <Typography variant='body2' fontWeight={400} color={'#757575'}>Asuransi Keterlambatan</Typography>
              </Stack>
              <Stack width={'20px'}>
                <img src={checker} alt="checker" />
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Stack direction={'row'} justifyContent={'flex-end'}>
        <button
               style={{
                display: 'flex',
                width: '180px',
                height: '48px',
                padding: '12px 20px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                border: '1px solid var(--Primary-01, #3A42FF)',
                background: 'white',
                color: 'var(--Primary-01, #3A42FF)',
                cursor: 'pointer',
                fontWeight:'600',
                right:'0%',
              }}
             >
            Download E-Ticket
            </button>
            </Stack>
      </Stack>
    </>
  );
};

export default Pesanandetail;
