import { Outlet } from "react-router-dom";
import { Navbar } from "../components/ui";

export default function DefaultLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}