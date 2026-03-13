import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Mail, MapPin, Phone } from "lucide-react";
import Typewriter from "../../components/Typewriter/Typewriter";
import useSEO from "../../hooks/useSEO";

export default function Contact() {
  useSEO(
    "Contact",
    "Get in touch with Abhishek Tiwari for engineering opportunities, collaborative projects, or technical consulting."
  );

  const [value, setValue] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...value,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setValue({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  }

  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="group mb-16 inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 border-b border-border pb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-primary">Contact</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-mono font-black tracking-tight text-foreground">
            <Typewriter text="Get in touch" />
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground font-mono">
            Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-muted-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-border bg-secondary/30 px-4 py-3 text-sm font-mono text-foreground outline-none transition-all focus:border-primary focus:bg-secondary/50 placeholder:text-muted-foreground/50"
                    placeholder="Abhishek Tiwari"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-muted-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-border bg-secondary/30 px-4 py-3 text-sm font-mono text-foreground outline-none transition-all focus:border-primary focus:bg-secondary/50 placeholder:text-muted-foreground/50"
                    placeholder="you@email.com"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-muted-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="border border-border bg-secondary/30 px-4 py-3 text-sm font-mono text-foreground outline-none transition-all focus:border-primary focus:bg-secondary/50 placeholder:text-muted-foreground/50"
                  placeholder="Inquiry about..."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  className="resize-none border border-border bg-secondary/30 px-4 py-3 text-sm font-mono text-foreground outline-none transition-all focus:border-primary focus:bg-secondary/50 placeholder:text-muted-foreground/50"
                  placeholder="Tell me more about your project..."
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`vercel-button-primary py-4 px-8 gap-3 text-xs group w-fit ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send className={`h-3.5 w-3.5 transition-transform ${status === 'sending' ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 border border-primary/20 bg-primary/10 p-4"
                >
                  <div className="h-2 w-2 bg-primary" />
                  <p className="text-xs font-mono text-primary uppercase tracking-wider">
                    Message received! I&apos;ll be in touch soon.
                  </p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 border border-red-500/20 bg-red-500/10 p-4"
                >
                  <div className="h-2 w-2 bg-red-500" />
                  <p className="text-xs font-mono text-red-500 uppercase tracking-wider">
                    Transmission failed. Please try again or use direct email.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-8">
              <h3 className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-muted-foreground border-b border-border pb-4">Contact Info</h3>
              <div className="flex flex-col gap-6">
                {[
                  { icon: Mail, label: "Email", value: "abhitiwariabhi7@gmail.com", href: "mailto:abhitiwariabhi7@gmail.com" },
                  { icon: Phone, label: "Phone", value: "626-8393-044", href: "tel:6268393044" },
                  { icon: MapPin, label: "Location", value: "Indore, India", href: null }
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-5">
                    <div className="flex h-11 w-11 items-center justify-center border border-border bg-secondary/30 transition-colors group-hover:border-primary group-hover:bg-secondary/60" style={{ borderLeft: "2px solid transparent" }} onMouseEnter={e => e.currentTarget.style.borderLeftColor = "var(--primary)"} onMouseLeave={e => e.currentTarget.style.borderLeftColor = "transparent"}>
                      <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-black uppercase tracking-widest text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-base font-mono font-bold text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base font-mono font-bold text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability box — sharp */}
            <div className="border border-border bg-secondary/20 p-6" style={{ borderLeft: "2px solid var(--primary)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-2 w-2 animate-pulse bg-primary shadow-[0_0_8px_rgba(250,189,47,0.8)]" />
                <h4 className="text-[10px] font-mono font-black uppercase tracking-widest text-primary">Available Now</h4>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground font-mono">
                I&apos;m currently accepting new projects and full-time opportunities. Let&apos;s create something together.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
