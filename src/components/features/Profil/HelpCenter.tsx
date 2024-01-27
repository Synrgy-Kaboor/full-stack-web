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
                1. Pilih metode pembayaran sesuai yang kita inginkan <br />
                2. Baca tutorial yang sudah dijelaskan di dalam halaman
                pembayaran <br />
                3. Transfer sesuai nominal yang sudah tertera dan waktu yang
                sudah ditentukan
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === 'panel2'}
            onChange={handleChangeAccordion('panel2')}
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
                1. Pilih metode pembayaran sesuai yang kita inginkan <br />
                2. Baca tutorial yang sudah dijelaskan di dalam halaman
                pembayaran <br />
                3. Transfer sesuai nominal yang sudah tertera dan waktu yang
                sudah ditentukan
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === 'panel3'}
            onChange={handleChangeAccordion('panel3')}
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
                1. Pilih metode pembayaran sesuai yang kita inginkan <br />
                2. Baca tutorial yang sudah dijelaskan di dalam halaman
                pembayaran <br />
                3. Transfer sesuai nominal yang sudah tertera dan waktu yang
                sudah ditentukan
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === 'panel4'}
            onChange={handleChangeAccordion('panel4')}
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
                1. Pilih metode pembayaran sesuai yang kita inginkan <br />
                2. Baca tutorial yang sudah dijelaskan di dalam halaman
                pembayaran <br />
                3. Transfer sesuai nominal yang sudah tertera dan waktu yang
                sudah ditentukan
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === 'panel5'}
            onChange={handleChangeAccordion('panel5')}
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
                1. Pilih metode pembayaran sesuai yang kita inginkan <br />
                2. Baca tutorial yang sudah dijelaskan di dalam halaman
                pembayaran <br />
                3. Transfer sesuai nominal yang sudah tertera dan waktu yang
                sudah ditentukan
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expandedAccordion === 'panel6'}
            onChange={handleChangeAccordion('panel6')}
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
                1. Pilih metode pembayaran sesuai yang kita inginkan <br />
                2. Baca tutorial yang sudah dijelaskan di dalam halaman
                pembayaran <br />
                3. Transfer sesuai nominal yang sudah tertera dan waktu yang
                sudah ditentukan
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
