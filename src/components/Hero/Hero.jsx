import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock, Mail, ArrowRight, Code2, Briefcase, Zap, Download, ChevronDown } from "lucide-react";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 overflow-hidden bg-transparent">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        {/* Status Badge — sharp, terminal-style */}
        <motion.div
          variants={childVariants}
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
          variants={childVariants}
          className="relative mb-8"
        >
          <div className="absolute -inset-3 bg-primary/10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700" />
          <div className="relative">
            {/* Corner accents */}
            <span className="absolute -top-1 -left-1 h-4 w-4 border-t-2 border-l-2 border-primary z-10" />
            <span className="absolute -top-1 -right-1 h-4 w-4 border-t-2 border-r-2 border-primary z-10" />
            <span className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-primary z-10" />
            <span className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-primary z-10" />
            <div className="relative h-36 w-36 md:h-44 md:w-44 border-2 border-border overflow-hidden bg-secondary">
              {/* Shimmer skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 shimmer" />
              )}
              <img
                src={profileImg}
                alt="Abhishek Tiwari"
                onLoad={() => setImageLoaded(true)}
                className={`h-full w-full object-cover transition-all duration-700 hover:scale-105 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              />
              {/* Online indicator */}
              <div className="absolute bottom-2 right-2 h-3 w-3 border-2 border-background bg-primary" />
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={childVariants} className="space-y-4">
          <h1 className="text-5xl md:text-8xl font-mono font-black tracking-tight text-foreground leading-[1.0]">
            <Typewriter text="Abhishek Tiwari" />
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground font-mono leading-relaxed">
            <span className="text-primary">&gt;</span>{" "}
            Engineering <span className="text-foreground font-bold">high-performance</span> software ecosystems and{" "}
            <span className="text-foreground font-bold">scalable architectures</span> for the next generation web.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-12"
        >
          <Link to="/contact" className="vercel-button-primary px-8 py-3 h-12 gap-2 text-sm group">
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
          <Link to="/projects" className="vercel-button-secondary px-8 py-3 h-12 gap-2 text-sm">
            <Zap className="h-4 w-4 text-primary" />
            View Projects
          </Link>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={childVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 w-full border border-border bg-border"
        >
          {[
            { icon: Code2, label: "Thoughtwin", sub: "React Native Dev", color: "text-vibrant-cyan" },
            { icon: Briefcase, label: "Ideal IT", sub: "Backend Engineer", color: "text-vibrant-orange" },
            { icon: MapPin, label: "Indore", sub: "India · UTC+5:30", color: "text-vibrant-emerald" },
            { icon: Clock, label: time, sub: "Local Time", color: "text-primary" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 bg-background transition-colors hover:bg-secondary/50 group"
            >
              <item.icon className={`h-5 w-5 mb-2 ${item.color} transition-transform group-hover:scale-110`} />
              <span className="text-sm font-mono font-bold text-foreground">{item.label}</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">{item.sub}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          variants={childVariants}
          className="mt-16 flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Scroll to explore</span>
          <ChevronDown className="h-4 w-4 animate-scroll-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
