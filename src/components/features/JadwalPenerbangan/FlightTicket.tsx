import { IconButton, Stack, Typography, Box, Divider } from '@mui/material';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import { getHourDiff } from '.';
import PlaneIcon from '../../../assets/plane icon.png';
import theme from '../../../config/theme';
import { timeWithTimezone } from '../../../utils/formatter';

interface FlightList {
  airLine: string;
  flightClass: string;
  departureDatetime: string;
  arrivedDatetime: string;
  price: string;
  onClick?: () => void;
  airlineLogo: string;
  from: string;
  to: string;
  originalTimezone: number;
  destinationTimezone: number;
  forNotif?: boolean;
}
export default function FlightTicket(props: FlightList) {
  return (
    <Stack
      justifyContent='space-between'
      alignItems='center'
      p={2}
      onClick={props.onClick}
      sx={{
        bgcolor: 'white',
        boxShadow: 1,
        borderRadius: 1,
        border: '1px solid transparent',
        '&:hover': {
          cursor: 'pointer',
          border: '1px solid purple',
        },
        flexDirection: props.forNotif ? 'column' : { xs: 'column', sm: 'row' },
        gap: { xs: '16px' },
      }}
    >
      {/* Maskapai */}
      <Stack
        direction='row'
        alignItems='center'
        spacing={2}
        sx={{
          justifyContent: props.forNotif
            ? 'space-between'
            : { xs: 'space-between', sm: 'center' },
          width: { xs: '100%', sm: 'fit-content' },
        }}
      >
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
      <Stack
        direction='row'
        sx={{
          width: props.forNotif ? '100%' : { sm: '40%', xs: '100%' },
          justifyContent: props.forNotif
            ? 'space-between'
            : { xs: 'space-between', sm: 'center' },
        }}
      >
        <Box>
          <Typography variant='body2'>{props.from}</Typography>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {timeWithTimezone(
              new Date(props.departureDatetime),
              props.originalTimezone
            )}
          </Typography>
        </Box>
        <Box sx={{ width: '50%', textAlign: 'center' }} mx={2}>
          <Divider sx={{ borderStyle: 'dashed' }}>
            <img src={PlaneIcon} alt='' />
          </Divider>
          <Typography variant='subtitle2' sx={{ color: 'gray' }}>
            Durasi {getHourDiff(props.departureDatetime, props.arrivedDatetime)}{' '}
            Jam
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'end' }}>
          <Typography variant='body2'>{props.to}</Typography>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {timeWithTimezone(
              new Date(props.arrivedDatetime),
              props.destinationTimezone
            )}
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
