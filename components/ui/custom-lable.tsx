"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface FormLabelProps {
  htmlFor?: string;
  label: string;
  required?: boolean;
  className?: string;
}

const FormLabel: React.FC<FormLabelProps> = ({
  htmlFor,
  label,
  required = false,
  className = "",
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "block text-sm font-medium mb-1 text-text-primary w-max",
        className
      )}
    >
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default FormLabel;
