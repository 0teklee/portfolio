import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ko", "en"],
  defaultLocale: "ko",
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      en: "/en",
      ko: "/ko",
    },
  },
});

export const { usePathname, useRouter } = createNavigation(routing);
