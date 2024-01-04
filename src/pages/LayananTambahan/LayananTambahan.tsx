import { Box, Grid, Typography, Container } from "@mui/material";

import { AddOnsCard } from "../../components/ui/";

export default function LayananTambahan() {
  return (
    <Container>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Layanan Tambahan
      </Typography>
      <Grid container mt={0} spacing={2}>
        <Grid item xs={6}>
          <AddOnsCard title={"Asuransi Perjalanan"} price={65000} />
          <Box py={2}>
            <AddOnsCard title={"Asuransi Bagasi"} price={100000} />
          </Box>
          <AddOnsCard title={"Proteksi Keterlambatan"} price={65000} />
        </Grid>
        <Grid item xs={6}>
          <AddOnsCard title={"Asuransi Perjalanan"} price={65000} />
        </Grid>
      </Grid>
    </Container>
  );
}
