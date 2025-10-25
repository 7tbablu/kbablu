import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/about",
  "/api/public(.*)",
  "/api/webhooks/clerk",
]);

const isProtectedRoute = createRouteMatcher([
  "/profile(.*)",
  "/contact",
  "/settings(.*)",
]);

const isAdminRoute = createRouteMatcher(["/my-dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const url = req.nextUrl;

  // 1️⃣ Allow all public routes
  if (isPublicRoute(req)) return NextResponse.next();

  // 2️⃣ Require sign-in for protected routes
  if (isProtectedRoute(req)) {
    if (!userId) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    return NextResponse.next();
  }

  // 3️⃣ Admin routes: require auth + admin role
  if (
    isAdminRoute(req) &&
    (await auth()).sessionClaims?.metadata?.role !== "admin"
  ) {
    if (!userId) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpg|jpeg|png|svg|gif|ico|woff2?|ttf|json|txt)).*)",
    "/(api|trpc)(.*)",
  ],
};
