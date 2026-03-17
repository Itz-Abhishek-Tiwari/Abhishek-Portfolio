import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Terminal, Globe, Cpu, Clock, MapPin, Hash, User, ExternalLink } from "lucide-react";
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
                    className="flex flex-col border border-border bg-card/40 backdrop-blur-md shadow-2xl relative"
                >
                    {/* Terminal Chrome Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
                        <div className="flex items-center gap-6">
                            <div className="flex gap-1.5">
                                <div className="h-2.5 w-2.5 rounded-full bg-telephone-red/60" />
                                <div className="h-2.5 w-2.5 rounded-full bg-vibrant-yellow/60" />
                                <div className="h-2.5 w-2.5 rounded-full bg-vibrant-emerald/60" />
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">
                                <Terminal className="h-3 w-3 text-primary" />
                                links.sh — abhishek@portfolio
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-4 text-[9px] font-mono text-muted-foreground/50">
                            <span className="flex items-center gap-1"><Hash className="h-2.5 w-2.5" /> UTF-8</span>
                            <span className="flex items-center gap-1"><Globe className="h-2.5 w-2.5" /> SSH:22</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* Sidebar / Info Pane */}
                        <aside className="lg:col-span-4 border-r border-border p-6 flex flex-col gap-8 bg-secondary/10">
                            {/* Bio Profile */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 border border-primary/30 bg-primary/10 flex items-center justify-center">
                                        <User className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-mono font-black text-foreground uppercase tracking-tight">Abhishek Tiwari</span>
                                        <span className="text-[9px] font-mono text-primary/70 uppercase font-bold tracking-widest">Senior Engineer</span>
                                    </div>
                                </div>
                                <div className="p-4 border border-border/50 bg-background/40 relative group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                    <p className="text-[11px] font-mono text-muted-foreground leading-relaxed">
                                        <Typewriter
                                            text="Architecting high-performance mobile and backend ecosystems. Focused on React Native, Django, and scalable engineering patterns."
                                            speed={20}
                                        />
                                    </p>
                                </div>
                            </div>

                            {/* System Stats */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-[10px] font-mono font-black uppercase text-primary tracking-[0.2em] border-b border-border/50 pb-2">Session Info</h3>
                                <div className="flex flex-col gap-3">
                                    {[
                                        { icon: Clock, label: "Uptime", value: uptime },
                                        { icon: MapPin, label: "Origin", value: "Indore (IN)" },
                                        { icon: Cpu, label: "Core", value: "React/Vite" },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center justify-between text-[10px] font-mono">
                                            <span className="flex items-center gap-2 text-muted-foreground uppercase">
                                                <stat.icon className="h-3 w-3 text-primary/60" /> {stat.label}
                                            </span>
                                            <span className="text-foreground font-bold">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative ASCII Art / Footer */}
                            <div className="mt-auto pt-8">
                                <div className="text-[8px] font-mono text-primary/30 leading-tight whitespace-pre">
                                    {`   _   _   _   _   _  
  / \\ / \\ / \\ / \\ / \\ 
 ( L | I | N | K | S )
  \\_/ \\_/ \\_/ \\_/ \\_/ `}
                                </div>
                            </div>
                        </aside>

                        {/* Links Grid Pane */}
                        <div className="lg:col-span-8 p-6 md:p-8">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-foreground flex items-center gap-2">
                                    <span className="h-px w-8 bg-primary" />
                                    Established Connections
                                </h2>
                                <span className="text-[10px] font-mono text-muted-foreground bg-secondary/30 px-2 py-0.5 rounded-sm">
                                    {links.length} Active
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {links.map((link) => (
                                    <motion.a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={itemVariants}
                                        className="group relative flex flex-col p-4 border border-border bg-background hover:bg-secondary/20 transition-all duration-300 hover:border-primary/50 overflow-hidden"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="p-2 border border-border bg-secondary/40 group-hover:border-primary/40 group-hover:text-primary transition-colors">
                                                <link.icon className="h-4 w-4" />
                                            </div>
                                            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                                                {link.label}
                                            </span>
                                            <p className="text-[10px] font-mono text-muted-foreground leading-tight line-clamp-2">
                                                {link.description}
                                            </p>
                                        </div>

                                        {/* Bottom Status Bar */}
                                        <div className="mt-4 flex items-center justify-between pt-3 border-t border-border/50">
                                            <span className="text-[8px] font-mono text-muted-foreground/40 group-hover:text-primary/40 uppercase tracking-widest">
                                                STATUS: ONLINE
                                            </span>
                                            <span className="text-[8px] font-mono text-primary/0 group-hover:text-primary transition-all font-bold">
                                                [OPEN_LINK]
                                            </span>
                                        </div>

                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                                            <div className="absolute top-0 right-0 w-px h-2 bg-primary/0 group-hover:bg-primary/40 transition-all" />
                                            <div className="absolute top-0 right-0 w-2 h-px bg-primary/0 group-hover:bg-primary/40 transition-all" />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Terminal Footer Bar */}
                    <div className="flex items-center justify-between px-6 py-2 border-t border-border bg-secondary/10 text-[9px] font-mono text-muted-foreground/60">
                        <div className="flex gap-4">
                            <span>Ln 1, Col 1</span>
                            <span>Spaces: 4</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="flex gap-4">
                            <span>CONNECTED</span>
                            <span className="text-primary animate-pulse">{currentTime.toLocaleTimeString([], { hour12: false })}</span>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
