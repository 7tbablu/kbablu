export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="py-16 lg:py-28 xl:py-32 2xl:py-44">{children}</div>;
}
