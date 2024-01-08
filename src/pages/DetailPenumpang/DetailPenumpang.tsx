import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import ExtraFacilityCard from '../../components/ui/ExtraFacilityCard';

export default function DetailPenumpang() {
    return(
        <Container sx={{ paddingBlock: '2rem' }}>
            <Grid container mt={0} spacing={2}>
                {/* Detail Pemesan */}
                <Grid item>
                    <Typography variant="h6" mb={2} fontWeight={'bold'}>
                        Detail Pemesan
                    </Typography>
                </Grid>
                {/* Penumpang */}
                <Grid item>
                    <Typography variant="h6" mb={2} fontWeight={'bold'}>
                        Penumpang
                    </Typography>
                </Grid>
                {/* Fasilitas Ekstra */}
                <Grid item>
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
                </Grid>
                {/* Lanjutkan Pemesanan */}
                <Grid item>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#7B52AB', width: '100%' }}
                    >
                        Lanjutkan Pemesanan
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}