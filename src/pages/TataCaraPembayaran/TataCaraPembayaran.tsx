import { Grid, Container, Stack, Button } from '@mui/material';
import  InfoCard  from '../../components/features/TataCaraPembayaran/CardInfoPembayaran';
import  InstructionCard  from '../../components/features/TataCaraPembayaran/CardCaraPembayaran';
import  Fileinput  from '../../components/features/TataCaraPembayaran/FileDragnDrop';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { httpFetch, httpFetchMultipart } from '../../utils/http';
import { BeResponse } from '../../types/BeResponse';
import { PaymentAttributes } from '../../types/PaymentAttributes';
import { PaymentResponseBody } from '../../types/PaymentResponseBody';
import { numToRp } from '../../utils/formatter';

export default function TataCaraPembayaran() {
  const [paymentAttributes, setPaymentAttributes] = useState<PaymentAttributes | null>(null);
  const [startInterval, setStartInterval] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('')
  const { id } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    
    httpFetch<BeResponse<PaymentResponseBody>>(`api/v1/booking/${id}/payment`, true, {}, 'fsw').then(response => {
      setPaymentAttributes({
        methodName: response.data.methodName,
        accountNumber: response.data.accountNumber,
        totalPrice: response.data.totalPrice,
        paymentCompleted: response.data.paymentCompleted,
        expiredTime: Math.max(0, Math.round((new Date(response.data.expiredTime).getTime() - new Date().getTime()) / 1000))
      });
      setStartInterval(true);

      if (response.data.paymentCompleted) {
        navigate('/profil/pesanan');
      }
    }).catch(() => {
      navigate('/profil/pesanan')
    });
  }, [id, navigate]);

  function uploadImageHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = event.target.files as FileList;
    const formData = new FormData();
    formData.append('file', selectedFiles?.[0]);

    httpFetchMultipart<BeResponse<{ fileName: string, fileUrl: string }>>(
      'api/v1/booking/payment/file',
      true,
      {},
      'fsw',
      {
        method: 'POST',
        body: formData
      }
    ).then(response => {
      setFile(selectedFiles?.[0]);
      setFileName(response.data.fileName);
    })
  }

  function resetFileHandler() {
    setFile(null);
    setFileName('');
  }

  function submitProofOfPayment() {
    httpFetch(
      `api/v1/booking/${id}/payment/proof`,
      true,
      {},
      'fsw',
      {
        method: 'PATCH',
        body: JSON.stringify({
          fileName
        })
      }
    ).then(() => {
      navigate('/profil/pesanan');
    });
  }

  return (
    <>
      <Container sx={{ paddingBlockEnd: '2rem' }}>
        <Grid container mt={0} spacing={2}>
          <Grid item md={6} xs={12}>
            <Stack spacing={2}>
              <InfoCard title={'Selesaikan dalam'} fontweight='normal' label='' item='time' expiredTime={paymentAttributes?.expiredTime} startInterval={startInterval}/>
              <InfoCard title={paymentAttributes?.accountNumber || ''} fontweight='bold' label='Lakukan Transfer Ke' item='copy'/>
              <InfoCard title={numToRp(paymentAttributes?.totalPrice || 0)} fontweight='bold' label='Total Pembayaran' item='copy'/>
              <InstructionCard label= 'Cara Membayar' title={'Transfer Melalui ATM'} 
               instructions={[
                `Masukkan kartu ATM ${paymentAttributes?.methodName} Anda ke mesin ATM.`,
                `Masukkan PIN ATM Anda.`,
                `Pilih menu "Transfer" atau "Transfer antar rekening ${paymentAttributes?.methodName}" tergantung pada mesin ATM yang Anda gunakan.`,
                'Masukkan nomor rekening tujuan.',
                'Masukkan jumlah yang ingin Anda transfer.',
                `Konfirmasi detail transaksi Anda.`,
                'Ambil struk dan pastikan transaksi selesai.'
              ]}/>
              <InstructionCard label= '' title={'Transfer Melalui Mobile Banking'} 
               instructions={[
                `Buka Aplikasi m-Banking ${paymentAttributes?.methodName} pada ponsel Anda`,
                'Masukkan kode akses m-Banking atau lakukan otentikasi sesuai dengan instruksi aplikasi',
                'Pilih menu "Transfer" atau "Transfer antar rekening".',
                'Masukkan 6 digit PIN ATM.',
                'Masukkan nomor rekening tujuan.',
                'Masukkan jumlah yang ingin Anda transfer.',
                'Konfirmasi detail transaksi Anda.',
                'Tunggu hingga transaksi selesai dan Anda akan menerima notifikasi.'
              ]}/>
              <InstructionCard label= '' title={'Transfer Melalui Internet Banking'} 
               instructions={[
                `Akses situs web i-Banking ${paymentAttributes?.methodName} dari perangkat Anda.`,
                'Masukkan ID pengguna dan kata sandi Anda.',
                'Pilih menu "Transfer" atau "Transfer antar rekening".',
                'Masukkan nomor rekening tujuan.',
                'Konfirmasi detail transaksi Anda.',
                'Tunggu hingga transaksi selesai dan pastikan Anda menerima konfirmasi transaksi.'
              ]} />
            </Stack>
          </Grid>
          <Grid item md={6} xs={12}>
            <Fileinput fileName={file?.name || ''} uploadImage={uploadImageHandler} resetFile={resetFileHandler}/>
          </Grid>
          <Grid item md={6} xs={12}>
            <Stack
              direction="row"
              justifyContent="right"
              alignItems="center"
              spacing={1}
            >
              {!fileName && <Button
                variant="contained"
                sx={{
                  color: 'white',
                  background: 'var(--Primary-01, linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%))',
                  borderRadius: '8px',
                  display: 'flex',
                  maxWidth: '275px',
                  width: '100%',
                  padding: '12px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textTransform:'initial',
                }}
                onClick={() => navigate('/profil/pesanan')}
              >
                Lihat Daftar Pesanan
              </Button>}
              
              {fileName && <Button
                variant="contained"
                sx={{
                  color: 'white',
                  background: 'var(--Primary-01, linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%))',
                  borderRadius: '8px',
                  display: 'flex',
                  maxWidth: '275px',
                  width: '100%',
                  padding: '12px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textTransform:'initial',
                }}
                onClick={() => submitProofOfPayment()}
              >
                Selesai
              </Button>}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
