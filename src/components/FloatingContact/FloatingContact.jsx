import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Phone, Mail } from "lucide-react";

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
                setIsOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {showButton && (
                    <div className="relative">
                        {/* Contact Options Popover */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 10, x: -20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 10, x: -20 }}
                                    className="absolute bottom-16 right-0 mb-4 w-64 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
                                >
                                    <div className="bg-telephone-red p-4 text-white dark:bg-accent-red">
                                        <p className="text-sm font-medium">Let's build something</p>
                                        <p className="text-xs opacity-80">I usually respond in under 24h</p>
                                    </div>
                                    <div className="p-2">
                                        <a
                                            href="mailto:abhitiwariabhi7@gmail.com"
                                            className="flex items-center gap-3 rounded-xl p-3 text-zinc-600 transition-colors hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                                                <Mail className="h-5 w-5 text-telephone-red dark:text-accent-red" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Email Me</p>
                                                <p className="text-[10px]">abhitiwariabhi7@gmail.com</p>
                                            </div>
                                        </a>
                                        <a
                                            href="tel:6268393044"
                                            className="flex items-center gap-3 rounded-xl p-3 text-zinc-600 transition-colors hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                                                <Phone className="h-5 w-5 text-foliage-green dark:text-accent-green" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Call Me</p>
                                                <p className="text-[10px]">626-8393-044</p>
                                            </div>
                                        </a>
                                        <a
                                            href="/contact"
                                            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-xs font-medium text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
                                        >
                                            <Send className="h-3.5 w-3.5" />
                                            View Contact Page
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Main Toggle Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-950 text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 dark:bg-zinc-50 dark:text-zinc-950"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <MessageSquare className="h-6 w-6 fill-current" />
                            )}
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
