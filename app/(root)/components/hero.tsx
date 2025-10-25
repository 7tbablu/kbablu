// "use client";

// import ColourfulText from "@/components/ui/colourful-text";
// import { ContainerTextFlip } from "@/components/ui/container-text-flip";
// import { Spotlight } from "@/components/ui/spotlight-new";
// import { motion } from "motion/react";

// export default function HeroSection() {
//   return (
//     <section className="w-full h-max overflow-hidden relative">
//       <Spotlight />
//       <div className="relative mx-auto my-16 flex sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl flex-col items-center justify-center">
//         <div className="px-4 py-10 md:py-20">
//           {/* --- Main Heading (without name) --- */}
//           <h1 className="relative z-10 mx-auto max-w-4xl font-bold text-slate-700 dark:text-slate-300 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
//             {/* small intro line */}
//             <motion.span
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               className="block text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2"
//             >
//               Hi, I’m{" "}
//               <span className="font-semibold text-cyan-500">Bablu Kumar</span>
//             </motion.span>
//             {"I build modern websites and apps to elevate your"
//               .split(" ")
//               .map((word, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
//                   animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//                   transition={{
//                     duration: 0.3,
//                     delay: index * 0.08,
//                     ease: "easeInOut",
//                   }}
//                   className="mr-2 inline-block"
//                 >
//                   {["websites", "apps"].includes(word) ? (
//                     <ColourfulText text={word} />
//                   ) : (
//                     word
//                   )}
//                 </motion.span>
//               ))}
//             <motion.span
//               initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
//               animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
//               transition={{ duration: 0.3, delay: 0.9, ease: "easeInOut" }}
//               className="inline-block"
//             >
//               <ContainerTextFlip />
//             </motion.span>
//           </h1>

//           {/* --- Subheading --- */}
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: 1.1 }}
//             className="relative text-center z-10 mx-auto max-w-3xl py-4 text-lg text-neutral-600 dark:text-neutral-400"
//           >
//             I’m a full-stack Next.js developer and designer passionate about building
//             fast, scalable, and modern web applications. Through{" "}
//             <span className="font-semibold text-cyan-500">kbablu.com</span>, I
//             share my work, experiments, and projects that blend design,
//             technology, and strategy to create meaningful digital experiences.
//           </motion.p>

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.3,
//               delay: 1,
//             }}
//             className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
//           >
//             <button className="w-60 transform rounded-md bg-[#3daad9] dark:bg-[#033477] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl shadow-blue-400/50 cursor-pointer">
//               Explore My Work
//             </button>
//             <button className="w-60 transform rounded-md border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 hover:shadow-2xl shadow-zinc-900/15 cursor-pointer">
//               Learn More About Me
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }








"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ColourfulText from "@/components/ui/colourful-text";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex items-center justify-center min-h-[90vh] overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <Spotlight />

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-7xl py-20 md:py-28">
        {/* --- Heading --- */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-bold text-slate-800 dark:text-slate-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug sm:leading-tight max-w-5xl"
        >
          <span className="block mb-3 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-normal">
            Hi, I’m{" "}
            <span className="font-semibold text-cyan-500">Bablu Kumar</span>
          </span>

          {"I build modern websites and apps to elevate your"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="mr-2 inline-block"
              >
                {["websites", "apps"].includes(word) ? (
                  <ColourfulText text={word} />
                ) : (
                  word
                )}
              </motion.span>
            ))}

          <motion.span
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            <ContainerTextFlip />
          </motion.span>
        </motion.h1>

        {/* --- Subheading --- */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 px-2 sm:px-0"
        >
          I’m a{" "}
          <span className="font-medium text-cyan-500">
            full-stack Next.js developer
          </span>{" "}
          and designer passionate about crafting fast, scalable, and modern web
          experiences. Through{" "}
          <span className="font-semibold text-cyan-500">kbablu.com</span>, I
          share my work, experiments, and projects that blend design,
          technology, and strategy to create meaningful digital experiences.
        </motion.p>

        {/* --- CTA Buttons --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link href="/projects" className="w-full sm:w-auto">
            <button className="w-60 transform rounded-md bg-[#3daad9] dark:bg-[#033477] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl shadow-blue-400/50 cursor-pointer">
              Explore My Work
            </button>
          </Link>

          <Link href="/about" className="w-full sm:w-auto">
            <button className="w-60 transform rounded-md border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 hover:shadow-2xl shadow-zinc-900/15 cursor-pointer">
               More About Me
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
