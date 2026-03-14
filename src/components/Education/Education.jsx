import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import Section from "../ui/Section";

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
            {/* Left accent bar on hover */}
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
