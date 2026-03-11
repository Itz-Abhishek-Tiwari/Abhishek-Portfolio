import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Reviews({ review = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!review || review.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % review.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [review?.length]);

  if (!review || review.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl border-t border-zinc-200 px-4 py-24 dark:border-zinc-800 sm:px-6">
      <div className="flex flex-col items-center">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-zinc-400">
          Testimonials
        </h2>

        <div className="relative h-48 w-full overflow-hidden lg:h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center"
            >
              <p className="max-w-2xl text-lg font-medium italic leading-relaxed text-zinc-900 dark:text-zinc-100 sm:text-xl">
                "{review[index]?.review}"
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review[index]?.client_name}`}
                    alt={review[index]?.client_name}
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{review[index]?.client_name}</p>
                  <p className="text-xs text-zinc-500">{review[index]?.client_designation}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {review.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-1.5 rounded-full transition-all ${i === index ? "bg-zinc-900 w-4 dark:bg-zinc-100" : "bg-zinc-300 dark:bg-zinc-800"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
