import { Box, Grid, Typography, Container, Stack, Button } from '@mui/material';
import { AddOnsCard } from '../../components/ui';
import theme from '../../config/theme';
import FlightDetailCard from '../../components/shared/Pemesanan/FlightDetailCard';

export default function TataCaraPembayaran() {
  return (
    <>
      <Container sx={{ paddingBlockEnd: '2rem' }}>
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
                      background: theme.palette.gradients?.horizontal,
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
                      background: theme.palette.gradients?.horizontal,
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
    </>
  );
}
