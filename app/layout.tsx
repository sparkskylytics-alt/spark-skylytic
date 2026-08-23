import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-raleway",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkskylytics.com"),
  title: {
    default: "Spark Skylytics",
    template: "%s | Spark Skylytics",
  },
  description: "We help ambitious businesses grow through strategic branding, high-performing websites and results-driven digital marketing.",
  keywords: [
    "digital marketing agency",
    "web design agency",
    "branding agency",
    "SEO services",
    "social media marketing",
    "performance marketing",
    "Muzaffarnagar digital marketing",
    "India digital agency",
  ],
  authors: [{ name: "Spark Skylytics" }],
  creator: "Spark Skylytics",
  publisher: "Spark Skylytics",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Spark Skylytics",
    title: "Spark Skylytics",
    description: "We help ambitious businesses grow through strategic branding, high-performing websites and results-driven digital marketing.",
    images: [
      {
        url: "/social-share.png",
        width: 1448,
        height: 760,
        alt: "Spark Skylytics digital marketing and web design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Skylytics",
    description: "We help ambitious businesses grow through strategic branding, high-performing websites and results-driven digital marketing.",
    images: ["/social-share.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${raleway.variable} ${playfair.variable} ${raleway.className}`}>
        {children}
      </body> */}
      <body
  className={`${raleway.variable} ${playfair.variable} ${raleway.className}`}
>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Spark Skylytics",
        url: "https://sparkskylytics.com",
        logo: "https://sparkskylytics.com/Logo/new-logo.png",
        email: "sparkskylytics@gmail.com",
        telephone: "+91 9997932324",
        priceRange: "₹₹",
        areaServed: ["Muzaffarnagar", "Uttar Pradesh", "India"],
        serviceType: [
          "Digital marketing",
          "Search engine optimization",
          "Website design and development",
          "Brand strategy",
          "Social media marketing",
        ],
        sameAs: [
          "https://www.facebook.com/Sparkskylytics/",
          "https://www.instagram.com/spark_skylytics/",
          "https://www.youtube.com/@Spark_Skylytics",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Muzaffarnagar",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        image: "https://sparkskylytics.com/Logo/new-logo.png",
      }),
    }}
  />
  {children}
</body>
    </html>
  );
}
