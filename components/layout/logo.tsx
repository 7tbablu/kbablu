"use client";

import React from "react";
import Link from "next/link";


export const Logo = () => {
  return (
    <Link href={`${process.env.NEXT_PUBLIC_APP_URL!}`} className="select-none">
      <KBIcon />
    </Link>
  );
};

export const KBIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-10 h-9"
    >
      {/* Rounded dark base (less padding → bigger icon area) */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="24"
        className="fill-[#e4eaeb] dark:fill-[#000000]"
      />

      {/* Minimal KB-inspired symbol (scaled up) */}
      <path
        d="M30 30 L52 50 L30 70 M58 30 Q80 50 58 70"
        stroke="url(#grad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Soft glow outline */}
      <path
        d="M30 30 L52 50 L30 70 M58 30 Q80 50 58 70"
        stroke="url(#grad)"
        strokeWidth="10"
        opacity="0.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
};
