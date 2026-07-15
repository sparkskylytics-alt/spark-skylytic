"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  ArrowLeft,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Sai Prabha Ayurveda",
    role: "Healthcare Brand",
    review:
      "The Spark Skylytics team is extremely hardworking, professional, and dedicated. They truly understand digital marketing strategies and deliver results with creativity and precision. Their timely communication and attention to detail make them stand out.",
  },
  {
    name: "Sunshine Decor",
    role: "Interior Design",
    review:
      "If you're looking for a reliable digital marketing agency, Spark Skylytics is an excellent choice. We are very satisfied with their work, communication, and the overall results they delivered.",
  },
  {
    name: "Kidzee Aksharm",
    role: "Education",
    review:
      "A nice bunch of young, energetic and enthusiastic professionals. They are doing an excellent job as a digital marketing agency and always provide quick support whenever needed.",
  },
  {
    name: "Dr. Pinku Phogat",
    role: "Healthcare",
    review:
      "Good marketing company with a supportive and dedicated team. They understand business requirements well and provide reliable digital marketing solutions.",
  },
  {
    name: "Mrs. Prachi",
    role: "Client",
    review:
      "Wonderful work by the entire team. Professional, responsive, and committed to delivering quality results. Keep up the great work!",
  },
  {
    name: "Bharat Batla",
    role: "Creative Client",
    review:
      "Best team for editing. Cooperative, energetic and creative young professionals who always deliver quality work on time.",
  },
];

const stats = [
  ["200+", "Happy Clients"],
  ["98%", "Project Success"],
  ["5+", "Years Experience"],
  ["24/7", "Support"],
];

const services = [
  [
    "Digital Marketing",
    "Data-driven campaigns that increase visibility, generate leads and boost sales.",
    "/Icons/digitalmarketingicon.png",
  ],
  [
    "Branding",
    "Build a memorable brand identity that connects and creates lasting impact.",
    "/Icons/brandingicon.png",
  ],
  [
    "Web Design",
    "Beautiful, responsive websites that engage visitors and convert them into customers.",
    "/Icons/webdesignicon.png",
  ],
  [
    "SEO & Analytics",
    "Improve rankings, track performance and grow your traffic with advanced SEO.",
    "/Icons/seoanalysisicon.png",
  ],

];

const brands = [
  { logo: "/brands/veerji.png", alt: "Veer Ji" },
  { logo: "/brands/hiretrip.png", alt: "hiretrip" },
  { logo: "/brands/BB Logo.png", alt: "BB" },
  { logo: "/brands/Sunshine Logo.png", alt: "Sunshine" },
  { logo: "/brands/Gm logo.jpeg", alt: "GM" },
  { logo: "/brands/saiii.png", alt: "sai prabha ayurved" },
];

const reels = [
  ["Web Design Trends 2024", "12.4K", "/Reels/reel-1.mp4"],
  ["SEO Tips That Actually Work", "8.7K", "/Reels/reel-2.mp4"],
  ["Landing Page Tips That Convert", "11.6K", "/Reels/reel-3.mp4"],
  ["Brand Identity Design Process", "9.3K", "/Reels/reel-4.mp4"],
  ["Brand Identity Design Process", "9.3K", "/Reels/reel-5.mp4"],
  ["Brand Identity Design Process", "9.3K", "/Reels/reel-6.mp4"],
  ["Brand Identity Design Process", "9.3K", "/Reels/reel-7.mp4"],
  ["Brand Identity Design Process", "9.3K", "/Reels/reel-8.mp4"],
  ["Brand Identity Design Process", "9.3K", "/Reels/reel-9.mp4"],
];

const projects = [
  [
    "Brand Identity & Creative",
    "Branding",
    "/Projects/branding.png",
  ],
  [
    "Website & Search Optimization",
    "Web Development",
    "/Projects/website.png",
  ],
  [
    "Social Media & Content Marketing",
    "Digital Marketing",
    "/Projects/download.jpg",
  ],
  [
    "Performance Marketing",
    "Growth Marketing",
    "/Projects/performance.png",
  ],
];
const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";
const pill =
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold leading-none transition hover:-translate-y-0.5";
const darkPill = `${pill} bg-[#073f35] text-white shadow-[0_12px_24px_rgba(7,63,53,0.22)]`;
const lightPill = `${pill} border border-[#96aaa2] bg-white/80 text-[#071117]`;

