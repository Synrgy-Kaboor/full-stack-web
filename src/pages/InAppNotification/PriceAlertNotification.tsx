import Sidebar from '../../components/shared/Profil/Sidebar';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
const PriceAlertNotification = () => {
  return (
    <>
      <Container maxWidth={'xl'} sx={{ display: 'flex', gap: '16px' }}>
        <Sidebar />
        <Outlet />
      </Container>
    </>
  );
};

export default PriceAlertNotification;
