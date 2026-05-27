import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { enUS, uk } from "date-fns/locale";
import { setDefaultOptions } from "date-fns/setDefaultOptions";

import { RootLayout } from "@/layouts/root";

import { ContextModal } from "@/contexts/modal";

import { SFCompactDisplay, SFProText } from "../fonts";

import { CrispLoader } from "../scripts/crisp";

import { getTranslations } from "next-intl/server";

import { clsx } from "clsx";

import "../globals.css";

import type { Organization, WebSite, WithContext } from "schema-dts";

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

  const tMeta = await getTranslations({ locale, namespace: "metadata" });

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
        <script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getOrganizationJsonLd({
                title: tMeta("title"),
                description: tMeta("description"),
              }),
            ),
          }}
        />

        <script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              getWebsiteJsonLd({
                title: tMeta("title"),
                description: tMeta("description"),
                locale,
              }),
            ),
          }}
        />

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

export const getOrganizationJsonLd = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): WithContext<Organization> => {
  const baseUrl = process.env.NEXT_PUBLIC_URL!;

  // const socialLinks = [
  //   process.env.NEXT_PUBLIC_FACEBOOK_URL,
  // ].filter(Boolean) as string[];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: title,
    url: baseUrl,
    description: description,
    logo: `${baseUrl}/default-image.png`,
    brand: {
      "@type": "Brand",
      name: "eDoktor",
    },
    // ...(socialLinks.length > 0 && { sameAs: socialLinks }),
  };
};
export const getWebsiteJsonLd = ({
  title,
  description,
  locale,
}: {
  title: string;
  description: string;
  locale: string;
}): WithContext<WebSite> => {
  const baseUrl = process.env.NEXT_PUBLIC_URL!;
  const localizedUrl = `${baseUrl}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${localizedUrl}/#website`,
    url: localizedUrl,
    name: title,
    description: description,
    inLanguage: locale,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };
};
