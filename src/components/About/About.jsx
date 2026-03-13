import { motion } from "framer-motion"
import { Briefcase, Database, Code2 } from "lucide-react"
import Section from "../ui/Section"

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const items = [
        {
            icon: Briefcase,
            color: "text-vibrant-blue",
            bg: "bg-vibrant-blue/10",
            accent: "border-vibrant-blue",
            text: <>Senior-level <span className="font-bold text-foreground transition-colors group-hover:text-primary">React Native & Backend Developer</span> with a focus on technical precision and user experience.</>
        },
        {
            icon: Database,
            color: "text-vibrant-emerald",
            bg: "bg-vibrant-emerald/10",
            accent: "border-vibrant-emerald",
            text: <>Specialized in <span className="font-bold text-foreground transition-colors group-hover:text-primary">React Native, Redux, and Python-Django</span>. Expert in complex architectures and real-time systems.</>
        },
        {
            icon: Code2,
            color: "text-vibrant-purple",
            bg: "bg-vibrant-purple/10",
            accent: "border-vibrant-purple",
            text: <>Devoted to a <span className="font-bold text-foreground transition-colors group-hover:text-primary">minimalist workflow</span> via Neovim and Linux. Building architecturally sound and delightful software.</>
        }
    ];

    return (
        <Section title="About" id="about" accentColor="bg-vibrant-yellow">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-3"
            >
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        whileHover={{ backgroundColor: "var(--color-secondary)" }}
                        className="bg-background p-8 flex flex-col gap-6 group transition-colors relative h-full"
                    >
                        {/* Corner accent */}
                        <div className={`absolute top-0 left-0 w-1 h-1 border-l border-t ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

                        <div className={`h-11 w-11 ${item.bg} ${item.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                            style={{ borderLeft: '2px solid currentColor' }}>
                            <item.icon className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-mono leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default About;
