import { Outlet } from "react-router-dom";
import { Navbar } from "../components/ui";
import { NavbarProps } from "../components/ui/Navbar";

export default function DefaultLayout(props: NavbarProps) {
  return (
    <>
      <Navbar {...props} />
      <Outlet />
    </>
  );
}
