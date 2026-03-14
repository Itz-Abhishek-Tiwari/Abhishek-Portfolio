
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

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
                className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none z-0"
                style={{
                    x: blobX,
                    y: blobY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                }}
            />

            {/* Static Gruvbox warm blobs */}
            <div className="vibrant-blob glow-yellow h-[500px] w-[500px] -top-20 -left-20 opacity-[0.05] md:opacity-10 animate-vibrant-float" />
            <div className="vibrant-blob glow-orange h-[400px] w-[400px] top-1/2 -right-20 opacity-[0.05] md:opacity-10 animate-vibrant-float" style={{ animationDelay: '-10s' }} />
            <div className="vibrant-blob glow-cyan h-[300px] w-[300px] bottom-0 left-1/4 opacity-[0.04] md:opacity-8 animate-vibrant-float" style={{ animationDelay: '-5s' }} />
            <div className="vibrant-blob glow-purple h-[400px] w-[400px] top-1/4 right-1/4 opacity-[0.03] md:opacity-5 animate-vibrant-float" style={{ animationDelay: '-15s' }} />

            {/* Global Dot Grid */}
            <div className="absolute inset-0 opacity-10 md:opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}>
            </div>

            {/* Warm Gruvbox Dynamic Beams */}
            <div className="color-beam top-[15%] opacity-10 md:opacity-15" style={{ '--beam-color': 'var(--primary)', animationDelay: '0s' }} />
            <div className="color-beam top-[45%] opacity-10 md:opacity-15" style={{ '--beam-color': 'var(--vibrant-orange)', animationDelay: '3s' }} />
            <div className="color-beam top-[75%] opacity-10 md:opacity-15" style={{ '--beam-color': 'var(--vibrant-cyan)', animationDelay: '6s' }} />
        </div>
    );
}
