import Image from "next/image";
import {
  ArrowRight,
} from "lucide-react";
import { FaBullhorn, FaBullseye, FaChartBar, FaDesktop, FaGlobe, FaPalette, FaSearch } from "react-icons/fa";
import Footer from "../components/Footer";
import FloatingSocial from "../components/FloatingSocial";
import Navbar from "../components/Navbar";

const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";

const services = [
  {
    title: "Website design & development",
    description: "Clear, fast websites that turn a first visit into the next right action.",
    image: "/services/webdesign.webp",
    icon: FaDesktop,
    items: ["Custom websites", "E-commerce", "CMS development", "Ongoing support"],
  },
  {
    title: "Digital marketing",
    description: "Campaigns and content that put your business in front of people ready to act.",
    image: "/services/digitalmarketing.webp",
    icon: FaBullhorn,
    items: ["Paid campaigns", "Social media", "Content planning", "Conversion optimisation"],
  },
  {
    title: "SEO & analytics",
    description: "Search strategy and reporting that make your organic growth easier to see and improve.",
    image: "/services/seo.webp",
    icon: FaSearch,
    items: ["Technical SEO", "Keyword strategy", "Local SEO", "Clear reporting"],
  },
];

const capabilities = [
  { title: "Brand identity", text: "A distinctive system for showing up consistently.", icon: FaPalette },
  { title: "Performance marketing", text: "Media that is accountable to real business goals.", icon: FaBullseye },
  { title: "Content & social", text: "Stories that keep the right audience engaged.", icon: FaGlobe },
  { title: "Growth strategy", text: "A practical plan for deciding what to do next.", icon: FaChartBar },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#111312]">
      <Navbar active="Services" />
      <FloatingSocial />

      <section className={`${shell} py-8 lg:py-10`}>
        <div className="grid overflow-hidden rounded-[6px] border border-[#dedbd5] bg-[#f7f6f3] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex min-h-[310px] flex-col p-7 lg:p-9">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#77736c]">Digital services</p>
              <h1 className="mt-7 max-w-[440px] text-[clamp(34px,3.8vw,50px)] font-semibold leading-[1.02] tracking-[-0.05em]">
                More clarity for the work that helps your business grow.
              </h1>
            </div>
            <div className="mt-7 flex items-end justify-between gap-5 border-t border-[#d8d4cd] pt-5">
              <p className="max-w-[270px] text-[13px] leading-6 text-[#676963]">Strategy, websites, search and marketing designed to work together.</p>
              <a href="/contact" aria-label="Talk about your project" className="grid size-11 shrink-0 place-items-center rounded-full bg-[#151c19] text-white transition hover:bg-[#176c5b]"><ArrowRight size={18} /></a>
            </div>
          </div>
          <div className="relative min-h-[270px] bg-[#e8e5df]">
            <Image src="/services/services-hero-v2.webp" alt="Creative digital strategy work in progress" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#151c19] backdrop-blur">Spark Skylytics</div>
          </div>
        </div>
      </section>

      <section className={`${shell} border-t border-[#dedbd5] py-8`}>
        <div className="mb-5 flex items-end justify-between gap-8 max-sm:block">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#77736c]">Core services</p>
            <h2 className="text-[clamp(25px,2.7vw,33px)] font-semibold leading-[1.04] tracking-[-0.045em]">Three ways we help.</h2>
          </div>
          <p className="max-w-[320px] text-[13px] leading-5 text-[#6b6c67] max-sm:mt-3">Built around your goal, not a pre-set package.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {services.map(({ title, description, image, icon: Icon }) => (
            <article key={title} className="group overflow-hidden rounded-[4px] border border-[#dedbd5] bg-white transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(23,31,27,0.07)]">
              <div className="relative aspect-[16/9] border-b border-[#dedbd5] bg-white p-2">
                <Image src={image} alt={`${title} overview`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-[#176c5b]"><Icon size={15} aria-hidden="true" /><span className="text-[10px] font-black uppercase tracking-[0.13em]">Service</span></div>
                <h3 className="mt-2 text-[18px] font-semibold leading-[1.1] tracking-[-0.025em]">{title}</h3>
                <p className="mt-2 text-[12px] leading-5 text-[#696a65]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dedbd5] bg-white py-8">
        <div className={shell}>
          <div className="grid gap-px overflow-hidden border border-[#dedbd5] bg-[#dedbd5] md:grid-cols-4">
            {capabilities.map(({ title, text, icon: Icon }) => (
              <article key={title} className="bg-white p-5 transition-colors hover:bg-[#faf9f6]">
                <Icon className="mb-5 size-5 text-[#176c5b]" aria-hidden="true" />
                <h3 className="text-[17px] font-bold tracking-[-0.02em]">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#696a65]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${shell} grid gap-8 py-10 lg:grid-cols-[0.65fr_1.35fr] max-sm:py-8`}>
        <div>
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#77736c]">A joined-up process</p>
          <h2 className="text-[clamp(29px,3vw,40px)] font-semibold leading-[1.06] tracking-[-0.04em]">One team, from the first idea to what comes next.</h2>
        </div>
        <div className="grid border-t border-[#dcd8d1] sm:grid-cols-3">
          {["Get clear", "Make the work", "Learn and improve"].map((step, index) => (
            <div key={step} className="border-b border-r border-[#dcd8d1] py-5 pr-5 last:border-r-0 sm:px-5 sm:first:pl-0">
              <span className="text-xs font-bold tracking-[0.14em] text-[#99948b]">0{index + 1}</span>
              <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.025em]">{step}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#696a65]">{index === 0 ? "Understand the business, audience and decisions ahead." : index === 1 ? "Turn the strategy into clear, useful digital work." : "Use what is working to make the next move smarter."}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
