import { useParams } from 'react-router-dom';
import { Divider, Stack, Typography, Button } from '@mui/material';
import bagasiIcon from '../../../assets/uil_bag-alt.svg';
import Checker from '../../../assets/Checker.svg';
const NotifDetail = () => {
  const { notifId } = useParams();
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
          {`${notifId}`}
        </Typography>
        <Typography
          sx={{
            color: '#505050',
            fontFamily: 'Open Sans',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '-0.5px',
            backgroundColor: '#FFDB5B',
            padding: '0 8px',
            borderRadius: '8px',
          }}
        >
          {`Pesawat anda terlambat ${notifId} jam`}
        </Typography>
        <Stack gap={2} width={'100%'} maxWidth={'789px'}>
          <Stack
            sx={{
              border: '1px solid #C2C2C2 ',
              borderRadius: '8px',
            }}
          >
            <Stack padding={2}>
              <Typography
                sx={{
                  color: '#757575',
                  fontFamily: 'Open Sans',
                  fontSize: '14px',
                  fontWeight: 400,
                  letterSpacing: '0.1px',
                }}
              >
                Kode Booking
              </Typography>
              <Typography
                sx={{
                  color: '#7B52AB',
                  fontFamily: 'Open Sans',
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '-0.1px',
                }}
              >
                {`kode nya`}
              </Typography>
            </Stack>
            <Divider />
            <Stack
              flexDirection={'row'}
              justifyContent={'space-between'}
              padding={2}
            >
              <Stack>
                <Typography
                  sx={{
                    color: '#1C1C1E',
                    fontFamily: 'Open Sans',
                    fontSize: '16px',
                    fontWeight: 600,
                    letterSpacing: '-0.1px',
                  }}
                >
                  {`Airport beserta codenya`}
                </Typography>
                <Typography
                  sx={{
                    color: '#757575',
                    fontFamily: 'Open Sans',
                    fontSize: '14px',
                    fontWeight: 400,
                    letterSpacing: '0.1px',
                  }}
                >{`kelas penerbangannya`}</Typography>
              </Stack>
              <img src='' alt='icon maskapai' width={'52px'} height={'40px'} />
            </Stack>
            <Divider />
            <Stack padding={2}>
              disini design tiket ambil di jadwal keberangkatan aja
            </Stack>
          </Stack>
          <Stack
            sx={{
              border: '1px solid #C2C2C2 ',
              borderRadius: '8px',
            }}
          >
            <Typography
              sx={{
                color: '#1C1C1E',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
                padding: '16px',
              }}
            >
              Penumpang
            </Typography>
            <Divider />
            <Stack>
              <Typography
                sx={{
                  color: '#1C1C1E',
                  fontFamily: 'Open Sans',
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '-0.1px',
                  padding: '16px 16px 8px 16px',
                }}
              >
                1. Nama Penumpang
              </Typography>
              <Stack
                flexDirection={'row'}
                alignItems={'center'}
                paddingLeft={'30px'}
                paddingBottom={'16px'}
              >
                <img
                  src={bagasiIcon}
                  alt='apapin'
                  width={'20px'}
                  height={'20px'}
                />
                <Typography
                  sx={{
                    padding: '0 8px',
                    color: '#9E9E9E',
                    fontFamily: 'Open Sans',
                    fontSize: '14px',
                    fontWeight: 400,
                    letterSpacing: '-0.1px',
                  }}
                >
                  Bagasi Kabin 7 kg
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              border: '1px solid #C2C2C2 ',
              borderRadius: '8px',
            }}
          >
            <Typography
              sx={{
                color: '#1C1C1E',
                fontFamily: 'Open Sans',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.75px',
                padding: '16px',
              }}
            >
              Perlindungan Ekstra
            </Typography>
            <Divider />
            <Stack>
              <Stack
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                padding={'16px'}
              >
                <Stack flexDirection={'row'} alignItems={'center'}>
                  <img
                    src={bagasiIcon}
                    alt='apapin'
                    width={'20px'}
                    height={'20px'}
                  />
                  <Typography
                    sx={{
                      padding: '0 8px',
                      color: '#9E9E9E',
                      fontFamily: 'Open Sans',
                      fontSize: '14px',
                      fontWeight: 400,
                      letterSpacing: '-0.1px',
                    }}
                  >
                    Bagasi Kabin 7 kg
                  </Typography>
                </Stack>
                <img
                  src={Checker}
                  alt='apapin'
                  width={'20px'}
                  height={'20px'}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Button variant='outlined' color='secondary' sx={{ alignSelf: 'end' }}>
          download E-Ticket
        </Button>
      </Stack>
    </>
  );
};

export default NotifDetail;
