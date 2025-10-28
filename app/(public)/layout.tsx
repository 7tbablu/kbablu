export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="py-24 md:py-28 xl:py-32 2xl:py-44">{children}</div>;
}
