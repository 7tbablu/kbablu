"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ContactForm from "./components/form";

export default function ContactContent() {
  return (
    <main
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-transparent via-[#f5edfc] to-transparent dark:from-transparent dark:via-[#10011f] dark:to-transparent px-4 relative"
      )}
    >
      <div className="container mx-auto w-full">
        {/* ---------- LEFT CONTENT ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#3d2272] dark:text-cyan-400">
            Let’s Connect, Create Together
          </h1>
          <p className="text-neutral-700 max-w-md xl:max-w-2xl dark:text-neutral-300 text-base sm:text-lg mx-auto lg:mx-0">
            Whether you have a project idea, need development support, or just
            want to say Hi — I’d love to hear from you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 2xl:col-span-2 xl:pl-16"
          >
            <div className="hidden lg:block size-[500px] relative">
              <Image
                src="/contact.png"
                alt="Contact Illustration"
                fill
                sizes="100%"
                className="opacity-95 object-contain"
              />
            </div>
          </motion.div>

          {/* ---------- RIGHT FORM ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full mx-auto lg:max-w-lg lg:col-span-1 2xl:col-span-2 mt-12"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
