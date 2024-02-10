import { IconButton, Stack, Typography, Box, Divider } from '@mui/material';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';

import PlaneIcon from '../../../assets/plane icon.png';
import theme from '../../../config/theme';

import { useNavigate } from 'react-router';

interface FlightList {
  airLine: string;
  flightClass: string;
  departureDatetime: string;
  arrivedDatetime: string;
  price: string;
  onPage: string;
  airlineLogo: string;
}
export default function FlightTicket(props: FlightList) {
  const navigate = useNavigate();

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      p={2}
      onClick={() => {
        if (props.onPage === 'jadwal-kepulangan') {
          navigate('/detail-penumpang');
        } else if (props.onPage === 'jadwal-keberangkatan') {
          navigate('/jadwal-kepulangan');
        }
      }}
      sx={{
        bgcolor: 'white',
        boxShadow: 1,
        borderRadius: 1,
        border: '1px solid transparent',
        '&:hover': {
          cursor: 'pointer',
          border: '1px solid purple',
        },
      }}
    >
      {/* Maskapai */}
      <Stack direction='row' alignItems='center' spacing={2}>
        <img src={props.airlineLogo} height={'50px'} width={'50px'} />
        <Stack direction='column'>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {props.airLine}
          </Typography>
          <Typography variant='body2' sx={{ color: 'gray' }}>
            {props.flightClass}
          </Typography>
        </Stack>
      </Stack>

      {/* Rute */}
      <Stack direction='row' justifyContent='center' sx={{ width: '40%' }}>
        <Box>
          <Typography variant='body2'>Surabaya</Typography>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {props.departureDatetime}
          </Typography>
        </Box>
        <Box sx={{ width: '50%', textAlign: 'center' }} mx={2}>
          <Divider sx={{ borderStyle: 'dashed' }}>
            <img src={PlaneIcon} alt='' />
          </Divider>
          <Typography variant='subtitle2' sx={{ color: 'gray' }}>
            Durasi 4 Jam
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'end' }}>
          <Typography variant='body2'>Jakarta</Typography>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {props.arrivedDatetime}
          </Typography>
        </Box>
      </Stack>

      {/* Add Ons */}
      <Stack direction='row' justifyContent='center' gap={1}>
        <IconButton
          sx={{
            background: theme.palette.gradients?.horizontal,
            color: 'white',
          }}
        >
          <BusinessCenterOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            background: theme.palette.gradients?.horizontal,
            color: 'white',
          }}
        >
          <HealthAndSafetyOutlinedIcon />
        </IconButton>
      </Stack>

      {/* Ticket Price */}
      <Stack direction='row'>
        <Typography
          variant='h5'
          sx={{
            background: theme.palette.gradients?.horizontal,
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
          }}
        >
          {props.price}
        </Typography>
      </Stack>
    </Stack>
  );
}
