"use client";

import { motion } from "motion/react";

import Link from "next/link";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

import { FaXTwitter } from "react-icons/fa6";
import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-500/5 dark:bg-neutral-900/40 text-neutral-800 dark:text-neutral-200">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <Logo />
          <p className="text-sm">Crafting scalable web & app solutions</p>
        </motion.div>

        {/* Links */}
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center gap-1.5 text-sm"
        >
          <p className="text-sm font-medium">Useful Links :</p>
          {footerLinks.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="hover:text-foreground/70 duration-300 hover:underline text-xs"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4"
        >
          <p className="text-sm font-medium">Follow Me :</p>
          <div className="flex gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-cyan-500/20 dark:hover:bg-purple-500/20 transition"
              >
                <social.icon className="w-5 h-5 text-neutral-700 dark:text-neutral-200" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="border-t border-neutral-200/50 dark:border-neutral-700/50 text-center py-4 text-xs text-neutral-500 dark:text-neutral-400">
        &copy; {new Date().getFullYear()} KBablu.com || All rights reserved.
      </div>
    </footer>
  );
}

const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/support" },
  { label: "Terms & Conditions", href: "/terms" },
];

const socials = [
  { icon: BsGithub, href: "https://github.com/bablukumar" },
  { icon: BsFacebook, href: "https://www.facebook.com/yourprofile" },
  { icon: BsInstagram, href: "https://www.instagram.com/yourprofile" },
  { icon: FaXTwitter, href: "https://twitter.com/yourprofile" },
];

