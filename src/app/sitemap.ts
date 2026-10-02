import type { MetadataRoute } from "next";
import { config } from "@/data/config";
import { getBlogPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.site || "http://localhost:3000";
  const posts = getBlogPosts().map((post) => ({
    url: `${base}/blogs/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/blogs`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...posts,
  ];
}
