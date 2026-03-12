import { motion } from "framer-motion";

export default function Atmosphere() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Gruvbox warm blobs - strategically placed to be visible across major sections */}
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
