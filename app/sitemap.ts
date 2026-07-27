import type { MetadataRoute } from "next";
import { newsArticles } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdated = new Date("2026-07-27");
  const pages: MetadataRoute.Sitemap = [
    {
      url: "https://evergreenmalaysia.com",
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://evergreenmalaysia.com/about-us",
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://evergreenmalaysia.com/our-industries",
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://evergreenmalaysia.com/news-csr",
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://evergreenmalaysia.com/contact-us",
      lastModified: siteUpdated,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://evergreenmalaysia.com/privacy-policy",
      lastModified: siteUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://evergreenmalaysia.com/terms-of-use",
      lastModified: siteUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://evergreenmalaysia.com/cookie-policy",
      lastModified: siteUpdated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://evergreenmalaysia.com/accessibility",
      lastModified: siteUpdated,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  return [
    ...pages,
    ...newsArticles.map((article) => ({
      url: `https://evergreenmalaysia.com/news-csr/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
