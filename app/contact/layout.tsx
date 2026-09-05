import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Digital Growth Team",
  description: "Talk to Spark Skylytics about branding, web design, SEO or digital marketing. We work with clients across India and remotely worldwide.",
  openGraph: {
    title: "Contact Our Digital Growth Team | Spark Skylytics",
    description: "Talk to Spark Skylytics about branding, web design, SEO or digital marketing. We work with clients across India and remotely worldwide.",
    url: "/contact/",
  },
  twitter: {
    title: "Contact Our Digital Growth Team | Spark Skylytics",
    description: "Talk to Spark Skylytics about branding, web design, SEO or digital marketing. We work with clients across India and remotely worldwide.",
  },
  keywords: [
    "contact digital marketing agency",
    "web design agency Muzaffarnagar",
    "SEO consultation India",
    "Spark Skylytics contact",
    "hire remote digital marketing agency",
    "digital marketing agency for international clients",
    "book a free marketing consultation online",
  ],
  alternates: { canonical: "/contact/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
