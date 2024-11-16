import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ko"],
  defaultLocale: "ko",
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      en: "/en",
      ko: "/ko",
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
