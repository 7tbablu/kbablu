import { Navbar } from "@/components/layout/navbar";

export default async function Adminayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen relative pb-12">{children}</div>
    </>
  );
}
