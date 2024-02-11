import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ExtraFacilityCard from '../../components/ui/ExtraFacilityCard';
import DetailPemesan from '../../components/features/Pemesanan/DetailPenumpang/DetailPemesan';
import DaftarPenumpang from '../../components/features/Pemesanan/DetailPenumpang/DaftarPenumpang';
import FlightDetailCard from '../../components/shared/Pemesanan/FlightDetailCard';
import FormPemesan from '../../components/features/Pemesanan/DetailPenumpang/FormPemesan';
import FormPenumpang from '../../components/features/Pemesanan/DetailPenumpang/FormPenumpang';
import Popup from '../../components/core/Popup';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changePage, closePemesanPopup, closePenumpangPopup, setAddBaggage } from '../../redux/slices/Booking';

export default function DetailPenumpang() {
  const { penumpangPopupOpened, pemesanPopupOpened } = useAppSelector((state) => state.booking.detailPenumpang);
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Container sx={{ paddingBlockEnd: '2rem' }}>
        <Typography variant="h5" fontWeight="bold">
          Detail Penumpang
        </Typography>
        <Grid container mt={0} spacing={2}>
          {/* Detail Penerbangan */}
          <Grid item xs={12} md={6} order={{ xs: 0, md: 1 }}>
            <Stack spacing={2}>
              <FlightDetailCard type='outbound'/>
              <FlightDetailCard type='return'/>

              {/* Lanjutkan Pemesanan (Desktop View) */}
              {!isSmallScreen && (
                <Button
                  variant="contained"
                  onClick={() => dispatch(changePage(2))}
                  sx={{ 
                    background: theme.palette.gradients?.horizontal, 
                    width: '100%' 
                  }}
                >
                  Lanjutkan Pemesanan
                </Button>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }}>
            {/* Detail Pemesan */}
            <Box>
              <Typography variant="h6" mb={2} fontWeight={'bold'}>
                Detail Pemesan
              </Typography>
              <DetailPemesan/>
            </Box>
            {/* Detail Pemesan Modal */}
            <Popup
              title='Detail Pemesan'
              open={pemesanPopupOpened}
              onClose={() => dispatch(closePemesanPopup())}
            >
              <FormPemesan/>
            </Popup>
            {/* Penumpang */}
            <Box>
              <Typography variant="h6" mb={2} fontWeight={'bold'}>
                Penumpang
              </Typography>
              <DaftarPenumpang/>
            </Box>
            <Popup
              title='Detail Penumpang'
              open={penumpangPopupOpened}
              onClose={() => dispatch(closePenumpangPopup())}
            >
              <FormPenumpang/>
            </Popup>
            {/* Fasilitas Ekstra */}
            <Box>
              <Typography variant="h6" mb={2} fontWeight={'bold'}>
                Fasilitas Ekstra
              </Typography>
              <Stack spacing={2}>
                <ExtraFacilityCard
                  title="Bagasi"
                  caption="Yakin bagasi 20kg cukup untuk semua barang bawaan kamu sekarang"
                  price={65000}
                  changeState={(payload) => { dispatch(setAddBaggage(payload)) }}
                />
              </Stack>
            </Box>
          </Grid>
          {/* Lanjutkan Pemesanan (Mobile View) */}
          <Grid item xs={12} md={6} order={2}>
            {isSmallScreen && (
              <Button
                variant="contained"
                onClick={() => dispatch(changePage(2))}
                sx={{ 
                  background: theme.palette.gradients?.horizontal, 
                  width: '100%' 
                }}
              >
                Lanjutkan Pemesanan
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
