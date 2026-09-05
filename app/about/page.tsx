import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import { FaBullseye, FaChartLine, FaHeadphones, FaInstagram, FaLightbulb, FaLinkedinIn, FaRocket, FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingSocial from "../components/FloatingSocial";

const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";
const pill =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold leading-none transition hover:-translate-y-0.5";
const darkPill = `${pill} bg-[#073f35] text-white shadow-[0_16px_28px_rgba(7,63,53,0.24)]`;
const lightPill = `${pill} border border-[#d9d2c7] bg-white/70 text-[#071117]`;

const stats = [
  { value: "20+", label: "Happy Clients", icon: FaUsers },
  { value: "30+", label: "Projects Completed", icon: FaRocket },
  { value: "98%", label: "Client Satisfaction", icon: FaStar },
  { value: "24/7", label: "Support", icon: FaHeadphones },
];

const values = [
  {
    number: "01",
    title: "Results First",
    text: "We focus on what matters most: measurable outcomes and lasting momentum.",
    icon: FaBullseye,
  },
  {
    number: "02",
    title: "Honesty & Transparency",
    text: "Open communication and honest work guide every step of our process.",
    icon: FaShieldAlt,
  },
  {
    number: "03",
    title: "Creativity With Purpose",
    text: "Creative ideas are backed by strategy, research, and market insight.",
    icon: FaLightbulb,
  },
  {
    number: "04",
    title: "Growth Mindset",
    text: "We keep learning, adapting, and improving so your brand can keep moving.",
    icon: FaChartLine,
  },
];

const team = [
  {
    name: "Parth Sharma",
    role: "Founder &  Growth Strategist",
    position: "center top",
    color: "bg-[#173d35]",
    image: "/Team/Parth Sharma.webp",
    linkedin: "https://www.linkedin.com/in/parth-sharma-ps2005?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/panditparthsharma?igsh=MTJxNHRqdWpjb3NwMg%3D%3D&utm_source=qr",
    email: "mailto:sparkskylytics@gmail.com",
  },
  {
    name: "Tarun Baliyan",
    role: "Social Media Strategist",
    position: "center top",
    color: "bg-[#173d35]",
    image: "/Team/Tarun Baliyan.webp",
    linkedin: "https://www.linkedin.com/in/tarun-baliyan-201443250/",
    instagram: "https://www.instagram.com/kukkad__munda/",
    email: "mailto:connect.tarunbaliyan@gmail.com",
  },

  {
    name: "Anurag",
    role: "Video Producer",
    position: "center top",
    color: "bg-[#173d35]",
    image: "/Team/Anurag.webp",
    linkedin: "https://linkedin.com/in/anurag",
    instagram: "https://instagram.com/anurag",
    email: "mailto:sparkskylytics@gmail.com",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 w-fit rounded-full bg-white/80 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#173f37] shadow-[inset_0_0_0_1px_rgba(18,60,50,0.08)]">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen  bg-white text-[#071117]">
      <Navbar active="About Us" />
          <FloatingSocial />


      <section className={`${shell} grid min-h-[590px] grid-cols-[0.86fr_1.14fr] items-center gap-14 py-10 font-semibold max-lg:min-h-0 max-lg:grid-cols-1 max-lg:gap-8 max-lg:py-12 max-sm:py-8`}>
        <div className="max-lg:max-w-[620px]">
          <SectionLabel>About SparkSkylytics</SectionLabel>
          <h1 className="max-w-[560px] text-[clamp(32px,5.2vw,52px)] font-semibold leading-[1.04] tracking-[-0.045em] max-sm:text-[32px]">
            Good work should feel <span className="text-[#0e6b58]">clear, considered and useful.</span>
          </h1>
          <p className="mt-6 max-w-[470px] text-[17px] leading-8 text-[#4d5b56] max-sm:text-[15px] max-sm:leading-7">
            Spark Skylytics is a close-knit digital studio for ambitious businesses. We combine sharp strategy, thoughtful design and hands-on execution to make growth less complicated.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a className={darkPill} href="#story">
              Our Story <ArrowRight size={16} />
            </a>
            <a className={lightPill} href="#team">
              Meet The Team <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative min-h-[430px] max-lg:min-h-0 max-sm:min-h-[270px]">
          <div className="relative h-[390px] overflow-hidden rounded-[18px] border border-[#e6ded2] bg-white shadow-[0_24px_60px_rgba(7,63,53,0.12)] max-lg:h-[440px] max-sm:h-[270px]">
            <Image
              src="/about/about-team.webp"
              alt="Spark Skylytics team collaborating in their studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover"
            />
          </div>
        
        </div>
      </section>

   <section id="story" className={`${shell} my-8 overflow-hidden rounded-[18px] border border-[#e5ded3] max-sm:my-6`}>
  <div className="grid grid-cols-2 max-lg:grid-cols-1">

    {/* Left Stats */}
    <div className="bg-[radial-gradient(circle_at_72%_18%,rgba(68,158,132,0.28),transparent_18rem),linear-gradient(130deg,#021d19,#073f35)] text-white">
      <div className="mx-auto grid min-h-[330px] w-full max-w-[520px] grid-cols-2 px-5 py-8 max-lg:px-4 max-sm:min-h-0 max-sm:px-0 max-sm:py-0">

        {stats.map(({ value, label, icon: Icon }, index) => (
          <article
            key={label}
            className={`
              flex flex-col justify-center
              min-h-[145px] p-6 max-sm:min-h-[135px] max-sm:p-5
              border-white/10
              ${index < 2 ? "border-b" : ""}
              ${index % 2 === 0 ? "border-r" : ""}
            `}
          >
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]">
              <Icon size={22} aria-hidden="true" />
            </span>

            <strong className="text-2xl font-extrabold">
              {value}
            </strong>

            <span className="mt-1 text-[13px] text-[#d8e8e2]">
              {label}
            </span>
          </article>
        ))}

      </div>
    </div>

    {/* Right Content */}
    <div className="flex items-center px-8 py-8 sm:px-10 xl:px-16 2xl:px-24 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-7">

      <div className="mx-auto w-full max-w-[520px]">
        <SectionLabel>Our Story</SectionLabel>

        <h2 className="mt-2 max-w-[440px] text-[clamp(24px,2.5vw,30px)] font-bold leading-tight text-[#021d19]">
          From an Idea Built on Trust
        </h2>

        <p className="mt-4 max-w-[520px] text-[14px] leading-6 text-[#4d5b56]">
          Spark Skylytics started with one simple belief: helping businesses grow
          through honest, result-driven digital marketing. Built on trust,
          creativity, and transparency, we deliver branding, websites, and
          marketing solutions that create real business growth. Today, we proudly
          partner with businesses across India and are ready to help brands
          worldwide tell their story.
        </p>

        {/* Founder */}
        <div className="mt-5 flex items-center gap-3">

          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#073f35] text-sm font-bold text-white">
            PS
          </span>

          <div>
            <h4 className="text-[15px] font-semibold text-[#021d19]">
              Parth Sharma
            </h4>

            <p className="text-[13px] text-[#5d6864]">
              Founder, Spark Skylytics
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

      <section className={`${shell} py-16`}>
        <div className="mb-11 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#173f37]">What We Believe In</p>
          <h2 className="mt-3 text-[clamp(30px,3vw,42px)] font-bold">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10">
          {values.map(({ number, title, text, icon: Icon }, index) => (
            <article className={`pr-8 ${index !== values.length - 1 ? "border-r border-[#ded6ca]" : ""} max-lg:pr-0 max-lg:border-r-0`} key={title}>
              <span className="mb-7 grid size-20 place-items-center rounded-full border border-[#e5ded2] bg-white/70 text-[#073f35] shadow-[0_14px_34px_rgba(7,63,53,0.08)]">
                <Icon size={31} aria-hidden="true" />
              </span>
              <span className="mb-2 block text-xs font-bold text-[#8c918e]">{number}</span>
              <h3 className="mb-3 text-base font-black">{title}</h3>
              <p className="text-sm leading-6 text-[#5d6864]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="team" className="border-y border-[#e5ded3] bg-[#f7f5f1] py-20 max-sm:py-14">
        <div className={shell}>
          <div className="grid grid-cols-[0.8fr_1.2fr] gap-14 max-lg:grid-cols-1 max-lg:gap-10">
            <div className="max-w-[350px]">
              <SectionLabel>The People</SectionLabel>
              <h2 className="text-[clamp(32px,3.4vw,46px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#021d19]">
                Small team. Senior attention.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-[#5d6864]">
                No hand-offs to a black box. The people you meet are the people thinking through the work, making the calls and keeping it moving.
              </p>
              <a href="/contact/" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#073f35] underline decoration-[#a5c5bb] underline-offset-4 transition hover:text-[#0e6b58]">
                Start a conversation <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
              {team.map((member, index) => (
                <article key={member.name} className={index === 1 ? "pt-10 max-sm:pt-0" : ""}>
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-[4px] bg-[#dce1dc]">
                    <Image
                      src={member.image}
                      alt={`${member.name} from Spark Skylytics`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 24vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: member.position }}
                    />
                    <div className="absolute inset-0 bg-[#073f35]/0 transition duration-300 group-hover:bg-[#073f35]/10" />
                  </div>
                  <div className="border-b border-[#d8d2c8] py-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-[17px] font-extrabold tracking-[-0.02em] text-[#021d19]">{member.name}</h3>
                        <p className="mt-1 min-h-10 text-[13px] leading-5 text-[#5d6864]">{member.role}</p>
                      </div>
                      <div className="flex gap-2 pt-0.5 text-[#073f35]">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`} className="transition hover:text-[#0e6b58]"><FaLinkedinIn size={16} /></a>
                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Instagram`} className="transition hover:text-[#0e6b58]"><FaInstagram size={16} /></a>
                        <a href={member.email} aria-label={`Email ${member.name}`} className="transition hover:text-[#0e6b58]"><MdOutlineMail size={18} /></a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

     <section className="bg-[radial-gradient(circle_at_88%_58%,rgba(239,216,164,0.34),transparent_12rem),linear-gradient(120deg,#021d19,#06493c)] text-white">
  <div
    className={`${shell} flex items-center justify-between gap-6 py-6 max-lg:flex-col max-lg:items-start`}
  >
    <div>
      {/* <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#e5d5a8]">
        Start A Project
      </p> */}

      <h2 className="max-w-[520px] text-[clamp(22px,2.8vw,34px)] font-bold leading-tight">
        Let's Build Something Amazing Together.
      </h2>

      <p className="mt-2 max-w-[520px] text-sm leading-6 text-white/70">
        Ready to grow your business? From branding and websites to SEO and
        digital marketing, we'll help turn your ideas into measurable results.
      </p>
    </div>

    <a
      href="/contact/"
      className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/30 px-5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
    >
      Schedule a Call
      <CalendarDays size={16} />
    </a>
  </div>
</section>
      <Footer />
    </main>
  );
}
