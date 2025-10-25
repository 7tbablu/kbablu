"use client";

import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Blog = {
  id: string;
  title: string;
  excerpt: string;
  image?: string | null;
  createdAt: string;
  slug: string;
};

const BlogCard = ({
  blog,
  index,
  hovered,
  setHovered,
}: {
  blog: Blog;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 md:h-96 w-full shadow-lg transition-all duration-300 ease-out cursor-pointer",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <Image
      src={
        blog.image ||
        "https://images.unsplash.com/photo-1660732653967-efea44faf29a?w=800&auto=format&fit=crop&q=60"
      }
      alt={blog.title}
      fill
      sizes="100%"
      className="object-cover absolute inset-0 w-full h-full"
    />
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 transition-all duration-300">
      <span className="text-sm text-gray-300 mb-1">
        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </span>
      <h3 className="text-lg md:text-2xl font-bold text-white mb-2 line-clamp-2">
        {blog.title}
      </h3>
      <p className="text-sm md:text-base text-gray-200 mb-3 line-clamp-3">
        {blog.excerpt}
      </p>
      <a
        href={`/blog/${blog.slug}`}
        className="inline-block text-sm font-semibold text-cyan-400 hover:underline"
      >
        Read More →
      </a>
    </div>
  </div>
);

const BlogSkeleton = () => (
  <div className="rounded-xl bg-foreground/5 h-80 md:h-96 w-full animate-pulse" />
);

export default function BlogSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const res = await fetch("/api/public/posts/latest");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* --- Background Glow --- */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[30%] h-[30%] bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-[120px] rounded-full animate-blob" />
        <div className="w-[20%] h-[20%] bg-gradient-to-tr from-cyan-400/10 via-purple-400/10 to-pink-400/10 blur-[90px] rounded-full animate-blob animation-delay-2000" />
      </div>

      {/* --- Header --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12 px-4"
      >
        <h2 className="section-heading">Latest Blogs</h2>
        <p className="section-subheading">
          Insights, tutorials, and tips on web development, design, and modern
          technologies.
        </p>
      </motion.div>

      {/* --- Blog Cards Grid --- */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, staggerChildren: 0.2 }}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <BlogSkeleton key={i} />)
          : blogs.map((blog, index) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
      </motion.div>
    </section>
  );
}
