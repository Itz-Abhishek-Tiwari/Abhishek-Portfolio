import { motion } from "framer-motion";
import { Code2, Terminal, Cpu, Database, Layers, Globe, Zap } from "lucide-react";
import portfolioData from "../../data";

const skillColors = {
  "JavaScript": "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-500 dark:border-yellow-500/20",
  "Python": "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
  "SQL": "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20",
  "React Native": "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20",
  "Redux": "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20",
  "React": "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20",
  "Django": "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  "TailwindCSS": "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20",
  "Bootstrap": "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20",
  "Git/GitHub": "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700",
  "Linux Shell": "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700",
  "Neovim": "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20",
};

const floatingIcons = [
  { Icon: Code2, top: "10%", left: "5%", delay: 0 },
  { Icon: Terminal, top: "40%", right: "8%", delay: 1 },
  { Icon: Cpu, bottom: "15%", left: "12%", delay: 2 },
  { Icon: Database, bottom: "30%", right: "5%", delay: 0.5 },
  { Icon: Layers, top: "25%", left: "15%", delay: 1.5 },
  { Icon: Globe, top: "50%", left: "8%", delay: 2.5 },
  { Icon: Zap, bottom: "10%", right: "15%", delay: 0.2 },
];

export default function Skills() {
  const { languages = [], frameworks = [], miscellaneous = [] } = portfolioData.skills_list || {};
  const allSkills = [...languages, ...frameworks, ...miscellaneous];

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-50/50 p-8 sm:p-12 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50">
      {/* Background Decorative Icons */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            className="absolute"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom
            }}
          >
            <item.Icon size={120} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-wrap gap-3">
        {allSkills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-2xl border px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:scale-110 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.05)] ${skillColors[skill] || "bg-white text-zinc-500 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
              }`}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
