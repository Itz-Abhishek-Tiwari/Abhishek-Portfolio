import { motion, useSpring, useMotionValue } from "framer-motion";
import { useStyle } from "../../context/StyleContext";

export default function Atmosphere() {
    const { designStyle } = useStyle();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    const springConfig = { stiffness: 50, damping: 20 };
    const blobX = useSpring(mouseX, springConfig);
    const blobY = useSpring(mouseY, springConfig);

    if (designStyle === 'cyberpunk') {
        return (
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" onMouseMove={handleMouseMove}>
                {/* Interactive neon cursor blob */}
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.08] pointer-events-none z-0"
                    style={{
                        x: blobX,
                        y: blobY,
                        translateX: "-50%",
                        translateY: "-50%",
                        background: "radial-gradient(circle, #e879f9 0%, #22d3ee 50%, transparent 70%)",
                    }}
                />

                {/* Static neon magenta blob — top left */}
                <div
                    className="vibrant-blob glow-neon-magenta h-[700px] w-[700px] -top-60 -left-60 opacity-[0.07]"
                    style={{ animationDuration: '22s' }}
                />
                {/* Static neon cyan blob — bottom right */}
                <div
                    className="vibrant-blob glow-neon-cyan h-[600px] w-[600px] -bottom-40 -right-40 opacity-[0.07]"
                    style={{ animationDelay: '-11s', animationDuration: '18s' }}
                />
                {/* Yellow accent blob — center */}
                <div
                    className="vibrant-blob glow-neon-yellow h-[300px] w-[300px] top-1/2 left-1/2 opacity-[0.04]"
                    style={{ animationDelay: '-6s', animationDuration: '25s' }}
                />

                {/* Perspective grid — cyberpunk floor effect */}
                <div
                    className="absolute inset-x-0 bottom-0 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(transparent 92%, rgba(232, 121, 249, 0.25) 100%), linear-gradient(90deg, transparent 92%, rgba(34, 211, 238, 0.2) 100%)',
                        backgroundSize: '50px 50px',
                        transform: 'perspective(600px) rotateX(70deg) scale(2.5)',
                        transformOrigin: 'bottom',
                        height: '60%',
                        opacity: 0.4,
                    }}
                />

                {/* Horizontal neon beams */}
                <div className="color-beam top-[15%] opacity-20" style={{ '--beam-color': '#e879f9', animationDelay: '0s', animationDuration: '6s' }} />
                <div className="color-beam top-[45%] opacity-15" style={{ '--beam-color': '#22d3ee', animationDelay: '3s', animationDuration: '8s' }} />
                <div className="color-beam top-[75%] opacity-15" style={{ '--beam-color': '#facc15', animationDelay: '6s', animationDuration: '10s' }} />

                {/* Moving scanline sweep */}
                <div className="cyberpunk-sweep-line" />
            </div>
        );
    }

    if (designStyle === 'glass') {
        return (
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" onMouseMove={handleMouseMove}>
                {/* Interactive soft cursor orb */}
                <motion.div
                    className="absolute w-[700px] h-[700px] rounded-full blur-[200px] opacity-[0.15] pointer-events-none z-0"
                    style={{
                        x: blobX,
                        y: blobY,
                        translateX: "-50%",
                        translateY: "-50%",
                        background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                    }}
                />

                {/* Soft pastel gradient orbs — no sharp blobs, smooth */}
                <div
                    className="absolute rounded-full blur-[160px] opacity-30 animate-glass-float"
                    style={{
                        width: '700px', height: '700px',
                        top: '-10%', left: '-10%',
                        background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute rounded-full blur-[160px] opacity-25 animate-glass-float"
                    style={{
                        width: '600px', height: '600px',
                        bottom: '-10%', right: '-10%',
                        background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)',
                        animationDelay: '-8s',
                    }}
                />
                <div
                    className="absolute rounded-full blur-[140px] opacity-20 animate-glass-float"
                    style={{
                        width: '500px', height: '500px',
                        top: '40%', right: '20%',
                        background: 'radial-gradient(circle, #f472b6 0%, transparent 70%)',
                        animationDelay: '-15s',
                    }}
                />
                <div
                    className="absolute rounded-full blur-[100px] opacity-15 animate-glass-float"
                    style={{
                        width: '350px', height: '350px',
                        bottom: '20%', left: '15%',
                        background: 'radial-gradient(circle, #34d399 0%, transparent 70%)',
                        animationDelay: '-5s',
                    }}
                />

                {/* Subtle mesh grid — barely visible */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, var(--foreground) 0.7px, transparent 0)',
                        backgroundSize: '64px 64px',
                    }}
                />
            </div>
        );
    }

    // Default: Terminal / Gruvbox
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" onMouseMove={handleMouseMove}>
            {/* Interactive Mouse-following Blob */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-[0.10] pointer-events-none z-0"
                style={{
                    x: blobX,
                    y: blobY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                }}
            />

            {/* Static Gruvbox warm blobs */}
            <div className="vibrant-blob glow-yellow h-[600px] w-[600px] -top-40 -left-40 opacity-[0.08] md:opacity-[0.12]" />
            <div className="vibrant-blob glow-orange h-[500px] w-[500px] top-1/2 -right-40 opacity-[0.07] md:opacity-[0.10]" style={{ animationDelay: '-10s' }} />
            <div className="vibrant-blob glow-cyan h-[400px] w-[400px] bottom-0 left-1/4 opacity-[0.05] md:opacity-[0.08]" style={{ animationDelay: '-5s' }} />
            <div className="vibrant-blob glow-purple h-[500px] w-[500px] top-1/4 right-1/4 opacity-[0.04] md:opacity-[0.06]" style={{ animationDelay: '-15s' }} />

            {/* Global Dot Grid — Terminal feel */}
            <div
                className="absolute inset-0 opacity-[0.18] md:opacity-[0.28]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1.5px 1.5px, var(--foreground) 1px, transparent 0)`,
                    backgroundSize: '48px 48px',
                }}
            />

            {/* Warm Gruvbox Dynamic Beams */}
            <div className="color-beam top-[20%] opacity-15 md:opacity-20" style={{ '--beam-color': 'var(--primary)', animationDelay: '0s' }} />
            <div className="color-beam top-[55%] opacity-15 md:opacity-20" style={{ '--beam-color': 'var(--vibrant-orange)', animationDelay: '4s' }} />
            <div className="color-beam top-[80%] opacity-10 md:opacity-15" style={{ '--beam-color': 'var(--vibrant-cyan)', animationDelay: '8s' }} />
        </div>
    );
}
