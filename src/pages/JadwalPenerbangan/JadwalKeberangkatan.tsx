import { Container, Stack, Typography, Box } from '@mui/material';
import { FlightType } from '.';
import FlightTicket from '../../components/features/JadwalPenerbangan/FlightTicket';
import FlightDetails from '../../components/features/JadwalPenerbangan/FlightDetails';
import { useSearchParams } from 'react-router-dom';
import { getFlightDate, getRp } from '.';
import { useState, useEffect } from 'react';

export default function JadwalKeberangkatan() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<FlightType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const originAirport = searchParams.get('from');
  const destinationAirport = searchParams.get('to');
  const adults = parseInt(searchParams.get('adults')!);
  const childs = parseInt(searchParams.get('kids')!);
  const babies = parseInt(searchParams.get('babies')!);
  const departureDate = searchParams.get('date')!;
  const classCode = searchParams.get('class')!;
  const passanger = adults + childs + babies;
  const onPage = 'jadwal-keberangkatan';

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
        <Stack direction='column'>
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', py: 2, display: data ? 'unset' : 'none' }}
          >
            Pilih Keberangkatan
          </Typography>
          <Stack direction='column' spacing={2}>
            {data ? (
              data.map((item, index) => {
                const price =
                  (item.childPrice + item.adultPrice) * adults +
                  item.babyPrice * babies;
                return (
                  <FlightTicket
                    key={index}
                    onPage={onPage}
                    price={getRp(price)}
                    airLine={item.originAirport.name}
                    airlineLogo={item.plane.airline.imageUrl}
                    arrivedDatetime={item.arrivalDatetime}
                    departureDatetime={item.departureDatetime}
                    flightClass={classDetail[classCode]}
                  />
                );
              })
            ) : (
              <Stack></Stack>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
