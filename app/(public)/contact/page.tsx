import { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us - KBablu",
  description:
    "Get in touch with KBablu through social media or email for your web and app development needs.",
};

export default function ContactPage() {
  return <ContactContent />;
}
