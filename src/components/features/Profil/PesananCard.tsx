import { Box, Stack, Typography, Divider, useMediaQuery } from '@mui/material';
import maskapai from '../../../assets/Logo Maskapai.png';
import plane from '../../../assets/plane icon.png';
import { Link } from 'react-router-dom';
import { UserBooking } from '../../../types/UserBooking';
import { dateToVerboseString, timeWithTimezone } from '../../../utils/formatter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from 'styled-components';

const getStatusBackgroundColor = (status: string): string => {
  switch (status) {
    case 'Selesai':
      return '#18AF5E';
    case 'Belum Selesai':
      return '#E18D88'
    case 'Sedang Diproses':
      return '#F1A025';
    case 'E-Tiket Terbit':
      return '#7B52AB';
    default:
      return ''; 
  }
};

const PesananCard: React.FC<{ data: UserBooking }> = (props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  function statusString(uploadedPaymentProof: boolean, paymentCompleted: boolean, departureDateTime: Date): string {
    if (!uploadedPaymentProof) {
      return 'Belum Selesai';
    } else if (!paymentCompleted) {
      return 'Sedang Diproses';
    } else if (departureDateTime < new Date()) {
      return 'Selesai'
    } else {
      return 'E-Tiket Terbit';
    }
  }

  return (
    <>
      <Box borderRadius={'8px'} border={'1px solid #C2C2C2'} >
        <Stack borderRadius={'8px'}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant="body2" fontWeight={400} color={'#757575'}  margin={'13px 22px 8px'}>
              ID Pemesanan : {props.data.id}
            </Typography>
          </Stack>
          <Divider sx={{ borderStyle: 'dashed' }} />
          <Stack >
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={1.25} m={{ xs: 2, md: 3 }}>
              <Stack direction={'column'} >
                <Stack style={{ width: '52px' }}>
                  <img style={{ width: '100%' }} src={maskapai} alt="Maskapai Logo" />
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1} justifyContent={'space-between'} sx={{marginBottom:'16px'}}> 
                  <Typography variant="body1" fontWeight={600} fontSize={{ xs: 12, md: 16 }} color={'#505050'} >
                    {props.data.flight.originAirport.code}
                  </Typography>
                  <Stack>
                    {isSmallScreen && <ArrowForwardIcon/>}
                    {!isSmallScreen && <img style={{ width: '100%' }} src={plane} alt="Plane Icon" />}
                  </Stack>
                  <Typography variant="body1" fontWeight={600} fontSize={{ xs: 12, md: 16 }} color={'#505050'} >
                    {props.data.flight.destinationAirport.code}
                  </Typography>
                </Stack>
                <Stack flexDirection={'unset'}>
                  <Typography 
                    variant="caption" 
                    fontWeight={600} 
                    color={'white'} 
                    fontSize={{ xs: 10, md: 12 }}
                    sx={{ 
                      backgroundColor: getStatusBackgroundColor(
                        statusString(
                          props.data.uploadedProofOfPayment, 
                          props.data.paymentCompleted, 
                          new Date(props.data.flight.departureDateTime)
                        )
                      ),
                      borderRadius: '16px' 
                    }} 
                    padding={'2px 11px'}
                  >
                    {statusString(
                      props.data.uploadedProofOfPayment, 
                      props.data.paymentCompleted, 
                      new Date(props.data.flight.departureDateTime)
                      )
                    }
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction={'column'} justifyContent={'flex-end'} alignItems={'flex-end'} alignSelf={'stretch'} pb={0}>
                <Typography variant="body1" fontWeight={600} color={'#505050'} fontSize={{ xs: 12, md: 16 }}>
                  {dateToVerboseString(new Date(props.data.flight.departureDateTime), props.data.flight.originAirport.timezone)}
                </Typography>
                <Typography variant="body1" fontWeight={600} color={'#505050'} sx={{ marginBottom: '19px' }} fontSize={{ xs: 12, md: 16 }}>
                  {timeWithTimezone(new Date(props.data.flight.departureDateTime), props.data.flight.originAirport.timezone)}
                </Typography>
                {!props.data.uploadedProofOfPayment && 
                  <Link to={`/booking/${props.data.id}/pembayaran`} style={{ textDecoration: 'none', color: '#7B52AB' }}>
                    <Typography variant="body1" fontWeight={600} color={'#7B52AB'} fontSize={{ xs: 12, md: 16 }}>
                      Lanjutkan Pembayaran
                    </Typography>
                  </Link>    
                }
                {props.data.uploadedProofOfPayment && 
                  <Link to={props.data.type === 'return' ? `/profil/pesanan/${props.data.id}/kepulangan` : `/profil/pesanan/${props.data.id}/keberangkatan`} style={{ textDecoration: 'none', color: '#7B52AB' }}>
                    <Typography variant="body1" fontWeight={600} color={'#7B52AB'} fontSize={{ xs: 12, md: 16 }}>
                      Selengkapnya
                    </Typography>
                  </Link>    
                }
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

const PesananCardsList: React.FC<{ data: UserBooking[] }> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <PesananCard
          key={index}
          data={item}
        />
      ))}
    </>
  );
};

export { PesananCardsList };
