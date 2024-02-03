import { Stack, Typography, OutlinedInput, Button } from "@mui/material";
import theme from "../../../config/theme";

export default function Passport() {
  return (
    <Stack
      p={4}
      bgcolor={"white"}
      borderRadius={2}
      sx={{ width: "100%", border: "1px solid #C2C2C2" }}
    >
      <Typography variant="h6" fontWeight={"bold"}>
        Paspor
      </Typography>

      <Typography mt={2}>Detail Paspor</Typography>
      <Typography color={"gray"} variant="subtitle2">
        Isi semua kolom dengan data paspor yang berlaku ya
      </Typography>

      <form>
        <Typography mt={2} gutterBottom>
          Nama Lengkap
        </Typography>
        <OutlinedInput
          size="medium"
          placeholder="Masukkan Nama Lengkap"
          fullWidth
        />

        <Typography mt={2} gutterBottom>
          Nomor Paspor
        </Typography>
        <OutlinedInput
          size="medium"
          placeholder="Masukkan nomor paspor"
          fullWidth
        />

        <Typography mt={2} gutterBottom>
          Tanggal Kadaluwarsa
        </Typography>
        <OutlinedInput
          size="medium"
          placeholder="Masukkan tanggal kadaluwarsa"
          fullWidth
        />

        <Typography mt={2} gutterBottom>
          Negara yang Menerbitkan
        </Typography>
        <OutlinedInput size="medium" placeholder="Masukkan Negara" fullWidth />

        <Stack alignItems={"end"} sx={{ width: "100%" }} my={2}>
          <Button
            variant="contained"
            sx={{
              width: "20%",
              background: theme.palette.gradients?.horizontal,
            }}
          >
            Simpan
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
