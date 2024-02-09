import { Grid, Container, Stack, Button } from '@mui/material';
import  InfoCard  from '../../components/features/TataCaraPembayaran/CardInfoPembayaran';
import  InstructionCard  from '../../components/features/TataCaraPembayaran/CardCaraPembayaran';
import  Fileinput  from '../../components/features/TataCaraPembayaran/FileDragnDrop';
import FlightDetailCard from '../../components/shared/Pemesanan/FlightDetailCard';

export default function TataCaraPembayaran() {
  return (
    <>
      <Container sx={{ paddingBlockEnd: '2rem' }}>
           <Grid container mt={0} spacing={2}>
          <Grid item md={6} xs={12}>
            <Stack spacing={2}>
              <InfoCard title={'Selesaikan dalam'} price={65000} fontweight='normal' label='' item='time'/>
              <InfoCard title={'1420 2010 0098 2336'} price={100000} fontweight='bold' label='Lakukan Transfer Ke' item='copy'/>
              <InfoCard title={'2.460.000'} price={65000} fontweight='bold' label='Total Pembayaran' item='copy'/>
              <InstructionCard label= 'Cara Membayar' title={'Transfer Melalui ATM'} 
               instructions={[
                'Kunjungi ATM BRI terdekat.',
                'Masukkan kartu ATM BRI.',
                'Pilih bahasa Indonesia.',
                'Masukkan 6 digit PIN ATM.',
                'Pilih “Transaksi Lainnya” > “Transfer”.',
                'Masukkan kode 002 + nomor rekening BRI tujuan.',
                'Masukkan nominal yang akan ditransfer.',
                'Konfirmasi transaksi dan masukkan nomor referensi jika diperlukan.',
                'Pilih jenis rekening (Tabungan atau Giro).',
                'Tunggu hingga bukti transfer keluar dari mesin ATM.',
              ]}/>
                 <InstructionCard label= '' title={'Transfer Melalui ATM'} 
               instructions={[
                'Kunjungi ATM BRI terdekat.',
                'Masukkan kartu ATM BRI.',
                'Pilih bahasa Indonesia.',
                'Masukkan 6 digit PIN ATM.',
                'Pilih “Transaksi Lainnya” > “Transfer”.',
                'Masukkan kode 002 + nomor rekening BRI tujuan.',
                'Masukkan nominal yang akan ditransfer.',
                'Konfirmasi transaksi dan masukkan nomor referensi jika diperlukan.',
                'Pilih jenis rekening (Tabungan atau Giro).',
                'Tunggu hingga bukti transfer keluar dari mesin ATM.',
              ]}/>
                 <InstructionCard label= '' title={'Transfer Melalui Internet Banking'} 
               instructions={[
                'Kunjungi ATM BRI terdekat.',
                'Masukkan kartu ATM BRI.',
                'Pilih bahasa Indonesia.',
                'Masukkan 6 digit PIN ATM.',
                'Pilih “Transaksi Lainnya” > “Transfer”.',
                'Masukkan kode 002 + nomor rekening BRI tujuan.',
                'Masukkan nominal yang akan ditransfer.',
                'Konfirmasi transaksi dan masukkan nomor referensi jika diperlukan.',
                'Pilih jenis rekening (Tabungan atau Giro).',
                'Tunggu hingga bukti transfer keluar dari mesin ATM.',
              ]} />
               <Stack
                direction="row"
                justifyContent="right"
                alignItems="center"
                spacing={1}
              >
 
  <Button
    variant="contained"
    sx={{
      color: 'transparent', 
      backgroundImage: 'linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%)',
      WebkitBackgroundClip: 'text', 
      border: '1px solid var(--Primary-01, #3A42FF)',
      borderRadius: '8px',
      display: 'flex',
      width: '263px',
      padding: '12px 20px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      textTransform:'initial',
    }}
  >
    Ganti Metode Pembayaran
  </Button>

  <Button
    variant="contained"
    sx={{
      color: 'white',
      background: 'var(--Primary-01, linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%))',
      borderRadius: '8px',
      display: 'flex',
      width: '263px',
      padding: '12px 20px',
      justifyContent: 'center',
      alignItems: 'center',
      textTransform:'initial',
    }}
  >
    Lihat Daftar Pesanan
  </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item md={6} xs={12}>
            <Stack spacing={2}>
              <Fileinput />
              <FlightDetailCard type='outbound'/>
              <FlightDetailCard type='return'/>
             
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
