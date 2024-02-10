import { Container, Stack, Typography, Box } from '@mui/material';
import { FlightType } from '.';
import FlightTicket from '../../components/features/JadwalPenerbangan/FlightTicket';
import FlightDetails from '../../components/features/JadwalPenerbangan/FlightDetails';
import { useSearchParams } from 'react-router-dom';
import { getFlightDate, getRp } from '.';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setDepartureFlight } from '../../redux/slices/FlightSchedule';
import CircularProgress from '@mui/material/CircularProgress';

export default function JadwalKeberangkatan() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<FlightType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const originAirport = searchParams.get('from');
  const destinationAirport = searchParams.get('to');
  const adults = parseInt(searchParams.get('adults')!);
  const childs = parseInt(searchParams.get('kids')!);
  const babies = parseInt(searchParams.get('babies')!);
  const departureDate = searchParams.get('date')!;
  const classCode = searchParams.get('class')!;
  const passanger = adults + childs + babies;

  const handleOnclick = (index: number) => {
    dispatch(setDepartureFlight(data[index]));
    navigate(
      `/jadwal-kepulangan/?from=${destinationAirport}&to=${originAirport}&adults=${adults}&kids=${childs}&babies=${babies}&date=${departureDate}&class=${classCode}`
    );
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

  console.log(isLoading);
  const classDetail: Record<string, string> = {
    E: 'EKONOMI',
    B: 'BISNIS',
    FC: 'FIRST CLASS',
    EP: 'EKONOMI PREMIUM',
  };

  return (
    <Box mb={4}>
      <Container>
        <FlightDetails
          from={originAirport}
          to={destinationAirport}
          date={getFlightDate(departureDate)}
          passenger={passanger}
          flightClass={classDetail[classCode]}
        />
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
              Pilih Keberangkatan
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
