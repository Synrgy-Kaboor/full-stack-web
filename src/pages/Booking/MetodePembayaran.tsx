import {
  Box,
  Grid,
  Typography,
  Container,
  Stack,
  Button,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import theme from '../../config/theme';
import FlightDetailCard from '../../components/shared/Pemesanan/FlightDetailCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import DaftarMetodePembayaran from '../../components/features/MetodePembayaran/DaftarMetodePembayaran';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Popup from '../../components/core/Popup';
import FormVoucher from '../../components/features/MetodePembayaran/FormVoucher';
import { useNavigate } from 'react-router-dom';
import { closeVoucherPopup, openVoucherPopup } from '../../redux/slices/Booking';
import { numToRp } from '../../utils/formatter';

export default function MetodePembayaran() {
  const voucherPopupOpened = useAppSelector((state) => state.booking.metodePembayaran.voucherPopupOpened);
  const selectedVoucher = useAppSelector((state) => state.booking.booking.voucher);
  const totalPrice = useAppSelector((state) => state.booking.totalPrice);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  return (
    <>
      <Container sx={{ paddingBlockEnd: '2rem' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Pilih Metode Pembayaran
        </Typography>
        <Grid container mt={0} spacing={2}>
          <Grid item md={6} xs={12}>
            {/* Payment Methods */}
            <DaftarMetodePembayaran />

            {/* Voucher Button */}
            <Typography variant="h6" mt={2} mb={1}>
              Bayar Lebih Hemat!
            </Typography>
            <Card variant="outlined">
              <CardContent
                sx={{
                  paddingX: 2,
                  paddingY: 1,
                  '&:last-child': { paddingY: 1 },
                }}
              >
                <Stack
                  direction="row"
                  alignItems={'center'}
                  onClick={() => dispatch(openVoucherPopup())}
                  sx={{ '&:hover': { cursor: 'pointer' } }}
                >
                  <Typography flexGrow={1}>
                    {selectedVoucher
                      ? selectedVoucher.code
                      : 'Pilih/Masukkan Voucher Disini'}
                  </Typography>
                  <IconButton onClick={() => dispatch(openVoucherPopup())}>
                    <ConfirmationNumberIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>

            {/* Voucher Modal */}
            <Popup
              title="Voucher"
              open={voucherPopupOpened}
              onClose={() => dispatch(closeVoucherPopup())}
            >
              <FormVoucher />
            </Popup>
          </Grid>

          {/* Detail Penerbangan */}
          <Grid item md={6} xs={12}>
            <Stack spacing={2}>
              <FlightDetailCard />
              <FlightDetailCard />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="subtitle2">Total Harga</Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      background: theme.palette.gradients?.horizontal,
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 'bold',
                    }}
                  >
                    {numToRp(totalPrice)}
                  </Typography>
                </Box>
                <Box sx={{ width: '40%' }}>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/tata-cara-pembayaran')}
                    sx={{
                      background: theme.palette.gradients?.horizontal,
                      width: '100%',
                    }}
                  >
                    Bayar
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
