// Define routes by access type
export const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/about",
  "/contact",
  "/blog",
  "/api/public(.*)",
];

export const protectedRoutes = ["/contact", "/api/user(.*)"];

export const adminRoutes = ["/my-dashboard(.*)", "/api/admin(.*)"];
