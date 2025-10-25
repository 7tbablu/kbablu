import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { ModalProvider } from "@/components/ui/animated-modal";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/layout/navbar";
import { FaSpinner } from "react-icons/fa6";

const dn_Sans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KBablu | Web Development Agency",
  description:
    "KBablu is a modern web development agency specialising in building responsive, scalable, and high-performance websites and applications tailored to your business needs.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dn_Sans.className}  antialiased`}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ClerkLoading>
              <div className="w-full min-h-screen flex items-center justify-center">
                <div>
                  <FaSpinner
                    size={40}
                    color="#7c3aed"
                    className="animate-spin text-cyan-700"
                  />
                </div>
              </div>
            </ClerkLoading>
            <ClerkLoaded>
              <ModalProvider>
                <Navbar />
                {children} {modal} <Footer />
              </ModalProvider>
            </ClerkLoaded>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
