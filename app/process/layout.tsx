import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work With Clients Across India",
  description: "See how Spark Skylytics runs digital marketing, SEO and website projects remotely for businesses across India — from first call to measurable growth.",
  openGraph: {
    title: "How We Work With Clients Across India | Spark Skylytics",
    description: "See how Spark Skylytics runs digital marketing, SEO and website projects remotely for businesses across India — from first call to measurable growth.",
    url: "/process/",
  },
  twitter: {
    title: "How We Work With Clients Across India | Spark Skylytics",
    description: "See how Spark Skylytics runs digital marketing, SEO and website projects remotely for businesses across India — from first call to measurable growth.",
  },
  keywords: [
    "digital marketing process",
    "website design process",
    "brand strategy process",
    "Spark Skylytics process",
    "remote agency collaboration process",
    "how digital marketing agencies work with remote clients",
  ],
  alternates: { canonical: "/process/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
