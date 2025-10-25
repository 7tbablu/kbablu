import Image from "next/image";
import React from "react";

export const ServiceIcon = () => {
  return (
    <div className="p-4 w-max mx-auto hidden md:flex absolute -right-12 lg:right-[15%]">
      <div className="relative w-[400px] h-64 flex items-center justify-center">
        {/* Gradient background */}
        <div className="absolute inset-0 z-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-90"
          >
            <defs>
              <radialGradient id="grad1" cx="20%" cy="80%" r="60%">
                <stop offset="0%" stopColor="#68b3d37A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#68b3d37A" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="grad2" cx="40%" cy="90%" r="50%">
                <stop offset="0%" stopColor="#68b3d37A" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#68b3d37A" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Base shape behind SVG */}
            <ellipse cx="130" cy="320" rx="180" ry="80" fill="url(#grad1)">
              <animate
                attributeName="rx"
                values="180;190;180"
                dur="8s"
                repeatCount="indefinite"
              />
            </ellipse>

            <ellipse cx="170" cy="340" rx="140" ry="60" fill="url(#grad2)">
              <animate
                attributeName="rx"
                values="140;150;140"
                dur="10s"
                repeatCount="indefinite"
              />
            </ellipse>
          </svg>
        </div>

        {/* Your SVG Image */}
        <div className="size-[200px] lg:w-[300px] lg:h-[300px] relative">

        <Image src="/service.svg" alt="My Icon" fill sizes="100%" className="object-contain" />
        </div>
      </div>
    </div>
  );
};
