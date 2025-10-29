import React, { useEffect, useMemo, useRef, useState } from "react";
import { Post } from "../type";
import { AnimatePresence, motion } from "motion/react";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const SearchModal = ({
  open,
  onClose,
  posts,
}: {
  open: boolean;
  onClose: () => void;
  posts: Post[];
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.join(" ").toLowerCase().includes(q)
    );
  }, [query, posts]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center p-6"
        >
          <div
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: -12, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="relative z-50 w-full max-w-3xl bg-background/90 dark:bg-background/80 border border-neutral-200/30 dark:border-neutral-700/40 rounded-2xl shadow-2xl p-5"
            role="dialog"
            aria-modal="true"
            aria-label="Search posts"
          >
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts, tags or keywords..."
                className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />

              <button
                onClick={onClose}
                className="ml-2 text-sm text-muted-foreground px-3 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
              >
                Close
              </button>
            </div>

            <div className="mt-4 max-h-[60vh] overflow-auto space-y-3">
              {results.length === 0 ? (
                <div className="text-sm text-muted-foreground">No results.</div>
              ) : (
                results.map((p) => (
                  <Link
                    key={p.id}
                    href={`/blog/${p.slug}`}
                    className="block p-3 rounded-md hover:bg-foreground/5 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-10 relative">
                        <Image
                          src={p.image || ""}
                          alt={p.title}
                          fill
                          sizes="100%"
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="min-w-0">
                        {" "}
                        {/* 👈 Important: enables truncate inside flex */}
                        <div className="font-medium truncate max-w-full">
                          {p.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {p.tags.join(", ")}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
