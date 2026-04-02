import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const CHARS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789<>{}[]//\\*&^%$#@!ABHISHEKTIWARI";

function randomChar() {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
}

/**
 * MatrixOverlay — fullscreen matrix-rain easter egg.
 * Shows for `duration` ms then auto-dismisses.
 */
export default function MatrixOverlay({ isVisible, duration = 4000, onDone }) {
    const canvasRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!isVisible) return;
        setShow(true);

        const timer = setTimeout(() => {
            setShow(false);
            onDone?.();
        }, duration);

        return () => clearTimeout(timer);
    }, [isVisible, duration, onDone]);

    // Canvas-based matrix rain
    useEffect(() => {
        if (!show) return;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = new Array(columns).fill(0).map(() => Math.random() * -100);

        const interval = setInterval(() => {
            ctx.fillStyle = "rgba(30, 30, 46, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `bold ${fontSize}px "Geist Mono", monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = randomChar();
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Dynamic coloring for depth
                if (Math.random() > 0.98) {
                    ctx.fillStyle = "#cdd6f4"; // Rare white character (Catppuccin Text)
                } else if (drops[i] < 5) {
                    ctx.fillStyle = "#f9e2af"; // Yellow head (Catppuccin Yellow)
                } else {
                    ctx.fillStyle = "#a6e3a1"; // Standard green (Catppuccin Green)
                }

                ctx.fillText(char, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 0.8; // Slower, more controlled fall
            }
        }, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, [show]);

    if (!show) return null;

    return (
        <div className="matrix-overlay">
            <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(30,30,46,0.8)_100%)]" />
            <canvas ref={canvasRef} className="absolute inset-0" />
            <div className="relative z-30 flex flex-col items-center gap-3 text-center pointer-events-none select-none">
                <p className="font-mono text-xs font-black uppercase tracking-[0.5em] text-vibrant-yellow animate-pulse">
                    [ ACCESS GRANTED ]
                </p>
                <p className="font-mono text-[10px] text-vibrant-emerald opacity-70 uppercase tracking-widest">
                    abhishek@portfolio:~$ sudo init --debug
                </p>
            </div>
        </div>
    );
}

MatrixOverlay.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    onDone: PropTypes.func,
};
