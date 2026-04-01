import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, ExternalLink, ChevronRight, ChevronLeft, Volume2, VolumeX } from "lucide-react";

export default function NowPlaying() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef(null);
    const trackName = "Soft Lo-Fi Beat | GIRL";
    const artistName = "Alex-Productions";
    const audioUrl = "https://www.chosic.com/wp-content/uploads/2020/07/alexander-nakarada-superepic(chosic.com).mp3";
    const sourceUrl = "https://www.chosic.com/free-music/all/?category=lofi-background-music";

    // Detect screen width to set initial state
    useEffect(() => {
        if (window.innerWidth > 768) {
            setIsCollapsed(false);
        }
    }, []);

    // Handle initialization and playback
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4;
            audioRef.current.loop = true;
        }

        const handleCanPlay = () => {
            setIsPlaying(true);
        };

        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('canplay', handleCanPlay);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('canplay', handleCanPlay);
            }
        };
    }, []);

    const toggleMute = (e) => {
        e.stopPropagation();
        hasInteractedRef.current = true; // Mark as interacted to stop auto-unmute
        if (audioRef.current) {
            const newMuteState = !isMuted;
            audioRef.current.muted = newMuteState;
            setIsMuted(newMuteState);

            if (!newMuteState) {
                audioRef.current.play().catch(e => console.warn("Audio playback blocked", e));
            }
        }
    };

    const hasInteractedRef = useRef(false);

    // Auto-play/unmute on first interaction
    useEffect(() => {
        if (hasInteractedRef.current) return;

        const handleFirstInteraction = () => {
            if (audioRef.current && !hasInteractedRef.current) {
                hasInteractedRef.current = true;
                audioRef.current.muted = false;
                setIsMuted(false);
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(e => console.warn("Audio playback blocked after interaction", e));
                cleanup();
            }
        };

        const cleanup = () => {
            window.removeEventListener('click', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
            window.removeEventListener('touchstart', handleFirstInteraction);
            window.removeEventListener('mousemove', handleFirstInteraction);
            window.removeEventListener('mousedown', handleFirstInteraction);
        };

        window.addEventListener('click', handleFirstInteraction);
        window.addEventListener('keydown', handleFirstInteraction);
        window.addEventListener('touchstart', handleFirstInteraction);
        window.addEventListener('mousemove', handleFirstInteraction);
        window.addEventListener('mousedown', handleFirstInteraction);

        return cleanup;
    }, [isMuted]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed bottom-6 left-6 z-40 flex items-center bg-secondary/90 backdrop-blur-md border border-border shadow-2xl overflow-hidden h-14 md:h-16 max-w-[calc(100vw-48px)] md:max-w-md"
        >
            <audio
                ref={audioRef}
                src={audioUrl}
                preload="auto"
                muted={isMuted}
            />

            <div className="flex items-center p-2 pr-4 h-full">
                {/* Toggle Button for Mobile/Desktop */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="mr-2 p-1 hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary h-full border-r border-border/30 pr-3"
                    title={isCollapsed ? "Expand Now Playing" : "Collapse Now Playing"}
                >
                    {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                </button>

                {/* Disc Icon with Sound Control */}
                <div
                    className="relative h-10 w-10 flex-shrink-0 cursor-pointer group/icon"
                    onClick={toggleMute}
                >
                    <div className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center transition-colors group-hover/icon:bg-primary/20">
                        {isMuted ? (
                            <VolumeX className="w-4 h-4 text-muted-foreground group-hover/icon:text-primary transition-colors" />
                        ) : (
                            <Volume2 className="w-4 h-4 text-primary animate-pulse" />
                        )}
                    </div>
                    {/* Pulsing bars (only if unmuted) */}
                    {!isMuted && isPlaying && (
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
                    )}
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
                            <div className="flex flex-col ml-3 min-w-[80px] md:min-w-[120px]">
                                <div className="flex items-center gap-2">
                                    <span className="text-[8px] md:text-[9px] font-mono font-bold uppercase tracking-wider text-primary/70">
                                        Now listening
                                    </span>
                                    <Music className="w-2.5 h-2.5 md:w-3 md:h-3 text-vibrant-emerald" />
                                </div>
                                <h4 className="text-[10px] md:text-[11px] font-mono font-black text-foreground truncate max-w-[100px] md:max-w-[130px]" title={trackName}>
                                    {trackName}
                                </h4>
                                <p className="text-[8px] md:text-[9px] font-mono text-muted-foreground truncate max-w-[100px] md:max-w-[130px]">
                                    {artistName}
                                </p>
                            </div>

                            {/* Source Link */}
                            <a
                                href={sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 p-2 hover:bg-primary/10 rounded-none transition-colors border-l border-border/50"
                                title="View on Chosic"
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

