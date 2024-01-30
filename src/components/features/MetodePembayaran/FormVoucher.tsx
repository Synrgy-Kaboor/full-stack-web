import {
  Stack,
  Typography,
  Container,
  OutlinedInput,
  InputAdornment,
  Card,
  CardContent,
  Divider,
  CardActions,
  Box,
  // CardHeader,
} from "@mui/material";

import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

function PromoCard() {
  return (
    <Card>
      <CardContent sx={{ padding: 0 }}>
        {/* Card Title */}
        <Stack
          direction="row"
          bgcolor="primary.main"
          alignItems="center"
          p={2}
          spacing={1}
        >
          <VerifiedOutlinedIcon sx={{ color: "white" }} />
          <Typography color="white" fontWeight="bold">
            Voucher Promo
          </Typography>
        </Stack>

        <Box mt={2} mx={2} mb={1}>
          <Typography
            display="inline"
            bgcolor="success.light"
            color="white"
            variant="subtitle2"
            borderRadius={8}
            p={1}
          >
            Hemat IDR 26.000
          </Typography>
        </Box>
        {/* Card Content */}
        <Stack py={1} px={2}>
          <Typography fontWeight="bold">
            Discount Hingga Rp 100.000 Buat Keliling Indonesia
          </Typography>
          <Stack direction="row" spacing={1}>
            <Typography color="gray" variant="body2">
              Kode :
            </Typography>
            <Typography variant="body2">TEMANKABOOR</Typography>
          </Stack>
          <Typography color="gray" variant="body2">
            Berlaku untuk semua metode pembayaran
          </Typography>
          <Typography
            variant="body2"
            display="inline"
            color="primary.main"
            my={1}
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            S&K Berlaku
          </Typography>
        </Stack>

        <Divider />
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Stack py={1} px={2}>
          <Typography color="red" variant="body2">
            Promo Berakhir dalam 15 Jam
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default function FormVoucher() {
  return (
    <Container>
      <Stack p={2}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Bayar Lebih Hemat!
        </Typography>
        <OutlinedInput
          placeholder="Pilih/Masukkan Voucher Disini"
          endAdornment={
            <InputAdornment position="end">
              <ConfirmationNumberOutlinedIcon sx={{ color: "gray" }} />
            </InputAdornment>
          }
        />
        <Typography variant="h6" fontWeight="bold" pt={2} gutterBottom>
          Pilih Promo Buat Transaksimu
        </Typography>
        <PromoCard />
      </Stack>
    </Container>
  );
}
