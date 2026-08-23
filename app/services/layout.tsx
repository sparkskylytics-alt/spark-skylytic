import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing, Branding & Web Design Services",
  description: "Explore Spark Skylytics services: brand strategy, website design and development, SEO, social media and performance marketing.",
  keywords: ["digital marketing services", "website design services", "SEO services India", "branding agency", "social media marketing", "performance marketing"],
  alternates: { canonical: "/services/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
