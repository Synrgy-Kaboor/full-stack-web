import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { LayananTambahan } from "./pages/LayananTambahan";
import { AuthLayout } from "./components/layout";

const router = createBrowserRouter([
  {
    path: "/layanan-tambahan",
    element: <LayananTambahan />,
  },
  {
    path: "/login",
    element: <AuthLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
