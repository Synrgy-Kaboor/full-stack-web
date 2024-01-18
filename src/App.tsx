import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegisterRoute from './pages/Auth/register/registerRoutes';
import DetailPenumpang from './pages/DetailPenumpang/DetailPenumpang';
import { LayananTambahan } from './pages/LayananTambahan';
import { PilihJadwalSearch } from './pages/PilihJadwalSearch';

import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';
import { CssBaseline } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/layanan-tambahan',
    element: <LayananTambahan />,
  },
  {
    path: '/detail-penumpang',
    element: <DetailPenumpang />,
  },
  {
    path: '/register/*',
    element: <RegisterRoute />,
  },
  {
    path: '/pilih-jadwal-search',
    element: <PilihJadwalSearch />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
