"use client";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/routing";

import { Button } from "@/components/ui/button";
import Row from "@/components/ui/Row";

import { cn } from "@/lib/utils";

const LanguageSelector = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLocale: "en" | "ko") => {
    router.replace(pathname, { locale: newLocale });
  };
  return (
    <Row
      classNames={cn(
        "absolute top-16 right-4",
        "sm:relative sm:top-0 sm:right-0",
        "ml-4",
      )}
      gap={`gap-2`}
    >
      <Button
        onClick={() => changeLanguage("en")}
        size="sm"
        className={cn(
          `h-fit`,
          `border-none bg-transparent text-lg p-0`,
          `hover:bg-transparent hover:text-blue-700`,
          locale === "en" ? "text-blue-500" : "text-gray-600",
        )}
      >
        EN
      </Button>
      <Button
        onClick={() => changeLanguage("ko")}
        size="sm"
        className={cn(
          `h-fit`,
          `border-none bg-transparent text-lg p-0`,
          `hover:bg-transparent hover:text-blue-700`,
          locale === "ko" ? "text-blue-500" : "text-gray-500",
        )}
      >
        KR
      </Button>
    </Row>
  );
};

export default LanguageSelector;
