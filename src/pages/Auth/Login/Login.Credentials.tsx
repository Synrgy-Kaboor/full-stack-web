import {
  Box,
  Grid,
  Link,
  Stack,
  Button,
  TextField,
  Typography,
  OutlinedInput,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";

import LoginBackgroundImage from "../../../assets/Login Bg.png";

interface IEmailProps {
  email: string;
}

export default function LoginCredentials({ email }: IEmailProps) {
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await fetch("https://kaboor-api-dev.up.railway.app/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        if (data.code === 200) {
          localStorage.setItem("token", data.data.auth.jwt);
          alert("Login Success!");
          navigate("/beranda");
        } else {
          alert("Login Failed. Please try again");
        }
      });
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${LoginBackgroundImage})`,
      }}
    >
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            // minHeight: "10%",
            maxHeight: "100%",
          }}
        >
          <Stack sx={{ display: { xs: "none", md: "flex" } }}>
            <img
              src={LoginBackgroundImage}
              alt=""
              height="100%"
              width="55%"
              style={{ position: "absolute", left: 0, zIndex: -2 }}
            />
          </Stack>
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
          xs={12}
          md={6}
          p={10}
          sx={{
            bgcolor: "white",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            "@media screen and (max-width: 899px)": {
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 0,
              padding: "2rem",
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Stack direction="row" alignItems="center" spacing={3} mb={4}>
              <ArrowBackIosNewIcon
                onClick={() => navigate(-1)}
                sx={{
                  "&:hover": { cursor: "pointer" },
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Masukkan Sandi
              </Typography>
            </Stack>
            <form onSubmit={handleLogin}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Email
              </Typography>
              <TextField
                hiddenLabel
                variant="outlined"
                label={email}
                sx={{ width: "100%" }}
                disabled
              ></TextField>
              <Typography variant="h6" sx={{ fontWeight: "bold" }} mt={1}>
                Password
              </Typography>
              <OutlinedInput
                placeholder="Kata Sandi"
                sx={{ width: "100%" }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    {showPassword ? (
                      <VisibilityOff
                        onClick={() => setShowPassword(false)}
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      />
                    ) : (
                      <Visibility
                        onClick={() => setShowPassword(true)}
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      />
                    )}
                  </InputAdornment>
                }
                onChange={(e) => setPassword(e.target.value)}
              ></OutlinedInput>
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

            <Typography textAlign="center" mt={3}>
              Dengan Log In kamu menyetujui{" "}
              <Link underline="none" color="primary.main">
                Syarat, Ketentuan, dan Kebijakan
              </Link>{" "}
              Privasi Kaboor
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
