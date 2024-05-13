import type { Metadata } from "next";

import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";
import { clsx } from "clsx";

import Header from "@/components/organism/Header";

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"] });

// testing redeploys

export const metadata: Metadata = {
  title: "Lee Tekwoo - Portfolio",
  description: "FE Dev. 이택우 포트폴리오",
  openGraph: {
    title: "Lee Tekwoo - Portfolio",
    description: "FE Dev. 이택우 포트폴리오",
    images: ["/images/img179.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(notoSansKR.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
