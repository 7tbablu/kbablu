"use client";
import ContactCTA from "./components/conatact-cta";
import FAQSection from "./components/FAQSection";
import HeroSection from "./components/hero";
import ServicesSection from "./components/our-services";
import { Projects } from "./components/projects";
import { Testimonials } from "./components/testimonials";
import Achievements from "./components/achievements";
import BlogSection from "./components/blog-section";

export default function Home() {
  return (
    <main className="relative lg:space-y-5 bg-gradient-to-r from-transparent via-[#f4f4f4] to-transparent dark:via-[#00091d] pb-12">
      <div
        className="absolute inset-0 w-full -z-10"
        style={{
          backgroundImage: `
            radial-gradient(var(--dot-color) 2px, transparent 2px)
          `,
          backgroundSize: "200px 200px",
          maskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      />
      <HeroSection />
      <ServicesSection />
      <Projects />
      <Achievements />
      <Testimonials />
      <BlogSection />
      <FAQSection />
      <ContactCTA />
    </main>
  );
}
