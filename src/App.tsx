import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import DetailPenumpang from './pages/DetailPenumpang/DetailPenumpang';
import { LayananTambahan } from './pages/LayananTambahan';

import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';

const router = createBrowserRouter([
  {
    path: '/layanan-tambahan',
    element: <LayananTambahan />,
  },
  {
    path: '/detail-penumpang',
    element: <DetailPenumpang />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
