import { motion } from "framer-motion";
import { Briefcase, Database, Code2, Zap, Layers, Brain } from "lucide-react";
import Section from "../ui/Section";
import { useStyle } from "../../context/StyleContext";

const About = () => {
    const { designStyle } = useStyle();
    const isCyberpunk = designStyle === 'cyberpunk';
    const isGlass = designStyle === 'glass';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const terminalItems = [
        {
            icon: Briefcase,
            color: "text-vibrant-blue",
            bg: "bg-vibrant-blue/10",
            accent: "border-vibrant-blue",
            text: <><span className="font-bold text-foreground transition-colors group-hover:text-primary">React Native & Backend Developer</span> with a focus on technical precision and user experience.</>
        },
        {
            icon: Database,
            color: "text-vibrant-emerald",
            bg: "bg-vibrant-emerald/10",
            accent: "border-vibrant-emerald",
            text: <>Specialized in <span className="font-bold text-foreground transition-colors group-hover:text-primary">React Native, Redux, and Python-Django</span>. Expert in complex architectures and real-time systems.</>
        },
        {
            icon: Code2,
            color: "text-vibrant-purple",
            bg: "bg-vibrant-purple/10",
            accent: "border-vibrant-purple",
            text: <>Devoted to a <span className="font-bold text-foreground transition-colors group-hover:text-primary">minimalist workflow</span> via Neovim and Linux. Building architecturally sound and delightful software.</>
        }
    ];

    const cyberpunkItems = [
        {
            icon: Zap,
            tag: "ROLE.exe",
            tagColor: "var(--neon-magenta, #e879f9)",
            title: "Senior Engineer",
            text: "Neural-linked to React Native & Backend. Operating at full capacity across mobile and server ecosystems.",
        },
        {
            icon: Brain,
            tag: "STACK.sys",
            tagColor: "var(--neon-cyan, #22d3ee)",
            title: "Full-Stack Runtime",
            text: "Core stack: React Native, Redux, Python-Django. Expert in high-throughput architectures and real-time data pipelines.",
        },
        {
            icon: Code2,
            tag: "ENV.conf",
            tagColor: "var(--vibrant-yellow, #facc15)",
            title: "Dev Environment",
            text: "Running Neovim + Linux. Zero-bloat workflow, surgical precision. Building systems that outlive their creators.",
        }
    ];

    const glassItems = [
        {
            icon: Briefcase,
            gradient: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.06))',
            iconColor: 'var(--primary)',
            title: "Product Engineer",
            text: "Senior-level React Native & Backend Developer focused on crafting exceptional user experiences at scale.",
        },
        {
            icon: Layers,
            gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(5,150,105,0.06))',
            iconColor: 'var(--vibrant-emerald)',
            title: "Architecture",
            text: "Specialized in React Native, Redux & Python-Django. Building scalable, real-time systems with clean abstractions.",
        },
        {
            icon: Brain,
            gradient: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(219,39,119,0.06))',
            iconColor: 'var(--vibrant-pink)',
            title: "Philosophy",
            text: "Minimalist workflow via Neovim + Linux. Quality over velocity — software that is both beautiful and enduring.",
        }
    ];

    if (isCyberpunk) {
        return (
            <Section title="About" id="about" accentColor="bg-primary">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {cyberpunkItems.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -4 }}
                            className="group relative flex flex-col gap-4 p-6 border border-primary/20 bg-card/60 backdrop-blur overflow-hidden transition-all hover:border-primary/60 hover:shadow-[0_0_20px_rgba(232,121,249,0.15)]"
                        >
                            {/* Neon corner */}
                            <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                            <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-accent opacity-60 group-hover:opacity-100 transition-opacity" />

                            {/* Tag */}
                            <div className="flex items-center justify-between">
                                <span className="text-[9px] font-mono font-black uppercase tracking-[0.3em]"
                                    style={{ color: item.tagColor }}>
                                    {item.tag}
                                </span>
                                <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-primary/40 to-accent/40 opacity-50" />

                            <h3 className="text-lg font-mono font-black text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm font-mono leading-relaxed text-muted-foreground">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>
        );
    }

    if (isGlass) {
        return (
            <Section title="About" id="about" accentColor="bg-primary">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {glassItems.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="group relative flex flex-col gap-5 p-7 overflow-hidden transition-all duration-500"
                            style={{
                                background: item.gradient,
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255,255,255,0.18)',
                                borderRadius: '20px',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                            }}
                        >
                            {/* Icon circle */}
                            <div className="h-12 w-12 flex items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                                style={{
                                    background: 'rgba(255,255,255,0.3)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.4)',
                                }}>
                                <item.icon className="h-5 w-5" style={{ color: item.iconColor }} />
                            </div>

                            <div>
                                <h3 className="text-base font-sans font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                                    {item.title}
                                </h3>
                                <p className="text-sm font-sans leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                                    {item.text}
                                </p>
                            </div>

                            {/* Glass shimmer on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none glass-shimmer" />
                        </motion.div>
                    ))}
                </motion.div>
            </Section>
        );
    }

    // Terminal / Gruvbox
    return (
        <Section title="About" id="about" accentColor="bg-vibrant-yellow">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-3"
            >
                {terminalItems.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        whileHover={{ backgroundColor: "var(--color-secondary)" }}
                        className="bg-background p-8 flex flex-col gap-6 group transition-colors relative h-full"
                    >
                        {/* Corner accent */}
                        <div className={`absolute top-0 left-0 w-1 h-1 border-l border-t ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

                        <div className={`h-11 w-11 ${item.bg} ${item.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                            style={{ borderLeft: '2px solid currentColor' }}>
                            <item.icon className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-mono leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default About;
