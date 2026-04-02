import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Building2 } from "lucide-react";
import PropTypes from 'prop-types';
import Section from "../ui/Section";
import { useStyle } from "../../context/StyleContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export default function WorkExperience({ work = [] }) {
  const { designStyle } = useStyle();
  const isCyberpunk = designStyle === 'cyberpunk';
  const isGlass = designStyle === 'glass';

  if (isCyberpunk) {
    return (
      <Section title="Career Journey" id="work" accentColor="bg-primary">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-4"
        >
          {work.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              className="group relative flex flex-col gap-4 p-6 border border-primary/20 bg-card/50 backdrop-blur overflow-hidden transition-all hover:border-primary/60 hover:shadow-[0_0_25px_rgba(232,121,249,0.12)]"
            >
              {/* Animated left neon bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent via-primary to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              {/* Index tag */}
              <span className="absolute top-4 right-5 font-mono text-[10px] font-black text-primary/40 group-hover:text-primary/70 transition-colors">
                .{String(index + 1).padStart(3, '0')}
              </span>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between pr-12">
                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-primary mt-1 shrink-0 group-hover:drop-shadow-[0_0_4px_rgba(232,121,249,0.8)] transition-all" />
                  <div>
                    <h3 className="text-lg font-mono font-black text-foreground group-hover:text-primary transition-colors">
                      {item.company}
                    </h3>
                    <p className="text-xs font-mono text-accent/80 mt-0.5 uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
                <span className="self-start border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-mono font-black uppercase tracking-widest text-primary whitespace-nowrap">
                  {item.duration}
                </span>
              </div>

              <p className="text-sm font-mono leading-relaxed text-muted-foreground pl-7 border-l border-accent/20">
                {item.description}
              </p>

              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer"
                  className="pl-7 mt-1 flex w-fit items-center gap-1.5 text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent">
                  Official Site <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    );
  }

  if (isGlass) {
    return (
      <Section title="Career Journey" id="work" accentColor="bg-primary">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-5"
        >
          {work.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.005 }}
              className="group relative flex flex-col gap-4 p-7 transition-all duration-500 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              {/* Shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none glass-shimmer" style={{ borderRadius: '20px' }} />

              {/* Number badge */}
              <div className="absolute top-5 right-6 flex items-center justify-center h-7 w-7 rounded-full text-[10px] font-bold"
                style={{
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  color: 'var(--primary)',
                }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between pr-12">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(255,255,255,0.25)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.35)',
                      borderRadius: '12px',
                    }}>
                    <Building2 className="h-4 w-4" style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <h3 className="text-base font-sans font-bold transition-colors group-hover:text-primary" style={{ color: 'var(--foreground)' }}>
                      {item.company}
                    </h3>
                    <p className="text-xs font-sans" style={{ color: 'var(--muted-foreground)' }}>{item.role}</p>
                  </div>
                </div>
                <span className="self-start text-xs font-medium px-3 py-1"
                  style={{
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '99px',
                    color: 'var(--primary)',
                    whiteSpace: 'nowrap',
                  }}>
                  {item.duration}
                </span>
              </div>

              <p className="text-sm font-sans leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                {item.description}
              </p>

              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer"
                  className="flex w-fit items-center gap-1.5 text-xs font-medium transition-colors hover:text-primary"
                  style={{ color: 'var(--muted-foreground)' }}>
                  Official Site <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    );
  }

  // Terminal / Gruvbox
  return (
    <Section title="Career Journey" id="work" accentColor="bg-vibrant-orange">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col border border-border divide-y divide-border"
      >
        {work.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group relative flex flex-col gap-4 p-6 md:p-8 transition-colors hover:bg-secondary/20"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-vibrant-orange scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[10px] font-black text-muted-foreground mt-1 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-mono font-black text-foreground group-hover:text-primary transition-colors">
                    {item.company}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground mt-0.5">{item.role}</p>
                </div>
              </div>
              <span className="bg-secondary border border-border px-3 py-1 text-[10px] font-mono font-black uppercase tracking-widest text-primary tabular-nums whitespace-nowrap self-start sm:self-auto">
                {item.duration}
              </span>
            </div>

            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground pl-8">
              {item.description}
            </p>

            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer"
                className="pl-8 mt-1 flex w-fit items-center gap-1.5 text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
                Official Site <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

WorkExperience.propTypes = {
  work: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      company: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  )
};
