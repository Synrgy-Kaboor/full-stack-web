import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginRoutes from './pages/Auth/Login/Login.Routes';
import DetailPenumpang from './pages/Booking/DetailPenumpang';
import { PilihJadwalSearch } from './pages/PilihJadwalSearch';
import JadwalKeberangkatan from './pages/JadwalPenerbangan/JadwalKeberangkatan';
import JadwalKepulangan from './pages/JadwalPenerbangan/JadwalKepulangan';
import { TataCaraPembayaran } from './pages/TataCaraPembayaran';
import { StatusPembayaran } from './pages/StatusPembayaran';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';
import { CssBaseline } from '@mui/material';
import DefaultLayout from './layouts/DefaultLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Beranda } from './pages/Beranda';
import Profil from './pages/Profil/Profil';
import ChangeEmail from './components/features/Profil/ChangeEmail';
import ChangeNumber from './components/features/Profil/ChangeNumber';
import SavedPriceAlert from './components/ui/SavedPriceAlert';
import HelpCenter from './components/features/Profil/HelpCenter';
import PassportRoutes from './components/features/Profil/Passport/Passport.Routes';
import Notification from './components/features/Profil/Notification';
import NotifDetail from './components/features/Profil/NotifDetail';
import ChangeProfile from './components/features/Profil/ChangeProfile';
import Pesanan from './components/features/Profil/Pesanan';
import Booking from './pages/Booking/Booking';
import AuthLayout from './layouts/AuthLayout';
import PriceAlertDetail from './components/ui/PriceAlertDetail';
import RegisterRoutes from './pages/Auth/RegisterV2/Register.Routes';
import ForgetPasswordRoutes from './pages/Auth/ForgetPassword/ForgetPassword.Routes';
import PesananDetail from './components/features/Profil/PesananDetail';

const router = createBrowserRouter([
  {
    path: '',
    element: <DefaultLayout />,
    children: [
      {
        path: '/booking',
        element: <Booking />,
      },
      {
        path: '/booking/:id/pembayaran',
        element: <TataCaraPembayaran />,
      },
      {
        path: '/status-pembayaran',
        element: <StatusPembayaran />,
      },
      {
        path: '/detail-penumpang',
        element: <DetailPenumpang />,
      },
      {
        path: '/pilih-jadwal-search',
        element: <PilihJadwalSearch />,
      },
      {
        path: '/jadwal-keberangkatan',
        element: <JadwalKeberangkatan />,
      },
      {
        path: '/jadwal-kepulangan',
        element: <JadwalKepulangan />,
      },
      {
        path: '/profil',
        element: <Profil />,
        children: [
          { index: true, element: <ChangeProfile /> },
          { path: 'ganti-email', element: <ChangeEmail /> },
          { path: 'ganti-nomer', element: <ChangeNumber /> },
          { path: 'saved-price-alert', element: <SavedPriceAlert /> },
          { path: 'pusat-bantuan', element: <HelpCenter /> },
          { path: 'saved-price-alert/detail', element: <PriceAlertDetail /> },
          { path: 'passport/*', element: <PassportRoutes /> },
          { path: 'notifikasi', element: <Notification /> },
          { path: 'notifikasi/notif-detail', element: <NotifDetail /> },
          { path: 'pesanan', element: <Pesanan /> },
          {
            path: 'pesanan/:id/keberangkatan',
            element: <PesananDetail type='outbound' />,
          },
          {
            path: 'pesanan/:id/kepulangan',
            element: <PesananDetail type='return' />,
          },
        ],
      },
      {
        path: '/',
        element: <Beranda />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login/*',
        element: <LoginRoutes />,
      },
      {
        path: 'register/*',
        element: <RegisterRoutes />,
      },
      {
        path: 'forget-password/*',
        element: <ForgetPasswordRoutes />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
