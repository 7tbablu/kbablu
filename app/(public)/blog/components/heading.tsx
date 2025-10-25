import React from 'react'
import {motion} from "motion/react"

export const Heading = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight"
      >
        Insights, Tutorials, and Engineering stories from{" "}
        <span className="text-cyan-500">KBablu</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-4 text-muted-foreground max-w-2xl mx-auto"
      >
        Read about Next.js, React Native, authentication, production patterns,
        and prebuilt app architecture.
      </motion.p>
    </div>
  );
}
