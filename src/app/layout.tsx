import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "IT Jobs",
  description: "Trang web tìm kiếm việc làm IT hàng đầu Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        suppressHydrationWarning 
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
