"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How long does it take for you to build a full project?",
    answer:
      "It depends on the complexity, but I usually deliver a complete MVP within a few days to a couple of weeks. My workflow is optimized with reusable components, efficient APIs, and scalable Next.js architecture.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I mainly work with Next.js, React, TypeScript, Prisma, MongoDB, and Tailwind CSS. I also integrate Cloudinary for media, ShadCN for UI, and use modern tools like React Query and Framer Motion for interactivity.",
  },
  {
    question: "Can you build both frontend and backend?",
    answer:
      "Yes! I’m a full-stack developer. I design pixel-perfect UIs and also build secure, high-performance APIs using Next.js API routes or server actions with Prisma and MongoDB.",
  },
  {
    question: "Are your projects production-ready?",
    answer:
      "Absolutely. Every project I build follows scalable folder structures, clean code practices, and SEO-friendly optimizations. I focus on performance, accessibility, and long-term maintainability.",
  },
  {
    question: "Do you offer collaboration or freelance work?",
    answer:
      "Yes, I’m open to freelance opportunities and collaborations. Whether it’s building a SaaS, portfolio, or eCommerce app, I love helping ideas turn into full-fledged products.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* ===== Background Animation ===== */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-[#3daad9]/25 blur-[140px] top-[-10%] left-[20%]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-[#06b6d4]/20 blur-[120px] bottom-[-10%] right-[20%]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        /> */}
      </motion.div>

      {/* ===== Content ===== */}
      <motion.div
        className="max-w-5xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.12,
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Here are some common questions developers and clients ask me.
          </p>
        </motion.div>

        {/* ===== FAQ List ===== */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`rounded-xl transition-all duration-500 ${
                  isOpen
                    ? "border-transparent bg-transparent shadow-none"
                    : "border dark:border-gray-700/40 bg-white/5 dark:bg-[#0f172a]/60 backdrop-blur-lg hover:border-cyan-400/40 dark:hover:border-cyan-400/20"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between gap-3.5 w-full text-left px-3 md:px-8 py-4 focus:outline-none"
                >
                  <h3
                    className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "text-[#06b6d4]"
                        : "text-[#3daad9] hover:text-[#06b6d4]"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-[#06b6d4] text-4xl leading-none select-none"
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer with smooth height animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.3 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 md:px-8 pb-6 pt-1 max-w-[95%]">
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: "var(--secondary-foreground)" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
