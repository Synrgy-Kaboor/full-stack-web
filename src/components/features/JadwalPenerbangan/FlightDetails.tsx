import { Stack, Typography, Divider } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FlightDetails() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{ bgcolor: "white", boxShadow: 1, borderRadius: 1 }}
    >
      {/* Pesawat */}
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <Typography>SUB</Typography>
        <ArrowForwardIcon sx={{ color: "gray" }} />
        <Typography>JKT</Typography>
      </Stack>

      <Divider orientation="vertical" flexItem />

      {/* Tanggal */}
      <Stack direction="row" justifyContent="center" sx={{ width: "100%" }}>
        <Typography>Senin, 24 Desember 2024</Typography>
      </Stack>

      <Divider orientation="vertical" flexItem />

      {/* Jumlah Penumpang */}
      <Stack direction="row" justifyContent="center" sx={{ width: "100%" }}>
        <Typography>1 Orang</Typography>
      </Stack>

      <Divider orientation="vertical" flexItem />

      {/* Kelas Pesawat */}
      <Stack direction="row" justifyContent="center" sx={{ width: "100%" }}>
        <Typography>Ekonomi</Typography>
      </Stack>
    </Stack>
  );
}
