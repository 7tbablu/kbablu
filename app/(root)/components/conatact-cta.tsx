"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function ContactCTA() {
  const router = useRouter();
  const handleClick = () => router.push("/contact");

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-300 w-full max-w-5xl mx-auto">
      {/* SVG Background */}
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-60 dark:opacity-70"
        >
          <defs>
            <radialGradient id="footerGrad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0470ca" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0470ca" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="footerGrad2" cx="30%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#b300da" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#b300da" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="300" fill="url(#footerGrad1)">
            <animate
              attributeName="r"
              values="300;320;300"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="600" cy="400" r="250" fill="url(#footerGrad2)">
            <animate
              attributeName="r"
              values="250;270;250"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Let’s Build Something Amazing Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className=" text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8"
        >
          Reach out to discuss your project idea or learn how our team can
          transform your vision into reality with modern scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="hover:bg-[#a899ce] hover:dark:bg-[#251349] p-[2px] relative rounded-md w-max mx-auto">
            <button
              onClick={handleClick}
              className="font-semibold py-1 w-max px-5 rounded-md text-white bg-[#3d2272] border-2 border-background cursor-pointer transition-all duration-400"
            >
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
