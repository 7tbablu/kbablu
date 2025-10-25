import { Navbar } from "@/components/layout/navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {children}
      </div>
    </>
  );
}
