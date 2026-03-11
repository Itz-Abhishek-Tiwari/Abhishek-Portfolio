import { GraduationCap, ArrowUpRight } from "lucide-react";

export default function Education({ education = [] }) {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mb-12 flex items-center gap-2">
        <span className="h-px w-8 bg-telephone-red dark:bg-accent-red"></span>
        <h2 className="font-serif text-2xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50">Academic Foundation</h2>
      </div>
      <div className="flex flex-col">
        {education.map((item, index) => (
          <div
            key={item.id}
            className={`group relative flex flex-col gap-3 pl-8 transition-colors ${index !== education.length - 1 ? "border-l-2 border-zinc-100 pb-16 dark:border-zinc-900 hover:border-telephone-red/30 dark:hover:border-accent-red/30" : "pb-0"
              }`}
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-white bg-zinc-200 transition-all duration-300 group-hover:scale-125 group-hover:bg-telephone-red dark:border-zinc-950 dark:bg-zinc-800 dark:group-hover:bg-accent-red" />

            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {item.institution}
              </h3>
              <span className="rounded-full bg-zinc-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500 tabular-nums dark:bg-zinc-900/50">
                {item.start_date.split('-')[0]} — {item.end_date.split('-')[0]}
              </span>
            </div>

            <p className="text-sm font-bold text-telephone-red dark:text-accent-red">
              {item.degree}
            </p>

            {item.cgpa && (
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-black uppercase text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">CGPA</span>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{item.cgpa}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
