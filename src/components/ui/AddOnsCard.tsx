import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Stack,
  Link,
  CardActions,
  IconButton,
} from '@mui/material';

import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

export default function AddOnsCard(props: { title: string; price: number }) {
  const rupiah = new Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 3,
  });

  const formattedPrice = rupiah.format(props.price);

  return (
    <Card variant="outlined">
      <CardContent sx={{ padding: 0 }}>
        <Stack direction="row" m={2} alignItems="center">
          <HealthAndSafetyOutlinedIcon
            fontSize="medium"
            sx={{ color: 'kaboor.main' }}
          />
          <Typography sx={{ fontWeight: 'bold' }} ml={1}>
            {props.title}
          </Typography>
        </Stack>
        <Divider />
        <Box p={2}>
          <Stack direction="row">
            <CheckCircleIcon fontSize="small" color="success" />
            <Typography ml={1}>
              Kompensasi hingga Rp 500 Juta untuk berbagai resiko tak terduga
            </Typography>
          </Stack>
          <Stack direction="row" mb={2}>
            <CheckCircleIcon fontSize="small" color="success" />
            <Typography ml={1}>
              Kompensasi hingga Rp 500 Juta untuk berbagai resiko tak terduga
            </Typography>
          </Stack>
          <Link href="#" underline="none">
            Baca Selengkapnya
          </Link>
        </Box>
      </CardContent>
      <CardActions disableSpacing sx={{ padding: '0' }}>
        <Stack
          direction="row"
          px={2}
          py={1}
          m={0}
          alignItems="center"
          sx={{
            bgcolor: 'kaboor.main',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
            {formattedPrice}/pax
          </Typography>
          <IconButton>
            <ControlPointOutlinedIcon sx={{ color: 'white' }} />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}
