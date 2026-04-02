import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, Shield, RefreshCcw, ScrollText } from "lucide-react";
import PropTypes from 'prop-types';
import useSoundEffects from "../../hooks/useSoundEffects";

const BUGS = [
    { name: "Undefined Variable", hp: 100, attack: 10, color: "text-red-500" },
    { name: "Memory Leak", hp: 120, attack: 15, color: "text-orange-500" },
    { name: "CSS Centering Issue", hp: 80, attack: 5, color: "text-blue-500" },
    { name: "Race Condition", hp: 150, attack: 20, color: "text-purple-500" },
];

export default function BugBattle({ skills, onExit }) {
    const { playClick, playHover } = useSoundEffects();
    const [bug, setBug] = useState(BUGS[Math.floor(Math.random() * BUGS.length)]);
    const [playerHP, setPlayerHP] = useState(100);
    const [bugHP, setBugHP] = useState(bug.hp);
    const [shield, setShield] = useState(0);
    const [logs, setLogs] = useState(["A wild " + bug.name + " appeared!"]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isVictory, setIsVictory] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const addLog = (msg) => {
        setLogs((prev) => [msg, ...prev].slice(0, 5));
    };

    const bugTurn = useCallback(() => {
        if (bugHP <= 0) return;

        setIsAnimating(true);
        setTimeout(() => {
            const damage = Math.max(0, bug.attack - shield);
            setPlayerHP((prev) => Math.max(0, prev - damage));
            setShield(0);
            addLog(`${bug.name} dealt ${damage} damage!`);
            setIsAnimating(false);
        }, 600);
    }, [bug, bugHP, shield]);

    useEffect(() => {
        if (bugHP <= 0 && !isVictory) {
            setIsVictory(true);
            setIsGameOver(true);
            addLog(`Killed the ${bug.name}! System stable.`);
        }
    }, [bugHP, bug.name, isVictory]);

    useEffect(() => {
        if (playerHP <= 0 && !isGameOver) {
            setIsGameOver(true);
            addLog("System Crash! Your HP reached 0.");
        }
    }, [playerHP, isGameOver]);

    const handleSkill = (skill, type) => {
        if (isGameOver || isAnimating) return;
        playClick();

        let damage = 0;
        let heal = 0;
        let newShield = 0;
        let msg = "";

        switch (type) {
            case "languages":
                damage = 15 + Math.floor(Math.random() * 10);
                msg = `Used ${skill}! Dealt ${damage} damage.`;
                break;
            case "frameworks":
                damage = 10 + Math.floor(Math.random() * 5);
                newShield = 15;
                msg = `Deployed ${skill}! Dealt ${damage} and gained a Shield.`;
                break;
            case "miscellaneous":
                heal = 20;
                msg = `Ran ${skill} routine. Restored ${heal} HP.`;
                break;
            default:
                break;
        }

        setBugHP((prev) => Math.max(0, prev - damage));
        setPlayerHP((prev) => Math.min(100, prev + heal));
        setShield(newShield);
        addLog(msg);

        if (bugHP - damage > 0) {
            setTimeout(bugTurn, 800);
        }
    };

    const resetGame = () => {
        const newBug = BUGS[Math.floor(Math.random() * BUGS.length)];
        setBug(newBug);
        setBugHP(newBug.hp);
        setPlayerHP(100);
        setShield(0);
        setLogs(["A wild " + newBug.name + " appeared!"]);
        setIsGameOver(false);
        setIsVictory(false);
        setIsAnimating(false);
        playClick();
    };

    return (
        <div className="flex flex-col gap-6 p-6 border-t border-border bg-secondary/30 font-mono">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Player Stats */}
                <div className="flex flex-col gap-2 w-full md:w-1/3">
                    <div className="flex justify-between items-end">
                        <span className="text-xs font-bold uppercase tracking-widest">Developer HP</span>
                        <span className="text-xs">{playerHP}/100</span>
                    </div>
                    <div className="h-4 w-full bg-border border border-border">
                        <motion.div
                            initial={{ width: "100%" }}
                            animate={{ width: `${playerHP}%` }}
                            className={`h-full ${playerHP > 50 ? "bg-vibrant-emerald" : playerHP > 20 ? "bg-vibrant-yellow" : "bg-vibrant-red"}`}
                        />
                    </div>
                    {shield > 0 && (
                        <div className="flex items-center gap-1 text-[10px] text-vibrant-blue font-bold uppercase tracking-tight">
                            <Shield size={12} /> Shield Active (+{shield} DEF)
                        </div>
                    )}
                </div>

                {/* Battle Visual */}
                <div className="flex-1 flex flex-col items-center justify-center py-4 relative">
                    <AnimatePresence mode="wait">
                        {!isGameOver ? (
                            <motion.div
                                key={bug.name}
                                animate={isAnimating ? { x: [-5, 5, -5, 5, 0], scale: [1, 1.1, 1] } : { y: [0, -5, 0] }}
                                transition={isAnimating ? { duration: 0.1, repeat: 5 } : { duration: 2, repeat: Infinity }}
                                className={`flex flex-col items-center gap-2 ${bug.color}`}
                            >
                                <Bug size={64} />
                                <span className="text-sm font-black uppercase tracking-widest">{bug.name}</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <span className={`text-2xl font-black uppercase ${isVictory ? "text-vibrant-emerald" : "text-vibrant-red"}`}>
                                    {isVictory ? "Victory!" : "System Halt!"}
                                </span>
                                <button
                                    onClick={resetGame}
                                    className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary text-xs uppercase font-bold"
                                >
                                    <RefreshCcw size={14} /> Play Again
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Enemy Stats */}
                <div className="flex flex-col gap-2 w-full md:w-1/3">
                    <div className="flex justify-between items-end">
                        <span className="text-xs font-bold uppercase tracking-widest">Bug Status</span>
                        <span className="text-xs">{bugHP}/{bug.hp}</span>
                    </div>
                    <div className="h-4 w-full bg-border border border-border">
                        <motion.div
                            animate={{ width: `${(bugHP / bug.hp) * 100}%` }}
                            className="h-full bg-vibrant-red"
                        />
                    </div>
                </div>
            </div>

            {/* Battle Log */}
            <div className="bg-black/40 border border-border p-3 flex flex-col gap-1 min-h-[120px]">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase font-bold border-b border-border/50 pb-1 mb-1">
                    <ScrollText size={10} /> Battle Console
                </div>
                {logs.map((log, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1 - i * 0.2, x: 0 }}
                        key={i + log}
                        className={`text-[11px] ${i === 0 ? "text-vibrant-emerald" : "text-muted-foreground"}`}
                    >
                        {log}
                    </motion.div>
                ))}
            </div>

            {/* Control Panel */}
            {!isGameOver && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(skills).map(([category, list]) => (
                        <div key={category} className="flex flex-col gap-2">
                            <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-tighter border-l-2 border-primary pl-2">
                                {category}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {list.slice(0, 3).map((skill) => (
                                    <button
                                        key={skill}
                                        onClick={() => handleSkill(skill, category)}
                                        onMouseEnter={playHover}
                                        disabled={isAnimating}
                                        className="flex-1 border border-border bg-secondary/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all disabled:opacity-50"
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => { playClick(); onExit(); }}
                    className="text-[10px] text-muted-foreground hover:text-foreground uppercase tracking-[0.2em] font-bold underline underline-offset-4 decoration-border transition-colors px-4 py-2"
                >
                    {isGameOver ? "Return to Arsenal" : "Retreat (Leave Battle)"}
                </button>
            </div>
        </div>
    );
}

BugBattle.propTypes = {
    skills: PropTypes.shape({
        languages: PropTypes.arrayOf(PropTypes.string),
        frameworks: PropTypes.arrayOf(PropTypes.string),
        miscellaneous: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    onExit: PropTypes.func.isRequired,
};
