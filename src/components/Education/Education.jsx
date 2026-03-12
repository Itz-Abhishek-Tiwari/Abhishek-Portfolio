import PropTypes from 'prop-types';

export default function Education({ education = [] }) {
  return (
    <section className="px-4 py-20 sm:px-6 max-w-6xl mx-auto">
      <div className="mb-12 flex items-center gap-3">
        <span className="h-px w-12 bg-primary" />
        <h2 className="text-2xl font-mono font-black uppercase tracking-widest text-foreground">Academic Foundation</h2>
      </div>

      <div className="flex flex-col border border-border divide-y divide-border">
        {education.map((item, index) => (
          <div
            key={item.id}
            className="group relative flex flex-col gap-4 p-6 md:p-8 hover:bg-secondary/20 transition-colors"
          >
            {/* Left accent bar on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            {/* Index dot — sharp square instead of circle */}
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
              <span className="bg-secondary border border-border px-3 py-1 text-[10px] font-mono font-black uppercase tracking-widest text-primary tabular-nums whitespace-nowrap">
                {item.start_date.split('-')[0]} — {item.end_date.split('-')[0]}
              </span>
            </div>

            {item.cgpa && (
              <div className="flex items-center gap-3 pl-8">
                <span className="bg-primary px-2 py-0.5 text-[10px] font-mono font-black uppercase text-primary-foreground">CGPA</span>
                <span className="text-sm font-mono font-bold text-foreground">{item.cgpa}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
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
