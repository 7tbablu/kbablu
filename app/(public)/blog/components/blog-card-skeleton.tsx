import React from "react";

export function BlogCardSkeleton() {
  return (
    <article
      className="animate-pulse rounded-2xl overflow-hidden bg-background/60 dark:bg-background/30 
                 border border-neutral-200/40 dark:border-neutral-700/40 shadow-sm"
    >
      {/* Image placeholder */}
      <div className="h-44 lg:h-48 xl:h-52 w-full bg-foreground/10 dark:bg-neutral-700" />

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Time / meta */}
        <div className="flex items-center justify-between">
          <div className="h-3 w-24 bg-foreground/10 dark:bg-neutral-700 rounded" />
          <div className="h-3 w-8 bg-foreground/10 dark:bg-neutral-700 rounded" />
        </div>

        {/* Title */}
        <div className="h-4 w-3/4 bg-foreground/10 dark:bg-neutral-700 rounded" />

        {/* Excerpt */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-foreground/10 dark:bg-neutral-700 rounded" />
          <div className="h-3 w-5/6 bg-foreground/10 dark:bg-neutral-700 rounded" />
        </div>

        {/* Footer (Read post + Arrow) */}
        <div className="flex items-center justify-between pt-3">
          <div className="h-3 w-20 bg-foreground/10 dark:bg-neutral-700 rounded" />
          <div className="h-3 w-3 bg-foreground/10 dark:bg-neutral-700 rounded-full" />
        </div>
      </div>
    </article>
  );
}
