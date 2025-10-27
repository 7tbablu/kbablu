"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuthUser } from "@/hooks/useAuthUser";
import { LogOut, User } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export const AuthButton = () => {
  const { user, loading } = useAuthUser();

  if (loading) {
    return <div className="h-8 w-8 animate-pulse rounded-full bg-muted/40" />;
  }

  // 🟣 If not signed in → show Sign In button
  if (!user) {
    return (
      <Button asChild variant="gradient" size="sm">
        <Link href="/sign-in">Sign In</Link>
      </Button>
    );
  }

  // 🟢 If signed in → show dropdown menu
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer ring-2 ring-cyan-500 hover:ring-purple-500 transition-all duration-300 rounded-md size-7">
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback>
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-56 rounded-2xl border bg-background/95 shadow-lg backdrop-blur-md"
      >
        <DropdownMenuLabel className="flex items-center gap-2 px-2 py-1.5">
          <Avatar className="size-6">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-medium text-sm capitalize">{user.name}</p>
            <p className="text-xs text-muted-foreground truncate">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Example Profile link */}
        <DropdownMenuItem asChild>
          <Link
            href="/profile"
            className="flex items-center gap-2 w-full text-sm"
          >
            <User size={16} />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <SignOutButton>
          <DropdownMenuItem
            className="text-red-500 focus:bg-red-50 dark:focus:bg-red-950/30"
            onSelect={(e) => e.preventDefault()}
          >
            <LogOut size={16} className="mr-2" />
            Log out
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
