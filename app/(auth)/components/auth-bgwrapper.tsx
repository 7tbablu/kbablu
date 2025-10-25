"use client";

import { motion } from "motion/react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden 
bg-gradient-to-b from-[#f9fafc] via-[#f0f3f8] to-[#f9fafc] 
dark:from-[#00091d] dark:via-[#030b1f] dark:to-[#00091d] px-4"
    >
      {/* ---- Animated dotted grid background ---- */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#ffffff22 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 30px", "120px 60px", "0px 0px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ---- Floating gradient blobs ---- */}
      <motion.div
        className="absolute h-[400px] w-[400px] rounded-full bg-[#007bff33] blur-3xl"
        animate={{
          x: ["-50%", "40%", "60%", "-40%", "-50%"],
          y: ["-40%", "30%", "60%", "-20%", "-40%"],
          scale: [1, 1.2, 1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute h-[350px] w-[350px] rounded-full bg-[#ff008033] blur-3xl"
        animate={{
          x: ["50%", "-40%", "-60%", "40%", "50%"],
          y: ["60%", "-20%", "-40%", "20%", "60%"],
          scale: [1, 1.3, 1, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ---- Auth form container ---- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md rounded-2xl bg-white/5 p-8 shadow-2xl backdrop-blur-md"
      >
        {children}
      </motion.div>
    </main>
  );
}
