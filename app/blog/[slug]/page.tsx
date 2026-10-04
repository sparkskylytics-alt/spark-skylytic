import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FloatingSocial from "../../components/FloatingSocial";
import { getAllPosts, getPostBySlug } from "../../../lib/wordpress";
import { SITE_URL } from "../../../lib/site";

const shell = "mx-auto w-[min(820px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export const dynamicParams = false;

// output: "export" requires at least one static param per dynamic route, so
// fall back to a single non-indexed placeholder slug until WordPress has posts.
const PLACEHOLDER_SLUG = "coming-soon";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  if (posts.length === 0) return [{ slug: PLACEHOLDER_SLUG }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  if (slug === PLACEHOLDER_SLUG) {
    return { title: "Coming Soon", robots: { index: false, follow: false } };
  }

  const post = await getPostBySlug(slug);
  if (!post) return {};

  const description = post.excerpt.slice(0, 155);

  return {
    title: post.title,
    description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: `${post.title} | Spark Skylytics`,
      description,
      url: `/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.date,
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
    twitter: {
      title: `${post.title} | Spark Skylytics`,
      description,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === PLACEHOLDER_SLUG) {
    return (
      <main className="min-h-screen bg-white text-[#111312]">
        <Navbar active="Blog" />
        <FloatingSocial />
        <div className={`${shell} py-24 text-center`}>
          <p className="text-[15px] font-semibold">New posts are on the way.</p>
          <p className="mt-2 text-[13px] leading-6 text-[#696a65]">
            We&apos;re setting up the blog — check back soon.
          </p>
          <a href="/blog/" className="mt-6 inline-block text-[13px] font-bold text-[#176c5b]">
            ← Back to blog
          </a>
        </div>
        <Footer />
      </main>
    );
  }

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white text-[#111312]">
      <Navbar active="Blog" />
      <FloatingSocial />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            author: { "@type": "Organization", name: post.authorName },
            publisher: {
              "@type": "Organization",
              name: "Spark Skylytics",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/Logo/new-logo.png` },
            },
            image: post.featuredImage ?? undefined,
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}/`,
          }),
        }}
      />

      <article className={`${shell} py-10 lg:py-14`}>
        <a href="/blog/" className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#176c5b]">
          ← Back to blog
        </a>

        <h1 className="mt-4 text-[clamp(30px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.03em]">
          {post.title}
        </h1>
        <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#77736c]">
          {formatDate(post.date)} · {post.authorName}
        </p>

        {post.featuredImage ? (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[8px] border border-[#dedbd5] bg-[#e8e5df]">
            <Image src={post.featuredImage} alt={post.title} fill sizes="820px" className="object-cover" priority />
          </div>
        ) : null}

        <div className="wp-content mt-10" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <Footer />
    </main>
  );
}
