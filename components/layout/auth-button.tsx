"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuthUser } from "@/hooks/useAuthUser";
import { LogOut } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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

  // 🟢 If signed in → show avatar with hover details
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Avatar className="cursor-pointer ring-2 ring-cyan-500 hover:ring-purple-500 transition-all duration-300 rounded-md size-7">
          <AvatarImage src={user.image} alt={user.name} />
          <AvatarFallback>
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>

      <HoverCardContent
        align="end"
        sideOffset={8}
        className="w-56 p-3 rounded-2xl border bg-background/95 shadow-lg backdrop-blur-md"
      >
        <div>
          {/* User Info */}
          <div className="flex gap-3.5">
            <Avatar className="size-6">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm capitalize">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <div className="h-px bg-muted my-2.5" />

          {/* Logout */}
          <SignOutButton>
            <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30">
              <LogOut size={16} /> Log out
            </button>
          </SignOutButton>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
