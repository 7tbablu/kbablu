"use client";
import Link from "next/link";
import { projectOverviewData } from "@/constants/data";
import { format } from "date-fns";
import Image from "next/image";

export function Projects() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* --- Floating Background Glow --- */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[35%] h-[35%] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-[120px] rounded-full animate-blob" />
        <div className="w-[25%] h-[25%] bg-gradient-to-tr from-purple-400/10 via-pink-400/10 to-cyan-400/10 blur-[90px] rounded-full animate-blob animation-delay-2000" />
      </div>

      {/* --- Section Header --- */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="section-heading">Recent Projects</h2>
        <p className="section-subheading">
          A selection of my top projects showcasing design, development, and
          deployment skills.
        </p>
      </div>

      {/* --- Projects Grid (Top 3 with CometCard) --- */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectOverviewData.slice(0, 3).map((project, index) => (
          <div key={index} className="gradient-content-card">
            <h2 className="text-2xl font-semibold text-cyan-500">
              {project.title}
            </h2>
            <p className="text-foreground/70">{project.description}</p>

            {/* Images */}
            <div className="flex gap-3">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="w-full h-56 rounded-lg object-cover"
                />
              )}
            </div>

            {/* Main tech stack */}
            {project.techStack && (
              <div>
                <h3 className="text-sm font-semibold text-foreground/80 mb-1">
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-cyan-300/10 text-cyan-500 rounded-full font-medium border border-cyan-300/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key features */}
            {project.keyFeatures && (
              <div>
                <h3 className="text-sm font-semibold text-foreground/80 mb-1">
                  Key Features:
                </h3>
                <ul className="list-disc list-inside text-foreground/70 text-sm">
                  {project.keyFeatures.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* --- Date + Links --- */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-200/10">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {format(new Date(project.createdAt), "MMM dd, yyyy")}
              </span>

              <div className="flex gap-2">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-700 dark:text-cyan-300 transition-colors"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 rounded bg-purple-500/20 hover:bg-purple-500/40 text-purple-700 dark:text-purple-300 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- See More Button --- */}
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-block px-6 py-1 border rounded-sm bg-cyan-600 hover:bg-cyan-800 dark:bg-cyan-600/20 dark:hover:bg-cyan-800/40 backdrop-blur-3xl text-[#ffffff] font-semibold transition-all duration-300"
        >
          More Projects
        </Link>
      </div>
    </section>
  );
}
