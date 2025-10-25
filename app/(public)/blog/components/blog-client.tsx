"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Post } from "../type";
import { SearchModal } from "./search-model";
import { Heading } from "./heading";
import { CategoryChips } from "./category-chips";
import { Search } from "lucide-react";
import { BlogCard } from "./blog-card";
import { fetchAllPosts } from "../utils";
import { CategorySkeleton } from "./category-skeleton";
import { BlogCardSkeleton } from "./blog-card-skeleton";

export default function BlogClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const searchButtonRef = useRef<HTMLButtonElement | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchAllPosts()
      .then((p) => mounted && setPosts(p))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  // keyboard shortcut Alt+K or Ctrl/Cmd+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const altOrMeta = isMac ? e.metaKey : e.ctrlKey;
      if (
        (e.ctrlKey && e.key.toLowerCase() === "k") ||
        (altOrMeta && e.key.toLowerCase() === "k")
      ) {
        e.preventDefault();
        setSearchOpen((s) => !s);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).slice(0, 8)];
  }, [posts]);

  // filter posts
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((p) => p.tags.includes(activeCategory));
  }, [posts, activeCategory]);

  // pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const visiblePosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        posts={posts}
      />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="mb-6 sm:mb-12 text-center lg:text-left">
            <Heading />
            <div className="flex items-center justify-center mt-4.5">
              <button
                ref={searchButtonRef}
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-3 pl-4 pr-1 h-9 rounded-sm bg-accent/30 border border-cyan-200/50 dark:border-cyan-900/50 backdrop-blur-3xl 
                transition-all duration-200 w-full max-w-xl shadow-2xl shadow-cyan-400/20 hover:border-cyan-400 dark:hover:border-cyan-400/50"
                aria-label="Open search"
              >
                <Search className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground hidden sm:inline">
                  Search
                </span>
                <kbd className="ml-auto hidden px-2 sm:flex h-7 items-center rounded text-xs space-x-1.5 bg-[#68b3d34A] dark:bg-cyan-800">
                  <span
                    className="bg-[#3daad9] dark:bg-cyan-700 text-white backdrop-blur-3xl 
                hover:border-cyan-300 dark:hover:border-neutral-700 rounded p-0.5 px-2"
                  >
                    Ctrl
                  </span>
                  <span
                    className="bg-[#3daad9] dark:bg-cyan-700 text-white backdrop-blur-3xl 
                hover:border-cyan-300 dark:hover:border-neutral-700 rounded p-0.5 px-2"
                  >
                    K
                  </span>
                </kbd>
              </button>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-4 sticky top-14 z-10 py-4 bg-background">
            {loading ? (
              <CategorySkeleton />
            ) : (
              <CategoryChips
                categories={categories}
                active={activeCategory}
                onSelect={(c) => {
                  setActiveCategory(c);
                  setCurrentPage(1);
                }}
              />
            )}
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <BlogCardSkeleton key={i} />
                ))
              : visiblePosts.map((p) => <BlogCard key={p.id} post={p} />)}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700 
                bg-white/60 dark:bg-neutral-800/50 hover:bg-neutral-100 
                dark:hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed 
                transition-all"
              >
                Previous
              </button>

              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700 
                bg-white/60 dark:bg-neutral-800/50 hover:bg-neutral-100 
                dark:hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed 
                transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
