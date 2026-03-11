import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
    {
        name: "X",
        icon: Twitter,
        link: "https://x.com/itz-abhishek-tiwari",
        color: "group-hover:text-black dark:group-hover:text-white",
        bg: "group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800",
        border: "hover:border-black dark:hover:border-white"
    },
    {
        name: "GitHub",
        icon: Github,
        link: "https://github.com/Itz-Abhishek-Tiwari",
        color: "group-hover:text-[#24292e] dark:group-hover:text-white",
        bg: "group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800",
        border: "hover:border-[#24292e] dark:hover:border-white"
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        link: "https://linkedin.com/in/itz-abhishek-tiwari",
        color: "group-hover:text-[#0077b5]",
        bg: "group-hover:bg-[#0077b5]/10",
        border: "hover:border-[#0077b5]"
    },
    {
        name: "Email",
        icon: Mail,
        link: "mailto:abhitiwariabhi7@gmail.com",
        color: "group-hover:text-telephone-red dark:group-hover:text-accent-red",
        bg: "group-hover:bg-telephone-red/10 dark:group-hover:bg-accent-red/10",
        border: "hover:border-telephone-red dark:hover:border-accent-red"
    },
];

export default function SocialLinks() {
    return (
        <div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 -mt-12 relative z-20">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + (index * 0.1) }}
                        className={`group flex items-center gap-3 rounded-2xl border border-zinc-200/50 bg-white/50 p-3 backdrop-blur-md transition-all hover:bg-white hover:shadow-xl dark:border-zinc-800/50 dark:bg-zinc-950/50 dark:hover:bg-zinc-900 ${social.border}`}
                    >
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 transition-colors dark:bg-zinc-900 ${social.bg}`}>
                            <social.icon className={`h-4.5 w-4.5 text-zinc-500 transition-colors dark:text-zinc-400 ${social.color}`} />
                        </div>
                        <div className="min-w-0">
                            <span className={`block truncate text-xs font-bold text-zinc-900 dark:text-zinc-100 ${social.color}`}>{social.name}</span>
                            <span className="block truncate text-[9px] font-medium uppercase tracking-widest text-zinc-400">Connect</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
