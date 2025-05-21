import Header from "@/components/shared/header/index";

export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}
