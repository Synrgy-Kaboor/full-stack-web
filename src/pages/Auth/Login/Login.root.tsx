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
  Dialog,
  // DialogContent,
  DialogTitle,
} from "@mui/material";

import GoogleOAuth from "../../../assets/image 21.png";
import LoginBackgroundImage from "../../../assets/Login Bg.png";
import { FormEvent, useState } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function LoginRoot() {
  const [email, setEmail] = useState<string>("");
  const [emailStatus, setEmailStatus] = useState<boolean>(false);
  // console.log(email, setEmail);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      "https://kaboor-api-dev.up.railway.app/api/v1/auth/check/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      }
    );

    console.log(response.status);
    if (response.status !== 200) {
      setEmailStatus(false);
      alert("Login Berhasil");
    } else {
      setEmailStatus(true);
    }

    // alert(`Status Email: ${emailStatus}`);

    // useEffect(() => {
    //   response;
    // }, []);
  };

  //   try {
  //     useEffect( async () => {
  //       fetch('https://kaboor-api-dev.up.railway.app/api/v1/auth/check/email', {
  //         method: "POST",
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(email)
  //       })
  //     })
  //   }
  // } catch {
  //   alert('success')
  // }

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${LoginBackgroundImage})`,
      }}
    >
      <Grid container sx={{ bgcolor: "kaboor.dark", height: "100vh" }}>
        <Grid item xs={6}>
          <Box
            component="div"
            border={1}
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${LoginBackgroundImage})`,
            }}
          />
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
            <form onSubmit={handleSubmit}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Log In
              </Typography>
              <TextField
                variant="outlined"
                label="Masukkan Email"
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: "100%", marginBlock: "1rem" }}
              ></TextField>
              <Link underline="none" sx={{ color: "kaboor.main" }}>
                <Typography textAlign="end">Lupa Password?</Typography>
              </Link>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
                  marginBlock: "1rem",
                  width: "100%",
                }}
              >
                Masuk
              </Button>
            </form>
            <Dialog open={emailStatus}>
              <DialogTitle>
                <Stack direction="row" alignItems="center" px={4} spacing={3}>
                  <ArrowBackIosNewIcon onClick={() => setEmailStatus(false)} />
                  <Typography>Email belum terdaftar</Typography>
                </Stack>
              </DialogTitle>
            </Dialog>
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
