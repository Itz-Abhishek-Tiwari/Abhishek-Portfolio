import { Terminal, Zap, Sparkles, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useStyle } from "../../context/StyleContext";

const STYLES = [
  { id: 'terminal', icon: Terminal, label: 'Terminal', desc: 'Vibrant Gruvbox' },
  { id: 'cyberpunk', icon: Zap, label: 'Cyberpunk', desc: 'Neon Retrowave' },
  { id: 'glass', icon: Sparkles, label: 'Glass', desc: 'Modern Minimal' },
];

export default function StyleSwitcher() {
  const { designStyle, setStyle, currentTheme, toggleTheme } = useStyle();

  const isCyberpunk = designStyle === 'cyberpunk';
  const isGlass = designStyle === 'glass';

  const containerClass = isCyberpunk
    ? "fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-0.5 p-1 border border-primary/40 bg-background/90 backdrop-blur-xl shadow-[0_0_30px_rgba(232,121,249,0.2),0_0_60px_rgba(34,211,238,0.1)]"
    : isGlass
    ? "fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 p-1.5 border border-border/40 bg-white/20 dark:bg-black/20 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
    : "fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 p-1.5 border border-border bg-background/85 backdrop-blur-xl shadow-2xl";

  const buttonClass = (isActive) => {
    if (isCyberpunk) {
      return `relative flex items-center gap-1.5 px-3 py-2 transition-all duration-300 font-mono text-[10px] font-black uppercase tracking-wider ${
        isActive
          ? 'text-primary bg-primary/15 border border-primary/50 shadow-[0_0_10px_rgba(232,121,249,0.4)]'
          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent'
      }`;
    }
    if (isGlass) {
      return `relative flex items-center justify-center p-2.5 transition-all duration-300 ${
        isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10'
      }`;
    }
    // terminal
    return `relative flex items-center justify-center p-2.5 transition-all duration-300 ${
      isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
    }`;
  };

  const activeIndicator = () => {
    if (isCyberpunk) return null;
    if (isGlass) {
      return (
        <motion.div
          layoutId="style-switcher-active"
          className="absolute inset-0 bg-primary/12 border border-primary/30 shadow-[0_2px_10px_rgba(99,102,241,0.2)]"
          style={{ borderRadius: '12px' }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      );
    }
    return (
      <motion.div
        layoutId="style-switcher-active"
        className="absolute inset-0 bg-primary/15 border border-primary/40"
        style={{ borderRadius: '0px' }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    );
  };

  const dividerClass = isCyberpunk
    ? "w-px h-5 bg-primary/30 mx-0.5"
    : isGlass
    ? "w-px h-5 bg-border/50 mx-0.5"
    : "w-px h-5 bg-border mx-0.5";

  const themeToggleClass = isCyberpunk
    ? `relative flex items-center justify-center px-2.5 py-2 border border-transparent text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_8px_rgba(232,121,249,0.4)] transition-all duration-300`
    : isGlass
    ? `relative flex items-center justify-center p-2.5 text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300`
    : `relative flex items-center justify-center p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={containerClass}
    >
      {STYLES.map((s) => {
        const isActive = designStyle === s.id;
        return (
          <button
            key={s.id}
            onClick={() => setStyle(s.id)}
            className={buttonClass(isActive)}
            title={`${s.label} — ${s.desc}`}
          >
            {isActive && activeIndicator()}
            <s.icon className="h-4 w-4 relative z-10" />
            {isCyberpunk && (
              <span className="relative z-10 hidden sm:inline">{s.label}</span>
            )}
            {isGlass && isActive && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                className="relative z-10 text-[10px] font-medium overflow-hidden whitespace-nowrap hidden sm:inline"
              >
                {s.label}
              </motion.span>
            )}
          </button>
        );
      })}

      <div className={dividerClass} />

      {/* Dark / Light toggle */}
      <button
        onClick={toggleTheme}
        className={themeToggleClass}
        title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <motion.div
          key={currentTheme}
          initial={{ rotate: -30, scale: 0.7, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 30, scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {currentTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.div>
      </button>
    </motion.div>
  );
}
