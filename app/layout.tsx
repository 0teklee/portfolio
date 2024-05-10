import { Noto_Sans_KR } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/organism/Header";

import { clsx } from "clsx";

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lee Tekwoo - Portfolio",
  description: "FE Dev. 이택우 포트폴리오",
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
