import { Metadata } from "next";
import AboutContent from "./about-content";


export const metadata: Metadata = {
  title: "About Us - KBablu",
  description:
    "Learn about KBablu - our mission, values, and how we empower businesses with modern web solutions.",
};

export default function AboutPage() {
  return <AboutContent />;
}
