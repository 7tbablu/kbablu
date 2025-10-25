import React from 'react'
import { Post } from '../type';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import {format} from "date-fns"
import Image from 'next/image';

export const BlogCard = ({ post }: { post: Post }) => {
  return (
    <article
      className="group rounded-2xl overflow-hidden bg-background/60 dark:bg-background/30 border border-neutral-200/40 dark:border-neutral-700/40 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
      aria-labelledby={`post-${post.id}`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="h-44 lg:h-48 xl:h-52 w-full overflow-hidden relative">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes='100%'
              className="w-full h-full object-cover group-hover:scale-105 transform transition duration-500"
            />
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-3 mb-3">
            {/* LATER WE SHOULD THOUGHT ABOUT THIS  */}
            {/* <div className="flex items-center gap-3">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div> */}
            <time className="text-xs text-muted-foreground flex items-center gap-2">
              <Clock className="w-3 h-3" /> {format(new Date(post.createdAt), "PPP")}
            </time>
          </div>

          <h3
            id={`post-${post.id}`}
            className="font-semibold text-lg mb-2 text-foreground"
          >
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground">{post.excerpt}</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-cyan-500 font-medium">Read post</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </Link>
    </article>
  );
};
