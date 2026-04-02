import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Mail, ArrowRight, Code2, Briefcase, Download } from "lucide-react";
import profileImg from "../../assets/profile.png";
import resumePdf from "../../pdf/abhishek_tiwari.pdf";
import { Link } from "react-router-dom";
import Typewriter from "../Typewriter/Typewriter";

export default function HeroTerminal() {
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 overflow-hidden bg-transparent">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Status Badge */}
        <motion.div variants={childVariants} className="mb-8 flex items-center gap-3 border border-primary/20 bg-secondary/30 px-5 py-2.5 text-[10px] font-mono font-black backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-foreground uppercase tracking-[0.3em]">System Status: <span className="text-primary">Online</span></span>
        </motion.div>

        {/* Terminal Window Chrome + Profile Image */}
        <motion.div variants={childVariants} className="relative mb-12">
          <div className="relative group">
            {/* Terminal window header */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary border-x border-t border-primary/20">
              <span className="h-3 w-3 rounded-full bg-[#fb4934] shadow-[0_0_6px_#fb4934]" />
              <span className="h-3 w-3 rounded-full bg-[#fabd2f] shadow-[0_0_6px_#fabd2f]" />
              <span className="h-3 w-3 rounded-full bg-[#b8bb26] shadow-[0_0_6px_#b8bb26]" />
              <span className="ml-auto text-[9px] font-mono text-muted-foreground tracking-widest uppercase">~/abhishek.jpg</span>
            </div>

            {/* Corner brackets */}
            <span className="absolute -top-2 -left-2 h-5 w-5 border-t-4 border-l-4 border-primary z-10" />
            <span className="absolute -top-2 -right-2 h-5 w-5 border-t-4 border-r-4 border-primary z-10" />
            <span className="absolute -bottom-2 -left-2 h-5 w-5 border-b-4 border-l-4 border-primary z-10" />
            <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b-4 border-r-4 border-primary z-10" />

            <div className="relative h-40 w-40 md:h-52 md:w-52 border-2 border-x border-b border-primary/30 overflow-hidden bg-zinc-900 shadow-2xl">
              {!imageLoaded && <div className="absolute inset-0 shimmer opacity-50" />}
              <img
                src={profileImg}
                alt="Abhishek Tiwari"
                onLoad={() => setImageLoaded(true)}
                className={`h-full w-full object-cover transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 scale-110'}`}
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none gruvbox-scanlines" />
              {/* Subtle scan effect */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </motion.div>

        {/* Name + Tagline */}
        <motion.div variants={childVariants} className="space-y-6">
          <h1 className="text-5xl md:text-9xl font-mono font-black tracking-tighter text-foreground leading-[0.9] uppercase">
            <Typewriter text="Abhishek Tiwari" />
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-xl text-muted-foreground font-mono leading-relaxed px-4">
            <span className="text-primary font-bold tracking-tighter mr-2">&gt;_</span>
            Architecting <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-8">high-performance</span> digital ecosystems.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={childVariants} className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-16">
          <Link to="/contact" className="vercel-button-primary px-10 py-4 h-14 gap-3 text-sm group">
            <Mail className="h-5 w-5" /> Initialize Contact <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
          <a href={resumePdf} download="Abhishek_Tiwari_Resume.pdf" className="vercel-button-secondary px-10 py-4 h-14 gap-3 text-sm group">
            <Download className="h-5 w-5" /> Fetch Résumé
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={childVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px mt-24 w-full border border-primary/10 bg-primary/10">
          {[
            { icon: Code2, label: "Thoughtwin", sub: "Senior Mobile Engineer", color: "text-vibrant-cyan" },
            { icon: Briefcase, label: "Ideal IT", sub: "Backend Architect", color: "text-vibrant-orange" },
            { icon: MapPin, label: "Indore, IN", sub: "Location · UTC+5:30", color: "text-vibrant-emerald" },
            { icon: Clock, label: time, sub: "Local System Time", color: "text-primary" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-8 bg-background/80 backdrop-blur-md transition-all duration-300 hover:bg-secondary/40 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <item.icon className={`h-6 w-6 mb-4 ${item.color}`} />
              <span className="text-base font-mono font-black text-foreground">{item.label}</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mt-2">{item.sub}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
