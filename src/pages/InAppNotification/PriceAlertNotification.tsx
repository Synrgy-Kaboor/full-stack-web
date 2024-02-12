import Sidebar from '../../components/shared/Profil/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';

const PriceAlertNotification = () => {
  const location = useLocation();
  return (
    <>
      <Container maxWidth={'xl'} sx={{ display: 'flex', gap: '16px' }}>
        <Sidebar pathname={location.pathname}/>
        <Outlet />
      </Container>
    </>
  );
};

export default PriceAlertNotification;
