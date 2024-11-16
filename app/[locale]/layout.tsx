import { Noto_Sans_KR } from "next/font/google";
import { notFound } from "next/navigation";

import { getMessages, setRequestLocale } from "next-intl/server";

import { NextIntlClientProvider } from "next-intl";

import { locales } from "@/i18n/config";

import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locale.includes(locale as any)) notFound();
  const messages = await getMessages();

  await setRequestLocale(locale);

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={notoSansKR.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
