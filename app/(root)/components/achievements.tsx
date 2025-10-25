"use client";

import { motion } from "motion/react";

export default function Achievements() {
  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Projects Delivered" },
    { number: "5+", label: "Years of Experience" },
    { number: "40+", label: "Tech Stacks Mastered" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[35%] h-[35%] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-[120px] rounded-full animate-blob" />
        <div className="w-[25%] h-[25%] bg-gradient-to-tr from-purple-400/10 via-pink-400/10 to-cyan-400/10 blur-[90px] rounded-full animate-blob animation-delay-2000" />
      </div>

      <motion.div
        className="w-11/12 md:w-9/12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={item}
            className="
              flex flex-col items-center rounded-2xl p-4
              border transition-all duration-300 transform hover:scale-105
              backdrop-blur-lg
              bg-gray-300/40 border-gray-300/50 text-gray-900 shadow-[0_0_50px_-15px_rgba(0,150,255,0.1)]
              dark:bg-[#0f172a]/60 dark:border-gray-700/40 dark:text-white
            "
          >
            <span className="text-3xl lg:text-4xl font-extrabold">
              {stat.number}
            </span>
            <span className="mt-2 text-sm lg:text-base opacity-80 font-medium">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
