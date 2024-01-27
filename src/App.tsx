import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegisterRoute from './pages/Auth/register/registerRoutes';
import LoginRoute from './pages/Auth/Login/Login.Routes';
import DetailPenumpang from './pages/DetailPenumpang/DetailPenumpang';
import { LayananTambahan } from './pages/LayananTambahan';
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
import MetodePembayaran from './pages/MetodePembayaran/MetodePembayaran';
import SavedPriceAlert from './components/ui/SavedPriceAlert';
import HelpCenter from './components/features/Profil/HelpCenter';

const router = createBrowserRouter([
  {
    path: '',
    element: <DefaultLayout />,
    children: [
      {
        path: '/layanan-tambahan',
        element: <LayananTambahan />,
      },
      {
        path: '/metode-pembayaran',
        element: <MetodePembayaran />,
      },
      {
        path: '/tata-cara-pembayaran',
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
          { path: 'ganti-email', element: <ChangeEmail /> },
          { path: 'ganti-nomer', element: <ChangeNumber /> },
          { path: 'saved-price-alert', element: <SavedPriceAlert /> },
          { path: 'pusat-bantuan', element: <HelpCenter /> },
        ],
      },
      {
        path: '/beranda',
        element: <Beranda />,
      },
    ],
  },
  {
    path: '/register/*',
    element: <RegisterRoute />,
  },
  {
    path: '/login/*',
    element: <LoginRoute />,
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
