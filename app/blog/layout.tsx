import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guides on digital marketing, SEO, branding, web design and custom software development from the Spark Skylytics team.",
  keywords: [
    "digital marketing blog",
    "SEO tips India",
    "branding advice",
    "web design blog",
    "custom software development blog",
    "Spark Skylytics blog",
  ],
  openGraph: {
    title: "Blog | Spark Skylytics",
    description: "Practical guides on digital marketing, SEO, branding, web design and custom software development from the Spark Skylytics team.",
    url: "/blog/",
  },
  twitter: {
    title: "Blog | Spark Skylytics",
    description: "Practical guides on digital marketing, SEO, branding, web design and custom software development from the Spark Skylytics team.",
  },
  alternates: { canonical: "/blog/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
