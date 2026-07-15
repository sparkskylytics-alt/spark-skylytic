import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Megaphone,
  Monitor,
  PenLine,
  Rocket,
  Search,
  Tag,
  Target,
  Palette,
  Globe,
  Share2,
    TrendingUp,

} from "lucide-react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// ─── TOKENS ───────────────────────────────────────────────────────────
const shell =
  "mx-auto w-[min(1120px,calc(100%-48px))] max-sm:w-[calc(100%-28px)]";
const darkPill =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#073f35] px-7 text-sm font-bold text-white shadow-[0_16px_32px_rgba(7,63,53,0.24)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(7,63,53,0.32)]";
const outlinePill =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-bold text-white transition-all hover:border-white/50 hover:text-white";

// ─── DATA ──────────────────────────────────────────────────────────────


const serviceCards = [
  {
    title: "Brand Identity & Creative",
    text: "Build a memorable brand with logo design, brand identity, graphics, social media creatives, marketing collaterals, and engaging video editing & motion graphics.",
    icon: Palette,
  },
  {
    title: "Website & Search Optimization",
    text: "Create high-performing websites with SEO, landing pages, Google Business Profile optimization, Local SEO, Google Maps ranking, and speed optimization.",
    icon: Globe,
  },
  {
    title: "Social Media & Content Marketing",
    text: "Grow your audience through strategic content planning, social media management, reels, creative posts, copywriting, community engagement, and brand growth.",
    icon: Share2,
  },
  {
    title: "Performance Marketing",
    text: "Generate quality leads with Google Ads, Meta Ads, audience targeting, campaign optimization, performance tracking, and detailed analytics reports.",
    icon: Target,
  },
];

const serviceDetails = [
  {
    tag: "Service 01",
    title: "Website Design & Development",
    text: "We design and build fast, secure, and scalable websites tailored to your brand. Every website is optimized for performance, SEO, and conversions.",
    image: "/Projects/website.png",
    stat: "↗ 214% more conversions",
    points: ["Custom Website Design", "CMS Development", "E-commerce Solutions", "Website Maintenance"],
    gradient: "from-[#e8f2ee] to-[#d5ebe2]",
    reverse: false,
  },
  {
    tag: "Service 02",
    title: "Digital Marketing",
    text: "Our marketing strategies are built to attract, engage, and convert the right audience. We focus on results that matter to your business.",
    image: "/Projects/digitalmarketing.png",
    stat: "↗ 3.2× ROAS on average",
    points: ["PPC Advertising", "Social Media Marketing", "Email Marketing", "Conversion Rate Optimization"],
    gradient: "from-[#e8f0e8] to-[#c8dcc8]",
    reverse: true,
  },
  {
    tag: "Service 03",
    title: "SEO & Analytics",
    text: "We help you rank higher on search engines and turn traffic into measurable growth using data-driven SEO and analytics.",
    image: "/Projects/seo.png",
    stat: "↗ 78% organic traffic lift",
    points: ["On-Page SEO", "Technical SEO", "Keyword Research", "Analytics & Reporting"],
    gradient: "from-[#e4e8d8] to-[#c0cc96]",
    reverse: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "We understand your business, goals, audience, and competitors to build the right digital strategy.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    text: "We create a customized roadmap covering branding, website, SEO, social media, and paid marketing.",
    icon: Target,
  },
  {
    number: "03",
    title: "Creative",
    text: "Our team designs your brand identity, website, creatives, videos, and engaging marketing content.",
    icon: PenLine,
  },
  {
    number: "04",
    title: "Marketing",
    text: "We execute SEO, Google Ads, Meta Ads, social media campaigns, and lead generation strategies.",
    icon: Megaphone,
  },
  {
    number: "05",
    title: "Growth",
    text: "We monitor performance, optimize campaigns, analyze data, and continuously scale your business.",
    icon: TrendingUp,
  },
];

const technologies = [
  "React", "Next.js", "WordPress", "Node.js", "Shopify",
  "Webflow", "Figma", "Google Ads", "HubSpot", "AWS",
];

const industries = [
  {
    name: "Healthcare",
    image: "/industry/health.jpg",
  },
  {
    name: "Food & Hospitality",
    image: "/industry/hotel.jpg",
  },
  {
    name: "Jewellery & Luxury",
    image: "/industry/jwellery.jpg",
  },
  {
    name: "Education",
    image: "/industry/education.jpg",
  },
  {
    name: "Real Estate",
    image: "/industry/real-state.jpg",
  },
  {
    name: "Retail & E-commerce",
    image: "/industry/ecommerce.jpg",
  },
  {
    name: "Travel & Tourism",
    image: "/industry/travel.png",
  },
];

const industryGradients = [
  "from-[#c2d8d0] to-[#8eb8aa]",
  "from-[#d4cfc6] to-[#a09888]",
  "from-[#b8d4c2] to-[#7aaa8e]",
  "from-[#ccd5cc] to-[#92a892]",
  "from-[#d0c8c0] to-[#a09080]",
  "from-[#c8d4cc] to-[#8aac9e]",
];

