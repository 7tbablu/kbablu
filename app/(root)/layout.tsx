import { Navbar } from "@/components/layout/navbar";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen relative">{children}</div>
    </>
  );
}
