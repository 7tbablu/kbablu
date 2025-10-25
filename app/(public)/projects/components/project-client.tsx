"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { projectOverviewData } from "@/constants/data";
import { format } from "date-fns";

export default function ProjectsClient() {
  const [projects] = useState(projectOverviewData);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // adjust as needed

  // categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  // filtered projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  // pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  // reset page when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-foreground/80 max-w-2xl mx-auto mt-2">
          Explore my work across frontend, full stack, and mobile applications.
        </p>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((c) => (
          <button
            key={c}
            className={`px-3 h-9 rounded-md text-sm font-medium transition
              ${
                activeCategory === c
                  ? "bg-[#3daad9] text-white shadow-md"
                  : "bg-neutral-100 dark:bg-neutral-800 text-foreground/90 hover:shadow-sm"
              } hover:opacity-80`}
            onClick={() => handleCategoryChange(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-400/10 dark:bg-gray-900/40 rounded-2xl p-6 shadow hover:shadow-md shadow-cyan-100 dark:shadow-cyan-950 transition-shadow flex flex-col space-y-3.5"
          >
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Previous
          </button>
          <span className="text-sm text-foreground/80">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-800/50 hover:bg-white/100 dark:hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
