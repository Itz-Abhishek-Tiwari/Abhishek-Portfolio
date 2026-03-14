import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

export default function WorkExperience({ work = [] }) {
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
            {/* Left accent bar on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-vibrant-orange scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div className="flex items-start gap-4">
                {/* Index */}
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
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-8 mt-1 flex w-fit items-center gap-1.5 text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                Official Site
                <ArrowUpRight className="h-3.5 w-3.5" />
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
