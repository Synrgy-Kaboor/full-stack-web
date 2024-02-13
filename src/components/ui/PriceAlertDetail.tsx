import { Stack, Typography } from '@mui/material';
import { InAppNotificationSavedBox } from '../features/InAppNotification/InAppNotificationSavedBox';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AlertType } from '.';

const PriceAlertDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [alert, setAlert] = useState<AlertType>();
  const jwtToken = localStorage.getItem('token');
  const classDetail: Record<string, string> = {
    E: 'Ekonomi',
    B: 'Bisnis',
    FC: 'First Class',
    EP: 'Ekonomi Premium',
  };

  const AirportList: { [key: number]: string } = {
    1: 'SUB',
    2: 'CGK',
    3: 'HLP',
    4: 'PDG',
    5: 'MKQ',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alertResponse = await fetch(
          `https://fsw-backend.fly.dev/api/v1/user/notification/price/${id}`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        const alertData = await alertResponse.json();
        setAlert(alertData.data);
        console.log('INI ADALAH Respondnya', alertData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id, jwtToken]);

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
            Notifikasi Harga
          </Typography>
        </Stack>
        <InAppNotificationSavedBox
          id={parseInt(id!)}
          date={alert!.date}
          originAirport={AirportList[alert!.originAirportId]}
          destinationAirport={AirportList[alert!.destinationAirportId]}
          minimumPrice={alert!.minimumPrice}
          maximumPrice={alert!.maximumPrice}
          totalAdults={alert!.totalAdults}
          totalChilds={alert!.totalChildren}
          totalBabies={alert!.totalBabies}
          flightClass={classDetail[alert!.classCode]}
        />
        <Typography variant='h6' fontWeight={600} color={'#505050'}>
          Pulang Pergi
        </Typography>
      </Stack>
    </>
  );
};

export default PriceAlertDetail;
