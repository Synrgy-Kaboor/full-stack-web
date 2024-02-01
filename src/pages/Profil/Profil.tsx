import { Container } from '@mui/material';
import Sidebar from '../../components/shared/Profil/Sidebar';
import ChangeProfile from '../../components/ui/ChangeProfile';
import { Outlet, useLocation } from 'react-router-dom';

export default function Profil() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Container maxWidth={'lg'} sx={{ display: 'flex', gap: '16px' }}>
        <Sidebar pathname={location.pathname} />
        {location.pathname === '/profil' && <ChangeProfile />}
        <Outlet />
      </Container>
    </>
  );
}
