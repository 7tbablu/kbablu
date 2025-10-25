import {
  Laptop,
  Smartphone,
  ShoppingCart,
  Palette,
  Cloud,
  LifeBuoy,
} from "lucide-react";

export const projectOverviewData = [
  {
    id: "frontend-apps",
    title: "Frontend Apps",
    category: "Frontend",
    description:
      "We design and develop pixel-perfect, fully responsive frontend applications that look stunning on any device. Focused on speed, accessibility, and modern UI patterns.",
    features: [
      "Responsive layouts for all devices",
      "Modern UI libraries & animations",
      "Optimized for performance",
    ],
    keyFeatures: [
      "Responsive design",
      "Authentication",
      "REST API integration",
    ],
    techStack: ["Next.js", "React", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1659043711331-1daee3019b26?w=800&auto=format&fit=crop&q=80",

    github: "https://github.com/username/frontend-app",
    liveDemo: "https://frontend-app-live.com",
    sourceZip: "/downloads/frontend-app.zip",
    createdAt: "2025-09-30",
  },
  {
    id: "fullstack-apps",
    title: "Full Stack Apps",
    category: "Full Stack",
    description:
      "We build scalable full stack apps with Next.js, TypeScript, and robust backend APIs. Designed for security, performance, and seamless UX.",
    features: [
      "Next.js + TypeScript architecture",
      "REST & GraphQL APIs",
      "Secure authentication & roles",
    ],
    keyFeatures: ["API integration", "Scalability", "Type safety"],
    techStack: ["Next.js", "TypeScript", "Prisma", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",

    github: "https://github.com/username/fullstack-app",
    liveDemo: "https://fullstack-app-live.com",
    sourceZip: "/downloads/fullstack-app.zip",
    createdAt: "2025-09-25",
  },
  {
    id: "ecommerce-app",
    title: "Ecommerce Platform",
    category: "Ecommerce",
    description:
      "A complete ecommerce solution with product management, shopping cart, and secure checkout. Built for speed and scalability.",
    features: [
      "Product search and filters",
      "Cart and wishlist features",
      "Stripe-based checkout",
    ],
    keyFeatures: ["Secure payments", "Inventory management", "Order tracking"],
    techStack: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop&q=80",

    github: "https://github.com/username/ecommerce-app",
    liveDemo: "https://ecommerce-app-live.com",
    sourceZip: "/downloads/ecommerce-app.zip",
    createdAt: "2025-09-18",
  },
  {
    id: "social-app",
    title: "Social Media App",
    category: "Mobile",
    description:
      "A full-featured social media app where users can post, like, comment, and connect. Focused on real-time updates and smooth UI transitions.",
    features: [
      "Real-time feed updates",
      "User profiles & media uploads",
      "Notifications & messaging",
    ],
    keyFeatures: ["Real-time data", "Image uploads", "Interactive UI"],
    techStack: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&auto=format&fit=crop&q=80",

    github: "https://github.com/username/social-app",
    liveDemo: "https://social-app-live.com",
    sourceZip: "/downloads/social-app.zip",
    createdAt: "2025-09-12",
  },
  {
    id: "blog-app",
    title: "Developer Blog Platform",
    category: "Content",
    description:
      "A clean and modern markdown-powered blog app for developers to write, share, and manage articles effortlessly.",
    features: [
      "Markdown editor & syntax highlighting",
      "Tag-based categorization",
      "SEO optimized architecture",
    ],
    keyFeatures: ["Markdown support", "SEO friendly", "Dark mode"],
    techStack: ["Next.js", "React", "MDX", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",

    github: "https://github.com/username/blog-app",
    liveDemo: "https://blog-app-live.com",
    sourceZip: "/downloads/blog-app.zip",
    createdAt: "2025-09-05",
  },
];

export const navLinks = [
  { name: "Home", href: `${process.env.NEXT_PUBLIC_APP_URL!}` },
  { name: "Services", href: `${process.env.NEXT_PUBLIC_APP_URL!}/services` },
  {
    name: "Blog",
    href: `${process.env.NEXT_PUBLIC_APP_URL!}/blog`,
  },

  { name: "Projects", href: `${process.env.NEXT_PUBLIC_APP_URL!}/projects` },
  { name: "About", href: `${process.env.NEXT_PUBLIC_APP_URL!}/about` },
  { name: "Contact", href: `${process.env.NEXT_PUBLIC_APP_URL!}/contact` },
];

export const servicesData = [
  {
    icon: Laptop,
    title: "Web Application Development",
    desc: "Scalable, secure, and blazing fast web apps built with modern frameworks like Next.js, React, and Node.js.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform native apps built using React Native & Expo – fast, responsive, and user-friendly.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Full-featured e-commerce platforms with product management, secure checkout, and payment integration.",
  },
  {
    icon: Palette,
    title: "UI/UX Design & Branding",
    desc: "Beautiful, intuitive, and brand-consistent designs that engage and delight users across platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    desc: "Deploy, scale, and manage applications seamlessly with AWS, Docker, and CI/CD pipelines.",
  },
  {
    icon: LifeBuoy,
    title: "Support & Maintenance",
    desc: "Continuous updates, monitoring, and technical support to keep your applications running smoothly.",
  },
];
