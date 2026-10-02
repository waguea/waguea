import type { MetadataRoute } from "next";
import { config } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  const base = config.site || "http://localhost:3000";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // internal component playground — not part of the site
      disallow: ["/api/", "/components", "/components1", "/components2", "/components3", "/components-mono"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
