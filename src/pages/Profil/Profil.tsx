import { Container, Grid } from '@mui/material';
import Sidebar from '../../components/shared/Profil/Sidebar';
// import ChangeProfile from '../../components/features/Profil/ChangeProfile';
import { Outlet, useLocation } from 'react-router-dom';

export default function Profil() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={4}>
            <Sidebar pathname={location.pathname} />
          </Grid>
          <Grid item xs={12} sm={8}>
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
