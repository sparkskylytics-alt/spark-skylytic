import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description: "Browse selected Spark Skylytics branding, website design and digital marketing projects for businesses across industries.",
  keywords: ["digital marketing portfolio", "website design portfolio", "branding case studies", "Spark Skylytics work"],
  alternates: { canonical: "/portfolio/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