const reasons = [
  ["Results-Driven Approach", "We focus on strategies that deliver measurable growth — no vanity metrics."],
  ["Transparent & Honest", "Clear communication and complete transparency at every step of your project."],
  ["Expert Team", "Skilled professionals with years of experience across the digital industry."],
  ["Future-Ready Solutions", "Modern technologies that scale with your business as you grow."],
];

// ─── COMPONENTS ───────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-[10.5px] font-black uppercase tracking-[0.16em] text-[#071117]">
        {children}
      </p>
      <span className="mx-auto mt-2 block h-0.5 w-8 rounded-full bg-[#073f35]" />
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ee] text-[#071117] antialiased">
      <Navbar active="Services" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        {/* BG layers */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_72%_8%,rgba(7,63,53,0.09),transparent_50%),radial-gradient(ellipse_38%_35%_at_18%_40%,rgba(201,169,110,0.13),transparent_45%),linear-gradient(180deg,#f8f5ee_0%,#f2ede3_100%)]" />
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: "radial-gradient(circle,rgba(7,63,53,0.07) 1px,transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 60% 80% at 50% 50%,black 30%,transparent 80%)",
            }}
          />
        </div>

        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source src="/Reels/service-hero-reel.mp4" type="video/mp4" />
        </video>

        <div className={`${shell} relative z-10`}>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_400px]">

            {/* Left */}
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0b5a4b]/14 bg-white/75 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0e6b58]" />
                <span className="text-[10.5px] font-black uppercase tracking-[0.16em] text-[#0b5a4b]">
                  Our Services
                </span>
              </div>

              <h1 className="mb-5 text-[clamp(34px,4.2vw,52px)] leading-[1.06] tracking-[-1.5px]">
                <span className="font-light italic text-[#4f6560]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Digital Solutions
                </span>
                <span className="mt-1 block font-extrabold text-[#021d19]">
                  Built for{" "}
                  <span className="text-[#0e6b58]">Growing</span> Brands.
                </span>
              </h1>

              <p className="mb-8 max-w-[460px] text-[15.5px] leading-[1.75] text-[#5d6864]">
                From powerful websites to data-driven marketing, we create digital
                experiences that drive growth, engage audiences, and deliver real
                business results.
              </p>


            </div>

            {/* Right: Stats Card */}
            {/* <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#021d19] to-[#073f35] p-8 text-white shadow-[0_32px_72px_rgba(2,29,25,0.22)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.22),transparent_70%)]" />

                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                  SparkSkylytics Impact
                </p>
                <div className="mb-6 grid grid-cols-2 gap-0.5">
                  {[
                    ["340%", "Avg revenue growth"],
                    ["200+", "Brands launched"],
                    ["78%", "Organic traffic lift"],
                    ["4.9★", "Client satisfaction"],
                  ].map(([val, lbl]) => (
                    <div key={lbl} className="rounded-xl bg-white/[0.06] p-4 transition-colors hover:bg-white/10">
                      <p className="text-[26px] font-extrabold leading-none text-white">{val}</p>
                      <p className="mt-1.5 text-[11px] font-medium text-white/45">{lbl}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-5 h-px bg-white/[0.08]" />

                <div className="flex flex-wrap gap-2">
                  {["Web Design", "SEO", "Digital Ads", "Branding", "Analytics"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.09] px-3 py-1 text-[11px] font-semibold text-white/65"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OVERVIEW CARDS
      ══════════════════════════════════════════ */}
      <section className={`${shell} pb-16`}>
        <div className="grid grid-cols-4 gap-px overflow-hidden rounded-[20px] bg-[#e8e1d5] shadow-[0_20px_56px_rgba(7,63,53,0.09)] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {serviceCards.map(({ title, text, icon: Icon }, i) => (
            <article
              key={title}
              className={[
                "group flex flex-col bg-white p-7 transition-all duration-300 hover:bg-[#f6f9f7]",
                "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:transition-colors",
                i === 0 ? "after:bg-[#0e6b58] bg-[#fafaf8]" : "after:bg-transparent hover:after:bg-[#0e6b58]",
              ].join(" ")}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[13px] bg-[#073f35]/[0.07] text-[#073f35] transition-colors group-hover:bg-[#073f35]/[0.12]">
                <Icon size={24} strokeWidth={1.8} />
              </div>
              <h2 className="mb-2 text-[15px] font-bold leading-tight">{title}</h2>
              <p className="text-[13px] leading-[1.65] text-[#5d6864]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICE DETAIL ROWS
      ══════════════════════════════════════════ */}
      <section className={`${shell} pb-20`}>
        <SectionLabel>What We Do</SectionLabel>
        <div className="divide-y divide-[#e6ded0]">
          {serviceDetails.map(({ tag, title, text, image, points }, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={title}
                className="group relative grid items-center gap-12 py-10 lg:grid-cols-2 max-lg:grid-cols-1 max-lg:gap-6"
              >
                {/* Ghost number */}
                <span
                  className={`pointer-events-none absolute top-1/2 -translate-y-1/2 select-none text-[140px] font-black leading-none tracking-[-8px] text-[#073f35]/[0.04] ${isEven ? "right-0" : "left-0"}`}
                  aria-hidden
                >
                  0{idx + 1}
                </span>

                {/* Image — left on even, right on odd */}
                <div
                  className={`relative min-h-[260px] overflow-hidden rounded-2xl ${isEven ? "order-1" : "order-2"
                    }`}
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                  <div className="pointer-events-none absolute inset-3 rounded-xl border border-[#073f35]/10" />
                </div>

                {/* Content — right on even, left on odd */}
                <div
                  className={`relative ${isEven ? "order-2" : "order-1"}`}
                >
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#073f35]/[0.07] px-3 py-1">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#0e6b58]" />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.06em] text-[#0e6b58]">
                      {tag}
                    </span>
                  </div>

                  <h2 className="mb-3 max-w-[340px] text-[clamp(20px,2.4vw,28px)] font-bold leading-[1.12] tracking-[-0.5px] text-[#021d19]">
                    {title}
                  </h2>

                  <p className="mb-5 max-w-[420px] text-[13.5px] leading-[1.7] text-[#5d6864]">{text}</p>

                  <ul className="space-y-1.5">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-[13px] font-semibold text-[#193c35]">
                        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#073f35] text-[9px] text-white">
                          ✓
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════ */}
      <section className={`${shell} pb-20`}>
        <SectionLabel>Our Process</SectionLabel>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden lg:block">
            <div className="mx-auto h-px w-[85%] bg-gradient-to-r from-transparent via-[#c9b48a] to-transparent" />
          </div>

          <div className="flex flex-wrap justify-between gap-y-10 max-lg:justify-center">
            {processSteps.map(({ number, title, text, icon: Icon }) => (
              <article
                key={title}
                className="relative w-full text-center sm:w-[45%] lg:w-[18%]"
              >
                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#e2d9ca] bg-white text-[#073f35] shadow-[0_10px_30px_rgba(7,63,53,0.08)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#073f35] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mb-2 text-[15px] font-bold text-[#021d19]">
                  {number}. {title}
                </h3>

                <p className="text-[13px] leading-6 text-[#5d6864]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECHNOLOGIES
      ══════════════════════════════════════════ */}
      <section className={`${shell} pb-16`}>
        <SectionLabel>Technologies We Use</SectionLabel>

        <div className="grid grid-cols-5 gap-px overflow-hidden rounded-[18px] bg-[#e4ddd2] shadow-[0_14px_34px_rgba(7,63,53,0.07)] max-lg:grid-cols-5 max-sm:grid-cols-2">
          {technologies.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-white px-4 py-3.5 text-[13px] font-bold text-[#4f5e59] transition-colors hover:bg-[#f4f9f6]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#e4f0eb] text-[12px] font-extrabold text-[#073f35]">
                {item[0]}
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════ */}
      <section className={`${shell} pb-16`}>
        <SectionLabel>Industries We Serve</SectionLabel>

        <div
          className="grid gap-3 lg:grid-cols-7 md:grid-cols-4 grid-cols-2"
        >
          {industries.map((item) => (
            <article
              key={item.name}
              className="group relative h-[180px] overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021d19]/90 via-[#021d19]/20 to-transparent group-hover:from-[#073f35]/80 transition-all duration-500" />

              {/* Small Glow */}
              <div className="absolute inset-0 bg-[#0e6b58]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-sm font-bold text-white leading-tight">
                  {item.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          REASONS
      ══════════════════════════════════════════ */}
      <section className={`${shell} pb-16`}>
        <SectionLabel>Why Choose SparkSkylytics</SectionLabel>

        <div className="grid overflow-hidden rounded-2xl border border-[#ebe5d8] bg-white shadow-[0_12px_35px_rgba(7,63,53,0.06)] lg:grid-cols-4 md:grid-cols-2">
          {reasons.map(([title, text], i) => (
            <div
              key={title}
              className="group relative border-b border-r border-[#f0ece4] p-5 transition-all duration-300 hover:bg-[#f8fbf9] lg:border-b-0 lg:last:border-r-0 md:nth-[2n]:border-r-0"
            >
              {/* Number */}
              <span className="absolute right-4 top-3 text-5xl font-black leading-none text-[#073f35]/5 transition-all group-hover:text-[#0e6b58]/10">
                0{i + 1}
              </span>

              {/* Small Badge */}
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0e6b58]/10 text-sm font-bold text-[#0e6b58]">
                0{i + 1}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-[15px] font-bold text-[#021d19]">
                {title}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-6 text-[#64716c]">
                {text}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0e6b58] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>
      {/* ══════════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#021d19] to-[#073f35] py-16">
        {/* Gold glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.18),transparent_70%)]" />

        <div className={`${shell} relative z-10`}>
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div>
              <h2 className="mb-2 text-[28px] font-extrabold tracking-[-0.5px] text-white">
                Ready to grow your business?
              </h2>
              <p className="max-w-[420px] text-[14px] leading-[1.65] text-white/55">
                Let&apos;s talk about your goals and build a digital strategy that delivers real, lasting results.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a href="#contact" className={darkPill}>
                Let&apos;s Talk <ArrowRight size={16} />
              </a>
              <a href="/work" className={outlinePill}>
                View Our Work <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}