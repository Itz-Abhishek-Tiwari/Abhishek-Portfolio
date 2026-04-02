import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import PropTypes from 'prop-types';
import Section from "../ui/Section";
import { useStyle } from "../../context/StyleContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Education({ education = [] }) {
  const { designStyle } = useStyle();
  const isCyberpunk = designStyle === 'cyberpunk';
  const isGlass = designStyle === 'glass';

  if (isCyberpunk) {
    return (
      <Section title="Academic Foundation" id="education" accentColor="bg-primary">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative p-6 border border-primary/20 bg-card/40 backdrop-blur overflow-hidden transition-all hover:border-primary/60 hover:shadow-[0_0_20px_rgba(232,121,249,0.15)]"
              style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%)' }}
            >
              {/* Scanline overlay */}
              <div className="absolute inset-0 cyberpunk-scanlines opacity-0 group-hover:opacity-10 transition-opacity" />

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <GraduationCap className="h-5 w-5 text-primary group-hover:drop-shadow-[0_0_8px_rgba(232,121,249,0.8)]" />
                  </div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 border border-accent/20">
                    {item.start_date.split('-')[0]} {"//"} {item.end_date.split('-')[0]}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-mono font-black text-foreground group-hover:text-primary transition-colors">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground mt-1 uppercase tracking-tight">
                    {item.degree}
                  </p>
                </div>

                {item.cgpa && (
                  <div className="flex items-center gap-3 mt-2">
                    <div className="h-[2px] w-8 bg-primary/40" />
                    <span className="text-[10px] font-mono font-black uppercase text-primary tracking-[0.2em]">CGPA: {item.cgpa}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    );
  }

  if (isGlass) {
    return (
      <Section title="Academic Foundation" id="education" accentColor="bg-primary">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-8 transition-all duration-500 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '32px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
              }}
            >
              <div className="absolute inset-0 glass-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                    }}>
                    <BookOpen className="h-6 w-6" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'var(--muted-foreground)',
                    }}>
                    <Calendar className="h-3 w-3" />
                    {item.start_date.split('-')[0]} – {item.end_date.split('-')[0]}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-sans font-bold" style={{ color: 'var(--foreground)' }}>
                    {item.institution}
                  </h3>
                  <p className="border-t border-white/5 pt-3 mt-3 text-base" style={{ color: 'var(--muted-foreground)' }}>
                    {item.degree}
                  </p>
                </div>

                {item.cgpa && (
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                      style={{
                        background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                      }}>
                      CGPA: {item.cgpa}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    );
  }

  // Terminal / Gruvbox
  return (
    <Section title="Academic Foundation" id="education" accentColor="bg-vibrant-cyan">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col border border-border divide-y divide-border"
      >
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group relative flex flex-col gap-4 p-6 md:p-8 hover:bg-secondary/20 transition-colors"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-vibrant-cyan scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[10px] font-black text-muted-foreground mt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-mono font-black text-foreground group-hover:text-primary transition-colors">
                    {item.institution}
                  </h3>
                  <p className="text-base font-mono text-muted-foreground">
                    {item.degree}
                  </p>
                </div>
              </div>
              <span className="bg-secondary border border-border px-3 py-1 text-[10px] font-mono font-black uppercase tracking-widest text-primary tabular-nums whitespace-nowrap shrink-0">
                {item.start_date.split('-')[0]} — {item.end_date.split('-')[0]}
              </span>
            </div>

            {item.cgpa && (
              <div className="flex items-center gap-3 pl-8">
                <span className="bg-primary px-2 py-0.5 text-[10px] font-mono font-black uppercase text-primary-foreground">CGPA</span>
                <span className="text-sm font-mono font-bold text-foreground">{item.cgpa}</span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      institution: PropTypes.string.isRequired,
      start_date: PropTypes.string.isRequired,
      end_date: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      cgpa: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  )
};
