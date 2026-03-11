import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, User, Briefcase, GraduationCap, Database, Star } from "lucide-react"
import { Navbar, Hero, SocialLinks, Skills, Projects, WorkExperience, Education, Reviews, Footer, FloatingContact } from '../../components'
import portfolioData from "../../data"

// Section wrapper for cleaner Home.jsx
const Section = ({ title, icon: Icon, children, id }) => (
  <section id={id} className="relative py-16 px-4 sm:px-6">
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
      <div className="shrink-0 lg:w-48">
        <div className="flex items-center gap-2 lg:flex-col lg:items-start lg:gap-4">
          <span className="h-px w-8 bg-telephone-red dark:bg-accent-red lg:h-12 lg:w-px"></span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50 lg:text-4xl lg:[writing-mode:vertical-lr] lg:rotate-180">
            {title}
          </h2>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  </section>
);

export default function Home() {
  const [projects] = useState(portfolioData.projects)
  const [review] = useState(portfolioData.review);
  const [work] = useState(portfolioData.work)
  const [education] = useState(portfolioData.education)

  return (
    <div className="relative min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
      <Navbar />

      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="premium-grid absolute inset-0" />
        <div className="grid-plus absolute top-[20%] left-[10%]" />
        <div className="grid-plus absolute top-[45%] right-[15%]" />
        <div className="grid-plus absolute bottom-[20%] left-[30%]" />

        {/* Additional Decorative Blobs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="mesh-blob h-[600px] w-[600px] bg-telephone-red top-[20%] right-[-10%] opacity-[0.05] dark:opacity-[0.03]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="mesh-blob h-[500px] w-[500px] bg-accent-green middle-[-10%] left-[-10%] opacity-[0.05] dark:opacity-[0.03]"
        />
      </div>

      <main className="mx-auto max-w-4xl pb-32">
        <Hero />
        <SocialLinks />

        <Section title="About" icon={User} id="about">
          <div className="flex flex-col gap-10">
            <div className="grid gap-8 text-[16px] leading-[1.8] text-zinc-600 dark:text-zinc-400">
              <p className="relative pl-8">
                <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-telephone-red shadow-[0_0_10px_rgba(230,57,70,0.8)] dark:bg-accent-red"></span>
                Senior-level <span className="font-bold text-zinc-950 dark:text-zinc-50">React Native & Backend Developer</span> with a proven track record in engineering high-performance mobile ecosystems. My approach combines technical precision with a deep focus on user experience.
              </p>
              <p className="relative pl-8">
                <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-telephone-red shadow-[0_0_10px_rgba(230,57,70,0.8)] dark:bg-accent-red"></span>
                Specialized in architecting scalable solutions using <span className="font-bold text-zinc-950 dark:text-zinc-50">React Native, Redux, and Python-Django</span>. Expert in complex data synchronization, real-time auctions, and PCI-compliant payment integrations.
              </p>
              <p className="relative pl-8">
                <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-telephone-red shadow-[0_0_10px_rgba(230,57,70,0.8)] dark:bg-accent-red"></span>
                Devoted to a <span className="font-bold text-zinc-950 dark:text-zinc-50">minimalist & efficient dev workflow</span>, optimized through Neovim and Linux. I build software that is not only functional but architecturally sound and delightful to use.
              </p>
            </div>
          </div>
        </Section>

        <Projects projects={projects} />
        <WorkExperience work={work} />
        <Education education={education} />
        <Skills />

        {/* Connect Section */}
        <section id="connect" className="mx-4 my-16 relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-8 text-center sm:p-16 dark:bg-zinc-50 dark:text-zinc-900 shadow-2xl border border-white/5 dark:border-zinc-200">
          <div className="mesh-gradient absolute inset-0 opacity-20 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-white dark:text-zinc-900 md:text-6xl">
              Let's Build Something <br /> <span className="text-telephone-red dark:text-accent-red italic">Exceptional</span> Together.
            </h2>
            <p className="max-w-xl text-zinc-400 dark:text-zinc-500 text-lg">
              Currently available for high-impact projects and engineering opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="group flex items-center gap-2 rounded-full bg-telephone-red px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-white hover:text-telephone-red dark:bg-accent-red dark:hover:bg-zinc-950 dark:hover:text-accent-red">
                Get In Touch
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="mailto:abhitiwariabhi7@gmail.com" className="flex items-center gap-2 rounded-full border border-zinc-800 bg-transparent px-8 py-4 font-bold text-zinc-400 transition-all hover:border-zinc-700 hover:bg-zinc-900 dark:border-zinc-200 dark:text-zinc-500 dark:hover:bg-zinc-50">
                Send an Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Reviews review={review} />
      <Footer />
      <FloatingContact />
    </div>
  );
}
