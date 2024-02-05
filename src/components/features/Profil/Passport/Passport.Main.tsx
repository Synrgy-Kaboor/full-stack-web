import { Stack, Typography } from '@mui/material';
import PasporIcon from '../../../../assets/Group.svg';
import theme from '../../../../config/theme';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useNavigate } from 'react-router-dom';

export default function Passport() {
  const navigate = useNavigate();

  return (
    <Stack
      p={4}
      bgcolor={'white'}
      borderRadius={2}
      maxWidth={'880px'}
      sx={{ width: '100%', border: '1px solid #C2C2C2' }}
    >
      <Typography variant="h6" fontWeight={'bold'}>
        Daftar Paspor
      </Typography>
      <Typography color={'gray'} variant="subtitle2">
        Berikut ini data paspor yang tersimpan
      </Typography>

      <Stack spacing={1} mt={2}>
        <Stack
          direction="row"
          p={2}
          sx={{ border: '1px solid #C2C2C2' }}
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          borderRadius={1}
        >
          <img
            src={PasporIcon}
            height="80%"
            style={{ fill: theme.palette.primary.main }}
          />

          <Stack sx={{ width: '100%' }}>
            <Typography fontWeight={'bold'}>Andre Hustshon</Typography>
            <Typography color="gray" variant="subtitle2">
              1912012901291021
            </Typography>
          </Stack>

          <ArrowForwardIosIcon />
        </Stack>

        <Stack
          direction="row"
          p={2}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          borderRadius={1}
          onClick={() => navigate('create/')}
          sx={{ border: '1px solid #C2C2C2', '&:hover': { cursor: 'pointer' } }}
        >
          <Typography fontWeight={'bold'}>Tambahkan Paspor Lainnya</Typography>
          <Typography variant="h6">+</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
