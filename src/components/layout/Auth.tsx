import {
  Grid,
  Box,
  Typography,
  TextField,
  Link,
  Stack,
  Button,
  Fab,
  Divider,
} from "@mui/material";
import GoogleIcon from "../../assets/image 21.png";

export default function AuthLayout() {
  return (
    <Grid container sx={{ height: "100vh", backgroundColor: "#3A42FF80" }}>
      <Grid item xs={6}></Grid>
      <Grid
        item
        xs={6}
        p={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderTopLeftRadius: "2rem",
          borderBottomLeftRadius: "2rem",
        }}
      >
        <Box p={2} sx={{ width: "100%" }}>
          <Typography variant="h5" fontWeight="bold">
            Log In
          </Typography>
          <TextField
            variant="outlined"
            label="Masukkan Email"
            size="medium"
            sx={{ width: "100%", marginBlock: 1 }}
          ></TextField>
          <Stack mb={5}>
            <Link href="#" alignSelf="flex-end">
              Lupa Password?
            </Link>
          </Stack>
          <Button variant="contained" fullWidth>
            Masuk
          </Button>
          <Divider sx={{ color: "gray", marginTop: "0.7rem" }}>
            atau login dengan
          </Divider>
          <Stack alignItems="center" my={4}>
            <Fab size="medium">
              <img src={GoogleIcon} alt="" height="60%" />
            </Fab>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: "gray" }}
            align="center"
            mt={1}
          >
            Dengan Log In kamu menyetujui{" "}
            <Link> Syarat, Ketentuan dan Kebijakan </Link>
            Privasi Kaboor
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "gray" }}
            align="center"
            mt={4}
          >
            Belum punya akun? <Link>Buat akun yuk?</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
