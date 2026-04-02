import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { useStyle } from "../../context/StyleContext";

const Section = ({ title, id, children, accentColor = "bg-vibrant-yellow", subtitle, rightElement }) => {
    const { designStyle } = useStyle();
    const isCyberpunk = designStyle === 'cyberpunk';
    const isGlass = designStyle === 'glass';

    // ── Terminal: accent bar + big bold font (current style) ──────────────
    const TerminalHeader = (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <span className={`h-px w-12 ${accentColor}`} />
                <h2 className="text-3xl md:text-5xl font-mono font-black tracking-tight text-foreground uppercase">
                    {title}
                </h2>
            </div>
            {rightElement && <div className="flex-shrink-0">{rightElement}</div>}
        </div>
    );

    // ── Cyberpunk: bracket notation + neon gutter ─────────────────────────
    const CyberpunkHeader = (
        <div className="flex items-center justify-between gap-4">
            <div className="flex items-start gap-3">
                <div className="flex flex-col items-center gap-1 pt-1 shrink-0">
                    <span className="text-accent font-mono text-xs font-black opacity-60">{"{"}</span>
                    <span className="h-8 w-px bg-gradient-to-b from-accent/60 to-primary/60" />
                    <span className="text-primary font-mono text-xs font-black opacity-60">{"}"}</span>
                </div>
                <div>
                    <span className="text-[9px] font-mono font-black uppercase tracking-[0.3em] text-accent/70 block mb-1">
                        {"//"} section.{String(id || title).toLowerCase().replace(/\s+/g, '_')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-mono font-black tracking-tight text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(135deg, var(--foreground) 0%, var(--primary) 100%)' }}>
                        {title}
                    </h2>
                </div>
            </div>
            {rightElement && <div className="flex-shrink-0">{rightElement}</div>}
        </div>
    );

    // ── Glass: soft gradient label + sans-serif ───────────────────────────
    const GlassHeader = (
        <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                    style={{ color: 'var(--primary)', opacity: 0.8 }}>
                    ✦ {id || title}
                </span>
                <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight"
                    style={{ color: 'var(--foreground)' }}>
                    {title}
                </h2>
                <div className="h-0.5 w-16 mt-1 rounded-full"
                    style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent))' }} />
            </div>
            {rightElement && <div className="flex-shrink-0">{rightElement}</div>}
        </div>
    );

    const headerContent = isCyberpunk ? CyberpunkHeader : isGlass ? GlassHeader : TerminalHeader;

    const sectionBg = isCyberpunk
        ? "relative py-20 px-6 max-w-6xl mx-auto"
        : isGlass
        ? "relative py-20 px-6 max-w-6xl mx-auto"
        : "relative py-20 px-6 max-w-6xl mx-auto";

    return (
        <section id={id} className={sectionBg}>
            {/* Cyberpunk: side rule decoration */}
            {isCyberpunk && (
                <div className="absolute left-0 top-24 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
            )}

            <div className="flex flex-col gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col gap-3"
                >
                    {headerContent}
                    {subtitle && (
                        <p className={`text-sm text-muted-foreground max-w-2xl leading-relaxed ${isGlass ? 'font-sans pl-0' : 'font-mono pl-16'}`}>
                            {subtitle}
                        </p>
                    )}
                </motion.div>
                <div className="w-full">{children}</div>
            </div>
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    accentColor: PropTypes.string,
    subtitle: PropTypes.string,
    rightElement: PropTypes.node,
};

export default Section;
