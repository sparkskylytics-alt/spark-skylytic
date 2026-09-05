// Headless WordPress client. Set WP_API_URL (e.g. https://cms.sparkskylytics.com)
// once WordPress is live. Until then every call below fails soft and returns
// empty data so the build and the /blog pages never break.

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  authorName: string;
}

type RawWPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: [{ source_url?: string }];
    author?: [{ name?: string }];
  };
};

// WordPress's *.rendered fields contain HTML-entity-encoded text (e.g. &#8217;
// for an apostrophe), which needs decoding since React renders these as plain
// text nodes rather than parsed HTML.
function decodeEntities(text: string) {
  return text
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripHtml(html: string) {
  return decodeEntities(html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim());
}

function normalize(raw: RawWPPost): WPPost {
  return {
    id: raw.id,
    slug: raw.slug,
    date: raw.date,
    title: stripHtml(raw.title.rendered),
    excerpt: stripHtml(raw.excerpt.rendered),
    content: raw.content.rendered,
    featuredImage: raw._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null,
    authorName: raw._embedded?.author?.[0]?.name ?? "Spark Skylytics",
  };
}

const WP_API_URL = process.env.WP_API_URL?.replace(/\/$/, "");

export async function getAllPosts(): Promise<WPPost[]> {
  if (!WP_API_URL) return [];

  try {
    // per_page=100 is the WP REST API's max; fine until the blog passes 100 posts.
    const res = await fetch(`${WP_API_URL}/wp-json/wp/v2/posts?_embed&per_page=100`);
    if (!res.ok) return [];
    const raw: RawWPPost[] = await res.json();
    return raw.map(normalize);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  if (!WP_API_URL) return null;

  try {
    const res = await fetch(`${WP_API_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`);
    if (!res.ok) return null;
    const raw: RawWPPost[] = await res.json();
    return raw[0] ? normalize(raw[0]) : null;
  } catch {
    return null;
  }
}
