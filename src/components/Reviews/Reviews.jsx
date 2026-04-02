import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';
import { useStyle } from "../../context/StyleContext";
import { Quote, MessageSquare, Star } from "lucide-react";

export default function Reviews({ review = [] }) {
  const [index, setIndex] = useState(0);
  const { designStyle } = useStyle();
  const isCyberpunk = designStyle === 'cyberpunk';
  const isGlass = designStyle === 'glass';

  useEffect(() => {
    if (!review || review.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % review.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [review]);

  if (!review || review.length === 0) return null;

  const currentReview = review[index];

  // ── CYBERPUNK VARIANT ───────────────────────────────────────────────────
  if (isCyberpunk) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 relative">
        {/* Decorative HUD lines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary opacity-40 font-mono text-xs">0xAF</span>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-primary/40" />
              <h2 className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-primary neon-flicker">
                Verified_Transmissions
              </h2>
              <span className="h-[2px] w-8 bg-primary/40" />
            </div>
            <span className="text-accent opacity-40 font-mono text-xs">{"//"} HUB</span>
          </div>

          <div className="relative w-full max-w-3xl min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="flex flex-col items-center"
              >
                <div className="relative p-10 border border-primary/20 bg-card/40 backdrop-blur-md overflow-hidden"
                  style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
                  
                  {/* Glitch décor */}
                  <div className="absolute top-0 right-0 p-2 opacity-20">
                    <Star className="h-4 w-4 text-primary animate-pulse" />
                  </div>
                  
                  <div className="relative z-10">
                    <MessageSquare className="h-8 w-8 text-primary/30 mb-6" />
                    <p className="text-xl md:text-2xl font-mono leading-relaxed text-foreground italic px-4">
                      {">"} {currentReview?.review}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-5 border-t border-primary/10 pt-8">
                     <div className="h-14 w-14 overflow-hidden border-2 border-accent/40 bg-accent/10">
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentReview?.client_name}&backgroundColor=transparent`}
                          alt={currentReview?.client_name}
                          className="h-full w-full object-cover filter saturate-150 contrast-125"
                        />
                     </div>
                     <div className="text-left">
                        <p className="text-base font-mono font-black text-foreground uppercase tracking-wider">{currentReview?.client_name}</p>
                        <p className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-primary mt-1 opacity-70">
                          {currentReview?.client_designation}
                        </p>
                     </div>
                     <div className="ml-auto opacity-20">
                        <span className="font-mono text-[8px] font-black uppercase">Encrypted_Payload</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* HUD Indicators */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {review.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 border transition-all duration-300 ${
                  i === index 
                  ? "bg-primary border-primary w-10 shadow-[0_0_10px_rgba(232,121,249,0.8)]" 
                  : "bg-transparent border-primary/30 w-4 hover:border-primary/60"
                }`}
                style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── GLASS VARIANT ──────────────────────────────────────────────────────
  if (isGlass) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-3 mb-20 text-center">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary uppercase tracking-widest">
               <Star className="h-3 w-3 fill-primary" /> Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground">
              What People <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Say.</span>
            </h2>
          </div>

          <div className="relative w-full max-w-4xl min-h-[350px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  <div className="group relative p-10 md:p-16 rounded-[40px] overflow-hidden text-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(30px)',
                      WebkitBackdropFilter: 'blur(30px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                    }}>
                    
                    <div className="absolute inset-0 glass-shimmer opacity-30 pointer-events-none" />
                    
                    <Quote className="h-12 w-12 text-primary/10 mx-auto mb-8 transition-transform group-hover:scale-110" />
                    
                    <p className="text-xl md:text-3xl font-sans font-medium leading-tight text-foreground/90 max-w-2xl mx-auto">
                      &quot;{currentReview?.review}&quot;
                    </p>

                    <div className="mt-14 flex flex-col items-center gap-4">
                       <div className="h-16 w-16 overflow-hidden rounded-full p-1"
                         style={{ 
                           background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                           boxShadow: '0 8px 16px rgba(99, 102, 241, 0.2)'
                         }}>
                          <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentReview?.client_name}`}
                            alt={currentReview?.client_name}
                            className="h-full w-full object-cover rounded-full bg-white"
                          />
                       </div>
                       <div>
                          <p className="text-lg font-sans font-bold text-foreground">{currentReview?.client_name}</p>
                          <p className="text-xs font-sans font-medium text-muted-foreground mt-1 uppercase tracking-wider">{currentReview?.client_designation}</p>
                       </div>
                    </div>
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>

          <div className="mt-16 flex items-center justify-center gap-4">
             {review.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === index ? "bg-primary w-10 shadow-lg shadow-primary/20" : "bg-white/20 w-2 hover:bg-white/40"
                  }`}
                />
             ))}
          </div>
        </div>
      </section>
    );
  }

  // ── TERMINAL VARIANT ────────────────────────────────────────────────────
  return (
    <section className="mx-auto max-w-6xl border-t border-border px-6 py-24">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 mb-16">
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
              <div className="relative mb-10 group">
                <Quote className="absolute -top-10 -left-10 h-16 w-16 text-primary/10 transition-transform group-hover:scale-110" />
                <p className="max-w-2xl text-xl font-mono font-bold italic leading-relaxed text-foreground sm:text-2xl px-6">
                  &quot;{currentReview?.review}&quot;
                </p>
                <div className="absolute -bottom-10 -right-10 h-16 w-16 text-primary/10 rotate-180 transition-transform group-hover:scale-110" />
              </div>

              <div className="mt-10 flex items-center gap-5 border border-border bg-secondary/30 px-6 py-4 relative group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 overflow-hidden border border-border relative z-10">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentReview?.client_name}`}
                    alt={currentReview?.client_name}
                    className="h-full w-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-left relative z-10">
                  <p className="text-base font-mono font-black text-foreground uppercase tracking-widest">{currentReview?.client_name}</p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mt-1">{currentReview?.client_designation}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex justify-center gap-3">
          {review.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 flex items-center justify-center ${
                 i === index ? "bg-primary w-12" : "bg-border w-4 hover:bg-muted-foreground"
              }`}
            >
              {i === index && <span className="h-0.5 w-1/2 bg-background/50" />}
            </button>
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
