import AuthBgWrapper from "./components/auth-bgwrapper";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthBgWrapper>{children}</AuthBgWrapper>;
}
