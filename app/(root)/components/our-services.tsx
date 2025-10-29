"use client";

import { motion } from "motion/react";
import { AnimatedBlobs } from "./animated-blobs";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  features?: string[];
  media: string;
  isVideo?: boolean;
};

const services: Service[] = [
  {
    title: "Frontend Apps",
    description:
      "I design and develop pixel-perfect, fully responsive frontend applications that look stunning on any device — from mobile to large desktop screens.",
    features: [
      "Responsive layouts for all devices",
      "Modern UI libraries & animations",
      "Optimized for performance",
    ],
    media: "/webmockup.png",
    isVideo: true,
  },
  {
    title: "Full Stack Apps",
    description:
      "Building scalable full-stack applications using Next.js, TypeScript, and modern frameworks, with secure backend and seamless API integration.",
    features: [
      "Next.js & TypeScript",
      "REST & GraphQL API integration",
      "Authentication & Authorization",
    ],
    media: "/download.png",
    isVideo: true,
  },
  {
    title: "Native Android Apps",
    description:
      "Creating smooth and high-performance native apps for Android with React Native or Kotlin, delivering a seamless user experience.",
    features: [
      "Native iOS & Android",
      "Offline capabilities",
      "API & cloud integration",
    ],
    media: "/mobile-app.png",
    isVideo: true,
  },
  {
    title: "Payment & Tool Integration",
    description:
      "Integrating payment systems, analytics, animations, and other tools into existing Next.js applications to enhance functionality.",
    features: [
      "Stripe & PayPal",
      "Analytics & Monitoring",
      "Custom animations",
    ],
    media: "/tools.png",
    isVideo: true,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative pb-24 overflow-hidden">
      {/* --- Section Header --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16 px-4"
      >
        <h2 className="section-heading">Services</h2>
        <p className="section-subheading">
          Full-stack web, frontend apps, native Android apps, and integrations
          to make your projects dynamic and scalable.
        </p>
      </motion.div>

      {/* --- Services Blocks --- */}
      <div className="flex flex-col gap-20 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* --- Text Section --- */}
            <div className="md:w-1/2 text-left">
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: "var(--foreground)" }} // adapts to light/dark
              >
                {service.title}
              </h3>
              <p
                className="mb-4"
                style={{ color: "var(--muted-foreground)" }} // lighter text for description
              >
                {service.description}
              </p>
              {service.features && (
                <ul
                  className="list-disc pl-5 text-sm md:text-base"
                  style={{ color: "var(--secondary-foreground)" }} // slightly muted for features
                >
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* --- Media Section --- */}
            <div className="md:w-1/3 relative w-full h-64 md:h-80 rounded-3xl ">
              {/* --- Floating Glowing Orbs Behind Media --- */}
              <AnimatedBlobs index={index} />
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <Image
                  src={service.media}
                  alt={service.title}
                  fill
                  sizes="100%"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 relative z-10 rounded-xl"
                />
              </div>

              {/* --- Overlay Gradient --- */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 rounded-3xl z-20" /> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
