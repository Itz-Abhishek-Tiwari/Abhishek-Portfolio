import { ArrowUpRight } from "lucide-react";
import PropTypes from 'prop-types';

export default function WorkExperience({ work = [] }) {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="mb-12 flex items-center gap-3">
        <span className="h-px w-12 bg-primary" />
        <h2 className="text-2xl font-mono font-black uppercase tracking-widest text-foreground">Career Journey</h2>
      </div>

      <div className="flex flex-col border border-border divide-y divide-border">
        {work.map((item, index) => (
          <div
            key={item.id}
            className="group relative flex flex-col gap-4 p-6 md:p-8 transition-colors hover:bg-secondary/20"
          >
            {/* Left accent bar on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

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
              <span className="bg-secondary border border-border px-3 py-1 text-[10px] font-mono font-black uppercase tracking-widest text-primary tabular-nums whitespace-nowrap">
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
          </div>
        ))}
      </div>
    </section>
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
