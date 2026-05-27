import { routing } from "@/i18n/routing";

const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

type Locale = (typeof routing.locales)[number];
type HreflangValue = Locale | "x-default";

export type HreflangEntry = {
  hreflang: HreflangValue;
  url: string;
};

function buildLocaleUrl(path: string, locale: Locale): string {
  return `${baseUrl}/${locale}${path}`;
}

export function buildHreflangs(path: string) {
  const entries: Partial<Record<HreflangValue, string>> = {
    "x-default": buildLocaleUrl(path, routing.defaultLocale),
  };

  routing.locales.forEach((locale) => {
    entries[locale] = buildLocaleUrl(path, locale);
  });

  entries["x-default"] = buildLocaleUrl(path, routing.defaultLocale);

  return entries;
}
