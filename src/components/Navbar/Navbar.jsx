import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, X, ArrowRight, Terminal, Zap, Sparkles } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useStyle } from "../../context/StyleContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoGlitch, setLogoGlitch] = useState(false);
  const clickResetTimer = useRef(null);
  const location = useLocation();

  const { currentTheme, toggleTheme, designStyle } = useStyle();
  const [clickCount, setClickCount] = useState(0);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Articles", path: "/articles" },
    { label: "Links", path: "/links" },
    { label: "Contact", path: "/contact" },
  ];

  // Triple-click logo → glitch easter egg
  const handleLogoClick = useCallback(() => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount >= 3) {
        setLogoGlitch(true);
        setTimeout(() => setLogoGlitch(false), 1500);
        return 0;
      }
      clearTimeout(clickResetTimer.current);
      clickResetTimer.current = setTimeout(() => setClickCount(0), 600);
      return newCount;
    });
  }, []);

  // ── Theme-specific config ──────────────────────────────────────────────
  const isCyberpunk = designStyle === 'cyberpunk';
  const isGlass = designStyle === 'glass';

  const navbarBg = isCyberpunk
    ? "bg-background/90 backdrop-blur-xl border-b border-primary/30"
    : isGlass
    ? "bg-background/70 backdrop-blur-2xl border-b border-border/40 shadow-sm"
    : "bg-background/85 backdrop-blur-xl border-b border-border";

  const LogoIcon = isCyberpunk ? Zap : isGlass ? Sparkles : Terminal;

  const logoBg = isCyberpunk
    ? "flex h-8 w-8 items-center justify-center bg-primary font-mono text-sm font-black text-primary-foreground transition-all group-hover:shadow-[0_0_20px_rgba(232,121,249,0.8)]"
    : isGlass
    ? "flex h-8 w-8 items-center justify-center bg-primary/10 font-mono text-sm font-black text-primary border border-primary/30 transition-all group-hover:bg-primary/20"
    : "flex h-8 w-8 items-center justify-center bg-primary font-mono text-sm font-black text-primary-foreground transition-all group-hover:bg-accent";

  const logoTextClass = isCyberpunk
    ? `font-mono text-base font-black tracking-[0.15em] text-foreground transition-all neon-flicker ${logoGlitch ? "animate-glitch" : ""}`
    : isGlass
    ? `font-sans text-base font-bold tracking-tight text-foreground transition-all ${logoGlitch ? "animate-glitch" : ""}`
    : `font-mono text-base font-medium tracking-[0.1em] text-foreground transition-all ${logoGlitch ? "animate-glitch" : ""}`;

  const linkBaseClass = isCyberpunk
    ? "relative text-[12px] font-mono font-black uppercase tracking-[0.25em] transition-all hover:text-primary"
    : isGlass
    ? "relative text-[13px] font-sans font-semibold tracking-wide transition-all hover:text-primary"
    : "relative text-[12px] font-mono font-bold uppercase tracking-[0.2em] transition-all hover:text-primary";

  const activeIndicatorClass = isCyberpunk
    ? "absolute -bottom-[1.4rem] left-0 right-0 h-[3px] bg-primary shadow-[0_0_10px_rgba(232,121,249,0.8),0_0_20px_rgba(232,121,249,0.4)]"
    : isGlass
    ? "absolute -bottom-[1.4rem] left-0 right-0 h-[3px] bg-gradient-to-r from-primary/60 via-primary to-accent/60"
    : "absolute -bottom-[1.4rem] left-0 right-0 h-[3px] bg-primary shadow-[0_-4px_10px_rgba(250,189,47,0.4)]";

  const themeToggleBadgeClass = isCyberpunk
    ? "flex items-center border border-primary/40 bg-primary/10 h-8 px-3 gap-2 transition-all hover:bg-primary/20 hover:border-primary/70 group active:scale-95"
    : isGlass
    ? "flex items-center border border-border/60 bg-background/40 backdrop-blur h-8 px-3 gap-2 transition-all hover:bg-background/70 hover:border-primary/40 group active:scale-95"
    : "flex items-center border border-border bg-secondary/30 h-8 px-3 gap-2 transition-all hover:bg-secondary/60 hover:border-primary/40 group active:scale-95";

  const dotClass = isCyberpunk
    ? `h-full w-full bg-primary ${currentTheme === 'dark' ? 'animate-pulse' : ''} shadow-[0_0_6px_currentColor]`
    : `h-full w-full bg-primary ${currentTheme === 'dark' ? 'animate-pulse' : ''}`;

  const mobileMenuBg = isCyberpunk
    ? "absolute left-0 right-0 top-full border-b border-primary/30 bg-background/95 backdrop-blur-xl md:hidden shadow-[0_10px_40px_rgba(232,121,249,0.1)] overflow-hidden"
    : isGlass
    ? "absolute left-0 right-0 top-full border-b border-border/30 bg-background/80 backdrop-blur-2xl md:hidden shadow-2xl overflow-hidden"
    : "absolute left-0 right-0 top-full border-b border-border bg-background md:hidden shadow-2xl overflow-hidden";

  const scrollBarClass = isCyberpunk
    ? "fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
    : "fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]";

  const scrollBarStyle = isCyberpunk
    ? { scaleX, background: 'linear-gradient(90deg, #e879f9, #22d3ee, #facc15)' }
    : { scaleX };

  return (
    <header className={`sticky top-0 z-50 w-full ${navbarBg}`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className={scrollBarClass}
        style={scrollBarStyle}
      />

      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5"
            onClick={handleLogoClick}
            title={`abhishek_ (click ${3 - clickCount} more times for a surprise)`}
          >
            <div className={logoBg}>
              <LogoIcon className="h-4 w-4" />
            </div>
            <span className={logoTextClass}>
              {isCyberpunk
                ? <><span className="text-accent">{"<"}</span>ab_<span className="text-primary">tiwari</span><span className="text-accent">{"/>"}</span></>
                : isGlass
                ? <><span className="text-foreground font-bold">abhishek</span><span className="text-primary">.</span></>
                : <>abhishek<span className="text-primary">_</span></>
              }
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${linkBaseClass} ${isActive ? "text-primary" : "text-muted-foreground"}`}
                >
                  {isCyberpunk && isActive && <span className="mr-1 text-accent opacity-70">{">"}</span>}
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className={activeIndicatorClass}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* GitHub Link */}
          <a
            href="https://github.com/Itz-Abhishek-Tiwari"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
            className={`flex h-8 w-8 items-center justify-center border border-transparent text-muted-foreground transition-all ${
              isCyberpunk
                ? "hover:border-primary/50 hover:text-primary hover:shadow-[0_0_10px_rgba(232,121,249,0.5)]"
                : isGlass
                ? "hover:border-border/60 hover:bg-background/40 hover:text-foreground backdrop-blur"
                : "hover:border-border hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Github className="h-4 w-4" />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={themeToggleBadgeClass}
            title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <div className="relative flex h-1.5 w-1.5 shrink-0">
              <span className={dotClass} />
              <span className="absolute inset-0 bg-primary blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute inset-0 bg-primary/40 group-hover:animate-ping" />
            </div>
            <span className={`text-[10px] font-mono font-black uppercase tracking-[0.3em] text-muted-foreground transition-all group-hover:text-foreground whitespace-nowrap`}>
              {currentTheme === 'dark' ? 'Dark' : 'Light'}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex h-8 w-8 items-center justify-center border text-foreground transition-all md:hidden ${
              isCyberpunk
                ? "bg-secondary border-primary/30 hover:border-primary/60 hover:shadow-[0_0_8px_rgba(232,121,249,0.4)]"
                : isGlass
                ? "bg-background/40 border-border/40 backdrop-blur hover:bg-background/60"
                : "bg-secondary border-border hover:bg-muted"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={mobileMenuBg}
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-6 py-4 text-[13px] font-mono font-black uppercase tracking-[0.2em] transition-all border-l-4 ${
                      isActive
                        ? isCyberpunk
                          ? "border-primary bg-primary/10 text-primary shadow-[inset_4px_0_10px_rgba(232,121,249,0.2)]"
                          : isGlass
                          ? "border-primary bg-primary/8 text-primary"
                          : "border-primary bg-primary/10 text-primary"
                        : isCyberpunk
                        ? "border-transparent text-muted-foreground hover:border-accent/50 hover:bg-accent/5 hover:text-foreground"
                        : "border-transparent text-muted-foreground hover:border-primary/20 hover:bg-secondary/30 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <ArrowRight className={`h-4 w-4 transition-all ${isActive ? "text-primary translate-x-0" : "opacity-0 -translate-x-4"}`} />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
