import React from "react";

export const metadata = {
  title: "Privacy Policy - KBablu",
  description:
    "Learn how Bablu Kumar (kbablu.com) collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 text-neutral-800 dark:text-neutral-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At <span className="font-semibold">kbablu.com</span>, I am committed to
        protecting your privacy. This Privacy Policy explains how I collect,
        use, and safeguard your personal information when you use my website and
        services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information I Collect
      </h2>
      <p className="mb-4">
        I may collect personal information you voluntarily provide, such as your
        name, email address, and project requirements. I also collect usage data
        through cookies and analytics tools to improve the website and provide
        better services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How I Use Your Information
      </h2>
      <div className="mb-4">
        Your data is used to:
        <ul className="list-disc list-inside mt-2">
          <li>Respond to your inquiries or project requests</li>
          <li>Provide and maintain the website and services</li>
          <li>Improve website performance and user experience</li>
          <li>Send updates related to my projects or services</li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
      <p className="mb-4">
        I implement appropriate security measures to protect your personal data.
        However, no method of transmission over the internet is 100% secure, and
        I cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">
        I use cookies and similar tracking technologies to analyze website
        activity and improve services. You can disable cookies in your browser
        settings, but some website features may not function properly.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Third-Party Services
      </h2>
      <p className="mb-4">
        I may use third-party services for analytics, hosting, or integrations,
        which have their own privacy policies. I recommend reviewing their
        policies for more information. I do not sell your personal data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Children&apos;s Privacy
      </h2>
      <p className="mb-4">
        My website and services are not intended for children under the age of
        13, and I do not knowingly collect personal data from children.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Changes to This Policy
      </h2>
      <p className="mb-4">
        I may update this Privacy Policy from time to time. Updates will be
        posted on this page, and I encourage you to review it periodically.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Me</h2>
      <p className="mb-4">
        For any questions regarding this Privacy Policy, you can contact me at{" "}
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
