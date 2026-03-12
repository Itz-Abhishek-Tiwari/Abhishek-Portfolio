import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            {/* Top accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                    {/* Brand */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-lg font-black text-foreground">
                                abhishek<span className="text-primary">_</span>tiwari
                            </span>
                        </div>
                        <p className="text-xs font-mono text-muted-foreground">
                            © {currentYear} · All rights reserved
                        </p>
                        <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                            Built in Indore, India 🇮🇳
                        </p>
                    </div>

                    {/* Social Icons — sharp squares */}
                    <div className="flex items-center gap-2">
                        {[
                            { icon: Github, href: "https://github.com/Itz-Abhishek-Tiwari", label: "GitHub", hoverColor: "#d3869b" },
                            { icon: Twitter, href: "https://x.com/itz-abhishek-tiwari", label: "Twitter", hoverColor: "#83a598" },
                            { icon: Linkedin, href: "https://linkedin.com/in/itz-abhishek-tiwari", label: "LinkedIn", hoverColor: "#8ec07c" },
                            { icon: Mail, href: "mailto:abhitiwariabhi7@gmail.com", label: "Email", hoverColor: "#fe8019" },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex h-10 w-10 items-center justify-center border border-border bg-secondary transition-all hover:scale-105"
                                style={{ '--hover-color': social.hoverColor }}
                                aria-label={social.label}
                                onMouseEnter={e => e.currentTarget.style.borderColor = social.hoverColor}
                                onMouseLeave={e => e.currentTarget.style.borderColor = ''}
                            >
                                <social.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                    <p className="text-xs font-mono italic text-muted-foreground/50">
                        &quot;First, solve the problem. Then, write the code.&quot;
                    </p>
                    <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 bg-primary animate-pulse" />
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">gruvbox</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
