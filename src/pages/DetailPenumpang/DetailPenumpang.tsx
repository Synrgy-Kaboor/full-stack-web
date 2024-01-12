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
import DetailPemesan from './DetailPemesan';
import DaftarPenumpang from './DaftarPenumpang';
import { FlightDetailCard, Navbar } from '../../components/ui';
import { useNavigate } from 'react-router';
import FormPemesan from './FormPemesan';
import FormPenumpang from './FormPenumpang';
import { Pemesan } from '../../types/Pemesan';
import { useState } from 'react';
import { Penumpang } from '../../types/Penumpang';
import Popup from '../../components/ui/Popup';

export default function DetailPenumpang() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const pemesanInitialState: Pemesan = {
    name: 'Andre Hutshon',
    honorific: 'Mr',
    phone: '+62 82140520771',
    email: 'andrehosthon234@gmail.com'
  };

  const daftarPenumpangInitialState: Penumpang[] = [
    {
      name: 'Penumpang 1',
      honorific: ''
    },
    {
      name: 'Penumpang 2',
      honorific: ''
    }
  ];

  const [pemesan, setPemesan] = useState<Pemesan>(pemesanInitialState);
  const [daftarPenumpang, setDaftarPenumpang] = useState<Penumpang[]>(daftarPenumpangInitialState);
  const [openPemesanPopup, setOpenPemesanPopup] = useState(false);
  const [openPenumpangPopup, setOpenPenumpangPopup] = useState(false);  
  const [selectedPenumpangOrder, setSelectedPenumpangOrder] = useState(0);
  const navigate = useNavigate();

  const changePemesan = (newPemesan: Pemesan) => {
    setPemesan(newPemesan);
    setOpenPemesanPopup(false);
  }

  const changePenumpang = (newPenumpang: Penumpang, order: number) => {
    const newDaftarPenumpang = [...daftarPenumpang];
    newDaftarPenumpang[order] = newPenumpang
    setDaftarPenumpang(newDaftarPenumpang);
    setOpenPenumpangPopup(false);
  }

  const setupOpenPenumpangPopup = (order: number) => {
    setSelectedPenumpangOrder(order);
    setOpenPenumpangPopup(true);
  }

  return (
    <>
      <Navbar />
      <Container sx={{ paddingBlock: '2rem', backgroundColor: 'kaboor.light' }}>
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
                    backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`, 
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
              <DetailPemesan
                pemesan={pemesan}
                setOpenPopup={setOpenPemesanPopup}
              />
            </Box>
            {/* Detail Pemesan Modal */}
            <Popup
              title='Detail Pemesan'
              open={openPemesanPopup}
              setOpen={setOpenPemesanPopup}
            >
              <FormPemesan changePemesan={changePemesan}/>
            </Popup>
            {/* Penumpang */}
            <Box>
              <Typography variant="h6" mb={2} fontWeight={'bold'}>
                Penumpang
              </Typography>
              <DaftarPenumpang penumpang={daftarPenumpang} openPopup={setupOpenPenumpangPopup}/>
            </Box>
            <Popup
              title='Detail Penumpang'
              open={openPenumpangPopup}
              setOpen={setOpenPenumpangPopup}
            >
              <FormPenumpang changePenumpang={changePenumpang} order={selectedPenumpangOrder}/>
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
                  backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`, 
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
