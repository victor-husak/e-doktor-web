import { HomeDomain } from "@/domains/home";

import { Metadata } from "next";

import { routing } from "@/i18n/routing";
import { generateSEO } from "@/utils/seo";

import { getTranslations, setRequestLocale } from "next-intl/server";

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

  return <HomeDomain />;
}
