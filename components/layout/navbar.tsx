"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { ModeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { AuthButton } from "./auth-button";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setHasScrolled(latest > 100);
    });
  }, [scrollY]);

  return (
    <motion.nav
      animate={{
        backgroundColor: hasScrolled ? "" : "",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "h-12 xl:h-14 w-full flex items-center top-0 z-50 fixed left-0 px-4 lg:px-4 xl:px-0 overflow-hidden",
        hasScrolled && "border-accent backdrop-blur-3xl"
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Left Side  */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* MOBILE NAV */}
         
            <MobileNav />
        
          {/* Logo  */}
          <Logo />
          {/* Nav Links  */}
          <NavLinks />
        </div>
        {/* Right Side  */}
        <div className="flex items-center gap-2.5 text-lg">
          <ModeToggle />
          <button className="hidden md:flex bg-transparent size-8 items-center justify-center hover:cursor-pointer hover:bg-foreground/5 transition-colors duration-200 rounded-sm text-foreground/70 text-sm">
            <Github className="size-5"/>
          </button>
          <AuthButton />
        </div>
      </div>
    </motion.nav>
  );
};
