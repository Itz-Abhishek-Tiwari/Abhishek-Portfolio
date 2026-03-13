import { motion } from "framer-motion";
import { Code2, Terminal, Layers } from "lucide-react";
import portfolioData from "../../data";
import Section from "../ui/Section";
import PropTypes from 'prop-types';

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
    <Section title="Technical Arsenal" id="skills" accentColor="bg-vibrant-purple">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
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
    </Section>
  );
}
