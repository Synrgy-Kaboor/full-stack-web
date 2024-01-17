import {
  Grid,
  Box,
  Stack,
  Typography,
  TextField,
  Link,
  IconButton,
  Button,
  Divider,
} from "@mui/material";

import GoogleOAuth from "../../../assets/image 21.png";
import LoginBackgroundImage from "../../../assets/Login Bg.png";
// import { useState } from "react";

export default function LoginRoot() {
  // const [email, setEmail] = useState<string>("");
  // console.log(email, setEmail);

  return (
    <Box sx={{ maxHeight: "100vh" }}>
      <Grid container sx={{ bgcolor: "kaboor.dark", height: "100vh" }}>
        <Grid container xs={6} sx={{ maxHeight: "100vh" }}>
          <img src={LoginBackgroundImage} height="100%" alt="" />
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          xs={6}
          p={10}
          sx={{
            bgcolor: "white",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Log In
            </Typography>
            <TextField
              variant="outlined"
              label="Masukkan Email"
              sx={{ width: "100%", marginBlock: "1rem" }}
            ></TextField>
            <Link underline="none" sx={{ color: "kaboor.main" }}>
              <Typography textAlign="end">Lupa Password?</Typography>
            </Link>
            <Button
              variant="contained"
              sx={{
                backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
                marginBlock: "1rem",
                width: "100%",
              }}
            >
              Masuk
            </Button>
            <Divider sx={{ color: "gray", fontFamily: "Roboto" }}>
              atau login dengan
            </Divider>
            <Stack direction="row" justifyContent="center" my={2}>
              <IconButton disableRipple sx={{ boxShadow: 2 }}>
                <img src={GoogleOAuth} alt="" />
              </IconButton>
            </Stack>

            <Typography textAlign="center" my={5}>
              Dengan Log In kamu menyetujui{" "}
              <Link underline="none" color="kaboor.main">
                Syarat, Ketentuan, dan Kebijakan
              </Link>{" "}
              Privasi Kaboor
            </Typography>

            <Typography textAlign="center">
              Belum punya akun?{" "}
              <Link
                href="/layanan-tambahan"
                underline="none"
                sx={{ color: "kaboor.main" }}
              >
                Buat akun yuk?
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
