import type { Metadata } from "next";

import localFont from "next/font/local"

import "./globals.css";

export const metadata: Metadata = {
  title: "First-Project",
  description: "First-Project Course",
};

const iranSansFont = localFont({
  src: "../public/font/IRANSansX-Regular.ttf",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-slate-900 text-slate-200 ${iranSansFont.className}`}>
        <main className="p-5">
        {children}
        </main>
      </body>
    </html>
  );
}
