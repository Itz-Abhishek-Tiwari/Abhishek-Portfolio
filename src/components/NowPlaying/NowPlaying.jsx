import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Youtube, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";

export default function NowPlaying() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const songUrl = "https://www.youtube.com/watch?v=86zCa3gGkEQ&list=RD86zCa3gGkEQ&start_radio=1";

    // Detect screen width to set initial state
    useEffect(() => {
        if (window.innerWidth > 768) {
            setIsCollapsed(false);
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed bottom-6 left-6 z-40 flex items-center bg-secondary/90 backdrop-blur-md border border-border shadow-2xl overflow-hidden h-16"
        >
            <div className="flex items-center p-2 pr-4 h-full">
                {/* Toggle Button for Mobile/Desktop */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="mr-2 p-1 hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary h-full border-r border-border/30 pr-3"
                    title={isCollapsed ? "Expand Now Playing" : "Collapse Now Playing"}
                >
                    {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>

                {/* Vinyl/Disc Icon (Rotation Removed) */}
                <div className="relative h-10 w-10 flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center">
                        <Music className="w-4 h-4 text-primary" />
                    </div>
                    {/* Pulsing bars */}
                    <div className="absolute -top-1 -right-1 flex gap-0.5 h-3 items-end">
                        {[0.6, 0.4, 0.8].map((delay, i) => (
                            <motion.span
                                key={i}
                                animate={{ height: ["20%", "100%", "20%"] }}
                                transition={{ repeat: Infinity, duration: delay, ease: "easeInOut" }}
                                className="w-0.5 bg-vibrant-yellow"
                            />
                        ))}
                    </div>
                </div>

                {/* Collapsable Section */}
                <AnimatePresence>
                    {!isCollapsed && (
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="flex items-center overflow-hidden"
                        >
                            <div className="flex flex-col ml-3 min-w-[120px]">
                                <div className="flex items-center gap-2">
                                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-primary/70">
                                        Now Listening
                                    </span>
                                    <Youtube className="w-3 h-3 text-vibrant-red" />
                                </div>
                                <h4 className="text-[11px] font-mono font-black text-foreground truncate max-w-[130px]">
                                    Tum Se Hi
                                </h4>
                                <p className="text-[9px] font-mono text-muted-foreground truncate max-w-[130px]">
                                    Mohit Chauhan
                                </p>
                            </div>

                            {/* External Link */}
                            <a
                                href={songUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 p-2 hover:bg-primary/10 rounded-none transition-colors border-l border-border/50"
                                title="Open on YouTube"
                            >
                                <ExternalLink className="w-3 h-3 text-muted-foreground hover:text-primary transition-colors" />
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
