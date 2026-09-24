import type { Metadata } from "next";

export const SITE_URL = "https://novakinvest.rs";
export const SITE_NAME = "Novak AT Invest";
export const DEFAULT_OG_IMAGE = "/images/novak-share-banner.jpg";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function pageUrl(path = "/") {
  if (path === "/") return `${SITE_URL}/`;
  return absoluteUrl(`${path.replace(/\/+$/, "")}/`);
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = "Novak AT Invest projekat u Novom Sadu",
  keywords,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "sr_RS",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: path,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}
