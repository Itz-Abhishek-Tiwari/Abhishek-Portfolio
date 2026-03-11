import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Sun, Moon, Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/70 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/70">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-telephone-red origin-left z-[60] dark:bg-accent-red"
        style={{ scaleX }}
      />

      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-telephone-red font-serif text-lg font-bold text-white transition-transform group-hover:scale-110 dark:bg-accent-red">
              A
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              T<span className="text-telephone-red dark:text-accent-red">.</span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-colors hover:text-telephone-red dark:hover:text-accent-red ${isActive ? "text-zinc-950 dark:text-zinc-50" : "text-zinc-500"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-5 left-0 right-0 h-0.5 bg-telephone-red dark:bg-accent-red"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden w-32 sm:block lg:w-48">
            <div className="flex h-9 items-center justify-between rounded-full border border-zinc-200 bg-zinc-50/50 px-3 text-xs text-zinc-400 backdrop-blur-sm transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
              <div className="flex items-center gap-2">
                <Search className="h-3.5 w-3.5" />
                <span>Search</span>
              </div>
              <kbd className="hidden rounded-full bg-zinc-200 px-1.5 py-0.5 font-sans text-[9px] font-bold text-zinc-500 dark:bg-zinc-800 sm:inline-block">
                ⌘K
              </kbd>
            </div>
          </div>

          <a
            href="https://github.com/Itz-Abhishek-Tiwari"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
          >
            <Github className="h-5 w-5" />
          </a>

          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
          >
            {theme === "light" ? <Moon className="h-4.5 w-4.5" /> : <Sun className="h-4.5 w-4.5" />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white transition-all hover:bg-telephone-red md:hidden dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-accent-red dark:hover:text-white"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden"
          >
            <div className="flex flex-col gap-1 p-4 pb-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-4 text-lg font-semibold transition-all ${isActive
                      ? "bg-zinc-100 text-telephone-red dark:bg-zinc-900 dark:text-accent-red"
                      : "text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                      }`}
                  >
                    {link.label}
                    <ArrowRight className={`h-5 w-5 transition-transform ${isActive ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                  </Link>
                );
              })}
              <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-900">
                <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Socials</p>
                <div className="mt-2 flex gap-2 px-2">
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-50 hover:bg-blue-50 hover:text-blue-600 dark:bg-zinc-900">
                    <Github className="h-6 w-6" />
                  </a>
                  {/* Add more social icons if needed */}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
