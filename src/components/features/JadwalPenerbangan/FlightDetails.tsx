import { Stack, Typography, Divider } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface FilterValue {
  from: string | null;
  to: string | null;
  date: string | null;
  passenger: number | null;
  flightClass: string | null;
}

export default function FlightDetails(props: FilterValue) {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      p={1}
      sx={{ bgcolor: 'white', boxShadow: 1, borderRadius: 1 }}
    >
      {/* Pesawat */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={1}
        justifyContent='center'
        alignItems={'center'}
        sx={{ width: '100%' }}
        p={1}
      >
        <Typography fontSize={{ xs: 12, md: 16 }}>{props.from}</Typography>
        <ArrowForwardIcon sx={{ color: 'gray' }} />
        <Typography fontSize={{ xs: 12, md: 16 }}>{props.to}</Typography>
      </Stack>

      <Divider orientation='vertical' flexItem />

      {/* Tanggal */}
      <Stack direction='row' justifyContent='center' sx={{ width: '100%' }} p={1}>
        <Typography textAlign={'center'} fontSize={{ xs: 12, md: 16 }}>{props.date}</Typography>
      </Stack>

      <Divider orientation='vertical' flexItem />

      {/* Jumlah Penumpang */}
      <Stack direction='row' justifyContent='center' sx={{ width: '100%' }} p={1}>
        <Typography textAlign={'center'} fontSize={{ xs: 12, md: 16 }}>{`${props.passenger} Orang`}</Typography>
      </Stack>

      <Divider orientation='vertical' flexItem />

      {/* Kelas Pesawat */}
      <Stack direction='row' justifyContent='center' sx={{ width: '100%' }} p={1}>
        <Typography textAlign={'center'} fontSize={{ xs: 12, md: 16 }}>{props.flightClass}</Typography>
      </Stack>
    </Stack>
  );
}
