
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Atmosphere() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    // Smooth spring motion for the blobs
    const springConfig = { stiffness: 50, damping: 20 };
    const blobX = useSpring(mouseX, springConfig);
    const blobY = useSpring(mouseY, springConfig);

    return (
        <div
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Interactive Mouse-following Blob */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-[0.12] pointer-events-none z-0"
                style={{
                    x: blobX,
                    y: blobY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                }}
            />

            {/* Static Gruvbox warm blobs */}
            <div className="vibrant-blob glow-yellow h-[600px] w-[600px] -top-40 -left-40 opacity-[0.08] md:opacity-15 animate-vibrant-float" />
            <div className="vibrant-blob glow-orange h-[500px] w-[500px] top-1/2 -right-40 opacity-[0.08] md:opacity-15 animate-vibrant-float" style={{ animationDelay: '-10s' }} />
            <div className="vibrant-blob glow-cyan h-[400px] w-[400px] bottom-0 left-1/4 opacity-[0.06] md:opacity-10 animate-vibrant-float" style={{ animationDelay: '-5s' }} />
            <div className="vibrant-blob glow-purple h-[500px] w-[500px] top-1/4 right-1/4 opacity-[0.05] md:opacity-8 animate-vibrant-float" style={{ animationDelay: '-15s' }} />

            {/* Global Dot Grid — Higher contrast for terminal feel */}
            <div className="absolute inset-0 opacity-[0.15] md:opacity-[0.25]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1.5px 1.5px, var(--foreground) 1px, transparent 0)`,
                    backgroundSize: '48px 48px',
                }}>
            </div>

            {/* Warm Gruvbox Dynamic Beams */}
            <div className="color-beam top-[20%] opacity-15 md:opacity-25" style={{ '--beam-color': 'var(--primary)', animationDelay: '0s' }} />
            <div className="color-beam top-[50%] opacity-15 md:opacity-25" style={{ '--beam-color': 'var(--vibrant-orange)', animationDelay: '4s' }} />
            <div className="color-beam top-[80%] opacity-15 md:opacity-25" style={{ '--beam-color': 'var(--vibrant-cyan)', animationDelay: '8s' }} />
        </div>
    );
}
