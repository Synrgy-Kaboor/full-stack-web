import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegisterRoute from './pages/Auth/register/registerRoutes';
import LoginRoute from './pages/Auth/Login/Login.Routes';
import DetailPenumpang from './pages/DetailPenumpang/DetailPenumpang';
import { LayananTambahan } from './pages/LayananTambahan';
import { PilihJadwalSearch } from './pages/PilihJadwalSearch';
import { TataCaraPembayaran } from './pages/TataCaraPembayaran';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';
import { CssBaseline } from '@mui/material';
import DefaultLayout from './layouts/DefaultLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Beranda } from './pages/Beranda'
import Profil from './pages/Profil/Profil';
import ChangeEmail from './components/ui/ChangeEmail';
import ChangeNumber from './components/ui/ChangeNumber';

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
        path: '/tata-cara-pembayaran',
        element: <TataCaraPembayaran />,
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
        path: '/profil',
        element: <Profil />,
        children: [
          {path: 'ganti-email',
          element : <ChangeEmail/>},
          {path: 'ganti-nomer',
          element : <ChangeNumber/>}
        ]
      },
      {
        path: '/beranda',
        element: <Beranda />
      },
    ]
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
