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
    default: "Spark Skylytics | Digital Marketing, Web Design & Branding Agency",
    template: "%s | Spark Skylytics",
  },
  description: "Spark Skylytics is a digital marketing agency for branding, web design and results-driven marketing — serving clients across India and remotely worldwide.",
  keywords: [
    "digital marketing agency",
    "web design agency",
    "branding agency",
    "SEO services",
    "social media marketing",
    "performance marketing",
    "Muzaffarnagar digital marketing",
    "India digital agency",
    "remote digital marketing agency",
    "online digital marketing agency India",
    "virtual marketing agency",
    "digital marketing agency for remote clients",
    "hire digital marketing agency online",
    "work from anywhere digital agency",
    "best digital marketing agency in India",
    "website design and development company",
    "Google Ads and Meta Ads agency",
    "growth marketing agency India",
    "brand strategy consultancy",
    "content marketing agency",
    "custom software development company",
    "custom software development India",
    "bespoke software development",
    "web application development company",
    "custom web application development",
    "full stack development agency",
    "software development company India",
    "top digital marketing agency India",
    "full service digital marketing agency",
    "360 degree digital marketing agency",
    "creative branding agency India",
    "website development company near me",
    "affordable digital marketing agency India",
    "digital marketing agency for startups",
    "digital marketing company near me",
    "best SEO company in India",
    "online marketing company",
    "lead generation agency India",
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
    title: "Spark Skylytics | Digital Marketing, Web Design & Branding Agency",
    description: "Branding, web design and results-driven digital marketing for ambitious businesses — serving clients across India and remotely worldwide.",
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
    title: "Spark Skylytics | Digital Marketing, Web Design & Branding Agency",
    description: "Branding, web design and results-driven digital marketing for ambitious businesses — serving clients across India and remotely worldwide.",
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
        areaServed: [
          "Muzaffarnagar",
          "Uttar Pradesh",
          "India",
          "Remote / Online Clients Worldwide",
        ],
        serviceType: [
          "Digital marketing",
          "Search engine optimization",
          "Website design and development",
          "Brand strategy",
          "Social media marketing",
          "Remote digital marketing services",
        ],
        description:
          "Spark Skylytics is a digital marketing agency offering branding, web design and results-driven marketing to businesses across India and remote clients worldwide.",
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
