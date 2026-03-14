import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, X, ArrowRight, Terminal } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoGlitch, setLogoGlitch] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const location = useLocation();

  // Theme Toggle Logic
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
    { label: "Contact", path: "/contact" },
  ];

  // Triple-click logo → glitch easter egg
  const handleLogoClick = useCallback(() => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 3) {
      setClickCount(0);
      setLogoGlitch(true);
      setTimeout(() => setLogoGlitch(false), 1500);
    }
    // Reset count if too slow
    setTimeout(() => setClickCount(0), 600);
  }, [clickCount]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      {/* Scroll Progress Bar — Gruvbox yellow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          {/* Logo — triple-click for glitch easter egg */}
          <Link
            to="/"
            className="group flex items-center gap-2.5"
            onClick={handleLogoClick}
            title="abhishek_ (click 3x for a surprise)"
          >
            <div className="flex h-8 w-8 items-center justify-center bg-primary font-mono text-sm font-black text-primary-foreground transition-all group-hover:bg-accent">
              <Terminal className="h-4 w-4" />
            </div>
            <span className={`font-mono text-base font-bold tracking-tight text-foreground transition-all ${logoGlitch ? "animate-glitch" : ""}`}>
              abhishek<span className="text-primary">_</span>
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
                  className={`relative text-sm font-medium transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-[1.2rem] left-0 right-0 h-[2px] bg-primary"
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
            className="flex h-8 w-8 items-center justify-center border border-transparent text-muted-foreground transition-all hover:border-border hover:bg-secondary hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>

          {/* Functional GRUVBOX badge (Theme Toggle) */}
          <button
            onClick={toggleTheme}
            className="flex items-center border border-border bg-secondary/30 h-8 px-3 gap-2 transition-all hover:bg-secondary/60 hover:border-primary/40 group active:scale-95"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <div className="relative flex h-1.5 w-1.5 shrink-0">
              <span className={`h-full w-full bg-primary ${theme === 'dark' ? 'animate-pulse' : ''}`} />
              <span className="absolute inset-0 bg-primary blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute inset-0 bg-primary/40 group-hover:animate-ping" />
            </div>
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-muted-foreground transition-all group-hover:text-foreground whitespace-nowrap">
              {theme === 'dark' ? 'Dark' : 'Light'}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-8 w-8 items-center justify-center bg-secondary border border-border text-foreground transition-all hover:bg-muted md:hidden"
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
            className="absolute left-0 right-0 top-full border-b border-border bg-background md:hidden shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 text-sm font-medium transition-all border-l-2 ${isActive
                      ? "border-primary bg-secondary text-foreground"
                      : "border-transparent text-muted-foreground hover:border-border hover:bg-secondary/50 hover:text-foreground"
                      }`}
                  >
                    {link.label}
                    <ArrowRight className={`h-4 w-4 transition-all ${isActive ? "text-primary" : "opacity-0 -translate-x-2"}`} />
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
