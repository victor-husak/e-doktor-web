import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getMessages } from "next-intl/server";

import { setDefaultOptions } from "date-fns/setDefaultOptions";
import { uk, enUS } from "date-fns/locale";

import { RootLayout } from "@/layouts/root";

import { ContextModal } from "@/contexts/modal";

import { SFProText, SFCompactDisplay } from "../fonts";

import { CrispLoader } from "../scripts/crisp";

import { getTranslations } from "next-intl/server";

import { clsx } from "clsx";

import "../globals.css";

export async function generateMetadata({ params }: RootLayoutPageParams) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export type RootLayoutPageParams = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayoutPage({
  children,
  params,
}: RootLayoutPageParams) {
  const { locale } = await params;

  setDefaultOptions({ locale: locale === "en" ? enUS : uk });

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={clsx(
          SFProText.variable,
          SFCompactDisplay.variable,
          "container-variable",
          "antialiased",
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ContextModal>
            <RootLayout>{children}</RootLayout>
          </ContextModal>
        </NextIntlClientProvider>
      </body>

      <CrispLoader />
    </html>
  );
}
