import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
