import PropTypes from 'prop-types';

const Section = ({ title, id, children, accentColor = "bg-vibrant-yellow" }) => (
    <section id={id} className="relative py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
                <span className={`h-px w-12 ${accentColor}`}></span>
                <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-foreground">
                    {title}
                </h2>
            </div>
            <div className="w-full">{children}</div>
        </div>
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
    accentColor: PropTypes.string
};

export default Section;
