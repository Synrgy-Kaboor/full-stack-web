import {
  Card,
  CardContent,
  CardActions,
  Stack,
  Box,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';

import FlightLogo from '../../../assets/Logo Maskapai.png';
import PlaneIcon from '../../../assets/plane icon.png';
import theme from '../../../config/theme';

// Card detail penerbangan
export default function FlightDetailCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <img src={FlightLogo} alt="Garuda Indonesia" />
          </Box>
          <Box sx={{ textAlign: 'end' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Garuda Indonesia
            </Typography>
            <Typography variant="body2">Ekonomi</Typography>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="center" mt={2}>
          <Box>
            <Typography variant="body2">Surabaya</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              05.00 WIB
            </Typography>
          </Box>
          <Box sx={{ width: '40%', textAlign: 'center' }} mx={2}>
            <Divider sx={{ borderStyle: 'dashed' }}>
              <img src={PlaneIcon} alt="" />
            </Divider>
            <Typography variant="subtitle2" sx={{ color: 'gray' }}>
              Durasi 4 Jam
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'gray' }}>
              Sen, 24 Des 2023
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'end' }}>
            <Typography variant="body2">Jakarta</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              09.00 WIB
            </Typography>
          </Box>
        </Stack>
      </CardContent>
      <Divider></Divider>
      <CardActions sx={{ paddingInline: '1rem' }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Stack direction="row" gap={1}>
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
          <Stack>
            <Typography
              variant="h6"
              sx={{
                background: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
              }}
            >
              Rp 1.230.000
            </Typography>
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  );
}
