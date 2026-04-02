import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Download, Send, Zap, Sparkles } from "lucide-react"
import resumePdf from "../../pdf/abhishek_tiwari.pdf"
import Typewriter from "../Typewriter/Typewriter"
import { useStyle } from "../../context/StyleContext"

const Connect = () => {
    const { designStyle } = useStyle();
    const isCyberpunk = designStyle === 'cyberpunk';
    const isGlass = designStyle === 'glass';

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // ── CYBERPUNK VARIANT ───────────────────────────────────────────────────
    if (isCyberpunk) {
        return (
            <section id="connect" className="mx-6 my-24 relative p-1 group">
                <div className="absolute inset-0 border border-primary/20 group-hover:border-primary/40 transition-colors" />
                <div className="absolute -inset-1.5 border border-primary/10 group-hover:opacity-40 transition-opacity" />
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-10 bg-card/60 backdrop-blur-xl border border-primary/20 p-12 text-center sm:p-24 overflow-hidden"
                    style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
                >
                    <div className="absolute inset-0 cyberpunk-scanlines opacity-10 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <motion.div variants={itemVariants} className="flex items-center gap-4">
                            <span className="h-[2px] w-12 bg-primary/40" />
                            <span className="text-[10px] font-mono font-black uppercase tracking-[0.5em] text-primary neon-flicker">Initialize_Uplink</span>
                            <span className="h-[2px] w-12 bg-primary/40" />
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-8xl font-mono font-black tracking-tighter text-foreground leading-none uppercase">
                            Ready to <br />
                            <Typewriter text="Collaborate" className="text-primary" showCursor={false} delay={800} />
                            <Typewriter text="?" className="text-accent" delay={1800} />
                        </motion.h2>

                        <motion.p variants={itemVariants} className="max-w-xl text-muted-foreground text-sm font-mono leading-relaxed opacity-70">
                            System available for high-throughput engineering projects. <br/>
                            {"//"} Current latency: <span className="text-accent">Minimal</span>
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-10 mt-8">
                            <Link to="/contact" className="relative px-12 py-5 font-mono text-[10px] font-black uppercase tracking-widest text-background bg-primary hover:bg-accent transition-all group overflow-hidden"
                               style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}>
                                <span className="relative z-10 flex items-center gap-2">
                                   Connect_Direct <Zap className="h-4 w-4" />
                                </span>
                            </Link>

                            <a href={resumePdf} download="Abhishek_Tiwari_Resume.pdf" className="font-mono text-[10px] font-black uppercase tracking-widest text-foreground hover:text-primary transition-all flex items-center gap-2">
                                [.RESUME_DATA] <Download className="h-4 w-4 text-accent" />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        )
    }

    // ── GLASS VARIANT ────────────────────────────────────────────────────────
    if (isGlass) {
        return (
            <section id="connect" className="mx-6 my-32 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-5xl mx-auto relative z-10 p-12 md:p-24 text-center overflow-hidden"
                    style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '48px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    <div className="absolute inset-0 glass-shimmer opacity-30 pointer-events-none" />
                    
                    {/* Decorative floating orbs inside */}
                    <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <motion.div variants={itemVariants} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <Sparkles className="h-3 w-3 text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Available for work</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-sans font-bold tracking-tight text-foreground leading-[1.1]">
                            Let’s start <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">something new.</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="max-w-md text-muted-foreground text-lg font-sans leading-relaxed">
                            I’m always looking for amazing people to collaborate with on great ideas.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mt-6">
                            <Link to="/contact" className="px-10 py-4 rounded-full bg-primary text-white font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
                                Say Hello <ArrowRight className="h-4 w-4" />
                            </Link>

                            <a href={resumePdf} download="Abhishek_Tiwari_Resume.pdf" className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-foreground font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                                <Download className="h-4 w-4" /> My CV
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        )
    }

    // ── TERMINAL / GRUVBOX ──────────────────────────────────────────────────
    return (
        <section id="connect" className="mx-6 my-24 relative p-1">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 border border-border"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -inset-1 border border-border/40"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 bg-secondary/30 backdrop-blur-sm border border-border p-12 text-center sm:p-24 overflow-hidden"
            >
                <div className="absolute left-0 top-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 bottom-0 w-8 h-8 border-r-2 border-b-2 border-primary" />

                <div className="relative z-10 flex flex-col items-center gap-10">
                    <motion.div variants={itemVariants} className="flex items-center gap-6">
                        <span className="h-px w-16 bg-border" />
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-primary">INITIALIZE_CONNECTION</span>
                        <span className="h-px w-16 bg-border" />
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-mono font-black tracking-tighter text-foreground leading-[1.1] uppercase">
                        Let&apos;s build <br />
                        <span className="text-primary italic">exceptional</span> software.
                    </motion.h2>

                    <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground text-sm font-mono leading-relaxed px-4 opacity-80 uppercase tracking-tight">
                        &gt; System status: <span className="text-foreground">Open for collaborations</span>
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col items-center gap-12 mt-4">
                        <div className="flex flex-wrap justify-center gap-8 items-center">
                            <Link to="/contact" className="vercel-button-primary px-12 py-5 h-16 text-[10px] gap-3 group">
                                <Send className="h-4 w-4" /> SEND_MESSAGE
                            </Link>

                            <a href={resumePdf} download="Abhishek_Tiwari_Resume.pdf"
                                className="text-foreground hover:text-primary transition-colors text-[10px] font-mono font-black uppercase tracking-widest flex items-center gap-3">
                                <div className="p-3 border border-border group-hover:border-primary transition-colors bg-secondary">
                                    <Download className="h-4 w-4 text-primary" />
                                </div>
                                FETCH_RESUME
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Connect;
