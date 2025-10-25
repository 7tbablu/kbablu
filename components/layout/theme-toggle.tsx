"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils"; // adjust the import if your cn is elsewhere
import { Button } from "../ui/button";


export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : "light";

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-10 hidden md:flex"
      aria-label="Toggle theme"
    >
      <Sun
        className={cn(
          "absolute h-5 w-5 transition-all",
          currentTheme !== "light" && "scale-0 -rotate-90",
          currentTheme === "light" && "scale-100 rotate-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-all",
          currentTheme === "dark" && "scale-100 rotate-0",
          currentTheme !== "dark" && "scale-0 rotate-90"
        )}
      />
    </Button>
  );
}
