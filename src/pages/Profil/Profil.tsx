import { Container, Grid, Stack, Typography } from "@mui/material";
// import Sidebar from '../../components/shared/Profil/Sidebar';
// import ChangeProfile from '../../components/features/Profil/ChangeProfile';
import { Outlet, useLocation } from "react-router-dom";

export default function Profil() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={3}>
            <Stack borderRadius={1} p={2} sx={{ border: "1px solid #C2C2C2" }}>
              <Typography>Sidebar</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>

      {/* <Container maxWidth={'lg'} sx={{ display: 'flex', gap: '16px' }}>
        <Sidebar pathname={location.pathname} />
        {location.pathname === '/profil' && <ChangeProfile />}
        <Outlet />
      </Container> */}
    </>
  );
}
