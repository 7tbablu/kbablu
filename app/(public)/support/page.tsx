
import React from "react";
import ContactCTA from "@/app/(root)/components/conatact-cta";

export const metadata = {
  title: "Support - KBablu",
  description:
    "Get support, contact information, and frequently asked questions for KBablu's services and website.",
};

export default function SupportPage() {
  return (
    <main className="container mx-auto px-2 text-neutral-800 dark:text-neutral-200">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <p className="mb-6">
        At <span className="font-semibold">Kbablu</span>, your satisfaction
        is my top priority. If you need help with a project, have questions
        about my services, or encounter issues with the website, this page will
        guide you on how to get support.
      </p>

      {/* Contact Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="mb-2">
          You can reach me directly via email for any questions or assistance:
        </p>
        <p className="mb-4">
          <a
            href="mailto:contact@kbablu.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            contact@kbablu.com
          </a>
        </p>
        <p>
          Alternatively, you can fill out the contact form on the{" "}
          <a
            href="/contact"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Contact page
          </a>{" "}
          and I will respond as soon as possible.
        </p>
      </section>

      {/* FAQs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              How can I request a project or quote?
            </h3>
            <p className="text-sm text-muted-foreground">
              You can reach me via email or the contact form with details of
              your project. I’ll review your requirements and provide a
              personalized quote.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">What services do you provide?</h3>
            <p className="text-sm text-muted-foreground">
              I specialize in full-stack web development using Next.js, React
              frameworks, mobile app development, UI/UX design, and prebuilt
              apps with source code.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">How long does a project take?</h3>
            <p className="text-sm text-muted-foreground">
              Project timelines vary depending on complexity. After reviewing
              your requirements, I provide an estimated timeline in the
              proposal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Do you provide post-launch support?
            </h3>
            <p className="text-sm text-muted-foreground">
              Yes! I offer maintenance and support for projects after
              deployment. Details can be discussed on a project-by-project
              basis.
            </p>
          </div>
        </div>
      </section>

      {/* Support Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tips for Faster Support</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            Provide clear and detailed descriptions of your issue or request.
          </li>
          <li>Include any relevant screenshots, links, or error messages.</li>
          <li>Mention your preferred timelines or deadlines if applicable.</li>
          <li>
            Check the FAQs first – your question might already be answered.
          </li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="">
        <ContactCTA />
      </section>
    </main>
  );
}
