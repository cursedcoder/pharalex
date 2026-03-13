import type { MetadataRoute } from "next";
import { getAllGlyphs, getAllCategories } from "@/lib/glyphs";
import { PHARAOHS } from "@/lib/data/pharaohs";

const BASE_URL = "https://pharalex.app";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const glyphs = await getAllGlyphs();
  const categories = await getAllCategories();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/browse`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pharaohs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/alphabet`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/acknowledgments`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/categories/${cat.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const glyphRoutes: MetadataRoute.Sitemap = glyphs.map((glyph) => ({
    url: `${BASE_URL}/glyph/${encodeURIComponent(glyph.code)}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const pharaohRoutes: MetadataRoute.Sitemap = PHARAOHS.map((pharaoh) => ({
    url: `${BASE_URL}/pharaohs/${pharaoh.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...pharaohRoutes,
    ...glyphRoutes,
  ];
}
