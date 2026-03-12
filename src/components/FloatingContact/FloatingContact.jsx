import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Phone, Mail } from "lucide-react";

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);
    const [showButton, setShowButton] = useState(true);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {showButton && (
                    <div className="relative">
                        {/* Contact Options Popover */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                                    className="absolute bottom-20 right-0 mb-2 w-72 overflow-hidden border border-border bg-background shadow-2xl shadow-black/50"
                                >
                                    {/* Header */}
                                    <div className="bg-primary p-5 text-primary-foreground border-b border-primary/20">
                                        <p className="text-xs font-mono font-black uppercase tracking-widest">Let&apos;s build something</p>
                                        <p className="text-xs opacity-70 mt-1 font-mono">I usually respond in under 24h</p>
                                    </div>

                                    {/* Contact options */}
                                    <div className="p-2 bg-background">
                                        <a
                                            href="mailto:abhitiwariabhi7@gmail.com"
                                            className="flex items-center gap-4 p-4 transition-all hover:bg-secondary/50 group border-b border-border/50"
                                        >
                                            <div className="flex h-9 w-9 items-center justify-center bg-secondary border border-border group-hover:bg-primary group-hover:border-primary transition-colors">
                                                <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-mono font-black text-foreground">Email Me</p>
                                                <p className="text-[10px] font-mono text-muted-foreground">abhitiwariabhi7@gmail.com</p>
                                            </div>
                                        </a>
                                        <a
                                            href="tel:6268393044"
                                            className="flex items-center gap-4 p-4 transition-all hover:bg-secondary/50 group"
                                        >
                                            <div className="flex h-9 w-9 items-center justify-center bg-secondary border border-border group-hover:bg-primary group-hover:border-primary transition-colors">
                                                <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-mono font-black text-foreground">Call Me</p>
                                                <p className="text-[10px] font-mono text-muted-foreground">626-8393-044</p>
                                            </div>
                                        </a>
                                        <div className="mt-2 pt-2 border-t border-border px-2 pb-2">
                                            <Link
                                                to="/contact"
                                                className="vercel-button-primary w-full py-3 text-[10px] gap-2 justify-center"
                                            >
                                                <Send className="h-3.5 w-3.5" />
                                                Full Contact Page
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Main Toggle Button — square, Gruvbox yellow */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground shadow-2xl shadow-black/40 transition-all hover:bg-accent hover:scale-105 active:scale-95"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <X className="h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <MessageSquare className="h-6 w-6 fill-current" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
