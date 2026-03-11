import { Briefcase, ArrowUpRight } from "lucide-react";

export default function WorkExperience({ work = [] }) {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mb-12 flex items-center gap-2">
        <span className="h-px w-8 bg-telephone-red dark:bg-accent-red"></span>
        <h2 className="font-serif text-2xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50">Career Journey</h2>
      </div>
      <div className="flex flex-col">
        {work.map((item, index) => (
          <div
            key={item.id}
            className={`group relative flex flex-col gap-3 pl-8 transition-colors ${index !== work.length - 1 ? "border-l-2 border-zinc-100 pb-16 dark:border-zinc-900 hover:border-telephone-red/30 dark:hover:border-accent-red/30" : "pb-0"
              }`}
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-white bg-zinc-200 transition-all duration-300 group-hover:scale-125 group-hover:bg-telephone-red dark:border-zinc-950 dark:bg-zinc-800 dark:group-hover:bg-accent-red" />

            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {item.company}
                </h3>
                <p className="text-sm font-medium text-telephone-red dark:text-accent-red">{item.role}</p>
              </div>
              <span className="rounded-full bg-zinc-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500 tabular-nums dark:bg-zinc-900/50">
                {item.duration}
              </span>
            </div>

            <p className="max-w-3xl text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              {item.description}
            </p>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-telephone-red dark:hover:text-accent-red"
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
