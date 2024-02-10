import { Container, Grid } from '@mui/material';
import Sidebar from '../../components/shared/Profil/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';

export default function Profil() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={4}>
            <Sidebar pathname={location.pathname} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
