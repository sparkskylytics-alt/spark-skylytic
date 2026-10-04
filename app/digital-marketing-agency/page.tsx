import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import FloatingSocial from "../components/FloatingSocial";
import Navbar from "../components/Navbar";
import { locations } from "../../lib/locations";

const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Across India – Cities We Serve",
  description:
    "Spark Skylytics provides SEO, website design and digital marketing to businesses across India — from Muzaffarnagar and Meerut to Delhi, Mumbai and Bengaluru.",
  alternates: { canonical: "/digital-marketing-agency/" },
  openGraph: {
    title: "Digital Marketing Agency Across India – Cities We Serve | Spark Skylytics",
    description:
      "SEO, website design and digital marketing for businesses across India — from Muzaffarnagar and Meerut to Delhi, Mumbai and Bengaluru.",
    url: "/digital-marketing-agency/",
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111312]">
      <Navbar active="Services" />
      <FloatingSocial />

      <section className={`${shell} py-8 lg:py-10`}>
        <div className="rounded-[6px] border border-[#dedbd5] bg-[#f7f6f3] p-7 lg:p-9">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#77736c]">Locations</p>
          <h1 className="mt-5 max-w-[720px] text-[clamp(32px,3.8vw,50px)] font-semibold leading-[1.04] tracking-[-0.05em]">
            A digital marketing agency for businesses across India
          </h1>
          <p className="mt-6 max-w-[720px] text-[15px] leading-7 text-[#59635f]">
            Our studio is in Muzaffarnagar, Uttar Pradesh, and we work with clients all over India remotely. Every city has its own mix of
            businesses and search habits, so we plan SEO, websites and campaigns around the market you actually sell to.
          </p>
        </div>
      </section>

      <section className={`${shell} py-6`}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map(({ slug, city, region, metaDescription }) => (
            <a key={slug} href={`/digital-marketing-agency/${slug}/`} className="group rounded-[4px] border border-[#dedbd5] bg-white p-5 transition-shadow hover:shadow-[0_10px_24px_rgba(23,31,27,0.07)]">
              <p className="text-[10px] font-black uppercase tracking-[0.13em] text-[#176c5b]">{region}</p>
              <h2 className="mt-2 flex items-center justify-between text-[19px] font-semibold tracking-[-0.025em]">
                Digital marketing in {city}
                <ArrowRight size={16} className="text-[#99948b] transition group-hover:translate-x-1 group-hover:text-[#176c5b]" />
              </h2>
              <p className="mt-2 text-[13px] leading-6 text-[#696a65]">{metaDescription}</p>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
