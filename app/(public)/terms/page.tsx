import React from "react";

export const metadata = {
  title: "Terms & Conditions - KBablu",
  description:
    "Read the terms and conditions for using Bablu Kumar's (kbablu.com) services and website.",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 text-neutral-800 dark:text-neutral-200">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to <span className="font-semibold">kbablu.com</span>. These
        Terms and Conditions (&quot;Terms&quot;) govern your use of my website
        and services. By accessing or using my platform, you agree to comply
        with these Terms. If you do not agree, please do not use the services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Services</h2>
      <p className="mb-4">
        I provide digital solutions including website development, web and
        mobile application development, and related design and deployment
        services. Project details, timelines, and payments are agreed upon via
        formal proposals or contracts prior to commencement.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Website</h2>
      <p className="mb-4">
        You agree not to misuse my website for unlawful purposes. You may not
        attempt to gain unauthorized access to any part of the platform,
        interfere with its functionality, or engage in any activity that
        disrupts its operation.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Intellectual Property
      </h2>
      <p className="mb-4">
        All content, graphics, logos, code, and materials on{" "}
        <span className="font-semibold">kbablu.com</span> are my intellectual
        property unless otherwise specified. You may not copy, reproduce, or
        distribute any content without prior written consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Payments & Refunds</h2>
      <p className="mb-4">
        Payments must be made according to the agreed proposal terms. Refunds
        are not provided once work has commenced unless specified in a separate
        agreement. In the event of payment delays, I reserve the right to pause
        or terminate the ongoing project.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Confidentiality</h2>
      <p className="mb-4">
        Both parties agree to maintain confidentiality regarding any proprietary
        information exchanged during the project, including business strategies,
        technical details, and customer data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Limitation of Liability
      </h2>
      <p className="mb-4">
        I will not be liable for any indirect, incidental, or consequential
        damages arising from the use or inability to use my services, including
        lost profits or data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Termination</h2>
      <p className="mb-4">
        I reserve the right to terminate access to my services if you breach
        these Terms. Upon termination, any outstanding payments become due
        immediately.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
      <p className="mb-4">
        I may modify these Terms at any time. Updates will be posted on this
        page, and your continued use of the services constitutes acceptance of
        the revised Terms.
      </p>

      <p className="mt-8">
        For any questions regarding these Terms, you can contact me at{" "}
        <a
          href="mailto:hello@kbablu.com"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          hello@kbablu.com
        </a>
        .
      </p>
    </main>
  );
}
