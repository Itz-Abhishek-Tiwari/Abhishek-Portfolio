import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const shortcuts = [
    { keys: ["?"], description: "Show keyboard shortcuts" },
    { keys: ["G", "H"], description: "Go to Home" },
    { keys: ["G", "P"], description: "Go to Projects" },
    { keys: ["G", "A"], description: "Go to Articles" },
    { keys: ["G", "C"], description: "Go to Contact" },
    { keys: ["↑", "↑", "↓", "↓", "←", "→", "B", "A"], description: "???" },
    { keys: ["Esc"], description: "Close this modal" },
];

export default function KeyboardShortcutsModal({ isOpen, onClose }) {
    // Close on Escape key
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-[9000] bg-background/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9001] w-full max-w-md"
                    >
                        <div className="border border-border bg-background shadow-2xl shadow-black/60">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-border px-5 py-4">
                                <div className="flex items-center gap-2.5">
                                    <Terminal className="h-4 w-4 text-primary" />
                                    <span className="font-mono text-xs font-black uppercase tracking-widest text-foreground">
                                        Keyboard Shortcuts
                                    </span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="flex h-7 w-7 items-center justify-center border border-border bg-secondary text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                                >
                                    <X className="h-3.5 w-3.5" />
                                </button>
                            </div>

                            {/* Shortcut list */}
                            <div className="divide-y divide-border">
                                {shortcuts.map((s, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between px-5 py-3 transition-colors hover:bg-secondary/30"
                                    >
                                        <span className="font-mono text-xs text-muted-foreground">
                                            {s.description}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            {s.keys.map((k, ki) => (
                                                <kbd key={ki} className="kbd">{k}</kbd>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer hint */}
                            <div className="border-t border-border px-5 py-3">
                                <p className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                                    Press anywhere outside or Esc to close
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

KeyboardShortcutsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
