import type { MetadataRoute } from "next";

import { projects, units } from "../src/data/site";

const baseUrl = "https://novakinvest.rs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/o-nama", "/ponuda", "/reference", "/kontakt"];
  const projectRoutes = projects.map((project) =>
    project.status === "completed"
      ? `/reference/${project.slug}`
      : `/ponuda/${project.slug}`,
  );
  const unitRoutes = units.map(
    (unit) => `/ponuda/${unit.projectSlug}/${unit.slug}`,
  );

  return [...staticRoutes, ...projectRoutes, ...unitRoutes].map((route, index) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
