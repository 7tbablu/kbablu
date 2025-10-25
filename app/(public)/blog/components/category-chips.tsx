import { techIcons } from "@/app/(root)/components/teck-icons";
import React from "react";

export const CategoryChips = ({
  categories,
  active,
  onSelect,
}: {
  categories: string[];
  active: string;
  onSelect: (c: string) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            onClick={() => onSelect(c)}
            className={`inline-flex items-center gap-2 px-3 h-8 rounded-sm text-sm font-medium transition
              ${
                isActive
                  ? "bg-[#3daad9] text-white shadow-md"
                  : "bg-neutral-100 dark:bg-neutral-800 text-foreground/90 hover:shadow-sm hover:shadow-foreground/10 dark:hover:shadow-foreground/20"
              }
            `}
          >
            {techIcons[c]}
            {c}
          </button>
        );
      })}
    </div>
  );
};
