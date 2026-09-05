import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process",
  description: "See how Spark Skylytics turns business goals into clear strategy, creative work and measurable growth — whether you work with us locally or remotely.",
  openGraph: {
    title: "Our Process | Spark Skylytics",
    description: "See how Spark Skylytics turns business goals into clear strategy, creative work and measurable growth — whether you work with us locally or remotely.",
    url: "/process/",
  },
  twitter: {
    title: "Our Process | Spark Skylytics",
    description: "See how Spark Skylytics turns business goals into clear strategy, creative work and measurable growth — whether you work with us locally or remotely.",
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
