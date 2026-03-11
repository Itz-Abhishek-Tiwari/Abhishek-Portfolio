import React, { useState } from "react";
import { Navbar, Footer, FloatingContact } from "../../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", value);
    alert("Message sent! (Mock)");
  }

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Link
          to="/"
          className="group mb-12 flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-telephone-red dark:hover:text-accent-red"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="font-serif text-5xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
            Contact
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition-all focus:border-telephone-red dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-accent-red"
                    placeholder="Abhishek Tiwari"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition-all focus:border-telephone-red dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-accent-red"
                    placeholder="abhitiwariabhi7@gmail.com"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition-all focus:border-telephone-red dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-accent-red"
                  placeholder="Inquiry about..."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none transition-all focus:border-telephone-red dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-accent-red"
                  placeholder="Tell me more about your project..."
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-telephone-red hover:shadow-[0_0_20px_rgba(230,57,70,0.2)] dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-accent-red dark:hover:text-white"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Contact Details</h3>
              <div className="flex flex-col gap-8">
                <a href="mailto:abhitiwariabhi7@gmail.com" className="group flex items-center gap-5 transition-colors">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 transition-colors group-hover:border-telephone-red group-hover:bg-telephone-red/5 dark:border-zinc-800 dark:group-hover:border-accent-red dark:group-hover:bg-accent-red/5">
                    <Mail className="h-5 w-5 text-zinc-400 group-hover:text-telephone-red dark:group-hover:text-accent-red" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email</p>
                    <p className="text-zinc-900 dark:text-zinc-100">abhitiwariabhi7@gmail.com</p>
                  </div>
                </a>
                <div className="group flex items-center gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <MapPin className="h-5 w-5 text-zinc-400" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Location</p>
                    <p className="text-zinc-900 dark:text-zinc-100">Indore, India</p>
                  </div>
                </div>
                <a href="tel:6268393044" className="group flex items-center gap-5 transition-colors">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 transition-colors group-hover:border-telephone-red group-hover:bg-telephone-red/5 dark:border-zinc-800 dark:group-hover:border-accent-red dark:group-hover:bg-accent-red/5">
                    <Phone className="h-5 w-5 text-zinc-400 group-hover:text-telephone-red dark:group-hover:text-accent-red" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Phone</p>
                    <p className="text-zinc-900 dark:text-zinc-100">626-8393-044</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-900 dark:bg-zinc-900/30">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Working hours</h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Available for new projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

