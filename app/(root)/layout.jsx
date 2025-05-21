import Header from "@/components/shared/header/index";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
