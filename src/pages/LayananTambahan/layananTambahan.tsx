import Button from "../../components/ui/button";
import {
  Box,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Divider,
  Stack,
  Link,
  CardActions,
  IconButton,
} from "@mui/material";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

function AddOnsCard({ title }) {
  return (
    <Card variant="outlined">
      <CardContent sx={{ padding: 0 }}>
        <Stack direction="row" m={2} alignItems="center">
          <HealthAndSafetyOutlinedIcon fontSize="medium" />
          <Typography sx={{ fontWeight: "bold" }} ml={1}>
            {title}
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
          <Link href="#" underline="none">
            Baca Selengkapnya
          </Link>
        </Box>
      </CardContent>
      <CardActions disableSpacing sx={{ padding: "0" }}>
        <Stack
          direction="row"
          px={2}
          py={1}
          m={0}
          alignItems="center"
          sx={{
            backgroundColor: "#7B52AB",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: "white" }}>
            Rp 65.000/pax
          </Typography>
          <IconButton>
            <ControlPointOutlinedIcon sx={{ color: "white" }} />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default function LayananTambahan() {
  return (
    <Container>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Layanan Tambahan
      </Typography>
      <Grid container mt={0} spacing={2}>
        <Grid item xs={6}>
          <AddOnsCard title={"Asuransi Perjalanan"} />
          <AddOnsCard title={"Asuransi Bagasi"} />
          <AddOnsCard title={"Proteksi Keterlambatan"} />
        </Grid>
        <Grid item xs={6}>
          <AddOnsCard title={"Asuransi Perjalanan"} />
        </Grid>
      </Grid>
    </Container>
  );
}
