import { CloseOutlined, ExpandMoreOutlined } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import theme from '../../../config/theme';
import { ListCustomerServiceKaboor } from '../../shared/Profil/ListCustomerServiceKaboor';

const HelpCenter = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(
    false
  );
  const webTheme = theme;
  const handleChangeAccordion =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedAccordion(isExpanded ? panel : false);
    };
  const desktopStyleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: 1,
    p: 1,
  };
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <Stack
        px={6}
        py={4}
        borderRadius={1}
        border={`1px solid ${'#C2C2C2'}`}
        width={'100%'}
        maxWidth={'880px'}
        sx={{
          background: '#FFF',
        }}
        gap={2}
      >
        <Typography variant="h5" color={'#1C1C1E'} fontWeight={700}>
          Pusat Bantuan
        </Typography>
        <Typography variant="h6" fontWeight={600} color={'#505050'}>
          Pertanyaan yang sering diajukan
        </Typography>
        <Stack gap={2}>
          <Accordion
            expanded={expandedAccordion === 'panel1'}
            onChange={handleChangeAccordion('panel1')}
            elevation={0}
            sx={{
              border: 1,
              borderRadius: 1,
              borderColor: 'grey.500',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Apakah Pembayaran Sudah Diterima
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Biasanya, pembayaran akan segera diproses setelah Anda
                menyelesaikan transaksi pembelian tiket pesawat. Proses ini
                dapat memakan waktu beberapa saat tergantung pada metode
                pembayaran yang Anda gunakan. Jika pembayaran Anda telah
                berhasil diproses, Anda akan menerima konfirmasi melalui email
                atau melalui aplikasi pemesanan kami.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === 'panel2'}
            onChange={handleChangeAccordion('panel2')}
            elevation={0}
            sx={{
              border: 1,
              borderRadius: 1,
              borderColor: 'grey.500',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Cara Membayar Pesanan Saya
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Membayar pesanan tiket pesawat Anda dengan cepat dan mudah
                adalah prioritas kami. Berikut langkah-langkah singkat untuk
                melakukan pembayaran: <br /> <br />
                1. Setelah Anda memilih penerbangan yang diinginkan dan mengisi
                detail penumpang, Anda akan diarahkan ke halaman pembayaran.
                <br />
                2. Pilih metode pembayaran yang Anda preferensikan dari opsi
                yang tersedia, seperti kartu kredit/debit, transfer bank, atau
                dompet digital. <br />
                3. Masukkan detail pembayaran sesuai dengan instruksi yang
                diberikan. <br />
                4. Periksa kembali detail pesanan Anda dan pastikan semuanya
                benar sebelum menyelesaikan pembayaran. <br />
                5. Setelah pembayaran berhasil diproses, Anda akan menerima
                konfirmasi pembayaran melalui email atau langsung di aplikasi
                pemesanan kami.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === 'panel3'}
            onChange={handleChangeAccordion('panel3')}
            elevation={0}
            sx={{
              border: 1,
              borderRadius: 1,
              borderColor: 'grey.500',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Cara Mengubah Nomor Handphone
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Jika Anda ingin mengubah nomor handphone yang terdaftar di akun
                Anda, ikuti langkah-langkah berikut:
                <br /> <br />
                1. Buka aplikasi kami dan masuk ke akun Anda.
                <br />
                2. Di menu utama, cari opsi "Pengaturan" atau "Profil Saya".
                <br />
                3. Pilih opsi yang berkaitan dengan informasi akun atau profil
                Anda.
                <br />
                4. Temukan bagian yang berisi informasi nomor handphone Anda
                saat ini.
                <br />
                5. Klik atau ketuk opsi "Ubah" atau "Edit" di sebelah nomor
                handphone Anda.
                <br />
                6. Masukkan nomor handphone baru Anda.
                <br />
                7. Verifikasi nomor handphone baru Anda dengan kode yang
                dikirimkan melalui SMS atau email, sesuai prosedur yang berlaku.
                <br />
                8. Setelah verifikasi berhasil, simpan perubahan Anda.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === 'panel4'}
            onChange={handleChangeAccordion('panel4')}
            elevation={0}
            sx={{
              border: 1,
              borderRadius: 1,
              borderColor: 'grey.500',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Cara Mengubah Email
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Jika Anda perlu mengganti alamat email yang terdaftar di akun
                Anda, ikuti langkah-langkah berikut: <br />
                <br />
                1. Buka aplikasi kami dan masuk ke akun Anda.
                <br />
                2. Di menu utama, cari opsi "Pengaturan" atau "Profil Saya".
                <br />
                3. Pilih opsi yang berkaitan dengan informasi akun atau profil
                Anda.
                <br />
                4. Cari bagian yang berisi informasi alamat email Anda saat ini.
                <br />
                5. Klik atau ketuk opsi "Ubah" atau "Edit" di sebelah alamat
                email Anda.
                <br />
                6. Masukkan alamat email baru Anda.
                <br />
                7. Pastikan untuk memasukkan alamat email dengan cermat dan
                pastikan tidak ada kesalahan pengetikan.
                <br />
                8. Simpan perubahan Anda.
                <br />
                9. Anda mungkin akan diminta untuk melakukan verifikasi alamat
                email baru Anda. Periksa kotak masuk email Anda dan ikuti
                instruksi yang diberikan untuk menyelesaikan proses verifikasi.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === 'panel5'}
            onChange={handleChangeAccordion('panel5')}
            elevation={0}
            sx={{
              border: 1,
              borderRadius: 1,
              borderColor: 'grey.500',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Transaksi Saya Tidak Berhasil
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Jika Anda mengalami masalah dengan transaksi Anda, berikut
                adalah langkah-langkah yang dapat Anda ikuti untuk mencari
                solusi:
                <br />
                <br />
                1. Periksa Koneksi Internet: Pastikan koneksi internet Anda
                stabil dan tidak ada gangguan saat melakukan transaksi. Koneksi
                yang tidak stabil dapat menyebabkan gangguan dalam proses
                pembayaran.
                <br />
                2. Cek Saldo atau Limit Kartu: Pastikan saldo atau limit kartu
                pembayaran Anda mencukupi untuk melakukan transaksi.
                Kadang-kadang transaksi tidak berhasil karena saldo tidak
                mencukupi atau telah melebihi limit.
                <br />
                3. Coba Transaksi Kembali: Jika transaksi masih belum berhasil,
                coba ulangi proses pembayaran setelah beberapa saat.
                Kadang-kadang masalah teknis sementara dapat terjadi.
                <br />
                4. Hubungi Layanan Pelanggan Kami: Jika setelah langkah-langkah di
                atas transaksi masih tidak berhasil, jangan ragu untuk
                menghubungi tim dukungan pelanggan kami melalui [masukkan kontak
                layanan pelanggan]. Tim kami akan dengan senang hati membantu
                Anda menyelesaikan masalah ini.
                <br />
                <br />
                Jangan lupa untuk menyertakan detail transaksi yang terkait,
                seperti nomor pemesanan atau detail pembayaran, saat menghubungi
                layanan pelanggan kami untuk mempercepat proses bantuan.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === 'panel6'}
            onChange={handleChangeAccordion('panel6')}
            elevation={0}
            sx={{
              border: 1,
              borderRadius: 1,
              borderColor: 'grey.500',
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Pendaftaran Akun Gagal
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="subtitle1"
                color={'#1C1C1E'}
                fontWeight={400}
              >
                Jika Anda mengalami masalah saat mencoba mendaftar akun, berikut
                adalah beberapa langkah yang dapat Anda coba untuk menyelesaikan
                masalah: <br />
                <br />
                1. Periksa Koneksi Internet: Pastikan Anda memiliki koneksi
                internet yang stabil saat melakukan proses pendaftaran. Koneksi
                yang tidak stabil bisa menjadi penyebab pendaftaran gagal.
                <br />
                2. Coba Lagi: Kadang-kadang pendaftaran gagal karena masalah
                teknis sementara. Cobalah untuk mendaftar kembali setelah
                beberapa saat.
                <br />
                3. Periksa Persyaratan: Pastikan Anda telah memenuhi semua
                persyaratan yang diperlukan untuk pendaftaran akun. Hal ini
                mungkin termasuk pengisian semua kolom yang wajib di formulir
                pendaftaran dan memilih kata sandi yang memenuhi kriteria
                keamanan.
                <br />
                4. Clear Cache dan Cookies: Jika Anda mengalami masalah saat
                menggunakan aplikasi di perangkat seluler atau komputer, coba
                hapus cache dan cookies dari browser atau aplikasi Anda.
                Kemudian, coba mendaftar kembali.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
        <Typography variant="subtitle1" color={'#1C1C1E'} fontWeight={400}>
          Butuh bantuan lain?{' '}
          <Box
            component={'span'}
            sx={{
              background: `${webTheme.palette.gradients?.diagonal}`,
              backgroundClip: 'text',
              color: 'transparent',
            }}
            onClick={handleOpenModal}
          >
            Hubungi Kami
          </Box>
        </Typography>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={desktopStyleModal}>
            <Stack gap={1} pb={4}>
              <Box alignSelf={'flex-end'}>
                <IconButton onClick={handleCloseModal}>
                  <CloseOutlined></CloseOutlined>{' '}
                </IconButton>
              </Box>
              <Box justifyContent={'center'} px={4}>
                <ListCustomerServiceKaboor />
              </Box>
            </Stack>
          </Box>
        </Modal>
      </Stack>
    </>
  );
};

export default HelpCenter;
