import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import ExtraFacilityCard from '../../components/ui/ExtraFacilityCard';
import DetailPemesan from './DetailPemesan';
import Penumpang from './Penumpang';
import { FlightDetailCard } from '../../components/ui';

export default function DetailPenumpang() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <Container sx={{ paddingBlock: '2rem' }}>
            <Typography variant="h5" fontWeight="bold">
                Detail Penumpang
            </Typography>
            <Grid container mt={0} spacing={2}>
                {/* Detail Penerbangan */}
                <Grid item xs={12} md={6} order={{ xs: 0, md: 1 }}>
                    <Stack spacing={2}>
                        <FlightDetailCard/>
                        <FlightDetailCard/>
                        {!isSmallScreen && 
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: '#7B52AB', width: '100%' }}
                            >
                                Lanjutkan Pemesanan
                            </Button>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }}>
                    {/* Detail Pemesan */}
                    <Box>
                        <Typography variant="h6" mb={2} fontWeight={'bold'}>
                            Detail Pemesan
                        </Typography>
                        <DetailPemesan name="Mr. Andre Hutshon" phone="+62 82140520771" email="andrehosthon234@gmail.com"/>
                    </Box>
                    {/* Penumpang */}
                    <Box>
                        <Typography variant="h6" mb={2} fontWeight={'bold'}>
                            Penumpang
                        </Typography>
                        <Penumpang penumpang={['Orang 1', 'Orang 2']}/>
                    </Box>
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
                {/* Lanjutkan Pemesanan */}
                <Grid item xs={12} md={6} order={2}>
                    {isSmallScreen && 
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: '#7B52AB', width: '100%' }}
                        >
                            Lanjutkan Pemesanan
                        </Button>
                    }
                </Grid>
            </Grid>
        </Container>
    )
}