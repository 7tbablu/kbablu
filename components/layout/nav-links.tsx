"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { navLinks } from "@/constants/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hidden lg:flex items-center gap-5 text-sm"
    >
      {navLinks.map((link) => {
        let linkPath: string;

        try {
          // extract only pathname if it's absolute URL
          linkPath = new URL(link.href, process.env.NEXT_PUBLIC_APP_URL)
            .pathname;
        } catch {
          // fallback for relative links
          linkPath = link.href;
        }

        const isActive = pathname === linkPath;
        return (
          <motion.div key={link.href} variants={linkVariants}>
            <Link href={link.href}>
              <div
                className={cn(
                  isActive &&
                    "bg-[#68b3d37A] dark:bg-[#68b3d37A] p-[2px] relative rounded-sm"
                )}
              >
                <p
                  className={cn(
                    "font-semibold py-1 px-2 rounded-[5px]",
                    isActive
                      ? "text-white bg-[#3daad9] dark:bg-[#033477] border-2 border-background py-0.5"
                      : " hover:bg-[#68b3d34A] dark:hover:bg-[#0237808A] transition-colors"
                  )}
                >
                  {link.name}
                </p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
