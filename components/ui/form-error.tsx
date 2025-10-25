"use client";

import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface FormErrorProps {
  message: string;
  size?: "small" | "medium";
  isText?: boolean;
  className?: string;
}

export function FormError({
  message,
  size = "medium",
  isText = true,
  className,
}: FormErrorProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-1.5 mt-0.5 text-destructive",
        !isText &&
          "border border-destructive/20 rounded-md bg-destructive/5 justify-center",
        size === "small" ? "text-xs" : "text-sm",
        className
      )}
    >
      {!isText && (
        <AlertCircle
          className={cn(size === "small" ? "w-4 h-4" : "w-5 h-5")}
          aria-hidden="true"
        />
      )}
      <span>{message}</span>
    </div>
  );
}
