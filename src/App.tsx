import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LayananTambahan } from "./pages/Checkout";
import RegisterRoute from "./pages/Auth/register/registerRoutes";

const router = createBrowserRouter([
  {
    path: "/layanan-tambahan",
    element: <LayananTambahan />,
  },
  {
    path: "/register/*",
    element: <RegisterRoute />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
