"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export const ProjectContentSD = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    techStack?: string[];
    link?: string;
    image?: string;
  }[];
  contentClassName?: string;
}) => {
  return (
    <div className="relative pb-7 lg:hidden">
      {/* Project Details */}
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl space-y-12">
          {content.map((item, index) => (
            <div key={item.title + index} className="space-y-3">
              <motion.h2 className=" text-xl lg:text-2xl font-bold">
                {item.title}
              </motion.h2>

              <motion.p className="text-base text-neutral-700 dark:text-neutral-300">
                {item.description}
              </motion.p>
              {item.image && (
                <div className="relative h-48 w-full rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    sizes="100%"
                    fill
                    alt="Project-Image"
                    className=""
                  />
                </div>
              )}

              {/* Tech stack */}
              {item.techStack && (
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-neutral-200 dark:bg-neutral-800 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Project Link */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-white bg-[#3daad9] dark:bg-[#68b3d38A] px-2.5 py-1.5 rounded-md font-semibold hover:brightness-110 transition-all duration-200"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
