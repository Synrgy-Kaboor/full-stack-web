import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Link,
  Avatar,
  Button,
} from "@mui/material";

import KaboorIcon from "../../assets/logo_kaboor.png";
import PlaneIcon from "../../assets/plane icon.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { useNavigate } from "react-router-dom";

function UserLoggedIn() {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={5} alignItems="center">
      {/* Notification */}
      <Stack direction="row" spacing={1} alignItems="center">
        <NotificationsNoneOutlinedIcon
          fontSize="large"
          sx={{ color: "primary.main" }}
        />
        <Typography color="black">Notifikasi</Typography>
      </Stack>

      {/* Pesanan */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        onClick={() => navigate("pilih-jadwal-search")}
        sx={{ "&:hover": { cursor: "pointer" } }}
      >
        <img src={PlaneIcon} alt="" />
        <Typography color="black">Pesanan</Typography>
      </Stack>

      {/* Avatar */}
      <Avatar
        sx={{ bgcolor: "primary.main", "&:hover": { cursor: "pointer" } }}
        onClick={() => navigate("/profil")}
      >
        A
      </Avatar>
    </Stack>
  );
}

function UserNotLoggedIn() {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button
        variant="outlined"
        onClick={() => navigate("/register")}
        sx={{ paddingInline: "2rem" }}
      >
        Register
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        sx={{
          paddingInline: "2rem",
          backgroundImage: `linear-gradient(90deg, #7B52AB, #3A42FF)`,
        }}
      >
        Login
      </Button>
    </Stack>
  );
}

export default function Navbar() {
  const token = localStorage.getItem("token");
  console.log(token);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        marginBottom: "1rem",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            {/* Logo */}
            <Link href="/Beranda">
              <img src={KaboorIcon} alt="" />
            </Link>

            {/* Content */}
            {token ? <UserLoggedIn /> : <UserNotLoggedIn />}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
