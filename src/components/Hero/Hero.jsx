import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock, Mail, ArrowRight, Code2, Briefcase, Zap, Download } from "lucide-react";
import profileImg from "../../assets/profile.png";
import resumePdf from "../../pdf/abhishek_tiwari.pdf";
import { Link } from "react-router-dom";
import Typewriter from "../Typewriter/Typewriter";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat('en-US', {
        hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata'
      }).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 overflow-hidden bg-transparent">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Status Badge — sharp, terminal-style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 border border-border bg-secondary/80 px-4 py-2 text-xs font-mono font-bold backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-muted-foreground uppercase tracking-[0.2em]">Available for hire</span>
          <span className="text-border mx-1">|</span>
          <div className="flex items-center gap-1 text-primary">
            <CheckCircle2 className="h-3 w-3" />
            <span>Verified Dev</span>
          </div>
        </motion.div>

        {/* Profile Image — SQUARE (no rounded corners) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Gruvbox yellow glow on hover */}
          <div className="absolute -inset-3 bg-primary/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700" />
          {/* Sharp square border with accent corners */}
          <div className="relative">
            {/* Corner accents */}
            <span className="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-primary z-10" />
            <span className="absolute -top-1 -right-1 h-4 w-4 border-t-2 border-r-2 border-primary z-10" />
            <span className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-primary z-10" />
            <span className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-primary z-10" />
            <div className="relative h-36 w-36 md:h-44 md:w-44 border-2 border-border overflow-hidden bg-secondary">
              {/* Skeleton State */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full bg-gradient-to-r from-secondary via-border/50 to-secondary animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Initializing...
                  </div>
                </div>
              )}
              <img
                src={profileImg}
                alt="Abhishek Tiwari"
                onLoad={() => setImageLoaded(true)}
                className={`h-full w-full object-cover transition-all duration-700 hover:scale-105 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
              />
              {/* Online indicator */}
              <div className="absolute bottom-2 right-2 h-3 w-3 border-2 border-background bg-primary" />
            </div>
          </div>
        </motion.div>

        {/* Main Heading — Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-8xl font-mono font-black tracking-tight text-foreground leading-[1.0]">
            <Typewriter text="Abhishek Tiwari" />
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground font-mono leading-relaxed">
            <span className="text-primary">&gt;</span>{" "}
            Engineering <span className="text-foreground font-bold">high-performance</span> software ecosystems and{" "}
            <span className="text-foreground font-bold">scalable architectures</span> for the next generation web.
          </p>
        </motion.div>

        {/* CTAs — fully sharp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-12"
        >
          <Link
            to="/contact"
            className="vercel-button-primary px-8 py-3 h-12 gap-2 text-sm group"
          >
            <Mail className="h-4 w-4" />
            Contact Me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={resumePdf}
            download="Abhishek_Tiwari_Resume.pdf"
            className="vercel-button-secondary px-8 py-3 h-12 gap-2 text-sm group"
          >
            <Download className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-1" />
            Download Resume
          </a>
          <Link
            to="/projects"
            className="vercel-button-secondary px-8 py-3 h-12 gap-2 text-sm"
          >
            <Zap className="h-4 w-4 text-primary" />
            View Projects
          </Link>
        </motion.div>

        {/* Quick Stats — sharp cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 w-full border border-border bg-border">
          {[
            { icon: Code2, label: "Thoughtwin", sub: "React Native Dev", color: "text-vibrant-cyan" },
            { icon: Briefcase, label: "Ideal IT", sub: "Backend Engineer", color: "text-vibrant-orange" },
            { icon: MapPin, label: "Indore", sub: "India · UTC+5:30", color: "text-vibrant-emerald" },
            { icon: Clock, label: time, sub: "Local Time", color: "text-primary" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
              className="flex flex-col items-center p-4 bg-background border-0 transition-colors hover:bg-secondary/50 group"
            >
              <item.icon className={`h-5 w-5 mb-2 ${item.color} transition-transform group-hover:scale-110`} />
              <span className="text-sm font-mono font-bold text-foreground">{item.label}</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">{item.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
