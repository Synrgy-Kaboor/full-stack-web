import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Link,
  Avatar,
} from "@mui/material";

import KaboorIcon from "../../assets/kaboor.svg";
import PlaneIcon from "../../assets/plane icon.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export default function Navbar() {
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
          <Link href="/">
            <img src={KaboorIcon} alt="" />
          </Link>
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <NotificationsNoneOutlinedIcon
                fontSize="large"
                sx={{ color: "kaboor.main" }}
              />
              <Typography color="black">Notifikasi</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <img src={PlaneIcon} alt="" />
              <Typography color="black">Pesanan</Typography>
            </Stack>
            <Avatar sx={{ bgcolor: "kaboor.main" }}>A</Avatar>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
