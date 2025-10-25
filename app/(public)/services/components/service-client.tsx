"use client";

import { motion } from "motion/react";
import { Code, Smartphone, LayoutDashboard, Server } from "lucide-react";
import ContactCTA from "@/app/(root)/components/conatact-cta";
import { techIcons } from "@/app/(root)/components/teck-icons";

export const metadata = {
  title: "Services - KBablu",
  description:
    "Discover the services offered by KBablu, including full-stack web development, mobile apps, prebuilt apps, and more.",
};

export default function ServicesClient() {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Web Development",
      description:
        "Building scalable and high-performance websites and web applications using Next.js, React, Node.js, and modern frameworks.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description:
        "Designing and developing native and cross-platform mobile applications with smooth UX and seamless performance.",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Prebuilt Apps & Templates",
      description:
        "Creating ready-to-use applications and templates for businesses and developers, including full source code for easy customization.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend & API Development",
      description:
        "Developing secure and efficient backends, RESTful and GraphQL APIs, authentication with Clerk, and database integration.",
    },
  ];

  return (
    <main className="container mx-auto px-6">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Delivering{" "}
          <span className="text-cyan-500">
            Modern Web <span className="text-foreground">&</span> Mobile
            Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg"
        >
          At <span className="font-semibold">KBablu</span>, I offer a full range
          of digital solutions—from modern web apps to native mobile
          applications—designed to elevate your business and empower your brand.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="p-6 rounded-2xl shadow-lg transform transition-all duration-300 flex flex-col gap-4
              bg-gradient-to-tr from-indigo-700/5 via-purple-300/5 to-indigo-600/5 
              dark:from-indigo-800/20 dark:via-purple-900/10 dark:to-purple-700/20
              hover:scale-105"
          >
            <div className="p-3 rounded-md bg-gray-100/90 dark:bg-white/5 text-purple-600 dark:text-purple-400 inline-block w-max">
              {service.icon}
            </div>
            <h3 className="font-semibold text-xl text-foreground">
              {service.title}
            </h3>
            <p className="text-sm text-foreground/90">{service.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Technologies & Stack */}
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-center"
        >
          My Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          I leverage modern technologies and frameworks to deliver robust,
          efficient, and scalable solutions. My expertise includes:
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto text-center">
          {[
            "Next.js",
            "React",
            "TailwindCSS",
            "Node.js",
            "Express",
            "MongoDB",
            "Prisma",
            "Clerk",
            "React Native",
            "Firebase",
            "TypeScript",
            "GraphQL",
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="px-4 py-2 flex items-center gap-2.5 justify-center rounded-xl shadow-sm hover:shadow-lg transition-all
        bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 font-medium text-sm"
            >
              {techIcons[tech]}
              {tech}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Note / CTA */}
      <section>
        <ContactCTA />
      </section>
    </main>
  );
}
