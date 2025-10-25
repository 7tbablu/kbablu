"use client";

import Link from "next/link";
import { motion } from "motion/react";
import NotFoundImage from "@/components/layout/not-found-image";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden bg-gray-50 dark:bg-gray-900 px-4">
      {/* Optional subtle background circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-cyan-200 dark:bg-cyan-800 rounded-full opacity-20 -top-20 -left-20 animate-pulse" />
        <div className="absolute w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full opacity-20 -bottom-20 -right-20 animate-pulse" />
      </div>

      {/* Optional SVG illustration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 w-80 h-80"
      >
        <NotFoundImage />
      </motion.div>

      {/* Back Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="mt-6"
      >
        <Link
          href="/"
          className="px-6 py-2 rounded-md bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
