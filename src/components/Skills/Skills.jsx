import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Layers, Cpu, Globe, Rocket } from "lucide-react";
import portfolioData from "../../data";
import Section from "../ui/Section";
import PropTypes from 'prop-types';
import BugBattle from "./BugBattle";
import { useStyle } from "../../context/StyleContext";

const SkillCard = ({ title, skills, icon: Icon, accentColor }) => {
  const { designStyle } = useStyle();
  const isCyberpunk = designStyle === 'cyberpunk';
  const isGlass = designStyle === 'glass';

  if (isCyberpunk) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative flex flex-col gap-6 p-6 h-full border border-primary/20 bg-card/40 backdrop-blur overflow-hidden transition-all hover:border-primary/60 hover:shadow-[0_0_20px_rgba(232,121,249,0.1)]"
      >
        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 h-8 w-8 overflow-hidden">
          <div className="absolute top-0 right-0 h-px w-12 bg-primary rotate-45 translate-x-4 opacity-40 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
              <Icon className="h-5 w-5 text-primary group-hover:drop-shadow-[0_0_8px_rgba(232,121,249,0.8)]" />
            </div>
            <h3 className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-foreground group-hover:text-primary transition-colors">
              {"> "} {title}
            </h3>
          </div>
          <span className="text-[10px] font-mono font-bold text-accent opacity-60">
            [{skills.length}]
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="relative px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground border border-primary/10 bg-primary/5 hover:text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all cursor-default"
            >
              {skill}
              {/* Subtle neon pulse */}
              <span className="absolute inset-x-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
            </span>
          ))}
        </div>
      </motion.div>
    );
  }

  if (isGlass) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative flex flex-col gap-7 p-8 h-full transition-all duration-500 overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '32px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.03)',
        }}
      >
        <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 flex items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: `0 8px 20px -8px ${accentColor}`,
              }}>
              <Icon className="h-6 w-6" style={{ color: accentColor }} />
            </div>
            <h3 className="text-base font-sans font-bold" style={{ color: 'var(--foreground)' }}>{title}</h3>
          </div>
          <div className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'var(--muted-foreground)' }}>
            {skills.length}
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-[11px] font-sans font-medium rounded-xl transition-all duration-300 hover:scale-[1.05]"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'var(--foreground)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.borderColor = accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    );
  }

  // Terminal / Gruvbox
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background flex flex-col gap-6 p-8 h-full group relative transition-colors hover:bg-secondary/20"
    >
      <div className="absolute top-0 left-0 w-[3px] h-0 bg-primary group-hover:h-12 transition-all duration-300 ease-out" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-secondary flex items-center justify-center border border-border" style={{ borderLeft: `2px solid ${accentColor}` }}>
            <Icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          </div>
          <h3 className="text-sm font-mono font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">{title}</h3>
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5 group-hover:border-primary/50 transition-colors">
          {skills.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border border-border bg-secondary/80 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary hover:bg-background"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.elementType.isRequired,
  accentColor: PropTypes.string.isRequired
};

export default function Skills() {
  const { languages = [], frameworks = [], miscellaneous = [] } = portfolioData.skills_list || {};
  const [isBattling, setIsBattling] = useState(false);
  const { designStyle } = useStyle();
  const isCyberpunk = designStyle === 'cyberpunk';
  const isGlass = designStyle === 'glass';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const debugButtonClass = isCyberpunk
    ? `flex items-center gap-2 px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] transition-all border-2 ${isBattling ? 'bg-primary border-primary text-background shadow-[0_0_15px_rgba(232,121,249,0.8)]' : 'bg-transparent border-primary/40 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_10px_rgba(232,121,249,0.4)]'}`
    : isGlass
    ? `flex items-center gap-2 px-5 py-2 font-sans font-bold text-[11px] uppercase tracking-widest transition-all rounded-full ${isBattling ? 'bg-primary text-white shadow-lg' : 'bg-white/10 backdrop-blur-md border border-white/20 text-foreground hover:bg-white/20'}`
    : `flex items-center gap-2 px-3 py-1 border text-[10px] font-mono font-bold uppercase tracking-widest transition-all ${isBattling ? "bg-vibrant-red/10 border-vibrant-red text-vibrant-red" : "bg-vibrant-emerald/10 border-vibrant-emerald text-vibrant-emerald hover:bg-vibrant-emerald hover:text-white"}`;

  return (
    <Section
      title="Technical Arsenal"
      id="skills"
      accentColor="bg-vibrant-purple"
      rightElement={
        <button onClick={() => setIsBattling(!isBattling)} className={debugButtonClass}>
          {isCyberpunk ? (
            <>
              {isBattling ? <Cpu className="h-3 w-3 animate-spin" /> : <Terminal className="h-3 w-3" />}
              {isBattling ? "[RUNTIME_ACTIVE]" : "[INITIALIZE_DEBUG]"}
            </>
          ) : isGlass ? (
            <>
              {isBattling ? <Globe className="h-3.5 w-3.5 animate-pulse" /> : <Rocket className="h-3.5 w-3.5" />}
              {isBattling ? "Exit Experience" : "Start Experience"}
            </>
          ) : (
            <>
              <Terminal className="h-3 w-3" />
              {isBattling ? "Exit Debug" : "Enter Debug Mode"}
            </>
          )}
        </button>
      }
    >
      <AnimatePresence mode="wait">
        {isBattling ? (
          <motion.div
            key="battle"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className={`border overflow-hidden ${isCyberpunk ? 'border-primary/40 bg-card/60 backdrop-blur-xl' : isGlass ? 'border-white/20 bg-white/5 backdrop-blur-3xl rounded-[32px]' : 'border-border bg-border/20 backdrop-blur-sm'}`}
          >
            <BugBattle
              skills={{ languages, frameworks, miscellaneous }}
              onExit={() => setIsBattling(false)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${isCyberpunk || isGlass ? 'gap-6' : 'gap-px bg-border border border-border'}`}
          >
            <SkillCard
              title="Languages"
              skills={languages}
              icon={Code2}
              accentColor="var(--vibrant-blue)"
            />
            <SkillCard
              title="Frameworks"
              skills={frameworks}
              icon={Layers}
              accentColor="var(--vibrant-purple)"
            />
            <SkillCard
              title="Tools & Ecosystem"
              skills={miscellaneous}
              icon={Terminal}
              accentColor="var(--vibrant-emerald)"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
