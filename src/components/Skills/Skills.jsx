import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Layers } from "lucide-react";
import portfolioData from "../../data";
import Section from "../ui/Section";
import PropTypes from 'prop-types';
import BugBattle from "./BugBattle";

const SkillCard = ({ title, skills, icon: Icon, accentColor }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 }
    }}
    className="vercel-card flex flex-col gap-6 p-6 h-full"
    style={{ borderTop: `2px solid ${accentColor}` }}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 bg-secondary flex items-center justify-center border border-border" style={{ borderLeft: `2px solid ${accentColor}` }}>
          <Icon className="h-4 w-4 text-foreground" />
        </div>
        <h3 className="text-sm font-mono font-black uppercase tracking-widest text-foreground">{title}</h3>
      </div>
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">
        {skills.length}
      </span>
    </div>

    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <span
          key={skill}
          className="border border-border bg-secondary/80 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-secondary"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.elementType.isRequired,
  accentColor: PropTypes.string.isRequired
};

export default function Skills() {
  const { languages = [], frameworks = [], miscellaneous = [] } = portfolioData.skills_list || {};
  const [isBattling, setIsBattling] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  return (
    <Section
      title="Technical Arsenal"
      id="skills"
      accentColor="bg-vibrant-purple"
      rightElement={
        <button
          onClick={() => setIsBattling(!isBattling)}
          className={`flex items-center gap-2 px-3 py-1 border text-[10px] font-mono font-bold uppercase tracking-widest transition-all ${isBattling
            ? "bg-vibrant-red/10 border-vibrant-red text-vibrant-red hover:bg-vibrant-red hover:text-white"
            : "bg-vibrant-emerald/10 border-vibrant-emerald text-vibrant-emerald hover:bg-vibrant-emerald hover:text-white"
            }`}
        >
          <Terminal className="h-3 w-3" />
          {isBattling ? "Exit Debug" : "Enter Debug Mode"}
        </button>
      }
    >
      <AnimatePresence mode="wait">
        {isBattling ? (
          <motion.div
            key="battle"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="border border-border bg-border/20 backdrop-blur-sm"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border"
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
