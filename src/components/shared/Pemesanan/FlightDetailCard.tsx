import {
  Card,
  CardContent,
  CardActions,
  Stack,
  Box,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';

import PlaneIcon from '../../../assets/plane icon.png';
import theme from '../../../config/theme';
import { useAppSelector } from '../../../redux/hooks';
import { dateToVerboseString, durationString, getSeatClass, numToRp, timeWithTimezone } from '../../../utils/formatter';

// Card detail penerbangan
export default function FlightDetailCard(props: { type: string }) {  
  return (
    <>
      {props.type === 'outbound' ? <OutboundFlightDetailCard/> : <ReturnFlightDetailCard/>}
    </>
  );
}


function OutboundFlightDetailCard() {
  const flight = useAppSelector((state) => state.booking.outboundFlight);
  const { totalAdults, totalChildren, totalBabies, classCode } = useAppSelector((state) => state.booking);

  return (
    <>
      {flight && (
        <Card variant="outlined">
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <img src={flight.plane.airline.imageUrl} alt={flight.plane.airline.name} height={'70px'}/>
            </Box>
            <Box sx={{ textAlign: 'end' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {flight.plane.airline.name}
              </Typography>
              <Typography variant="body2">{getSeatClass(classCode)}</Typography>
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="center" mt={2}>
            <Box>
              <Typography variant="body2">{flight.originAirport.name}</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {timeWithTimezone(new Date(flight.departureDateTime), flight.originAirport.timezone)}
              </Typography>
            </Box>
            <Box sx={{ width: '40%', textAlign: 'center' }} mx={2}>
              <Divider sx={{ borderStyle: 'dashed' }}>
                <img src={PlaneIcon} alt="" />
              </Divider>
              <Typography variant="subtitle2" sx={{ color: 'gray' }}>
                Durasi {durationString(new Date(flight.departureDateTime), new Date(flight?.arrivalDateTime))}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'gray' }}>
                {dateToVerboseString(new Date(flight.departureDateTime), flight.originAirport.timezone)}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'end' }}>
              <Typography variant="body2">{flight.destinationAirport.name}</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {flight ? timeWithTimezone(new Date(flight.arrivalDateTime), flight.originAirport.timezone): ''}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
        <Divider></Divider>
        <CardActions sx={{ paddingInline: '1rem' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '100%' }}
          >
            <Stack direction="row" gap={1}>
              <IconButton
                sx={{ 
                  background: theme.palette.gradients?.horizontal,
                  color: 'white'
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
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  background: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                {numToRp(totalAdults * (flight.adultPrice) + totalChildren * (flight.childPrice) + totalBabies * (flight.babyPrice))}
              </Typography>
            </Stack>
          </Stack>
        </CardActions>
      </Card>
      )}
      
    </>
  );
}

function ReturnFlightDetailCard() {
  const flight = useAppSelector((state) => state.booking.returnFlight);
  const { totalAdults, totalChildren, totalBabies, classCode } = useAppSelector((state) => state.booking);

  return (
    <>
      {flight && (
        <Card variant="outlined">
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
            <img src={flight.plane.airline.imageUrl} alt={flight.plane.airline.name} height={'70px'}/>
            </Box>
            <Box sx={{ textAlign: 'end' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {flight.plane.airline.name}
              </Typography>
              <Typography variant="body2">{getSeatClass(classCode)}</Typography>
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="center" mt={2}>
            <Box>
              <Typography variant="body2">{flight.originAirport.code}</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {timeWithTimezone(new Date(flight.departureDateTime), flight.originAirport.timezone)}
              </Typography>
            </Box>
            <Box sx={{ width: '40%', textAlign: 'center' }} mx={2}>
              <Divider sx={{ borderStyle: 'dashed' }}>
                <img src={PlaneIcon} alt="" />
              </Divider>
              <Typography variant="subtitle2" sx={{ color: 'gray' }}>
                Durasi {durationString(new Date(flight.departureDateTime), new Date(flight?.arrivalDateTime))}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'gray' }}>
                {dateToVerboseString(new Date(flight.departureDateTime), flight.originAirport.timezone)}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'end' }}>
              <Typography variant="body2">{flight.destinationAirport.code}</Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {flight ? timeWithTimezone(new Date(flight.arrivalDateTime), flight.originAirport.timezone): ''}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
        <Divider></Divider>
        <CardActions sx={{ paddingInline: '1rem' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '100%' }}
          >
            <Stack direction="row" gap={1}>
              <IconButton
                sx={{ 
                  background: theme.palette.gradients?.horizontal,
                  color: 'white'
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
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  background: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                }}
              >
                {numToRp(totalAdults * (flight.adultPrice) + totalChildren * (flight.childPrice) + totalBabies * (flight.babyPrice))}
              </Typography>
            </Stack>
          </Stack>
        </CardActions>
      </Card>
      )}
      
    </>
  );
}