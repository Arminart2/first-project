import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "First-Project",
  description: "First-Project Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
