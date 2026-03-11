import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Volume2, MapPin, Clock, Mail, Phone, Link2, Code2, Briefcase } from "lucide-react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      };
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      setTime(timeString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 pt-20 pb-32 sm:px-6 lg:pt-32">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="mesh-blob h-[400px] w-[600px] bg-telephone-red/20 top-[-10%] left-[-10%]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="mesh-blob h-[500px] w-[500px] bg-accent-red/10 bottom-[10%] right-[-5%]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="mesh-blob h-[350px] w-[350px] bg-foliage-green/10 bottom-[-5%] left-[20%]"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-20 md:gap-32">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-24">
            {/* Expanded Profile Image with Red Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group shrink-0"
            >
              <div className="relative h-56 w-56 sm:h-72 sm:w-72">
                {/* Red Pulse Glow */}
                <div className="absolute inset-[-15px] rounded-full bg-telephone-red/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
                <div className="relative h-full w-full overflow-hidden rounded-full border-[10px] border-white shadow-2xl dark:border-zinc-900 ring-1 ring-zinc-200 dark:ring-zinc-800">
                  <img
                    src="/src/assets/profile.png"
                    alt="Abhishek Tiwari"
                    className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-8 right-8 h-10 w-10 rounded-full border-4 border-white bg-green-500 shadow-2xl dark:border-zinc-900">
                  <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75"></span>
                </div>
              </div>
            </motion.div>

            {/* Premium Typography Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 space-y-8"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100/80 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:bg-zinc-900/80 dark:text-zinc-400 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Open to work
                </span>
                <div className="flex items-center gap-1.5 rounded-full bg-telephone-red/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-telephone-red dark:text-accent-red border border-telephone-red/20 backdrop-blur-sm">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified Developer
                </div>
              </div>

              <h1 className="font-serif text-6xl font-black tracking-[-0.04em] text-zinc-950 dark:text-zinc-50 md:text-9xl leading-[0.85]">
                Abhishek<br />
                <span className="text-telephone-red dark:text-accent-red">Tiwari</span>
              </h1>

              <div className="space-y-6 pt-4">
                <p className="max-w-xl text-2xl font-medium leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Engineering high-performance <span className="text-zinc-950 dark:text-zinc-50 border-b-2 border-telephone-red/30">mobile ecosystems</span> and scalable enterprise architectures.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-6">
                  <button className="group relative flex items-center gap-3 rounded-full bg-zinc-950 px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-telephone-red dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-accent-red dark:hover:text-white shadow-[0_20px_40px_-15px_rgba(230,57,70,0.3)]">
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </button>
                  <button className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-7 py-4 text-sm font-bold text-zinc-600 backdrop-blur-md transition-all hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:bg-zinc-900">
                    <Volume2 className="h-4 w-4 text-telephone-red" />
                    Listen Name
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Luxury Status Grid - More Spaced Out */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Code2, label: "Thoughtwin", sub: "React Native", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: Briefcase, label: "Ideal IT", sub: "Backend dev", color: "text-orange-500", bg: "bg-orange-500/10" },
              { icon: MapPin, label: "Indore", sub: "India", color: "text-rose-500", bg: "bg-rose-500/10" },
              { icon: Clock, label: time, sub: "UTC+5:30", color: "text-purple-500", bg: "bg-purple-500/10" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="group flex flex-col gap-5 rounded-[2rem] border border-zinc-200/50 bg-white/40 p-8 backdrop-blur-xl transition-all hover:bg-white hover:border-telephone-red/20 dark:border-zinc-800/50 dark:bg-zinc-950/40 dark:hover:bg-zinc-900 shadow-sm hover:shadow-2xl"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.label}</h3>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
