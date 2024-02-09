import { Stack, Typography, Box, Button } from '@mui/material';
import theme from '../../config/theme';
import { NotificationAdd } from '@mui/icons-material';
import CardFilterPlaneSchedule from './CardFilterPlaneSchedule';
import {  useState } from 'react';
import { InAppNotificationSavedBox } from '../features/InAppNotification/InAppNotificationSavedBox';
import { type CardFilterPlaneScheduleType as filterType } from '../../types/CardFilterPlaneScheduleProps';

const SavedPriceAlert = () => {
  const [modalFilterOpen, setModalFilterOpen] = useState(false);
  const handleSubmit = (value: Partial<filterType>):void => {
    console.log(value);
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
          direction="row"
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="h5" color={'#1C1C1E'} fontWeight={700}>
            Notifikasi Harga
          </Typography>
          <Box position={'relative'}>
            <Button
              id="button-price-alert"
              variant="contained"
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
              <CardFilterPlaneSchedule sliderOn={true} onSubmit={handleSubmit} textSubmit='Simpan'/>
            </Box>
          </Box>
        </Stack>
        <Typography variant="h6" fontWeight={600} color={'#505050'}>
          Satu Arah
        </Typography>
        <InAppNotificationSavedBox />
        <Typography variant="h6" fontWeight={600} color={'#505050'}>
          Pulang Pergi
        </Typography>
        <InAppNotificationSavedBox />
      </Stack>
    </>
  );
};

export default SavedPriceAlert;
