import {
  Box,
  Grid,
  Link,
  Stack,
  Dialog,
  Button,
  Divider,
  TextField,
  Typography,
  IconButton,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from "@mui/material";

import GoogleOAuth from "../../../assets/image 21.png";
import LoginBackgroundImage from "../../../assets/Login Bg.png";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface LoginProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function LoginRoot({ setEmail }: LoginProps) {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [emailStatus, setEmailStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await fetch(
      "https://kaboor-api-dev.up.railway.app/api/v1/auth/check/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputEmail),
      }
    )
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        if (data.code !== 200) {
          setEmailStatus(false);
          setEmail(inputEmail);
          navigate("/login/credentials");
        } else {
          setEmailStatus(true);
        }
      });
  };

  return (
    <Box>
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          xs={6}
          sx={{
            height: "100%",
          }}
        >
          <img
            src={LoginBackgroundImage}
            alt=""
            height="100%"
            width="52%"
            style={{ position: "absolute", left: 0, zIndex: -2 }}
          />
          <Box
            sx={{
              position: "absolute",
              zIndex: -1,
              height: "100%",
              width: "100%",
              background: `
    linear-gradient(270deg, rgba(58, 66, 255, 0.50) 0%, rgba(123, 82, 171, 0.50) 100%)`,
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
            // boxShadow: 3,
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
                onChange={(e) => setInputEmail(e.target.value)}
                sx={{ width: "100%", marginBlock: "1rem" }}
                required
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
                {loading ? (
                  <CircularProgress sx={{ color: "white" }} />
                ) : (
                  "Masuk"
                )}
              </Button>
            </form>
            <Dialog open={emailStatus}>
              <DialogTitle>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ArrowBackIosNewIcon
                    onClick={() => setEmailStatus(false)}
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Kembali
                  </Typography>
                </Stack>
              </DialogTitle>
              <DialogContent dividers>
                <Stack spacing={1}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                    textAlign="center"
                  >
                    Email ini belum terdaftar untuk Login
                  </Typography>
                  <Typography sx={{ color: "gray" }} textAlign="center">
                    Untuk log in menggunakan email ini, silahkan lakukan daftar
                    akun terlebih dulu ya
                  </Typography>
                  <Stack spacing={2} pt={2}>
                    <Button
                      variant="outlined"
                      onClick={() => setEmailStatus(false)}
                      sx={{
                        border:
                          "2px solid linear-gradient(90deg, #7B52AB, #3A42FF)",
                      }}
                    >
                      Nanti Saja
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
                      }}
                      onClick={() => navigate("/register")}
                    >
                      Daftar Akun
                    </Button>
                  </Stack>
                </Stack>
              </DialogContent>
            </Dialog>
            <Divider sx={{ color: "gray", fontFamily: "Open Sans" }}>
              atau login dengan
            </Divider>
            <Stack direction="row" justifyContent="center" my={2}>
              <IconButton disableRipple sx={{ boxShadow: 2 }}>
                <img src={GoogleOAuth} alt="" />
              </IconButton>
            </Stack>

            <Typography textAlign="center" my={5}>
              Dengan Log In kamu menyetujui{" "}
              <Link underline="none" color="primary.main">
                Syarat, Ketentuan, dan Kebijakan
              </Link>{" "}
              Privasi Kaboor
            </Typography>

            <Typography textAlign="center">
              Belum punya akun?{" "}
              <Link
                href="/register"
                underline="none"
                sx={{ color: "primary.main" }}
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
