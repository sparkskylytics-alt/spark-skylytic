import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";
import FloatingSocial from "../../components/FloatingSocial";
import Navbar from "../../components/Navbar";
import { getLocation, locations } from "../../../lib/locations";
import { SITE_URL } from "../../../lib/site";

const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map(({ slug }) => ({ city: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) return {};

  const path = `/digital-marketing-agency/${location.slug}/`;
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${location.metaTitle} | Spark Skylytics`,
      description: location.metaDescription,
      url: path,
    },
    twitter: {
      title: `${location.metaTitle} | Spark Skylytics`,
      description: location.metaDescription,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) notFound();

  const pageUrl = `${SITE_URL}/digital-marketing-agency/${location.slug}/`;
  const nearby = location.nearby.map(getLocation).filter((item) => item !== undefined);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Digital marketing services in ${location.city}`,
      serviceType: ["Digital marketing", "Search engine optimization", "Website design and development", "Social media marketing"],
      areaServed: { "@type": "City", name: location.city, containedInPlace: location.region },
      provider: { "@type": "ProfessionalService", name: "Spark Skylytics", url: SITE_URL },
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: location.faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/digital-marketing-agency/` },
        { "@type": "ListItem", position: 3, name: location.city, item: pageUrl },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111312]">
      <Navbar active="Services" />
      <FloatingSocial />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={`${shell} py-8 lg:py-10`}>
        <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-[#77736c]">
          <a href="/" className="hover:text-[#176c5b]">Home</a>
          <span className="mx-2">/</span>
          <a href="/digital-marketing-agency/" className="hover:text-[#176c5b]">Locations</a>
          <span className="mx-2">/</span>
          <span className="text-[#111312]">{location.city}</span>
        </nav>

        <div className="rounded-[6px] border border-[#dedbd5] bg-[#f7f6f3] p-7 lg:p-9">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#77736c]">{location.city}, {location.region}</p>
          <h1 className="mt-5 max-w-[720px] text-[clamp(32px,3.8vw,50px)] font-semibold leading-[1.04] tracking-[-0.05em]">
            {location.headline}
          </h1>
          <div className="mt-6 max-w-[720px] space-y-4 text-[15px] leading-7 text-[#59635f]">
            {location.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <a href="/contact/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#151c19] px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-[#176c5b]">
            Get a free consultation <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className={`${shell} border-t border-[#dedbd5] py-8`}>
        <h2 className="mb-5 text-[clamp(25px,2.7vw,33px)] font-semibold leading-[1.04] tracking-[-0.045em]">{location.marketHeading}</h2>
        <div className="grid gap-px overflow-hidden border border-[#dedbd5] bg-[#dedbd5] md:grid-cols-3">
          {location.market.map(({ title, text }) => (
            <article key={title} className="bg-white p-5">
              <h3 className="text-[17px] font-bold tracking-[-0.02em]">{title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#696a65]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${shell} py-8`}>
        <h2 className="mb-5 text-[clamp(25px,2.7vw,33px)] font-semibold leading-[1.04] tracking-[-0.045em]">
          Where we would start in {location.city}
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {location.focus.map(({ title, text, href }) => (
            <a key={title} href={href} className="group rounded-[4px] border border-[#dedbd5] bg-white p-5 transition-shadow hover:shadow-[0_10px_24px_rgba(23,31,27,0.07)]">
              <h3 className="text-[18px] font-semibold leading-[1.1] tracking-[-0.025em] group-hover:text-[#176c5b]">{title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#696a65]">{text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className={`${shell} grid gap-8 border-t border-[#dedbd5] py-10 lg:grid-cols-[0.65fr_1.35fr]`}>
        <div>
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#77736c]">Working together</p>
          <h2 className="text-[clamp(25px,2.7vw,33px)] font-semibold leading-[1.06] tracking-[-0.04em]">How we work with {location.city} businesses</h2>
        </div>
        <p className="text-[15px] leading-7 text-[#59635f]">
          {location.workingTogether}{" "}
          <a href="/process/" className="font-semibold text-[#176c5b] hover:underline">See our process</a>.
        </p>
      </section>

      <section className={`${shell} border-t border-[#dedbd5] py-10`}>
        <h2 className="mb-6 text-[clamp(25px,2.7vw,33px)] font-semibold leading-[1.04] tracking-[-0.045em]">
          Questions from {location.city} businesses
        </h2>
        <div className="divide-y divide-[#dedbd5] border-y border-[#dedbd5]">
          {location.faqs.map(({ q, a }) => (
            <div key={q} className="py-5">
              <h3 className="text-[16px] font-semibold">{q}</h3>
              <p className="mt-2 max-w-[820px] text-[14px] leading-7 text-[#59635f]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {nearby.length > 0 && (
        <section className={`${shell} py-8`}>
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#77736c]">Also working with businesses in</p>
          <div className="flex flex-wrap gap-2">
            {nearby.map((item) => (
              <a key={item.slug} href={`/digital-marketing-agency/${item.slug}/`} className="rounded-full border border-[#dedbd5] px-4 py-2 text-[13px] text-[#59635f] transition hover:border-[#176c5b] hover:text-[#176c5b]">
                Digital marketing in {item.city}
              </a>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
