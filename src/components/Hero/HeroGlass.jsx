import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, MapPin, Clock, Briefcase, Code2, Download } from "lucide-react";
import profileImg from "../../assets/profile.png";
import resumePdf from "../../pdf/abhishek_tiwari.pdf";
import { Link } from "react-router-dom";

export default function HeroGlass() {
  const [imageLoaded, setImageLoaded] = useState(false);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 overflow-hidden font-sans bg-transparent">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center"
      >
        {/* Frosted glass hero card */}
        <motion.div
          variants={childVariants}
          className="w-full relative overflow-hidden p-8 md:p-14"
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
            borderRadius: '32px',
          }}
        >
          {/* Glass shimmer overlay */}
          <div className="absolute inset-0 pointer-events-none glass-shimmer" />

          {/* Gradient mesh inside card */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #818cf8, transparent 70%)', filter: 'blur(60px)' }}
          />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-25 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #c084fc, transparent 70%)', filter: 'blur(60px)' }}
          />

          {/* Profile image */}
          <motion.div
            variants={childVariants}
            className="relative mb-8 mx-auto"
            style={{ width: 'fit-content' }}
          >
            <div className="relative">
              <div
                className="h-32 w-32 md:h-44 md:w-44 overflow-hidden mx-auto"
                style={{
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 0 0 4px rgba(129, 140, 248, 0.2)',
                }}
              >
                <img
                  src={profileImg}
                  alt="Abhishek Tiwari"
                  onLoad={() => setImageLoaded(true)}
                  className={`h-full w-full object-cover transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
              {/* Ring shimmer */}
              <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'conic-gradient(transparent, rgba(129, 140, 248, 0.5) 30%, rgba(192, 132, 252, 0.5) 60%, transparent)',
                  borderRadius: '50%',
                  animation: 'beam-move 4s linear infinite',
                  padding: '3px',
                  WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black 100%)',
                  mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black 100%)',
                }}
              />
            </div>

            {/* Online status pill */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold whitespace-nowrap"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '99px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                color: '#059669',
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={childVariants}>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              Crafting Digital <br className="hidden md:block" />
              <span style={{
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Experiences.</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={childVariants}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10" style={{ color: 'var(--muted-foreground)' }}>
              Full-stack engineer specializing in scalable, beautiful, and highly-performant web applications.
              Building the future, <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>one component at a time.</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all hover:scale-105 shadow-xl group"
              style={{
                background: 'var(--primary)',
                color: 'var(--primary-foreground)',
                borderRadius: '99px',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
              }}
            >
              Start a conversation <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium transition-all hover:scale-105 group"
              style={{
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                color: 'var(--foreground)',
                borderRadius: '99px',
              }}
            >
              <Layers className="h-5 w-5" /> View Work
            </Link>
            <a
              href={resumePdf}
              download="Abhishek_Tiwari_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium transition-all hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'var(--muted-foreground)',
                borderRadius: '99px',
              }}
            >
              <Download className="h-4 w-4" /> Résumé
            </a>
          </motion.div>
        </motion.div>

        {/* Floating stats strips */}
        <motion.div variants={childVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 w-full">
          {[
            { icon: Code2, label: "Thoughtwin", sub: "Senior Mobile Eng.", gradient: 'from-blue-500/20 to-indigo-500/10' },
            { icon: Briefcase, label: "Ideal IT", sub: "Backend Architect", gradient: 'from-purple-500/20 to-pink-500/10' },
            { icon: MapPin, label: "Indore, IN", sub: "UTC+5:30", gradient: 'from-emerald-500/20 to-teal-500/10' },
            { icon: Clock, label: time || "--:--", sub: "Local Time", gradient: 'from-amber-500/20 to-orange-500/10' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col items-center p-5 relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60`} style={{ borderRadius: '16px' }} />
              <item.icon className="h-5 w-5 mb-3 relative z-10" style={{ color: 'var(--primary)' }} />
              <span className="text-sm font-semibold relative z-10" style={{ color: 'var(--foreground)' }}>{item.label}</span>
              <span className="text-[10px] mt-1 relative z-10" style={{ color: 'var(--muted-foreground)' }}>{item.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
