import { Container, Stack, Typography, Box, Divider } from '@mui/material';
import FlightTicket from '../../components/features/JadwalPenerbangan/FlightTicket';
import FlightDetails from '../../components/features/JadwalPenerbangan/FlightDetails';
import { FlightType } from '.';
import { useSearchParams } from 'react-router-dom';
import { getFlightDate, getRp } from '.';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setReturnFlight } from '../../redux/slices/FlightSchedule';
import CircularProgress from '@mui/material/CircularProgress';

export default function JadwalKepulangan() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<FlightType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const departureFlight = useAppSelector(
    (state) => state.searchJadwal.departureFlight
  )!;
  const originAirport = searchParams.get('from');
  const destinationAirport = searchParams.get('to');
  const adults = parseInt(searchParams.get('adults')!);
  const childs = parseInt(searchParams.get('kids')!);
  const babies = parseInt(searchParams.get('babies')!);
  const departureDate = searchParams.get('date')!;
  const classCode = searchParams.get('class')!;
  const passanger = adults + childs + babies;

  const handleOnclick = (index: number) => {
    dispatch(setReturnFlight(data[index]));
    navigate('/detail-penumpang');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const flightResponse = await fetch(
          `https://fsw-backend.fly.dev/api/v1/flight?originAirportCode=${originAirport}&destinationAirportCode=${destinationAirport}&numOfAdults=${adults}&numOfChildren=${childs}&numOfBabies=${babies}&classCode=${classCode}&date=${departureDate}`
        );
        const flightData = await flightResponse.json();
        setData(flightData.data);
        setIsLoading(false);
        console.log(flightData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const classDetail: Record<string, string> = {
    E: 'EKONOMI',
    B: 'BISNIS',
    FC: 'FIRST CLASS',
    EP: 'EKONOMI PREMIUM',
  };

  const departurePrice =
    (adults + childs) * departureFlight!.adultPrice +
    departureFlight!.babyPrice * babies;

  return (
    <Box mb={4}>
      <Container>
        <FlightDetails
          from={destinationAirport}
          to={originAirport}
          date={getFlightDate(departureDate)}
          passenger={passanger}
          flightClass={classDetail[classCode]}
        />
        <Stack direction='column'>
          <Typography variant='h6' sx={{ fontWeight: 'bold', py: 2 }}>
            Keberangkatan
          </Typography>
          <FlightTicket
            price={getRp(departurePrice)}
            airLine={departureFlight.plane.airline.name}
            airlineLogo={departureFlight.plane.airline.imageUrl}
            arrivedDatetime={departureFlight.arrivalDatetime}
            departureDatetime={departureFlight.departureDatetime}
            flightClass={classDetail[classCode]}
            from={departureFlight.originAirport.code}
            to={departureFlight.destinationAirport.code}
          />
        </Stack>
      </Container>
      <Divider sx={{ paddingBlock: '1rem' }} />
      <Container>
        {isLoading ? (
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            height={'50vh'}
          >
            <CircularProgress color='secondary' />
          </Stack>
        ) : (
          <Stack direction='column'>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                py: 2,
                display: data.length ? 'flex' : 'none',
              }}
            >
              Pilih Kepulangan
            </Typography>
            <Stack direction='column' spacing={2}>
              {data.length ? (
                data.map((item, index) => {
                  const price =
                    (item.childPrice + item.adultPrice) * adults +
                    item.babyPrice * babies;
                  return (
                    <FlightTicket
                      onClick={() => handleOnclick(index)}
                      key={index}
                      price={getRp(price)}
                      airLine={item.plane.airline.name}
                      airlineLogo={item.plane.airline.imageUrl}
                      arrivedDatetime={item.arrivalDatetime}
                      departureDatetime={item.departureDatetime}
                      flightClass={classDetail[classCode]}
                      from={item.originAirport.code}
                      to={item.destinationAirport.code}
                    />
                  );
                })
              ) : (
                <Stack
                  height={'50vh'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Typography>Penerbangan yang kamu cari tidak ada</Typography>
                </Stack>
              )}
            </Stack>
          </Stack>
        )}
      </Container>
    </Box>
  );
}
