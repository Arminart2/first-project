import type { Metadata } from "next";

import localFont from "next/font/local"

import "./globals.css";

import Nav from "./components/nav/nav";

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
      <body className={` bg-[#14151C] text-[#FFFFFF] ${iranSansFont.className}`}>
        <main >
          <Nav/>
        {children}
        </main>
      </body>
    </html>
  );
}
