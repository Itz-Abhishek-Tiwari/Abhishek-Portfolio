import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FloatingContact from "../FloatingContact";
import Atmosphere from "../Atmosphere/Atmosphere";

export default function Layout() {
    return (
        <>
            <ScrollRestoration />
            <Atmosphere />
            <Navbar />
            <Outlet />
            <Footer />
            <FloatingContact />
        </>
    );
}
