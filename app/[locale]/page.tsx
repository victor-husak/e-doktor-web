import { HomeDomain } from "@/domains/home";

import { Metadata } from "next";

import { routing } from "@/i18n/routing";
import { generateSEO } from "@/utils/seo";

import { getTranslations, setRequestLocale } from "next-intl/server";

import type { WebPage, WithContext } from "schema-dts";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  props: HomePageProps,
): Promise<Metadata> {
  const tMeta = await getTranslations("metadata");

  const params = await props.params;

  return generateSEO({
    title: tMeta("title"),
    description: tMeta("description"),
    url: `/`,
    locale: params.locale,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function HomePage(props: HomePageProps) {
  const { locale } = await props.params;

  setRequestLocale(locale);

  const tMeta = await getTranslations("metadata");

  const webPageJsonLd = getWebPageJsonLd(tMeta("title"), locale);

  return (
    <>
      {/* WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd),
        }}
      />

      <HomeDomain />
    </>
  );
}

const baseUrl = process.env.NEXT_PUBLIC_URL!;

const getWebPageJsonLd = (
  title: string,
  locale: string,
): WithContext<WebPage> => {
  const localizedUrl = `${baseUrl}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${localizedUrl}/#homepage`,
    url: localizedUrl,
    name: title,
    isPartOf: {
      "@id": `${localizedUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#organization`,
    },
  };
};