function BadgeIcon() {
  return (
    <span className="relative inline-grid size-7 place-items-center rounded-full bg-white shadow-[inset_0_0_0_1px_#dfe4dc]">
      <span className="absolute top-[7px] size-2.5 rounded-full border-2 border-[#073f35]" />
      <span className="absolute bottom-1.5 h-2 w-3 rounded-b-full border-2 border-t-0 border-[#073f35]" />
    </span>
  );
}

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.scrollBehavior = "auto";
  };

  const stopDragging = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.scrollBehavior = "smooth";
  };


  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  const testimonial = testimonials[currentTestimonial];

  const initials = testimonial.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();


  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const delta = e.pageX - startX.current;
    scrollRef.current.scrollLeft = startScrollLeft.current - delta;
  };

  // lets people scroll the row using their vertical mouse wheel / trackpad too
  const onWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 14 // 14 = gap-3.5
      : 280;

    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;

    if (atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen  bg-[radial-gradient(circle_at_76%_7%,rgba(8,83,68,0.12),transparent_24rem),radial-gradient(circle_at_13%_53%,rgba(189,178,138,0.12),transparent_26rem),linear-gradient(180deg,#fffdfa_0%,#f8f6ef_66%,#f4f0e7_100%)] text-[#071117]">
      <Navbar />

      <section
        className={`${shell} relative flex min-h-[72vh] items-center py-10
  max-lg:min-h-auto max-lg:flex-col max-lg:gap-10 max-lg:py-8`}
      >
        {/* Left Content */}
        <div
          className="relative z-10 max-w-[540px]
    max-lg:max-w-full max-lg:text-center"
        >
          <h1
            className="mb-4 text-[clamp(30px,4vw,45px)] font-semibold leading-[1.05]
      max-md:text-[44px]
      max-sm:text-[34px]"
          >
            Ideas That Spark. Strategies That Soar.
            <em className="not-italic text-[#0e6b58]"> Growth</em> That Lasts.
          </h1>

          <p
            className="text-[17px] leading-[1.75] text-[#5d6864]
      max-md:text-[16px]
      max-sm:text-[15px]"
          >
            We create stunning websites and high-performing marketing strategies
            that attract the right audience, build strong brands and drive real
            results.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-wrap items-center gap-4
      max-lg:justify-center"
          >
            <a className={darkPill} href="/contact">
              Get a Free Quote <ArrowRight size={16} />
            </a>

            <a className={lightPill} href="/portfolio">
              View Our Work
              <Play
                className="rounded-full border border-[#9aa9a4] p-1"
                size={24}
              />
            </a>
          </div>

          {/* Stats */}
          {/* <div
            className="mt-12 flex items-center justify-between gap-6
      max-lg:grid max-lg:grid-cols-2
      max-sm:grid-cols-2
      max-lg:gap-y-6"
          >
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="grid min-w-24 grid-cols-[28px_1fr] items-center gap-x-2.5
          max-lg:justify-self-center"
              >
                <BadgeIcon />
                <strong className="text-[17px]">{value}</strong>
                <span className="col-start-2 text-[11px] font-bold text-[#5d6864]">
                  {label}
                </span>
              </div>
            ))}
          </div> */}
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-infinity.png"
            alt="Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover rounded-2xl object-center"
          />

          {/* Desktop: fade left side into the page background so text stays readable */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#fffdfa] via-[#fffdfa]/60 to-transparent lg:block" />

          {/* Mobile: soft full overlay so centered text sits on a calm background */}
          <div className="absolute inset-0 bg-[#fffdfa]/70 lg:hidden" />
        </div>
      </section>

      <section className={`${shell} mt-8`}>
        <div className="rounded-2xl border border-[#e8e6df] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col lg:flex-row lg:items-center">
            {/* Left */}
            <div className="border-b border-[#e6e6e6] px-6 py-5 text-center lg:min-w-[170px] lg:border-b-0 lg:border-r lg:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6d6d6d]">
                Trusted By
              </p>
              <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.08em] text-[#1d1d1d]">
                Growing Brands
              </p>
            </div>

            {/* Logos */}
            <div className="grid flex-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {brands.map((brand, index) => (
                <div
                  key={brand.alt}
                  className={`
              flex h-20 items-center justify-center
              border-[#e6e6e6]
              lg:border-r
              ${index !== brands.length - 1 ? "border-b lg:border-b-0" : ""}
              ${index === brands.length - 1 ? "lg:border-r-0" : ""}
            `}
                >
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
                    width={120}
                    height={50}
                    className="h-15 w-auto object-contain transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${shell} py-20`}>
        <div className="mx-auto mb-12 max-w-[460px] text-center">
          <p className="mb-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#5d6864]">What We Do</p>
          <h2 className="text-[clamp(30px,3vw,42px)] leading-[1.12]">
            Digital Solutions That <em className="not-italic text-[#0e6b58]">Drive Real Impact</em>
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.map(([title, text, image]) => (
            <article className="rounded-[18px] border border-[#0c30281a] bg-white p-6 shadow-[0_18px_45px_rgba(8,34,28,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(8,34,28,0.1)]" key={title}>
              <div className="mb-5 flex items-center justify-center">
                <Image src={image} alt={title} width={120} height={120} className="h-36 w-auto object-contain" />
              </div>
              <h3 className="mb-2.5 text-xl font-bold">{title}</h3>
              <p className="mb-5 text-sm leading-7 text-[#5d6864]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${shell} relative grid min-h-[340px] grid-cols-[0.95fr_1fr] items-center overflow-hidden rounded-[20px] bg-gradient-to-r from-[#021712] to-[#08382d] px-8 py-8 text-white max-lg:grid-cols-1 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-6`}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/Reels/main-reel.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011713]/90 via-[#07352b]/70 to-[#07352b]/55" />

        {/* Left Content */}
        <div className="relative z-10 max-w-[360px]">
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-emerald-300">
            Immersive Experience
          </p>

          <h2 className="mb-3 text-[clamp(28px,3vw,40px)] font-semibold leading-tight">
            We Bring Ideas
            <br />
            To Life In 3D
          </h2>

          <p className="text-sm leading-6 text-white/80">
            Experience our work through cinematic 3D animations, web development,
            branding and digital marketing solutions that help businesses grow.
          </p>

          <a
            href="/Reels/main-reel.mp4"
            target="_blank"
            className={`${pill} mt-5 border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white/20`}
          >
            Watch Showreel
            <Play size={16} />
          </a>
        </div>

        {/* Right Side Glow */}
        <div className="relative z-10 flex items-center justify-center max-lg:hidden">
          <div className="h-36 w-36 rounded-full bg-emerald-400/15 blur-3xl" />
        </div>

        {/* Bottom Tags */}
        <ul className="absolute bottom-4 left-[48%] right-8 z-10 flex justify-evenly text-xs font-semibold uppercase tracking-wider text-white/85 max-lg:static max-lg:mt-6 max-lg:justify-center max-lg:gap-8">
          {["Interactive", "Creative", "Results Driven"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section
  className={`${shell} grid grid-cols-[300px_1fr_auto] items-center gap-6 py-20 max-lg:grid-cols-1`}
>
  <div className="max-w-[360px]">
    <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#0a5144]">
      Instagram Reels
    </p>
    <h2 className="mb-4 text-3xl font-semibold leading-[1.15]">
      Tips, Insights &<br />Behind The Scenes
    </h2>
    <span className="mb-5 block text-lg leading-8 text-[#707070]">
      Short videos. Real strategies. Big impact.
    </span>
    <a className={darkPill} href="https://www.instagram.com/spark_skylytics/">
      Follow Us <ArrowUpRight size={16} />
    </a>
  </div>

  <div
    ref={scrollRef}
    onMouseDown={onMouseDown}
    onMouseMove={onMouseMove}
    onMouseUp={stopDragging}
    onMouseLeave={stopDragging}
    onWheel={onWheel}
    className="flex min-w-0 cursor-grab gap-3.5 overflow-x-auto pb-2 select-none [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
    style={{ scrollBehavior: "smooth" }}
  >
    {reels.map(([title, views, media], index) => {
      const isVideo = media.endsWith(".mp4");
      return (
        <article
          key={title}
          onMouseEnter={() => {
            const video = videoRefs.current[index];
            if (!video) return;
            video.muted = false;
            video.volume = 1;
            video.play().catch(() => {});
          }}
          onMouseLeave={() => {
            const video = videoRefs.current[index];
            if (!video) return;
            video.muted = true;
          }}
          className="relative flex h-[290px] min-w-[160px] flex-1 basis-0 flex-col justify-between overflow-hidden rounded-[20px] shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition hover:-translate-y-2 max-lg:min-w-[170px]"
        >
          {/* Background */}
          {isVideo ? (
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={media} type="video/mp4" />
            </video>
          ) : (
            <img
              src={media}
              alt={title}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          {/* Dark Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </article>
      );
    })}
  </div>

  <button
    onClick={scrollNext}
    className="grid size-[60px] place-items-center rounded-full bg-white text-[#073f35] shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition hover:translate-x-1.5 max-lg:justify-self-center"
    aria-label="Next reel"
  >
    <ArrowRight size={26} strokeWidth={2.5} />
  </button>
</section>

      <section id="work" className={shell}>
        <div className="mb-6 grid grid-cols-[250px_1fr_max-content] items-end gap-6 max-lg:grid-cols-1">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.08em] text-[#173f37]">
              Our Expertise
            </p>

            <h2 className="text-2xl font-bold leading-relaxed">
              Digital Solutions
              <br />
              That Drive Growth
            </h2>
          </div>

          {/* <div className="flex flex-wrap gap-3">
            {[
              "All",
              "Branding",
              "Web Development",
              "Digital Marketing",
              "Growth Marketing",
            ].map((item) => (
              <button
                key={item}
                className={`min-h-9 rounded-full border px-5 text-xs ${item === "All"
                    ? "border-[#073f35] bg-[#073f35] text-white"
                    : "border-[#d3d9d5] bg-white/70"
                  }`}
              >
                {item}
              </button>
            ))}
          </div> */}


        </div>
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {projects.map(([title, type, image]) => (
            <article className="relative rounded-[18px] border border-[#0c30281a] bg-white p-4 shadow-[0_18px_45px_rgba(8,34,28,0.08)]" key={title}>
              <div className="relative mb-3.5 h-[150px] overflow-hidden rounded-md bg-[#eef1f0]">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
              <h3 className="mb-3 truncate text-sm font-semibold">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${shell} grid grid-cols-[220px_1fr_240px] items-center gap-10 py-16 max-lg:grid-cols-1 max-lg:text-center`}
      >
        {/* Left */}
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.08em] text-[#173f37]">
            Client Love
          </p>

          <h2 className="text-[clamp(28px,3vw,42px)] font-semibold leading-[1.15]">
            What Our Clients Say
          </h2>

          <div className="mt-8 flex gap-4">
            <button
              onClick={prevTestimonial}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#dfe4df] bg-white shadow-md transition hover:bg-[#073f35] hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextTestimonial}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#dfe4df] bg-white shadow-md transition hover:bg-[#073f35] hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonial */}
        <div
          key={currentTestimonial}
          className="rounded-3xl border border-[#ebe7df] bg-white/90 p-7 shadow-[0_20px_60px_rgba(7,63,53,0.08)] backdrop-blur-sm transition-all duration-700 animate-in fade-in slide-in-from-bottom-2"
        >
          {/* Rating */}


          {/* Quote */}
          <Quote
            size={32}
            strokeWidth={2.5}
            className="mb-4 text-[#0b6b58]"
          />

          {/* Review */}
          <p className="min-h-[120px] text-[16px] leading-8 text-[#374151] transition-all duration-500">
            "{testimonial.review}"
          </p>

          {/* User */}
          <div className="mt-7 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0e6b58] to-[#073f35] text-lg font-bold text-white shadow-lg">
              {initials}
            </div>

            <div>
              <h4 className="text-[17px] font-bold text-[#111827]">
                {testimonial.name}
              </h4>


            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/Icons/testimonial-chat-removebg-preview.png"
            alt="Testimonials"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </section>

      <section
        id="contact"
        className={`${shell} flex items-center justify-between gap-6 rounded-2xl bg-[radial-gradient(circle_at_82%_48%,rgba(255,255,255,0.18),transparent_14rem),linear-gradient(120deg,#021d19,#084638)] px-8 py-6 text-white max-lg:flex-col max-lg:items-start max-lg:px-6 max-lg:py-5`}
      >
        <div>
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.12em] text-white/70">
            Ready To Grow?
          </p>

          <h2 className="text-[clamp(24px,2.6vw,36px)] font-semibold leading-tight">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-2 text-[15px] text-[#d8e5df]">
            Your growth story starts with the right strategy.
          </p>
        </div>

        <a
          href="#"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-[#073f35] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          Get a Free Quote
          <ArrowRight size={18} />
        </a>
      </section>

      <Footer />
    </main>
  );
}