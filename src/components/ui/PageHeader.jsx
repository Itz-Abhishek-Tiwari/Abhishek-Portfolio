import { motion } from "framer-motion";
import Typewriter from "../Typewriter/Typewriter";
import PropTypes from 'prop-types';

const PageHeader = ({ label, title, subtitle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 border-b border-border pb-12"
        >
            <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-primary" />
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-primary">
                    {label}
                </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-mono font-black tracking-tight text-foreground">
                <Typewriter text={title} />
            </h1>
            {subtitle && (
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground font-mono">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

PageHeader.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default PageHeader;
