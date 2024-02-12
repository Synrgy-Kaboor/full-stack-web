import { Box, Stack, Typography, Divider, IconButton } from '@mui/material';
import {
  CalendarMonthOutlined,
  DirectionsWalkOutlined,
  FlightClassOutlined,
  FlightTakeoffOutlined,
  MoreHorizOutlined,
} from '@mui/icons-material';
import { getShortDate, getRp } from '.';
import theme from '../../../config/theme';
import { useState } from 'react';

interface NotificationBox {
  date: string;
  originAirport: string;
  destinationAirport: string;
  minimumPrice: number;
  maximumPrice: number;
  totalAdults: number;
  totalBabies: number;
  totalChilds: number;
  flightClass: string;
  id: number;
  navigate?: () => void;
}
const InAppNotificationSavedBox = (props: NotificationBox) => {
  const [popUpDetailVisible, setPopUpDetailVisible] = useState(false);
  const jwtToken = localStorage.getItem('token');
  const handleDelete = async () => {
    const deleteRes = await fetch(
      `https://fsw-backend.fly.dev/api/v1/user/notification/price/${props.id}`,
      {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    const deleteStatus = await deleteRes.json();
    console.log(deleteStatus);
    setPopUpDetailVisible(false);
  };
  return (
    <>
      <Box
        borderRadius={1}
        border={'1px solid #C2C2C2'}
        py={2}
        onClick={props.navigate}
      >
        <Stack gap={1}>
          <Stack px={3}>
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              gap={1.25}
              mb={1}
            >
              <Stack direction={'row'} alignItems={'center'} gap={2.5}>
                <Typography variant='h6' fontWeight={600} color={'#505050'}>
                  (${props.originAirport})
                </Typography>
                <FlightTakeoffOutlined />
                <Typography variant='h6' fontWeight={600} color={'#505050'}>
                  (${props.destinationAirport})
                </Typography>
              </Stack>
              <Box position={'relative'}>
                <IconButton
                  onClick={() => setPopUpDetailVisible(!popUpDetailVisible)}
                >
                  <MoreHorizOutlined />
                </IconButton>
                <Box
                  borderRadius={1}
                  border={'1px solid #C2C2C2'}
                  sx={{ background: '#FFF' }}
                  py={2.25}
                  position={'absolute'}
                  right={0}
                  width={'max-content'}
                  display={popUpDetailVisible ? 'flex' : 'none'}
                >
                  <Stack gap={1}>
                    <Typography
                      variant='h6'
                      sx={{
                        background: theme.palette.gradients?.diagonal,
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                      fontWeight={600}
                      px={3.5}
                    >
                      Edit Notifikasi Harga
                    </Typography>
                    <Divider />
                    <Typography
                      variant='h6'
                      sx={{
                        background: '#CB3A31',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                      fontWeight={600}
                      px={3.5}
                      onClick={handleDelete}
                    >
                      Hapus Notifikasi Harga
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Stack>
            <Stack direction={'row'} gap={1.7}>
              <Stack direction={'row'} gap={0.5} color={'#9E9E9E'}>
                <CalendarMonthOutlined />
                <Typography variant='subtitle1' fontWeight={600}>
                  {`${getShortDate(props.date)}`}
                </Typography>
              </Stack>
              <Stack direction={'row'} gap={0.5} color={'#9E9E9E'}>
                <DirectionsWalkOutlined />
                <Typography variant='subtitle1' fontWeight={600}>
                  {`${
                    props.totalAdults + props.totalBabies + props.totalAdults
                  }`}{' '}
                  Orang
                </Typography>
              </Stack>
              <Stack direction={'row'} gap={0.5} color={'#9E9E9E'}>
                <FlightClassOutlined />
                <Typography variant='subtitle1' fontWeight={600}>
                  {props.flightClass}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Divider></Divider>
          <Typography
            px={3}
            variant='subtitle1'
            sx={{
              background: theme.palette.gradients?.diagonal,
              backgroundClip: 'text',
              color: 'transparent',
            }}
            fontWeight={700}
          >
            {`${getRp(props.minimumPrice)} - ${getRp(props.maximumPrice)}`}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export { InAppNotificationSavedBox };
