import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Headphones,
  Lightbulb,
  Mail,
  Rocket,
  ShieldCheck,
  Star,
  Target,
  UsersRound,
} from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";
const pill =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold leading-none transition hover:-translate-y-0.5";
const darkPill = `${pill} bg-[#073f35] text-white shadow-[0_16px_28px_rgba(7,63,53,0.24)]`;
const lightPill = `${pill} border border-[#d9d2c7] bg-white/70 text-[#071117]`;

const stats = [
  { value: "20+", label: "Happy Clients", icon: UsersRound },
  { value: "30+", label: "Projects Completed", icon: Rocket },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "24/7", label: "Support", icon: Headphones },
];

const values = [
  {
    number: "01",
    title: "Results First",
    text: "We focus on what matters most: measurable outcomes and lasting momentum.",
    icon: Target,
  },
  {
    number: "02",
    title: "Honesty & Transparency",
    text: "Open communication and honest work guide every step of our process.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Creativity With Purpose",
    text: "Creative ideas are backed by strategy, research, and market insight.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Growth Mindset",
    text: "We keep learning, adapting, and improving so your brand can keep moving.",
    icon: BarChart3,
  },
];

const team = [
  {
    name: "Parth Sharma",
    role: "Founder &  Growth Strategist",
    position: "center top",
    color: "bg-[#173d35]",
    image: "/Team/Parth Sharma.jpeg",
    linkedin: "https://www.linkedin.com/in/parth-sharma-ps2005?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/panditparthsharma?igsh=MTJxNHRqdWpjb3NwMg%3D%3D&utm_source=qr",
    email: "mailto:connect@sparkskylytics.com",
  },
  {
    name: "Tarun Baliyan",
    role: "Social Media Strategist",
    position: "center top",
    color: "bg-[#173d35]",
    image: "/Team/Tarun Baliyan.jpeg",
    linkedin: "https://www.linkedin.com/in/tarun-baliyan-201443250/",
    instagram: "https://www.instagram.com/kukkad__munda/",
    email: "mailto:connect.tarunbaliyan@gmail.com",
  },
  {
    name: "Devansh Miglani",
    role: "Performance Marketing Specialist",
    position: "center top",
    color: "bg-[#173d35]",
    image: "/Team/Devansh Miglani.jpeg",
    linkedin: "https://www.linkedin.com/in/devanshmiglani26?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/devansh.aura26?utm_source=qr&igsh=cGF0NTM2cGQ2Z3Bl",
    email: "mailto:connect@sparkskylytics.com",
  },
  {
    name: "Anurag",
    role: "Video Producer",
    position: "center top",
    color: "bg-[#173d35]",
    image: "/Team/Anurag.jpeg",
    linkedin: "https://linkedin.com/in/anurag",
    instagram: "https://instagram.com/anurag",
    email: "mailto:connect@sparkskylytics.com",
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
    <main className="min-h-screen  bg-[radial-gradient(circle_at_75%_9%,rgba(7,63,53,0.08),transparent_24rem),radial-gradient(circle_at_17%_38%,rgba(188,165,112,0.12),transparent_26rem),linear-gradient(180deg,#fffdfa_0%,#faf7ef_60%,#f6f0e7_100%)] text-[#071117]">
      <Navbar active="About Us" />

      <section className={`${shell} font-semibold grid min-h-[590px] grid-cols-[0.86fr_1.14fr] items-center gap-14 py-10 max-lg:grid-cols-1`}>
        <div>
          <SectionLabel>About SparkSkylytics</SectionLabel>
          <h1 className="max-w-[560px] text-[clamp(30px,5.2vw,40px)]  font-semibold leading-[1.08]">
            We&apos;re A Team Of Strategists, Designers And <span className="text-[#0e6b58]">Problem Solvers.</span>
          </h1>
          <p className="mt-7 max-w-[450px] text-[17px] leading-8 text-[#4d5b56]">
            SparkSkylytics was founded with a simple belief: great ideas backed by strategy can transform brands and
            create real impact.
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

        <div className="relative min-h-[430px] max-sm:min-h-[320px]">
          <div className="relative h-[390px] overflow-hidden rounded-[18px] border border-[#e6ded2] bg-white shadow-[0_24px_60px_rgba(7,63,53,0.12)] max-sm:h-[300px]">
            <Image
              src="/About/about-hero.png"
              alt="Spark Skylytics creative team in the studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover"
            />
          </div>
        
        </div>
      </section>

   <section id="story" className="border-y border-[#e5ded3]">
  <div className="grid grid-cols-2 max-lg:grid-cols-1">

    {/* Left Stats */}
    <div className="bg-[radial-gradient(circle_at_72%_18%,rgba(68,158,132,0.28),transparent_18rem),linear-gradient(130deg,#021d19,#073f35)] text-white">
      <div className="mx-auto grid min-h-[330px] w-[min(520px,calc(100%-40px))] grid-cols-2 py-8 max-lg:w-[calc(100%-32px)] max-sm:grid-cols-1">

        {stats.map(({ value, label, icon: Icon }, index) => (
          <article
            key={label}
            className={`
              flex flex-col justify-center
              min-h-[145px] p-6
              border-white/10
              ${index < 2 ? "border-b" : ""}
              ${index % 2 === 0 ? "border-r" : ""}
              max-sm:border-r-0
            `}
          >
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]">
              <Icon size={22} strokeWidth={1.8} />
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
    <div className="flex items-center px-[max(40px,calc((100vw_-_1120px)/2_+_40px))] py-10 max-lg:px-6">

      <div>
        <SectionLabel>Our Story</SectionLabel>

        <h2 className="mt-2 max-w-[420px] text-[clamp(24px,3vw,28px)] font-bold leading-tight text-[#021d19]">
          From an Idea Built on Trust
        </h2>

        <p className="mt-4 max-w-[500px] text-[14px] leading-6 text-[#4d5b56]">
          Spark Skylytics started with one simple belief: helping businesses grow
          through honest, result-driven digital marketing. Built on trust,
          creativity, and transparency, we deliver branding, websites, and
          marketing solutions that create real business growth. Today, we proudly
          partner with businesses across India and are ready to help brands
          worldwide tell their story.
        </p>

        {/* Founder */}
        <div className="mt-6 flex items-center gap-3">

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
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {values.map(({ number, title, text, icon: Icon }, index) => (
            <article className={`pr-8 ${index !== values.length - 1 ? "border-r border-[#ded6ca]" : ""} max-lg:border-r-0`} key={title}>
              <span className="mb-7 grid size-20 place-items-center rounded-full border border-[#e5ded2] bg-white/70 text-[#073f35] shadow-[0_14px_34px_rgba(7,63,53,0.08)]">
                <Icon size={31} strokeWidth={1.8} />
              </span>
              <span className="mb-2 block text-xs font-bold text-[#8c918e]">{number}</span>
              <h3 className="mb-3 text-base font-black">{title}</h3>
              <p className="text-sm leading-6 text-[#5d6864]">{text}</p>
            </article>
          ))}
        </div>
      </section>

   <section id="team" className={`${shell} pb-16`}>
  <div className="mb-7 flex items-end justify-between gap-5 max-sm:flex-col max-sm:items-start">
    <div>
      <SectionLabel>Meet The Founder</SectionLabel>
      <h2 className="text-[clamp(28px,3vw,40px)] font-semibold">
        The Person Behind The Spark
      </h2>
    </div>
  </div>

  {/* Same card design */}
  <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
  {team.map((member) => (
    <article
      key={member.name}
      className="overflow-hidden rounded-[10px] border border-[#e4ddd2] bg-white shadow-[0_14px_34px_rgba(7,63,53,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(7,63,53,0.12)]"
    >
      <div className="relative h-[190px] bg-[#ece7df]">
        <Image
          src={member.image}
          alt={`${member.name} from Spark Skylytics`}
          fill
          sizes="(max-width:1024px) 50vw,25vw"
          className="object-cover"
          style={{ objectPosition: member.position }}
        />

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-base font-black text-[#021d19]">
          {member.name}
        </h3>

        <p className="mt-1 text-sm text-[#5d6864]">
          {member.role}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9e2de] text-[#073f35] transition-all duration-300 hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white"
          >
            <FaLinkedinIn size={14} />
          </a>

          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} Instagram`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9e2de] text-[#073f35] transition-all duration-300 hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white"
          >
            <FaInstagram size={14} />
          </a>

          <a
            href={member.email}
            aria-label={`Email ${member.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9e2de] text-[#073f35] transition-all duration-300 hover:border-[#0b6b58] hover:bg-[#0b6b58] hover:text-white"
          >
            <MdOutlineMail size={16} />
          </a>

          <span
            className={`ml-auto block h-2.5 w-2.5 rounded-full ${member.color}`}
          />
        </div>
      </div>
    </article>
  ))}
</div>
</section>

     <section className="bg-[radial-gradient(circle_at_88%_58%,rgba(239,216,164,0.34),transparent_12rem),linear-gradient(120deg,#021d19,#06493c)] text-white">
  <div
    className={`${shell} flex items-center justify-between gap-6 py-6 max-lg:flex-col max-lg:items-start`}
  >
    <div>
      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#e5d5a8]">
        Start A Project
      </p>

      <h2 className="max-w-[520px] text-[clamp(22px,2.8vw,34px)] font-bold leading-tight">
        Let's Build Something Amazing Together.
      </h2>

      <p className="mt-2 max-w-[520px] text-sm leading-6 text-white/70">
        Ready to grow your business? From branding and websites to SEO and
        digital marketing, we'll help turn your ideas into measurable results.
      </p>
    </div>

    <a
      href="/contact"
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
