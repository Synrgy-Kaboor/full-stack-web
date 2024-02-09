import { Container, Stack, Typography, Box } from '@mui/material';
import FlightTicket from '../../components/features/JadwalPenerbangan/FlightTicket';
import FlightDetails from '../../components/features/JadwalPenerbangan/FlightDetails';

export default function JadwalKeberangkatan() {
  // add code here

  const onPage = 'jadwal-keberangkatan';

  return (
    <Box mb={4}>
      <Container>
        <FlightDetails />
        <Stack direction='column'>
          <Typography variant='h6' sx={{ fontWeight: 'bold', py: 2 }}>
            Pilih Keberangkatan
          </Typography>
          <Stack direction='column' spacing={2}>
            <FlightTicket onPage={onPage} />
            <FlightTicket onPage={onPage} />
            <FlightTicket onPage={onPage} />
            <FlightTicket onPage={onPage} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
