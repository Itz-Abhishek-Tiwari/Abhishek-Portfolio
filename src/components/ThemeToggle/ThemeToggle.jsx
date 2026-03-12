import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center border border-border bg-secondary/30 transition-all hover:bg-secondary/60 hover:border-primary/40 group h-8 shadow-sm"
            aria-label="Toggle theme"
        >
            <div className="px-3 h-full flex items-center justify-center border-r border-border transition-colors group-hover:bg-background/40">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                        {theme === 'dark' ? (
                            <Sun className="h-3.5 w-3.5 text-vibrant-yellow" />
                        ) : (
                            <Moon className="h-3.5 w-3.5 text-vibrant-orange" />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex items-center gap-2.5 px-3 h-full overflow-hidden">
                <div className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="h-full w-full bg-primary" />
                    <span className="absolute inset-0 bg-primary blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute inset-0 bg-primary/40 group-hover:animate-ping" />
                </div>
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-muted-foreground transition-all group-hover:text-foreground whitespace-nowrap">
                    Gruvbox
                </span>
            </div>
        </motion.button>
    );
}
