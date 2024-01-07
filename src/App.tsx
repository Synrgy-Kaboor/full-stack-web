import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { LayananTambahan } from "./pages/LayananTambahan";

const router = createBrowserRouter([
  {
    path: "/layanan-tambahan",
    element: <LayananTambahan />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
