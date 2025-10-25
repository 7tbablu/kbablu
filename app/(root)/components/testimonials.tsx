"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";

const AnimatedTestimonials = dynamic(
  () =>
    import("@/components/ui/animated-testimonials").then(
      (mod) => mod.AnimatedTestimonials
    ),
  { ssr: false }
);

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with Bablu was a game-changer. His ability to turn ideas into fast, scalable apps using Next.js is unmatched. Every detail feels intentional.",
      name: "Ravi Sharma",
      designation: "Frontend Engineer at DevFlow",
      src: "/person.jpg",
    },
    {
      quote:
        "This men's sense of design and performance is rare — he doesn’t just build apps, he crafts user experiences that feel effortless and modern.",
      name: "Sandeep Kumar",
      designation: "UI/UX Designer & Collaborator",
      src: "/personsandeep.jpg",
    },
    {
      quote:
        "What stood out most was Bablu’s clarity and patience. He explains complex concepts simply and delivers production-ready code faster than expected.",
      name: "Priya Patel",
      designation: "Founder at NovaWorks",
      src: "/personassu.jpg",
    },
    // {
    //   quote:
    //     "This man’s open-source projects and tutorials have helped me learn real-world Next.js setups. His code quality and documentation are top-notch.",
    //   name: "Aditya Verma",
    //   designation: "Full-Stack Developer",
    //   src: "/person.jpg",
    // },
  ];

  return (
    <section className="relative overflow-hidden pt-12">
      {/* --- Section content --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8"
      >
        {/* --- Floating glowing orbs behind --- */}
        <motion.div
          className="absolute top-[10%] left-0 w-56 h-56 rounded-full bg-cyan-500/20 blur-3xl border"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-0 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <div className="relative backdrop-blur-lg bg-white dark:bg-white/5 border border-cyan-400/5 dark:border-white/10 rounded-3xl p-10 md:p-12 shadow-[0_0_70px_-15px_rgba(0,150,255,0.2)]">
          {/* Gentle inner gradient shimmer */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/5 pointer-events-none" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-heading"
          >
            Trusted by Developers & Creators
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="section-subheading"
          >
            From collaborators to clients, people appreciate the clarity,
            performance, and design-first approach I bring to every project.
          </motion.p>

          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </motion.div>
    </section>
  );
}

