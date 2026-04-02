import { Github, Twitter, Linkedin, Mail, Terminal, Zap, Sparkles } from "lucide-react";
import { useStyle } from "../../context/StyleContext";

const SOCIAL_LINKS = [
    { icon: Github, href: "https://github.com/Itz-Abhishek-Tiwari", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/itz-abhishek-tiwari", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/itz-abhishek-tiwari", label: "LinkedIn" },
    { icon: Mail, href: "mailto:abhitiwariabhi7@gmail.com", label: "Email" },
];

const SOCIAL_COLORS = {
    terminal: {
        GitHub: "var(--vibrant-purple)",
        Twitter: "var(--vibrant-blue)",
        LinkedIn: "var(--vibrant-cyan)",
        Email: "var(--vibrant-orange)",
    },
    cyberpunk: {
        GitHub: "var(--neon-magenta, #e879f9)",
        Twitter: "var(--neon-cyan, #22d3ee)",
        LinkedIn: "var(--vibrant-blue)",
        Email: "var(--neon-yellow, #facc15)",
    },
    glass: {
        GitHub: "var(--vibrant-purple)",
        Twitter: "var(--vibrant-cyan)",
        LinkedIn: "var(--vibrant-blue)",
        Email: "var(--vibrant-pink)",
    },
};

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { designStyle } = useStyle();

    const isCyberpunk = designStyle === 'cyberpunk';
    const isGlass = designStyle === 'glass';

    const colors = SOCIAL_COLORS[designStyle] || SOCIAL_COLORS.terminal;

    const footerClass = isCyberpunk
        ? "border-t border-primary/20 bg-background"
        : isGlass
        ? "border-t border-border/30 bg-background/60 backdrop-blur-xl"
        : "border-t border-border bg-background";

    const TopAccentLine = isCyberpunk
        ? <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-accent opacity-60" />
        : isGlass
        ? <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-80" />
        : <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />;

    const BrandIcon = isCyberpunk ? Zap : isGlass ? Sparkles : Terminal;

    const brandText = isCyberpunk ? (
        <span className="font-mono text-lg font-black text-foreground neon-flicker">
            {"<"}ab_<span className="text-primary">tiwari</span>{"/>"}
        </span>
    ) : isGlass ? (
        <span className="font-sans text-lg font-bold text-foreground">
            abhishek<span className="text-primary">.</span>dev
        </span>
    ) : (
        <span className="font-mono text-lg font-black text-foreground">
            abhishek<span className="text-primary">_</span>tiwari
        </span>
    );

    const themeBadge = isCyberpunk ? (
        <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-primary shadow-[0_0_6px_currentColor] animate-pulse" style={{ background: 'var(--primary)' }} />
            <span className="text-[10px] font-mono text-primary uppercase tracking-widest neon-flicker">[CYBERPUNK]</span>
        </div>
    ) : isGlass ? (
        <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-sans font-medium text-muted-foreground tracking-wider">[glassmorphism]</span>
        </div>
    ) : (
        <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-primary animate-pulse" />
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">gruvbox</span>
        </div>
    );

    const socialButtonClass = isCyberpunk
        ? "group flex h-10 w-10 items-center justify-center border border-primary/20 bg-secondary transition-all hover:scale-105 hover:shadow-[0_0_12px_rgba(232,121,249,0.5)]"
        : isGlass
        ? "group flex h-10 w-10 items-center justify-center border border-border/40 bg-background/30 backdrop-blur transition-all hover:scale-105 hover:bg-background/60"
        : "group flex h-10 w-10 items-center justify-center border border-border bg-secondary transition-all hover:scale-105";

    const quoteClass = isCyberpunk
        ? "text-xs font-mono italic text-muted-foreground/60"
        : isGlass
        ? "text-xs font-sans italic text-muted-foreground/50"
        : "text-xs font-mono italic text-muted-foreground/50";

    const quote = isCyberpunk
        ? '"Wake up, samurai. We have code to compile."'
        : isGlass
        ? '"Design is not just what it looks like. Design is how it works."'
        : '"First, solve the problem. Then, write the code."';

    return (
        <footer className={footerClass}>
            {TopAccentLine}

            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                    {/* Brand */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <BrandIcon className={`h-4 w-4 text-primary ${isCyberpunk ? 'drop-shadow-[0_0_6px_currentColor]' : ''}`} />
                            {brandText}
                        </div>
                        <p className={`text-xs ${isCyberpunk ? 'font-mono' : isGlass ? 'font-sans' : 'font-mono'} text-muted-foreground`}>
                            © {currentYear} · All rights reserved
                        </p>
                        <p className={`text-[10px] ${isCyberpunk ? 'font-mono font-bold uppercase tracking-[0.2em]' : isGlass ? 'font-sans font-medium' : 'font-mono font-bold uppercase tracking-[0.2em]'} text-muted-foreground/60`}>
                            Built in Indore, India 🇮🇳
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                className={socialButtonClass}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = colors[social.label];
                                    if (isCyberpunk) e.currentTarget.style.boxShadow = `0 0 12px ${colors[social.label]}`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = '';
                                    e.currentTarget.style.boxShadow = '';
                                }}
                            >
                                <social.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className={`mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isCyberpunk ? 'border-t border-primary/15' : 'border-t border-border/50'}`}>
                    <p className={quoteClass}>
                        {quote}
                    </p>

                    <div className="flex items-center gap-3">
                        <span className="text-[9px] font-mono text-muted-foreground/30 uppercase tracking-widest hidden md:block">
                            Press <kbd className="kbd" style={{ fontSize: '9px', padding: '1px 4px' }}>?</kbd> for shortcuts
                        </span>
                        {themeBadge}
                    </div>
                </div>
            </div>
        </footer>
    );
}
