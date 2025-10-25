
"use client";

import { useUser } from "@clerk/nextjs";

export function useAuthUser() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return { loading: true, user: null };
  }

  if (!isSignedIn) {
    return { loading: false, user: null };
  }

  return {
    loading: false,
    user: {
      id: user.id,
      name: user.fullName || `${user.firstName ?? ""} ${user.lastName ?? ""}`,
      email: user.primaryEmailAddress?.emailAddress || "",
      image: user.imageUrl,
    },
  };
}
