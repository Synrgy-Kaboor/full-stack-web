import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { LayananTambahan } from './pages/LayananTambahan';
import DetailPenumpang from './pages/DetailPenumpang/DetailPenumpang';

const router = createBrowserRouter([
  {
    path: '/layanan-tambahan',
    element: <LayananTambahan />,
  },
  {
    path: '/detail-penumpang',
    element: <DetailPenumpang/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
