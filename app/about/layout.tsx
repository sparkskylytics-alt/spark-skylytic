import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Digital Marketing Agency in India",
  description: "Meet the team behind Spark Skylytics, a digital marketing and web design agency in India working with ambitious businesses across the country and worldwide.",
  openGraph: {
    title: "About Our Digital Marketing Agency in India | Spark Skylytics",
    description: "Meet the team behind Spark Skylytics, a digital marketing and web design agency in India working with ambitious businesses across the country and worldwide.",
    url: "/about/",
  },
  twitter: {
    title: "About Our Digital Marketing Agency in India | Spark Skylytics",
    description: "Meet the team behind Spark Skylytics, a digital marketing and web design agency in India working with ambitious businesses across the country and worldwide.",
  },
  keywords: [
    "about Spark Skylytics",
    "digital marketing agency Muzaffarnagar",
    "creative agency India",
    "digital growth studio",
    "remote digital marketing team",
    "digital marketing agency for businesses worldwide",
    "online branding agency India",
  ],
  alternates: { canonical: "/about/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
