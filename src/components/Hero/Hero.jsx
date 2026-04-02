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
        {/* Status Badge — sharp, terminal-style with glassmorphism */}
        <motion.div
          variants={childVariants}
          className="mb-8 flex items-center gap-3 border border-primary/20 bg-secondary/30 px-5 py-2.5 text-[10px] font-mono font-black backdrop-blur-xl shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-foreground uppercase tracking-[0.3em]">System Status: Online</span>
          <span className="text-primary/60 mx-1">|</span>
          <div className="flex items-center gap-1.5 text-primary">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span className="uppercase tracking-widest">Verified Dev</span>
          </div>
        </motion.div>

        {/* Profile Image — SQUARE with premium accents */}
        <motion.div
          variants={childVariants}
          className="relative mb-12"
        >
          <div className="absolute -inset-6 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative group">
            {/* Corner accents — Thicker and more vibrant */}
            <span className="absolute -top-2 -left-2 h-6 w-6 border-t-4 border-l-4 border-primary z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
            <span className="absolute -top-2 -right-2 h-6 w-6 border-t-4 border-r-4 border-primary z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-4 border-l-4 border-primary z-10 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1" />
            <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-4 border-r-4 border-primary z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            
            <div className="relative h-40 w-40 md:h-52 md:w-52 border-2 border-primary/30 overflow-hidden bg-zinc-900 shadow-2xl">
              {/* Shimmer skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 shimmer opacity-50" />
              )}
              <img
                src={profileImg}
                alt="Abhishek Tiwari"
                onLoad={() => setImageLoaded(true)}
                className={`h-full w-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              />
              {/* Scanline effect overlay on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none gruvbox-scanlines" />
              {/* Online indicator */}
              <div className="absolute bottom-3 right-3 h-4 w-4 border-2 border-background bg-vibrant-emerald shadow-[0_0_10px_rgba(184,187,38,0.5)]" />
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={childVariants} className="space-y-6">
          <h1 className="text-6xl md:text-9xl font-mono font-black tracking-tighter text-foreground leading-[0.9] uppercase">
            <Typewriter text="Abhishek Tiwari" />
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-xl text-muted-foreground font-mono leading-relaxed px-4">
            <span className="text-primary font-bold tracking-tighter mr-2">&gt;_</span>
            Architecting <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-8">high-performance</span> digital ecosystems and 
            <span className="block mt-2">
              <span className="text-vibrant-cyan font-bold italic">scalable solutions</span> for the modern web.
            </span>
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
           variants={childVariants}
           className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-16"
        >
          <Link to="/contact" className="vercel-button-primary px-10 py-4 h-14 gap-3 text-sm group">
            <Mail className="h-5 w-5" />
            Initialize Contact
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Link>
          <a
            href={resumePdf}
            download="Abhishek_Tiwari_Resume.pdf"
            className="vercel-button-secondary px-10 py-4 h-14 gap-3 text-sm group shadow-xl"
          >
            <Download className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-1.5" />
            Fetch Résumé
          </a>
          <Link to="/projects" className="vercel-button-secondary px-10 py-4 h-14 gap-3 text-sm group shadow-xl">
            <Zap className="h-5 w-5 text-vibrant-yellow transition-transform group-hover:rotate-12" />
            Project Archive
          </Link>
        </motion.div>

        {/* Quick Stats — Premium Grid with Hover effects */}
        <motion.div
          variants={childVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px mt-24 w-full border border-primary/10 bg-primary/10 shadow-2xl"
        >
          {[
            { icon: Code2, label: "Thoughtwin", sub: "Senior Mobile Engineer", color: "text-vibrant-cyan" },
            { icon: Briefcase, label: "Ideal IT", sub: "Backend Architect", color: "text-vibrant-orange" },
            { icon: MapPin, label: "Indore, IN", sub: "Location · UTC+5:30", color: "text-vibrant-emerald" },
            { icon: Clock, label: time, sub: "Local System Time", color: "text-primary" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-8 bg-background/80 backdrop-blur-md transition-all duration-300 hover:bg-secondary/40 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-500" />
              <item.icon className={`h-6 w-6 mb-4 ${item.color} transition-transform group-hover:scale-125 duration-500`} />
               <span className="text-base font-mono font-black text-foreground tracking-tight">{item.label}</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mt-2">{item.sub}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          variants={childVariants}
          className="mt-20 flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] font-black">Decrypt Depth</span>
          <ChevronDown className="h-5 w-5 animate-scroll-bounce text-primary/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
