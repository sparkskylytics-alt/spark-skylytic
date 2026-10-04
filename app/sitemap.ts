import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/wordpress";
import { SITE_URL } from "../lib/site";
import { locations } from "../lib/locations";

export const dynamic = "force-static";

const BASE_URL = SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const buildDate = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: buildDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about/`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/process/`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact/`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog/`, lastModified: buildDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/digital-marketing-agency/`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map(({ slug }) => ({
    url: `${BASE_URL}/digital-marketing-agency/${slug}/`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...locationPages, ...blogPages];
}
