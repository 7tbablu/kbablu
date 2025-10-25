import React from "react";
import { cn } from "@/lib/utils"; // adjust import based on your cn utility location
import { useRouter } from "next/navigation";

interface GradientButtonProps {
  title: string;
  link: string;
  className?: string;
}

const GradientButton = ({ title, link, className }: GradientButtonProps) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "inline-block rounded-md bg-gradient-to-r from-blue-400 via-purple-500 to-purple-700 p-[1px]",
        className
      )}
    >
      <div className="flex bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#f8f8f8] rounded-md">
        <button
          onClick={() => router.push(link)}
          className="flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:brightness-125 transition duration-300 cursor-pointer"
        >
          <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-purple-900 text-transparent bg-clip-text">
            {title}
          </span>
        </button>
      </div>
    </div>
  );
};

export default GradientButton;
