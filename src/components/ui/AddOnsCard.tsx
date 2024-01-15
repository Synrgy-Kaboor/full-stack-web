import {
  Box,
  Link,
  Card,
  Stack,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  CardActions,
  CardContent,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import { useState } from 'react';

export default function AddOnsCard(props: { title: string; price: number }) {
  const [addOns, setAddOns] = useState<boolean>(false);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);

  function formatPriceToIDR(price: number) {
    const rupiah = new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumSignificantDigits: 3,
    });

    return rupiah.format(price);
  }

  function handleModalPopUp() {
    setOpenPopUp(true);
  }

  function handleModalClose() {
    setOpenPopUp(false);
  }

  function onAddOnsClick() {
    setAddOns(!addOns);
  }

  return (
    <Card variant="outlined">
      <CardContent sx={{ padding: 0 }}>
        <Stack direction="row" m={2} alignItems="center">
          <HealthAndSafetyOutlinedIcon
            fontSize="medium"
            sx={{ color: 'kaboor.main' }}
          />
          <Typography sx={{ fontWeight: 'bold' }} ml={1}>
            {props.title}
          </Typography>
        </Stack>
        <Divider />
        <Box p={2}>
          <Stack direction="row">
            <CheckCircleIcon fontSize="small" color="success" />
            <Typography ml={1}>
              Kompensasi hingga Rp 500 Juta untuk berbagai resiko tak terduga
            </Typography>
          </Stack>
          <Stack direction="row" mb={2}>
            <CheckCircleIcon fontSize="small" color="success" />
            <Typography ml={1}>
              Kompensasi hingga Rp 500 Juta untuk berbagai resiko tak terduga
            </Typography>
          </Stack>
          <Link href="#" underline="none" onClick={handleModalPopUp}>
            <Typography color="kaboor.main">Baca Selengkapnya</Typography>
          </Link>
          <Dialog open={openPopUp}>
            <DialogTitle>
              <Stack px={10} direction="row" justifyContent="center">
                <ArrowBackIosNewIcon
                  onClick={handleModalClose}
                  sx={{ position: 'absolute', left: 20, top: 20 }}
                />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Perlindungan Ekstra
                </Typography>
              </Stack>
            </DialogTitle>
            <DialogContent dividers>
              <Stack direction="row" spacing={2} mb={2} alignItems="center">
                <HealthAndSafetyOutlinedIcon />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Asuransi Perjalanan
                </Typography>
              </Stack>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'kaboor.main' }}>
                      <TableCell
                        align="center"
                        sx={{ color: 'white', fontSize: '1.5rem' }}
                      >
                        Tanggungan
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: 'white', fontSize: '1.5rem' }}
                      >
                        Kompensasi
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ width: '50%' }}>
                        Santunan sebanyak satu kali jika Anda meninggal dunia
                        atau cacat tetap akibat kecelakaan.
                      </TableCell>
                      <TableCell>Hingga Rp 150.000.000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ width: '50%' }}>
                        Menanggung biaya perawatan medis selama perjalanan Anda
                        yang dibutuhkan akibat kecelakaan.
                      </TableCell>
                      <TableCell>
                        Dari Rp 37.500.000 sampai Rp. 150.000.000
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ width: '50%' }}>
                        Menanggung biaya perjalanan dan akomodasi yang hangus
                        jika perjalanan Anda harus dibatalkan setidaknya 30 hari
                        sebelum tanggal keberangkatan Anda, akibat risiko-risiko
                        yang ditanggung.
                      </TableCell>
                      <TableCell>
                        Dari Rp 1.000.000 sampai Rp. 5.000.000
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ width: '50%' }}>
                        Menanggung biaya perawatan medis selama perjalanan Anda
                        yang dibutuhkan akibat kecelakaan.
                      </TableCell>
                      <TableCell>
                        Dari Rp 37.500.000 sampai Rp. 150.000.000
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </DialogContent>
          </Dialog>
        </Box>
      </CardContent>
      <CardActions disableSpacing sx={{ padding: '0' }}>
        <Stack
          direction="row"
          px={2}
          py={1}
          m={0}
          alignItems="center"
          sx={{
            bgcolor: 'kaboor.main',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
            {formatPriceToIDR(props.price)}/pax
          </Typography>
          {addOns === true ? (
            <IconButton onClick={onAddOnsClick}>
              <CheckCircleIcon sx={{ color: 'success.main' }} />
            </IconButton>
          ) : (
            <IconButton onClick={onAddOnsClick}>
              <ControlPointOutlinedIcon sx={{ color: 'white' }} />
            </IconButton>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
}
