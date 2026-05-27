import { Metadata } from "next";

import { buildHreflangs } from "./hreflang";

import { routing } from "@/i18n/routing";

export type SEOProps = {
  title?: string;
  description?: string;
  images?: string[];
  url?: string;
  type?: "website" | "article";
  locale?: string;
  siteName?: string;
  twitterCard?: "summary" | "summary_large_image";
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

const DEFAULT_SEO: Required<SEOProps> = {
  title: "Albania’s complete national digital health platform",
  description:
    "A single, unified digital gateway where citizens, doctors, institutions, and emergency services connect seamlessly. Built with advanced technology, strong security, and a human-centered approach.",
  images: [`${baseUrl}/default-image.png`],
  url: baseUrl,
  type: "website",
  locale: routing.defaultLocale,
  siteName: "eDoktor",
  twitterCard: "summary_large_image",
  robots: { index: true, follow: true },
  keywords: [],
  author: "",
  publishedTime: "",
  modifiedTime: "",
};

export const generateSEO = (props: SEOProps): Metadata => {
  const _props = props;

  for (const key in props) {
    const value = props[key as keyof SEOProps];

    if (value === undefined || value === null) {
      delete _props[key as keyof SEOProps];
    }
  }

  const seo = { ...DEFAULT_SEO, ..._props };

  // OpenGraph и Twitter
  const ogImages = seo.images.map((img) => ({ url: img }));
  const twitterImages = seo.images;

  const localePrefix = `/${seo.locale}`;
  const url = `${baseUrl}${localePrefix}${seo.url}`;

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: url, languages: buildHreflangs(seo.url) },
    robots: seo.robots,
    keywords: seo.keywords.length > 0 ? seo.keywords.join(", ") : undefined,
    authors: seo.author ? [{ name: seo.author }] : undefined,
    openGraph: {
      type: seo.type,
      title: seo.title,
      description: seo.description,
      url: url,
      siteName: seo.siteName,
      images: ogImages,
      ...(seo.type === "article" && {
        publishedTime: seo.publishedTime || undefined,
        modifiedTime: seo.modifiedTime || undefined,
      }),
    },
    twitter: {
      card: seo.twitterCard,
      title: seo.title,
      description: seo.description,
      images: twitterImages,
    },
  };
};
