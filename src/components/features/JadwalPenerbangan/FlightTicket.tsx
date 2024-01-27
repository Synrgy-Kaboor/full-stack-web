import { IconButton, Stack, Typography, Box, Divider } from '@mui/material';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';

import PlaneIcon from '../../../assets/plane icon.png';
import FlightLogo from '../../../assets/Logo Maskapai.png';

import theme from '../../../config/theme';

import { useNavigate } from 'react-router';

export default function FlightTicket(props: { onPage: string }) {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      onClick={() => {
        if (props.onPage === 'jadwal-kepulangan') {
          navigate('/detail-penumpang');
        } else if (props.onPage === 'jadwal-keberangkatan') {
          navigate('/jadwal-kepulangan');
        }
      }}
      sx={{
        bgcolor: 'white',
        boxShadow: 1,
        borderRadius: 1,
        border: '1px solid transparent',
        '&:hover': {
          cursor: 'pointer',
          border: '1px solid purple',
        },
      }}
    >
      {/* Maskapai */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <img src={FlightLogo} />
        <Stack direction="column">
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Garuda Indonesia
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            Ekonomi
          </Typography>
        </Stack>
      </Stack>

      {/* Rute */}
      <Stack direction="row" justifyContent="center" sx={{ width: '40%' }}>
        <Box>
          <Typography variant="body2">Surabaya</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            05.00 WIB
          </Typography>
        </Box>
        <Box sx={{ width: '50%', textAlign: 'center' }} mx={2}>
          <Divider sx={{ borderStyle: 'dashed' }}>
            <img src={PlaneIcon} alt="" />
          </Divider>
          <Typography variant="subtitle2" sx={{ color: 'gray' }}>
            Durasi 4 Jam
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'end' }}>
          <Typography variant="body2">Jakarta</Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            09.00 WIB
          </Typography>
        </Box>
      </Stack>

      {/* Add Ons */}
      <Stack direction="row" justifyContent="center" gap={1}>
        <IconButton
          sx={{
            background: theme.palette.gradients?.horizontal,
            color: 'white',
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

      {/* Ticket Price */}
      <Stack direction="row">
        <Typography
          variant="h5"
          sx={{
            background: theme.palette.gradients?.horizontal,
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Rp 1.230.000
        </Typography>
      </Stack>
    </Stack>
  );
}
