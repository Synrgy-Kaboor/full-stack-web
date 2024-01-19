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
import { useNavigate } from 'react-router';
import FormPemesan from '../../components/features/Pemesanan/DetailPenumpang/FormPemesan';
import FormPenumpang from '../../components/features/Pemesanan/DetailPenumpang/FormPenumpang';
import Popup from '../../components/core/Popup';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closePemesanPopup, closePenumpangPopup } from '../../redux/slices/DetailPenumpang';

export default function DetailPenumpang() {
  const { pemesanPopupOpened, penumpangPopupOpened } = useAppSelector((state) => state.detailPenumpang);
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <>
      <Container sx={{ paddingBlock: '2rem' }}>
        <Typography variant="h5" fontWeight="bold">
          Detail Penumpang
        </Typography>
        <Grid container mt={0} spacing={2}>
          {/* Detail Penerbangan */}
          <Grid item xs={12} md={6} order={{ xs: 0, md: 1 }}>
            <Stack spacing={2}>
              <FlightDetailCard />
              <FlightDetailCard />

              {/* Lanjutkan Pemesanan (Desktop View) */}
              {!isSmallScreen && (
                <Button
                  variant="contained"
                  onClick={() => navigate('/layanan-tambahan')}
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
                  actionText="Tambah bagasi tambahan"
                />
                <ExtraFacilityCard
                  title="Nomor Kursi"
                  caption="Yuk pilih kursi yang dekat teman atau keluargamu, biar gak keliatan jomblo loh. Apa mau kamu duduk sendiri di kursi tengah?"
                  actionText="Pilih kursimu sekarang"
                />
                <ExtraFacilityCard
                  title="Makanan"
                  caption="Terbang 4 jam bisa bikin laper lho. Nikmati hidangan yang cocok dalam petualangnmu dengan kuliner diatas pesawat."
                  actionText="Beli makananmu sekarang"
                />
              </Stack>
            </Box>
          </Grid>
          {/* Lanjutkan Pemesanan (Mobile View) */}
          <Grid item xs={12} md={6} order={2}>
            {isSmallScreen && (
              <Button
                variant="contained"
                onClick={() => navigate('/layanan-tambahan')}
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
