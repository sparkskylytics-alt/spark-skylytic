import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process",
  description: "See how Spark Skylytics turns business goals into clear strategy, considered creative work and measurable digital growth.",
  keywords: ["digital marketing process", "website design process", "brand strategy process", "Spark Skylytics process"],
  alternates: { canonical: "/process/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
