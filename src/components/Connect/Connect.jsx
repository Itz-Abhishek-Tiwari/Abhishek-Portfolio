import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import resumePdf from "../../pdf/abhishek_tiwari.pdf"
import Typewriter from "../Typewriter/Typewriter"

const Connect = () => {
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

    return (
        <section id="connect" className="mx-6 my-24 relative p-1">
            {/* Decorative Outer Border / Frame */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 border border-primary/30"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -inset-1 border border-primary/10"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 bg-card/40 backdrop-blur-sm border border-primary/20 p-12 text-center sm:p-24 overflow-hidden"
            >
                {/* Subtle accent lines in corners */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute left-0 top-0 w-8 h-8 border-l-2 border-t-2 border-primary"
                />
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute right-0 bottom-0 w-8 h-8 border-r-2 border-b-2 border-primary"
                />

                <div className="relative z-10 flex flex-col items-center gap-10">
                    {/* Hire Me Label with Lines */}
                    <motion.div variants={itemVariants} className="flex items-center gap-6">
                        <span className="h-px w-16 bg-border" />
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-primary">Hire Me</span>
                        <span className="h-px w-16 bg-border" />
                    </motion.div>

                    <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-mono font-black tracking-tighter text-foreground leading-[1.1]">
                        Let&apos;s build something<br />
                        <Typewriter text="exceptional" className="text-primary font-serif italic font-light" showCursor={false} delay={800} />
                        <Typewriter text=" together" className="text-muted-foreground" delay={1800} />
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground text-sm md:text-base font-mono leading-relaxed px-4 opacity-80">
                        Currently available for <span className="text-foreground">high-impact projects</span> and engineering opportunities.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col items-center gap-8 mt-4">
                        <div className="flex flex-wrap justify-center gap-8 items-center">
                            <Link to="/contact" className="vercel-button-primary px-10 py-5 text-xs gap-3 group shadow-[0_0_30px_rgba(250,189,47,0.1)] hover:shadow-[0_0_40px_rgba(250,189,47,0.2)]">
                                Get In Touch
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <a
                                href={resumePdf}
                                download="Abhishek_Tiwari_Resume.pdf"
                                className="text-foreground hover:text-primary transition-colors text-xs font-mono font-black uppercase tracking-widest flex items-center gap-2 group"
                            >
                                <div className="p-2 border border-border group-hover:border-primary transition-colors">
                                    <Download className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-1" />
                                </div>
                                Download Resume
                            </a>
                        </div>

                        <a
                            href="mailto:abhitiwariabhi7@gmail.com"
                            className="text-muted-foreground hover:text-foreground transition-colors text-[10px] font-mono font-black uppercase tracking-[0.3em] flex items-center gap-4"
                        >
                            <span className="h-px w-8 bg-border" />
                            Send an Email
                            <span className="h-px w-8 bg-border" />
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Connect;
