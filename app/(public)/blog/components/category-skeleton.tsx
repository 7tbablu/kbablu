import React from "react";

export function CategorySkeleton() {
  return (
    <div className="flex flex-wrap gap-3 animate-pulse">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="h-8 w-24 rounded-sm bg-neutral-200/60 dark:bg-neutral-800/50 border border-neutral-300/40 dark:border-neutral-700/40"
        />
      ))}
    </div>
  );
}
