import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Globe, Cpu, Clock, MapPin, Hash, User } from "lucide-react";
import PropTypes from 'prop-types';
import portfolioData from "../../data";
import { PageHeader, Typewriter } from "../../components";
import useSEO from "../../hooks/useSEO";

const TerminalTab = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-wider transition-all border-b-2 ${active
            ? "border-primary bg-secondary/40 text-foreground"
            : "border-transparent text-muted-foreground hover:bg-secondary/20 hover:text-foreground/80"
            }`}
    >
        {label}
    </button>
);

TerminalTab.propTypes = {
    label: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default function LinksPage() {
    const links = portfolioData.links || [];
    const [currentTime, setCurrentTime] = useState(new Date());
    const [uptime, setUptime] = useState("00:00:00");

    useSEO(
        "Links",
        "Abhishek Tiwari's Terminal Dashboard. Connect with me across professional and social platforms."
    );

    useEffect(() => {
        const start = Date.now();
        const timer = setInterval(() => {
            setCurrentTime(new Date());
            const diff = Math.floor((Date.now() - start) / 1000);
            const h = Math.floor(diff / 3600).toString().padStart(2, '0');
            const m = Math.floor((diff % 3600) / 60).toString().padStart(2, '0');
            const s = (diff % 60).toString().padStart(2, '0');
            setUptime(`${h}:${m}:${s}`);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <div className="relative min-h-screen bg-transparent overflow-hidden">
            {/* Subtle Scanlines Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] gruvbox-scanlines" />

            <main className="relative z-10 mx-auto max-w-5xl px-6 py-20">
                <PageHeader
                    label="Operations"
                    title="Dashboard"
                    subtitle="Centralized coordination hub for social & professional interfaces."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col border border-primary/20 bg-card/30 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                    {/* Terminal Chrome Header — More premium with gradient */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-primary/10 bg-secondary/40 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
                        <div className="flex items-center gap-8 relative z-10">
                            <div className="flex gap-2.5">
                                <div className="h-3 w-3 rounded-full bg-telephone-red shadow-[0_0_8px_rgba(251,73,52,0.4)]" />
                                <div className="h-3 w-3 rounded-full bg-vibrant-yellow shadow-[0_0_8px_rgba(250,189,47,0.4)]" />
                                <div className="h-3 w-3 rounded-full bg-vibrant-emerald shadow-[0_0_8px_rgba(184,187,38,0.4)]" />
                            </div>
                            <div className="flex items-center gap-3 text-[11px] font-mono font-black text-foreground/80 uppercase tracking-[0.3em]">
                                <Terminal className="h-4 w-4 text-primary animate-pulse" />
                                links.sh — <span className="text-primary">root</span>@portfolio
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-6 text-[10px] font-mono text-muted-foreground/40 font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-help"><Hash className="h-3 w-3" /> UTF-8</span>
                            <span className="flex items-center gap-2 hover:text-vibrant-emerald transition-colors cursor-help"><Globe className="h-3 w-3" /> SSH:ENCRYPTED</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 relative">
                        {/* Sidebar / Info Pane — Glassmorphism and better contrast */}
                        <aside className="lg:col-span-4 border-r border-primary/10 p-8 flex flex-col gap-10 bg-black/20 backdrop-blur-sm">
                            {/* Bio Profile */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4 group cursor-default">
                                    <div className="h-14 w-14 border-2 border-primary/40 bg-primary/5 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                        <User className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-mono font-black text-foreground uppercase tracking-tighter group-hover:text-primary transition-colors">Abhishek Tiwari</span>
                                        <span className="text-[10px] font-mono text-muted-foreground uppercase font-black tracking-[0.3em] mt-1">Full-Stack Architect</span>
                                    </div>
                                </div>
                                <div className="p-5 border border-primary/10 bg-secondary/20 relative group overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1.5 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                                    <p className="text-[12px] font-mono text-zinc-400 leading-relaxed italic">
                                        <Typewriter
                                            text="Engineering high-performance software ecosystems. Specializing in scalable architectures, immersive UI, and robust backend patterns."
                                            speed={25}
                                        />
                                    </p>
                                </div>
                            </div>

                            {/* System Stats */}
                            <div className="flex flex-col gap-5">
                                <h3 className="text-[11px] font-mono font-black uppercase text-primary tracking-[0.4em] border-b border-primary/20 pb-3 flex items-center gap-3">
                                    <span className="h-2 w-2 bg-primary animate-pulse" />
                                    Terminal Info
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { icon: Clock, label: "Up_Time", value: uptime, color: "text-primary" },
                                        { icon: MapPin, label: "Ge_Loc", value: "Indore (IN)", color: "text-vibrant-emerald" },
                                        { icon: Cpu, label: "Sys_Kernel", value: "React/Vite 5", color: "text-vibrant-cyan" },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center justify-between text-[11px] font-mono group">
                                            <span className="flex items-center gap-3 text-muted-foreground uppercase font-bold tracking-widest group-hover:text-foreground transition-colors">
                                                <stat.icon className={`h-3.5 w-3.5 ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity`} /> {stat.label}
                                            </span>
                                            <span className="text-foreground font-black group-hover:text-primary transition-colors tracking-tight">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative ASCII — Larger and more vibrant */}
                            <div className="mt-auto pt-12 opacity-20 hover:opacity-50 transition-opacity cursor-default hidden lg:block">
                                <div className="text-[10px] font-mono text-primary leading-[1.1] whitespace-pre font-bold">
                                    {`   _   _   _   _   _  
  / \\ / \\ / \\ / \\ / \\ 
 ( L | I | N | K | S )
  \\_/ \\_/ \\_/ \\_/ \\_/ `}
                                </div>
                            </div>
                        </aside>

                        {/* Links Grid Pane — Enhanced cards with reactive effects */}
                        <div className="lg:col-span-8 p-8 md:p-12 bg-secondary/5">
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-sm font-mono font-black uppercase tracking-[0.5em] text-foreground flex items-center gap-4">
                                    <span className="h-px w-12 bg-primary/40" />
                                    Active Interfaces
                                </h2>
                                <span className="text-[11px] font-mono text-primary font-black bg-primary/10 border border-primary/20 px-3 py-1 uppercase tracking-widest">
                                    {links.length} Connected
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {links.map((link) => (
                                    <motion.a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={itemVariants}
                                        className="group relative flex flex-col p-6 border border-primary/10 bg-secondary/20 hover:bg-primary/[0.03] transition-all duration-500 hover:border-primary/40 overflow-hidden shadow-xl"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        
                                        <div className="flex items-start justify-between mb-5 relative z-10">
                                            <div className="p-3 border border-primary/10 bg-secondary/40 group-hover:border-primary/40 group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(250,189,47,0.2)] transition-all duration-500">
                                                <link.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                                            </div>
                                            <ArrowUpRight className="h-4 w-4 text-muted-foreground/20 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>

                                        <div className="flex flex-col gap-2 relative z-10">
                                            <span className="text-base font-mono font-black text-foreground group-hover:text-primary transition-colors tracking-tight uppercase">
                                                {link.label}
                                            </span>
                                            <p className="text-[11px] font-mono text-muted-foreground leading-relaxed font-medium tracking-wide">
                                                {link.description}
                                            </p>
                                        </div>

                                        {/* Bottom Status Bar — Interactive */}
                                        <div className="mt-6 flex items-center justify-between pt-4 border-t border-primary/10 relative z-10">
                                            <div className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-vibrant-emerald animate-pulse" />
                                                <span className="text-[9px] font-mono font-black text-muted-foreground/50 group-hover:text-vibrant-emerald transition-colors uppercase tracking-[0.2em]">
                                                    LINK_STABLE
                                                </span>
                                            </div>
                                            <span className="text-[9px] font-mono text-primary font-black opacity-0 group-hover:opacity-100 transition-all tracking-[0.1em] flex items-center gap-1">
                                                CONNECT <span className="text-xs">→</span>
                                            </span>
                                        </div>

                                        {/* Premium Corner Accents */}
                                        <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none">
                                            <div className="absolute top-0 right-0 w-px h-0 bg-primary group-hover:h-4 transition-all duration-500" />
                                            <div className="absolute top-0 right-0 w-0 h-px bg-primary group-hover:w-4 transition-all duration-500" />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Terminal Footer Bar — Premium detailing */}
                    <div className="flex items-center justify-between px-8 py-3 border-t border-primary/20 bg-black/40 text-[10px] font-mono font-bold text-muted-foreground/40 backdrop-blur-xl relative z-20">
                        <div className="flex gap-8 relative z-10">
                            <span className="hover:text-foreground transition-colors cursor-default">POS: Ln 1, Col 1</span>
                            <span className="hover:text-foreground transition-colors cursor-default">INDENT: 4 SPACES</span>
                            <span className="text-primary/60 font-black">UTF-8 // SHELL</span>
                        </div>
                        <div className="flex gap-8 relative z-10">
                            <div className="flex items-center gap-2 group">
                                <span className="h-1.5 w-1.5 rounded-full bg-vibrant-emerald group-hover:animate-ping" />
                                <span className="group-hover:text-vibrant-emerald transition-colors">CONNECTED</span>
                            </div>
                            <span className="text-primary font-black tracking-widest bg-primary/5 px-2 py-0.5 border border-primary/10">
                                {currentTime.toLocaleTimeString([], { hour12: false })}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
