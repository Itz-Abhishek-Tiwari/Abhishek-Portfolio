import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const GitHubCalendar = () => {
    return (
        <section className="px-6 py-12 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl font-bold uppercase tracking-tighter text-[#ebdbb2]">
                    Contribution Pipeline <span className="text-[#fabd2f]">03</span>
                </h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#3c3836] to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#282828] border border-[#3c3836] p-6 relative group overflow-hidden"
            >
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-[#928374]">
                        <Calendar size={14} />
                        <span className="text-[10px] uppercase tracking-widest font-mono">Real-time commit activity (365 Days)</span>
                    </div>
                </div>

                <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                    <div className="min-w-[800px] flex justify-center">
                        <img
                            src="https://ghchart.rshah.org/fabd2f/Itz-Abhishek-Tiwari"
                            alt="Abhishek's GitHub Contributions"
                            className="w-full opacity-80 hover:opacity-100 transition-opacity duration-500 filter brightness-90 contrast-110"
                            style={{ mixBlendMode: 'screen' }}
                        />
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center text-[10px] text-[#504945] uppercase font-mono">
                    <span>Less Output</span>
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 bg-[#3c3836]" />
                        <div className="w-2.5 h-2.5 bg-[#4e4620]" />
                        <div className="w-2.5 h-2.5 bg-[#786a24]" />
                        <div className="w-2.5 h-2.5 bg-[#a38e2b]" />
                        <div className="w-2.5 h-2.5 bg-[#fabd2f]" />
                    </div>
                    <span>Heavy Output</span>
                </div>

                {/* Decorative scanning line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#fabd2f]/10 translate-x-[-100%] group-hover:animate-scan" />
            </motion.div>
        </section>
    );
};

export default GitHubCalendar;
