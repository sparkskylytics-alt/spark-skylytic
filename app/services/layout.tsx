import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing, Web & Software Services",
  description: "Brand strategy, website design, custom software development, SEO and performance marketing — delivered to clients across India and remotely worldwide.",
  openGraph: {
    title: "Digital Marketing, Web & Software Services | Spark Skylytics",
    description: "Brand strategy, website design, custom software development, SEO and performance marketing — delivered to clients across India and remotely worldwide.",
    url: "/services/",
  },
  twitter: {
    title: "Digital Marketing, Web & Software Services | Spark Skylytics",
    description: "Brand strategy, website design, custom software development, SEO and performance marketing — delivered to clients across India and remotely worldwide.",
  },
  keywords: [
    "digital marketing services",
    "website design services",
    "SEO services India",
    "branding agency",
    "social media marketing",
    "performance marketing",
    "remote digital marketing services",
    "online SEO services India",
    "Google Ads management agency",
    "Meta Ads agency India",
    "content marketing services",
    "e-commerce marketing agency",
    "custom software development services",
    "custom web application development",
    "bespoke software development company",
    "SaaS product development",
    "enterprise software development company",
    "MERN stack development company",
    "React.js development company",
    "Next.js development agency",
    "custom CRM development",
    "e-commerce website development company",
    "Shopify development agency",
    "WordPress development company",
    "API development and integration",
    "UI/UX design agency",
  ],
  alternates: { canonical: "/services/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
