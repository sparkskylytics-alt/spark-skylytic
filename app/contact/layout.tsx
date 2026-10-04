import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Digital Marketing Agency in India",
  description: "Get a free consultation on SEO, web design, branding or digital marketing. Spark Skylytics works with businesses in every Indian city and worldwide.",
  openGraph: {
    title: "Contact Our Digital Marketing Agency in India | Spark Skylytics",
    description: "Get a free consultation on SEO, web design, branding or digital marketing. Spark Skylytics works with businesses in every Indian city and worldwide.",
    url: "/contact/",
  },
  twitter: {
    title: "Contact Our Digital Marketing Agency in India | Spark Skylytics",
    description: "Get a free consultation on SEO, web design, branding or digital marketing. Spark Skylytics works with businesses in every Indian city and worldwide.",
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
