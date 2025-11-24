"use client";

import { useLocale } from "next-intl";
import { useTransition, useCallback, useMemo } from "react";

import { usePathname, useRouter } from "@/i18n/routing";

export const useLangSelect = () => {
  const currentLocale = useLocale();

  const router = useRouter();
  const pathname = usePathname();
  const [_, startTransition] = useTransition();

  const label = useMemo(() => {
    return currentLocale === "en" ? "En" : "Sq";
  }, [currentLocale]);

  const onChangeLocale = useCallback(() => {
    startTransition(() => {
      router.replace(pathname, {
        locale: currentLocale === "en" ? "sq" : "en",
      });
    });
  }, [currentLocale, pathname, router]);

  return { label, onChangeLocale };
};
