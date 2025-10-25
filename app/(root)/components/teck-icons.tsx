import { JSX } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiClerk,
  SiFirebase,
  SiSupabase,
  SiExpress,
  SiRedux,
  SiGraphql,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiAwsamplify,
  SiVercel,
  SiNetlify,
  SiExpo,
  SiAndroid,
  SiIos,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiFramer,
} from "react-icons/si";
import { FaStripe, FaReact, FaNodeJs, FaLock } from "react-icons/fa6";
import { GiBearHead } from "react-icons/gi"; // 🐻 used for Zustand placeholder

export const techIcons: Record<string, JSX.Element> = {
  // --- Core Web Stack ---
  "Next.js": <SiNextdotjs className="text-gray-800 dark:text-gray-200" />,
  React: <SiReact className="text-cyan-500" />,
  "React Native": <FaReact className="text-cyan-500" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  HTML5: <SiHtml5 className="text-orange-500" />,
  CSS3: <SiCss3 className="text-blue-600" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-600" />,
  "Framer Motion": <SiFramer className="text-pink-500" />,

  // --- Backend & Server ---
  "Node.js": <FaNodeJs className="text-green-600" />,
  Express: <SiExpress className="text-gray-700 dark:text-gray-200" />,
  Prisma: <SiPrisma className="text-purple-500" />,
  GraphQL: <SiGraphql className="text-pink-600" />,

  // --- Databases ---
  MongoDB: <SiMongodb className="text-green-500" />,
  PostgreSQL: <SiPostgresql className="text-blue-500" />,
  MySQL: <SiMysql className="text-blue-600" />,

  // --- Auth & Integrations ---
  Clerk: <SiClerk className="text-purple-600" />,
  Firebase: <SiFirebase className="text-amber-500" />,
  Supabase: <SiSupabase className="text-emerald-500" />,
  Stripe: <FaStripe className="text-indigo-500" />,
  "Auth.js": <FaLock className="text-gray-600 dark:text-gray-300" />, // 🔒 Auth.js fallback

  // --- DevOps & Deployment ---
  Docker: <SiDocker className="text-blue-500" />,
  Kubernetes: <SiKubernetes className="text-blue-400" />,
  AWS: <SiAwsamplify className="text-orange-400" />,
  Vercel: <SiVercel className="text-gray-800 dark:text-gray-200" />,
  Netlify: <SiNetlify className="text-teal-500" />,

  // --- State Management ---
  Redux: <SiRedux className="text-purple-600" />,
  Zustand: <GiBearHead className="text-orange-500" />, // 🐻 Zustand placeholder icon

  // --- Mobile / Native ---
  Expo: <SiExpo className="text-black dark:text-gray-100" />,
  Android: <SiAndroid className="text-green-600" />,
  iOS: <SiIos className="text-gray-400" />,

  // --- Tools & Version Control ---
  Git: <SiGit className="text-orange-600" />,
  GitHub: <SiGithub className="text-gray-800 dark:text-gray-100" />,
};
