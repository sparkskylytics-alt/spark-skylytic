import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Digital Growth Studio",
  description: "Meet the team behind Spark Skylytics—a hands-on digital growth studio partnering with ambitious businesses across India and remote clients worldwide.",
  openGraph: {
    title: "About Our Digital Growth Studio | Spark Skylytics",
    description: "Meet the team behind Spark Skylytics—a hands-on digital growth studio partnering with ambitious businesses across India and remote clients worldwide.",
    url: "/about/",
  },
  twitter: {
    title: "About Our Digital Growth Studio | Spark Skylytics",
    description: "Meet the team behind Spark Skylytics—a hands-on digital growth studio partnering with ambitious businesses across India and remote clients worldwide.",
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
