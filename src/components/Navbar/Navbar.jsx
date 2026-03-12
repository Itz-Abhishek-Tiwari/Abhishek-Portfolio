import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Menu, X, ArrowRight, Terminal } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Theme initialization moved to local storage check in main.jsx/ThemeToggle
  // But let's ensure the root has common gruvbox class if needed (optional)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
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

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      {/* Scroll Progress Bar — Gruvbox yellow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          {/* Logo — sharp square badge */}
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center bg-primary font-mono text-sm font-black text-primary-foreground transition-all group-hover:bg-accent">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="font-mono text-base font-bold tracking-tight text-foreground">
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
            className="flex h-8 w-8 items-center justify-center border border-transparent text-muted-foreground transition-all hover:border-border hover:bg-secondary hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>

          {/* Unified Theme Toggle & Branding */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-8 w-8 items-center justify-center bg-secondary border border-border text-foreground transition-all hover:bg-muted md:hidden"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
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
                    <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? "text-primary" : "opacity-0"}`} />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
