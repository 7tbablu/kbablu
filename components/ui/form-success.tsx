"use client";

import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
  message: string;
  size?: "small" | "medium";
  isText?: boolean;
  className?: string;
}

export function FormSuccess({
  message,
  size = "medium",
  isText = false,
  className,
}: FormSuccessProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 rounded-md bg-green-50 p-2 text-green-700 border border-green-200",
        isText && "bg-transparent border-none justify-start",
        size === "small" ? "text-xs" : "text-sm",
        className
      )}
    >
      <CheckCircle
        className={cn(size === "small" ? "w-4 h-4" : "w-5 h-5")}
        aria-hidden="true"
      />
      <span>{message}</span>
    </div>
  );
}
