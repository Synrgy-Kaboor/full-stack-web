import { Box, Stack, Typography, Divider } from '@mui/material';
import maskapai from '../../../assets/Logo Maskapai.png';
import plane from '../../../assets/plane icon.png';
import { Link } from 'react-router-dom';
import { UserBooking } from '../../../types/UserBooking';
import { dateToVerboseString, timeWithTimezone } from '../../../utils/formatter';

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

const PesananCard: React.FC<{ data: UserBooking }> = (props: { data: UserBooking }) => {
  function statusString(uploadedPaymentProof: boolean, paymentCompleted: boolean, departureDateTime: Date): string {
    if (!uploadedPaymentProof) {
      return 'Belum Selesai';
    } else if (!paymentCompleted) {
      return 'Sedang Diproses';
    } else if (departureDateTime > new Date()) {
      return 'Selesai'
    } else {
      return 'E-Tiket Terbit';
    }
  }

  console.log(props.data);
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
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={1.25} mb={1} margin={'8px 20px 25px'}>
              <Stack direction={'column'} >
                <Stack style={{ width: '52px' }}>
                <img style={{ width: '100%' }} src={maskapai} alt="Maskapai Logo" />
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={2.5} width={'300px'} sx={{marginBottom:'16px'}}> 
                  <Typography variant="body1" fontWeight={600} color={'#505050'} >
                    {props.data.flight.originAirport.code}
                  </Typography>
                  <Stack>
                    <img style={{ width: '100%' }} src={plane} alt="Plane Icon" />
                  </Stack>
                  <Typography variant="body1" fontWeight={600} color={'#505050'} >
                    {props.data.flight.destinationAirport.code}
                  </Typography>
                </Stack>
                <Stack flexDirection={'unset'}>
                  <Typography 
                    variant="caption" 
                    fontWeight={600} 
                    color={'white'} 
                    sx={{ 
                      backgroundColor: getStatusBackgroundColor(
                        statusString(
                          props.data.paymentCompleted, 
                          props.data.uploadedProofOfPayment, 
                          new Date(props.data.flight.departureDateTime)
                        )
                      ),
                      borderRadius: '16px' 
                    }} 
                    padding={'2px 11px'}
                  >
                    {statusString(
                      props.data.paymentCompleted, 
                      props.data.uploadedProofOfPayment, 
                      new Date(props.data.flight.departureDateTime)
                      )
                    }
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction={'column'} justifyContent={'flex-end'} alignItems={'flex-end'}>
                <Typography variant="body1" fontWeight={600} color={'#505050'} >
                  {dateToVerboseString(new Date(props.data.flight.departureDateTime), props.data.flight.originAirport.timezone)}
                </Typography>
                <Typography variant="body1" fontWeight={600} color={'#505050'} sx={{ marginBottom: '19px' }}>
                  {timeWithTimezone(new Date(props.data.flight.departureDateTime), props.data.flight.originAirport.timezone)}
                </Typography>
                <Link to={`/profil/pesanan/${props.data.id}`} style={{ textDecoration: 'none', color: '#7B52AB' }}>
                  <Typography variant="body1" fontWeight={600} color={'#7B52AB'} >
                    Selengkapnya
                  </Typography>
                </Link>    
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
