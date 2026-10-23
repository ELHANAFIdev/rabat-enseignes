import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rabat-enseignes.ma";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}#services`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#realisations`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#a-propos`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
