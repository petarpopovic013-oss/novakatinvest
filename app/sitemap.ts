import type { MetadataRoute } from "next";

import { referenceStories } from "../src/data/references";
import { offerProjects, units } from "../src/data/site";
import { absoluteUrl, DEFAULT_OG_IMAGE, pageUrl } from "../src/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: pageUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
    {
      url: pageUrl("/ponuda"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: offerProjects.map((project) => absoluteUrl(project.hero.src)),
    },
    {
      url: pageUrl("/o-nama"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: pageUrl("/reference"),
      changeFrequency: "monthly",
      priority: 0.7,
      images: referenceStories.map((reference) => absoluteUrl(reference.poster)),
    },
    {
      url: pageUrl("/kontakt"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = offerProjects.map((project) => ({
    url: pageUrl(`/ponuda/${project.slug}`),
    changeFrequency: "weekly",
    priority: 0.85,
    images: [project.hero, ...project.gallery].map((asset) => absoluteUrl(asset.src)),
  }));

  const unitRoutes: MetadataRoute.Sitemap = units.map((unit) => ({
    url: pageUrl(`/ponuda/${unit.projectSlug}/${unit.slug}`),
    changeFrequency: "weekly",
    priority: 0.8,
    images: [unit.visual, unit.floorPlan, unit.positionPlan, ...(unit.gallery ?? [])]
      .filter((asset) => asset !== undefined)
      .map((asset) => absoluteUrl(asset.src)),
  }));

  const referenceRoutes: MetadataRoute.Sitemap = referenceStories.map((reference) => ({
    url: pageUrl(`/reference/${reference.slug}`),
    changeFrequency: "yearly",
    priority: 0.7,
    images: [reference.poster, ...reference.gallery.map((image) => image.src)].map(
      absoluteUrl,
    ),
  }));

  return [...staticRoutes, ...projectRoutes, ...unitRoutes, ...referenceRoutes];
}
