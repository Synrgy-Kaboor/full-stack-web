import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { LayananTambahan } from './pages/LayananTambahan';
import { PilihJadwalSearch } from './pages/PilihJadwalSearch';

const router = createBrowserRouter([
  {
    path: '/layanan-tambahan',
    element: <LayananTambahan />,
  },
  {
    path: '/test',
    element: <PilihJadwalSearch />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
