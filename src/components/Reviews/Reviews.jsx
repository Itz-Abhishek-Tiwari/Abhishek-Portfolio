import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';

export default function Reviews({ review = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!review || review.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % review.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [review]);

  if (!review || review.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl border-t border-border px-6 py-20">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-12 bg-primary" />
          <h2 className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-primary">
            Testimonials
          </h2>
          <span className="h-px w-12 bg-primary" />
        </div>

        <div className="relative min-h-48 w-full max-w-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Quote */}
              <div className="relative mb-6">
                <span className="absolute -top-4 -left-4 text-4xl font-bold text-primary opacity-50 font-mono">"</span>
                <p className="max-w-2xl text-lg font-medium italic leading-relaxed text-foreground sm:text-xl px-6">
                  {review[index]?.review}
                </p>
                <span className="absolute -bottom-8 -right-4 text-4xl font-bold text-primary opacity-50 font-mono">"</span>
              </div>

              {/* Author */}
              <div className="mt-10 flex items-center gap-4 border border-border bg-secondary/50 px-4 py-3">
                <div className="h-10 w-10 overflow-hidden border border-border">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review[index]?.client_name}`}
                    alt={review[index]?.client_name}
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-mono font-black text-foreground">{review[index]?.client_name}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{review[index]?.client_designation}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators — sharp squares */}
        <div className="mt-10 flex justify-center gap-2">
          {review.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-300 ${i === index ? "bg-primary w-8" : "bg-border w-3 hover:bg-muted-foreground"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

Reviews.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      review: PropTypes.string.isRequired,
      client_name: PropTypes.string.isRequired,
      client_designation: PropTypes.string.isRequired
    })
  )
};
