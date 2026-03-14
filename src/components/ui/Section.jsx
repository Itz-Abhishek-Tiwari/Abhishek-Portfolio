import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const Section = ({ title, id, children, accentColor = "bg-vibrant-yellow", subtitle }) => (
    <section id={id} className="relative py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-10">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-3"
            >
                <div className="flex items-center gap-4">
                    <span className={`h-px w-12 ${accentColor}`}></span>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-foreground">
                        {title}
                    </h2>
                </div>
                {subtitle && (
                    <p className="text-sm font-mono text-muted-foreground max-w-2xl leading-relaxed pl-16">
                        {subtitle}
                    </p>
                )}
            </motion.div>
            <div className="w-full">{children}</div>
        </div>
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    accentColor: PropTypes.string,
    subtitle: PropTypes.string,
};

export default Section;
