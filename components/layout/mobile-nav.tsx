"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {  Menu } from "lucide-react";
import { navLinks } from "@/constants/data";
import { MobileModeToggle } from "./mobile-theme-toggle";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          asChild
          className="border rounded-[2px] border-foreground/85 cursor-pointer"
        >
          <button className="border">
            <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          {/* HEADER */}
          <SheetHeader className="p-0 h-12 shrink-0">
            <SheetTitle className="bg-[#3daad9] px-4 text-lg h-full flex items-center">
              Welcome
            </SheetTitle>
          </SheetHeader>

          <div className="px-2">
            <nav className="flex flex-col gap-3 mt-4 mb-7">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={cn(
                      "block rounded-md px-3 py-2 font-semibold transition-colors",
                      pathname === link.href
                        ? "bg-[#3daad9] dark:bg-[#033477] text-white"
                        : "hover:bg-[#68b3d34A] dark:hover:bg-[#0237808A]"
                    )}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#68b3d34A] dark:hover:bg-[#0237808A] block rounded-md px-3 py-2 font-semibold transition-colors"
              >
                Github
              </a>
            </nav>
            <div className="px-2">
              {/* THEME TOGGLE  */}
              <div className="flex items-center gap-4 border-t pt-6">
                <MobileModeToggle />
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <SheetFooter className="shrink-0 text-xs text-muted-foreground p-4 border-t">
            Kbablu.com || With love
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
