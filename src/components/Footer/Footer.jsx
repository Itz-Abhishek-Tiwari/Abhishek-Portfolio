import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: "https://github.com/Itz-Abhishek-Tiwari", label: "GitHub" },
        { icon: Twitter, href: "https://x.com/itz-abhishek-tiwari", label: "Twitter" },
        { icon: Linkedin, href: "https://linkedin.com/in/itz-abhishek-tiwari", label: "LinkedIn" },
        { icon: Mail, href: "mailto:abhitiwariabhi7@gmail.com", label: "Email" },
    ];

    return (
        <footer className="border-t border-zinc-100 bg-white py-12 dark:border-zinc-900 dark:bg-zinc-950">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex flex-col items-center gap-2 sm:items-start">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            © {currentYear} Abhishek Tiwari. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500">
                            Built with <Heart className="h-3 w-3 fill-telephone-red text-telephone-red dark:fill-accent-red dark:text-accent-red" /> in Indore
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 transition-all hover:border-telephone-red hover:bg-telephone-red/5 dark:border-zinc-800 dark:hover:border-accent-red dark:hover:bg-accent-red/5"
                                aria-label={social.label}
                            >
                                <social.icon className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-telephone-red dark:text-zinc-400 dark:group-hover:text-accent-red" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="font-serif text-sm italic text-zinc-400 dark:text-zinc-600">
                        "Design is not just what it looks like and feels like. Design is how it works."
                    </p>
                </div>
            </div>
        </footer>
    );
}
