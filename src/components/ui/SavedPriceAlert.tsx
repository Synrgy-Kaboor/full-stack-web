import { Stack, Typography, Box, Button } from '@mui/material';
import theme from '../../config/theme';
import { NotificationAdd } from '@mui/icons-material';
import CardFilterPlaneSchedule from './CardFilterPlaneSchedule';
import { getFlightClass } from '.';
import { formatDate } from '.';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { NotifFlightInfo } from '../features/InAppNotification';
import { InAppNotificationSavedBox } from '../features/InAppNotification/InAppNotificationSavedBox';
import { type CardFilterPlaneScheduleType as filterType } from '../../types/CardFilterPlaneScheduleProps';
import { setFlightAlert } from '../../redux/slices/Notification';

const SavedPriceAlert = () => {
  const [priceNotifList, setPriceNotifList] = useState<NotifFlightInfo[]>([]);
  const [modalFilterOpen, setModalFilterOpen] = useState(false);
  const [reFetch, setReFetch] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const AirportList: { [key: string]: number } = {
    SUB: 1,
    CGK: 2,
    HLP: 3,
    PDG: 4,
    MKQ: 5,
  };
  const classDetail: Record<string, string> = {
    E: 'Ekonomi',
    B: 'Bisnis',
    FC: 'First Class',
    EP: 'Ekonomi Premium',
  };
  const jwtToken = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceListResponse = await fetch(
          'https://fsw-backend.fly.dev/api/v1/user/notification/price',
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        const priceListData = await priceListResponse.json();
        setPriceNotifList(priceListData.data);
        console.log('INI ADALAH Respondnya', priceListData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [jwtToken, reFetch]);
  const handleSubmit = async (value: Partial<filterType>): Promise<void> => {
    console.log('Ini Value', value);
    const deparatureAirport = value.deparature!;
    const destinationAirport = value.arrival!;
    const originAirportId = AirportList[deparatureAirport];
    const destinationAirportId = AirportList[destinationAirport];
    const payload = {
      totalAdults: value.passanger?.adult.value,
      totalChildren: value.passanger?.child.value,
      totalBabies: value.passanger?.baby.value,
      classCode: getFlightClass(value.class!),
      minimumPrice: value.priceRange![0],
      maximumPrice: value.priceRange![1],
      date: formatDate(value.deparatureDate),
      originAirportId,
      destinationAirportId,
    };
    console.log('INI Payload', payload);
    const priceAlertPayload = await fetch(
      'https://fsw-backend.fly.dev/api/v1/user/notification/price',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(payload),
      }
    );
    const priceAlertResp = await priceAlertPayload.json();
    setReFetch(!reFetch);
    setModalFilterOpen(false);
    console.log('Ini State', priceAlertResp);
  };
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
          <Box position={'relative'}>
            <Button
              id='button-price-alert'
              variant='contained'
              startIcon={<NotificationAdd />}
              sx={{
                borderRadius: '1.5rem',
                background: theme.palette.gradients?.diagonal,
              }}
              onClick={() => {
                setModalFilterOpen(!modalFilterOpen);
              }}
            >
              Buat Notifikasi Harga
            </Button>
            <Box
              position={'absolute'}
              alignSelf={'center'}
              right={0}
              sx={modalFilterOpen ? { display: 'flex' } : { display: 'none' }}
            >
              <CardFilterPlaneSchedule
                sliderOn={true}
                onSubmit={handleSubmit}
                textSubmit='Simpan'
                homecomingOn={false}
              />
            </Box>
          </Box>
        </Stack>
        {priceNotifList.map((item, index) => (
          <InAppNotificationSavedBox
            setReFetch={() => setReFetch(!reFetch)}
            navigate={() => {
              console.log(item);
              dispatch(setFlightAlert(item));
              console.log('updated STATE');
              navigate(`/profil/saved-price-alert/detail`);
            }}
            key={index}
            id={item.id}
            date={item.date}
            originAirport={item.originAirport.code}
            destinationAirport={item.destinationAirport.code}
            minimumPrice={item.minimumPrice}
            maximumPrice={item.maximumPrice}
            totalAdults={item.totalAdults}
            totalChilds={item.totalChildren}
            totalBabies={item.totalBabies}
            flightClass={classDetail[item.classCode]}
          />
        ))}
      </Stack>
    </>
  );
};

export default SavedPriceAlert;
