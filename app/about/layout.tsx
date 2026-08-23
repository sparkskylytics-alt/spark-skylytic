import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Digital Growth Studio",
  description: "Meet the team behind Spark Skylytics—a hands-on digital growth studio for ambitious businesses across India and beyond.",
  keywords: ["about Spark Skylytics", "digital marketing agency Muzaffarnagar", "creative agency India", "digital growth studio"],
  alternates: { canonical: "/about/" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
