import { Container, Stack, Typography, Box, Divider } from '@mui/material';
import FlightTicket from '../../components/features/JadwalPenerbangan/FlightTicket';
import FlightDetails from '../../components/features/JadwalPenerbangan/FlightDetails';

export default function JadwalKepulangan() {
  const onPage = 'jadwal-kepulangan';

  return (
    <Box mb={4}>
      <Container>
        <FlightDetails />
        <Stack direction="column">
          <Typography variant="h6" sx={{ fontWeight: 'bold', py: 2 }}>
            Keberangkatan
          </Typography>
          <FlightTicket onPage={onPage} />
        </Stack>
      </Container>
      <Divider sx={{ paddingBlock: '1rem' }} />
      <Container>
        <Stack direction="column">
          <Typography variant="h6" sx={{ fontWeight: 'bold', py: 2 }}>
            Pilih Kepulangan
          </Typography>
          <Stack direction="column" spacing={2}>
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
