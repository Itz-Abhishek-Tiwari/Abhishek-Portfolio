import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Database, Code2 } from "lucide-react"
import { Hero, SocialLinks, Skills, Projects, WorkExperience, Education, Reviews } from '../../components'
import portfolioData from "../../data"

// Section wrapper for Vercel-style layout
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

export default function Home() {
  const [projects] = useState(portfolioData.projects)
  const [review] = useState(portfolioData.review);
  const [work] = useState(portfolioData.work)
  const [education] = useState(portfolioData.education)

  return (
    <main className="mx-auto pb-24">
      <Hero />
      <SocialLinks />

      <Section title="About" id="about" accentColor="bg-vibrant-yellow">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Briefcase,
              color: "text-vibrant-blue",
              bg: "bg-vibrant-blue/10",
              text: <>Senior-level <span className="font-bold text-foreground transition-colors group-hover:text-primary">React Native & Backend Developer</span> with a focus on technical precision and user experience.</>
            },
            {
              icon: Database,
              color: "text-vibrant-emerald",
              bg: "bg-vibrant-emerald/10",
              text: <>Specialized in <span className="font-bold text-foreground transition-colors group-hover:text-primary">React Native, Redux, and Python-Django</span>. Expert in complex architectures and real-time systems.</>
            },
            {
              icon: Code2,
              color: "text-vibrant-purple",
              bg: "bg-vibrant-purple/10",
              text: <>Devoted to a <span className="font-bold text-foreground transition-colors group-hover:text-primary">minimalist workflow</span> via Neovim and Linux. Building architecturally sound and delightful software.</>
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="vercel-card p-8 flex flex-col gap-6 group"
            >
              <div className={`h-11 w-11 ${item.bg} ${item.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                style={{ borderLeft: '2px solid currentColor' }}>
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-mono leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Skills />
      <WorkExperience work={work} />
      <Projects projects={projects} />
      <Education education={education} />
      <Reviews review={review} />

      {/* Connect Section */}
      <section id="connect" className="mx-6 my-24 relative overflow-hidden bg-secondary border border-border p-12 text-center sm:p-24">
        {/* Left + top accent borders */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-primary">Hire Me</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-mono font-black tracking-tight text-foreground leading-tight">
            Let&apos;s build something<br />
            <span className="text-primary">exceptional</span>
            <span className="text-muted-foreground"> together</span>
            <span className="text-primary cursor-blink">_</span>
          </h2>
          <p className="max-w-xl text-muted-foreground text-base font-mono">
            Currently available for high-impact projects and engineering opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="/contact" className="vercel-button-primary py-4 px-10 gap-2 group">
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="mailto:abhitiwariabhi7@gmail.com" className="vercel-button-secondary py-4 px-10 gap-2">
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
