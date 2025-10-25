"use client";

import { motion } from "motion/react";

interface AnimatedBlobsProps {
  index: number;
}

export function AnimatedBlobs({ index }: AnimatedBlobsProps) {
  const isEven = index % 2 === 0;

  return (
    <>
      {/* --- Floating Glowing Orbs Behind Media --- */}
      {isEven ? (
        // 🌸 Even sections → blobs mostly on the LEFT
        <>
          <motion.div
            className="absolute top-[-20%] left-[-10%] w-60 h-60 rounded-full bg-purple-400/10 blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-[-15%] left-[-5%] w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl"
            animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-[25%] left-[-30%] w-48 h-48 rounded-full bg-pink-400/20 blur-3xl"
            animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "easeInOut",
            }}
          />
        </>
      ) : (
        // 🌸 Odd sections → blobs mostly on the RIGHT
        <>
          <motion.div
            className="absolute top-[-20%] right-[-10%] w-60 h-60 rounded-full bg-purple-400/10 blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-[-15%] right-[-5%] w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl"
            animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-[25%] right-[-30%] w-48 h-48 rounded-full bg-pink-400/20 blur-3xl"
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </>
  );
}
