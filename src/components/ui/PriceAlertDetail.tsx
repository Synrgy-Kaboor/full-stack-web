import { Stack, Typography } from '@mui/material';
import { InAppNotificationSavedBox } from '../features/InAppNotification/InAppNotificationSavedBox';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlightType } from '../../pages/JadwalPenerbangan';
import { useAppSelector } from '../../redux/hooks';
import FlightTicket from '../features/JadwalPenerbangan/FlightTicket';
import CircularProgress from '@mui/material/CircularProgress';
import { getRp } from '../../pages/JadwalPenerbangan';
import { getSeatClass } from '../../utils/formatter';

const PriceAlertDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const flightAlert = useAppSelector((state) => state.priceNotification);
  const [data, setData] = useState<FlightType[]>([]);

  const AirportList: { [key: number]: string } = {
    1: 'SUB',
    2: 'CGK',
    3: 'HLP',
    4: 'PDG',
    5: 'MKQ',
  };

  const classCode = getSeatClass(flightAlert.classCode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const flightResponse = await fetch(
          `https://fsw-backend.fly.dev/api/v1/flight?originAirportCode=${flightAlert.originAirport.code}&destinationAirportCode=${flightAlert.destinationAirport.code}&numOfAdults=${flightAlert.totalAdults}&numOfChildren=${flightAlert.totalChildren}&numOfBabies=${flightAlert.totalBabies}&classCode=${flightAlert.classCode}&date=${flightAlert.date}&=minimumPrice${flightAlert.minimumPrice}&=maximumPrice${flightAlert.maximumPrice}`
        );
        const flightData = await flightResponse.json();
        setData(flightData.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [
    flightAlert.classCode,
    flightAlert.date,
    flightAlert.destinationAirport.code,
    flightAlert.maximumPrice,
    flightAlert.minimumPrice,
    flightAlert.originAirport.code,
    flightAlert.totalAdults,
    flightAlert.totalBabies,
    flightAlert.totalChildren,
  ]);

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
        <Stack
          direction='row'
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant='h5' color={'#1C1C1E'} fontWeight={700}>
            Detail Notifikasi Harga
          </Typography>
        </Stack>
        <InAppNotificationSavedBox
          setReFetch={() => navigate('/profil/saved-price-alert')}
          id={flightAlert.id}
          date={flightAlert.date}
          originAirport={AirportList[flightAlert.originAirport.id]}
          destinationAirport={AirportList[flightAlert.destinationAirport.id]}
          minimumPrice={flightAlert.minimumPrice}
          maximumPrice={flightAlert.maximumPrice}
          totalAdults={flightAlert.totalAdults}
          totalChilds={flightAlert.totalChildren}
          totalBabies={flightAlert.totalBabies}
          flightClass={classCode}
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
            <Typography variant='h6' color={'#1C1C1E'} fontWeight={700}>
              Jadwal Keberangkatan & Harga yang Cocok
            </Typography>
            <Stack direction='column' spacing={2}>
              {data && data.length ? (
                data.map((item, index) => {
                  const price =
                    (flightAlert.totalAdults + flightAlert.totalChildren) *
                      item.adultPrice +
                    item.babyPrice * flightAlert.totalBabies;
                  return (
                    <FlightTicket
                      forNotif={true}
                      key={index}
                      price={getRp(price)}
                      airLine={item.plane.airline.name}
                      airlineLogo={item.plane.airline.imageUrl}
                      arrivedDatetime={item.arrivalDatetime}
                      departureDatetime={item.departureDatetime}
                      flightClass={classCode}
                      from={item.originAirport.code}
                      originalTimezone={item.originAirport.timezone}
                      destinationTimezone={item.destinationAirport.timezone}
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
                  <Typography>
                    belum ada jadwal yang cocok untuk kamu
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default PriceAlertDetail;
