import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterRoute from "./pages/Auth/register/registerRoutes";
import LoginRoot from "./pages/Auth/Login/Login.root";
import DetailPenumpang from "./pages/DetailPenumpang/DetailPenumpang";
import { LayananTambahan } from "./pages/LayananTambahan";
import { PilihJadwalSearch } from "./pages/PilihJadwalSearch";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";

const router = createBrowserRouter([
  {
    path: "/layanan-tambahan",
    element: <LayananTambahan />,
  },
  {
    path: "/detail-penumpang",
    element: <DetailPenumpang />,
  },
  {
    path: "/register/*",
    element: <RegisterRoute />,
  },
  {
    path: "/pilih-jadwal-search",
    element: <PilihJadwalSearch />,
  },
  {
    path: "/login",
    element: <LoginRoot />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
