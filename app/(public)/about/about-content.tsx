"use client";

import { motion } from "motion/react";
import { Target, Code2, Laptop, Rocket } from "lucide-react";
import ContactCTA from "@/app/(root)/components/conatact-cta";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* --- Intro Section --- */}
      <section className="container mx-auto px-6 py-20 mt-16 md:mt-24">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* --- Profile Image --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg ring-2 ring-cyan-500/30 mx-auto md:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&auto=format&fit=crop&q=60"
                alt="Bablu Kumar"
                fill
                sizes="100%"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* --- About Text --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-cyan-500">Me</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              I’m{" "}
              <span className="font-semibold text-cyan-500">Bablu Kumar</span> —
              a full-stack{" "}
              <span className="font-semibold">Next.js developer</span> who loves
              turning ideas into fast, scalable, and visually clean digital
              experiences. I enjoy working at the intersection of{" "}
              <span className="font-semibold">design</span> and{" "}
              <span className="font-semibold">development</span>, building
              products that not only work well but also feel great to use.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Over the years, I’ve built everything from personal projects to
              full-fledged apps using technologies like{" "}
              <span className="font-semibold">
                Next.js, Prisma, MongoDB, Tailwind
              </span>
              , and modern authentication with{" "}
              <span className="font-semibold">Clerk</span> or{" "}
              <span className="font-semibold">Auth.js</span>. Every project is
              an opportunity to learn, refine, and create something better than
              before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- My Philosophy / Skills --- */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              My Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe great software is built with empathy — understanding
              both user needs and technical depth. My goal is to create web
              experiences that are clean, performant, and future-ready.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it’s a startup idea, a portfolio project, or a SaaS
              product, I approach each build with precision and a focus on{" "}
              <span className="font-semibold">design consistency</span>,
              <span className="font-semibold"> scalability</span>, and{" "}
              <span className="font-semibold">performance</span>.
            </p>
          </motion.div>

          {/* --- Skill Highlights --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Purpose-Driven",
                text: "Every project starts with clarity and ends with impact.",
              },
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Modern Stack",
                text: "Next.js, React, Prisma, MongoDB, Tailwind, and modern APIs.",
              },
              {
                icon: <Laptop className="w-6 h-6" />,
                title: "Cross-Platform",
                text: "Creating responsive and mobile-friendly experiences with ease.",
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Continuous Growth",
                text: "Always learning, experimenting, and improving with each build.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-background shadow-sm border flex flex-col items-start gap-3 hover:shadow-md transition-all"
              >
                <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-500">
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Blogs & Projects --- */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sharing What I Learn
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-semibold text-cyan-500">kbablu.com</span>{" "}
            isn’t just my portfolio — it’s where I share ideas, experiments, and
            learnings through{" "}
            <span className="font-semibold">
              blogs, projects, and open-source templates
            </span>
            . Everything I build here comes from real-world experience — things
            I struggled with, solved, and refined over time.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            My goal is simple: help others learn, save time, and build better
            web apps — while continuously pushing myself to evolve as a
            developer.
          </p>
        </motion.div>
      </section>

      {/* --- Closing Note --- */}
      <section className="bg-muted/20 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Always Building. Always Learning.
        </motion.h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Every project I make is a step forward — an opportunity to create,
          share, and connect through code. Thanks for being here, exploring my
          work, and being part of this journey toward better web experiences.
        </p>
      </section>

      {/* --- Contact CTA --- */}
      <ContactCTA />
    </div>
  );
}
