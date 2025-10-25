"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import FormLabel from "../ui/custom-lable";

export function MobileModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // avoid hydration mismatch
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center justify-between w-full">
      <FormLabel
        htmlFor="theme-switch"
        className="text-base font-medium"
        label="Dark Mode"
      />
      <Switch
        id="theme-switch"
        checked={isDark}
        className="cursor-pointer"
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  );
}
