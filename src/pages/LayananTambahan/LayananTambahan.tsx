import { Box, Grid, Typography, Container, Stack, Button } from '@mui/material';
import { AddOnsCard, FlightDetailCard, Navbar } from '../../components/ui/';

export default function LayananTambahan() {
  return (
    <Box sx={{ backgroundColor: 'kaboor.light' }}>
      <Navbar />
      <Container sx={{ paddingBlock: '2rem' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Layanan Tambahan
        </Typography>
        <Grid container mt={0} spacing={2}>
          {/* Left Cards */}
          <Grid item md={6} xs={12}>
            <Stack spacing={2}>
              <AddOnsCard title={'Asuransi Perjalanan'} price={65000} />
              <AddOnsCard title={'Asuransi Bagasi'} price={100000} />
              <AddOnsCard title={'Proteksi Keterlambatan'} price={65000} />
            </Stack>
          </Grid>

          {/* Right Cards */}
          <Grid item md={6} xs={12}>
            <Stack spacing={2}>
              <FlightDetailCard />
              <FlightDetailCard />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="subtitle2">Total Harga</Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 'bold',
                    }}
                  >
                    Rp 2.350.000
                  </Typography>
                </Box>
                <Box sx={{ width: '40%' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
                      width: '100%',
                    }}
                  >
                    Bayar
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
