import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Zap, ChevronRight, Activity, Download } from "lucide-react";
import profileImg from "../../assets/profile.png";
import resumePdf from "../../pdf/abhishek_tiwari.pdf";
import { Link } from "react-router-dom";

export default function HeroCyberpunk() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat('en-US', {
        hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata'
      }).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 overflow-hidden font-mono bg-transparent">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl flex flex-col items-center text-center"
      >
        {/* System status badge */}
        <motion.div variants={childVariants} className="mb-6 inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-4 py-1.5 shadow-[0_0_15px_rgba(232,121,249,0.3)]">
          <Activity className="h-4 w-4 animate-pulse text-primary" />
          <span className="text-xs uppercase tracking-widest font-black text-primary neon-flicker">System Ready_</span>
        </motion.div>

        {/* Profile image with neon glow border */}
        <motion.div variants={childVariants} className="relative mb-8 group">
          {/* Animated neon border */}
          <div className="absolute -inset-[3px] opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(90deg, #e879f9, #22d3ee, #facc15, #22d3ee, #e879f9)',
              backgroundSize: '300% 100%',
              animation: 'beam-move 3s linear infinite',
            }}
          />
          <div className="relative overflow-hidden bg-black border border-background"
            style={{ height: '176px', width: '176px' }}
          >
            <img
              src={profileImg}
              alt="Abhishek Tiwari"
              onLoad={() => setImageLoaded(true)}
              className={`h-full w-full object-cover filter contrast-110 saturate-125 transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* Cyberpunk overlay */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, rgba(232, 121, 249, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)',
              mixBlendMode: 'overlay',
            }} />
            {/* Glitch scan line */}
            <div
              className="absolute left-0 right-0 h-[1px] opacity-60"
              style={{
                background: 'linear-gradient(90deg, transparent, #22d3ee, #e879f9, transparent)',
                animation: 'scanline-move 4s linear infinite',
              }}
            />
            {/* Corner markers */}
            <span className="absolute top-1 left-1 h-3 w-3 border-t border-l border-accent opacity-80" />
            <span className="absolute top-1 right-1 h-3 w-3 border-t border-r border-primary opacity-80" />
            <span className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-accent opacity-80" />
            <span className="absolute bottom-1 right-1 h-3 w-3 border-b border-r border-primary opacity-80" />
          </div>
        </motion.div>

        {/* Name — with glitch layers */}
        <motion.div variants={childVariants} className="relative mb-4">
          {/* Glitch clone layers */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-primary/30 animate-cyber-glitch-1"
              style={{ WebkitTextStroke: '1px rgba(232,121,249,0.4)', color: 'transparent' }}>
              Abhishek Tiwari
            </h1>
          </div>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-accent/30 animate-cyber-glitch-2"
              style={{ WebkitTextStroke: '1px rgba(34,211,238,0.4)', color: 'transparent' }}>
              Abhishek Tiwari
            </h1>
          </div>
          <h1 className="relative text-5xl md:text-8xl font-black tracking-tighter uppercase"
            style={{
              background: 'linear-gradient(135deg, #22d3ee 0%, #f0e6ff 40%, #e879f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(232, 121, 249, 0.3))',
            }}
          >
            Abhishek Tiwari
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div variants={childVariants} className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <span className="text-accent text-lg md:text-2xl font-black tracking-widest uppercase px-2 border border-accent/40 bg-accent/10">Netrunner</span>
          <span className="text-muted-foreground font-mono">{"// "}</span>
          <span className="text-foreground text-lg md:text-2xl font-black tracking-widest uppercase px-2">Code Mercenary</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={childVariants} className="flex flex-wrap justify-center gap-5 mt-12">
          <Link
            to="/contact"
            className="relative px-8 py-4 font-black uppercase tracking-widest transition-all group overflow-hidden"
            style={{
              background: 'var(--accent)',
              color: 'var(--accent-foreground)',
              clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="h-5 w-5" /> Connect <ChevronRight className="h-5 w-5" />
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)' }}
            />
          </Link>
          <Link
            to="/projects"
            className="relative px-8 py-4 font-black uppercase tracking-widest transition-all group border-2 border-primary text-primary hover:text-background overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 100%, 12px 100%)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="h-5 w-5" /> Missions
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
              style={{ background: 'var(--primary)' }}
            />
          </Link>
          <a
            href={resumePdf}
            download="Abhishek_Tiwari_Resume.pdf"
            className="relative px-8 py-4 font-black uppercase tracking-widest transition-all group border border-muted-foreground/30 text-muted-foreground hover:text-foreground hover:border-foreground/60"
            style={{
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
          >
            <span className="flex items-center gap-2"><Download className="h-5 w-5" /> Data.exe</span>
          </a>
        </motion.div>

        {/* Status strip */}
        <motion.div variants={childVariants} className="mt-20 w-full border border-primary/20 bg-background/60 backdrop-blur grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10">
          {[
            { label: "THOUGHTWIN", sub: "SR. MOBILE ENG.", color: "text-accent" },
            { label: "IDEAL IT", sub: "BACKEND ARCH.", color: "text-primary" },
            { label: "INDORE / IN", sub: "LOCATION", color: "text-vibrant-emerald" },
            { label: time || "00:00", sub: "LOCAL_TIME", color: "text-vibrant-yellow" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-background/80 transition-all group hover:bg-secondary/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className={`text-sm md:text-base font-black tracking-wider ${item.color}`}>{item.label}</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground/60 mt-1">{item.sub}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
