import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO Blog for Indian Businesses",
  description: "Practical guides on digital marketing, SEO, branding and web design for Indian businesses, from the Spark Skylytics team.",
  keywords: [
    "digital marketing blog",
    "SEO tips India",
    "branding advice",
    "web design blog",
    "custom software development blog",
    "Spark Skylytics blog",
  ],
  openGraph: {
    title: "Digital Marketing & SEO Blog for Indian Businesses | Spark Skylytics",
    description: "Practical guides on digital marketing, SEO, branding and web design for Indian businesses, from the Spark Skylytics team.",
    url: "/blog/",
  },
  twitter: {
    title: "Digital Marketing & SEO Blog for Indian Businesses | Spark Skylytics",
    description: "Practical guides on digital marketing, SEO, branding and web design for Indian businesses, from the Spark Skylytics team.",
  },
  alternates: { canonical: "/blog/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
