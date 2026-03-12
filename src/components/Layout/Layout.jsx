import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FloatingContact from "../FloatingContact";
import Atmosphere from "../Atmosphere/Atmosphere";
import NowPlaying from "../NowPlaying/NowPlaying";

export default function Layout() {
    return (
        <>
            <ScrollRestoration />
            <Atmosphere />
            <Navbar />
            <NowPlaying />
            <main id="main-content" className="relative z-10">
                <Outlet />
            </main>
            <Footer />
            <FloatingContact />
        </>
    );
}
