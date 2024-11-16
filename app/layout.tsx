import type { Metadata } from "next";

import "./globals.css";

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
  return children;
}
