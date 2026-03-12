import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
    {
        name: "X / Twitter",
        handle: "@itz-abhishek-tiwari",
        icon: Twitter,
        link: "https://x.com/itz-abhishek-tiwari",
        accentColor: "#83a598",
    },
    {
        name: "GitHub",
        handle: "Itz-Abhishek-Tiwari",
        icon: Github,
        link: "https://github.com/Itz-Abhishek-Tiwari",
        accentColor: "#d3869b",
    },
    {
        name: "LinkedIn",
        handle: "itz-abhishek-tiwari",
        icon: Linkedin,
        link: "https://linkedin.com/in/itz-abhishek-tiwari",
        accentColor: "#8ec07c",
    },
    {
        name: "Email",
        handle: "abhitiwariabhi7@gmail.com",
        icon: Mail,
        link: "mailto:abhitiwariabhi7@gmail.com",
        accentColor: "#fe8019",
    },
];

export default function SocialLinks() {
    return (
        <div className="mx-auto max-w-6xl px-6 pb-20 -mt-12 relative z-20">
            <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4 bg-border border border-border">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + (index * 0.1) }}
                        className="group flex items-center justify-between bg-background p-5 transition-all hover:bg-secondary/50"
                        style={{ borderTop: `2px solid ${social.accentColor}` }}
                        onMouseEnter={e => e.currentTarget.style.borderTopColor = social.accentColor}
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className="flex h-9 w-9 items-center justify-center bg-secondary border border-border transition-colors"
                                style={{}}
                            >
                                <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-mono font-black text-foreground">{social.name}</span>
                                <span className="text-[10px] font-mono text-muted-foreground truncate max-w-[120px]">{social.handle}</span>
                            </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
