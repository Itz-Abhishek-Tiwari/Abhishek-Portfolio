import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FloatingContact from "../FloatingContact";
import Atmosphere from "../Atmosphere/Atmosphere";
import NowPlaying from "../NowPlaying/NowPlaying";
import useSoundEffects from "../../hooks/useSoundEffects";
import { useEffect } from "react";

export default function Layout() {
    const { playClick, playTyping } = useSoundEffects();

    useEffect(() => {
        const handleGlobalClick = (e) => {
            const target = e.target.closest('button, a, [role="button"], input[type="submit"]');
            if (target) {
                playClick();
            }
        };

        const handleGlobalKeyDown = (e) => {
            const target = e.target;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                playTyping();
            }
        };

        window.addEventListener('click', handleGlobalClick);
        window.addEventListener('keydown', handleGlobalKeyDown);

        return () => {
            window.removeEventListener('click', handleGlobalClick);
            window.removeEventListener('keydown', handleGlobalKeyDown);
        };
    }, [playClick, playTyping]);

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
