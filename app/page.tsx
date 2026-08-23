"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ElementType } from "react";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css"
import {
  ArrowLeft,
  Quote,
} from "lucide-react";
import FloatingSocial from "./components/FloatingSocial";
import Loader from "./components/Loader";


const testimonials = [
  {
    name: "Sai Prabha Ayurveda",
    role: "Healthcare Brand",
    logo: "/brands/Saiii.png",
    review:
      "The Spark Skylytics team is extremely hardworking, professional, and dedicated. They truly understand digital marketing strategies and deliver results with creativity and precision. Their timely communication and attention to detail make them stand out.",
  },
  {
    name: "Sunshine Decor",
    role: "Interior Design",
    logo: "/brands/Sunshine Logo.png",
    review:
      "If you're looking for a reliable digital marketing agency, Spark Skylytics is an excellent choice. We are very satisfied with their work, communication, and the overall results they delivered.",
  },
  {
    name: "Kidzee Aksharm",
    role: "Education",
    logo: "/brands/KIDZEE LOGO Baby Show.png", // update path to actual logo
    review:
      "A nice bunch of young, energetic and enthusiastic professionals. They are doing an excellent job as a digital marketing agency and always provide quick support whenever needed.",
  },
  // {
  //   name: "Dr. Pinku Phogat",
  //   role: "Healthcare",
  //   logo: "/brands/saiii.png", // update path to actual logo
  //   review:
  //     "Good marketing company with a supportive and dedicated team. They understand business requirements well and provide reliable digital marketing solutions.",
  // },
  {
    name: "Mrs. Prachi",
    role: "Client",
    logo: "/brands/kidzee new mandi.png", // update path to actual logo
    review:
      "Wonderful work by the entire team. Professional, responsive, and committed to delivering quality results. Keep up the great work!",
  },
  {
    name: "Bharat Batla",
    role: "Creative Client",
    logo: "/brands/BB Logo.png", // update path to actual logo
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
  [
    "Digital Marketing",
    "Data-driven campaigns that increase visibility, generate leads and boost sales.",
    "/Icons/digitalmarketingicon.png",
  ],




];

const brands = [
  { logo: "/brands/veerji.png", alt: "Veer Ji" },
  { logo: "/brands/thumbnail.png", alt: "mount litera" },

  { logo: "/brands/BB Logo.png", alt: "BB" },
  { logo: "/brands/KIDZEE LOGO Baby Show.png", alt: "KIDZEE LOGO Baby Show" },

  { logo: "/brands/Sunshine Logo.png", alt: "Sunshine" },
  { logo: "/brands/Saiii.png", alt: "sai prabha ayurved" },
  { logo: "/brands/kidzee new mandi.png", alt: "kidzee new mandi" },



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
    "/Projects/branding.webp",
  ],
  [
    "Website & Search Optimization",
    "Web Development",
    "/Projects/website.webp",
  ],
  [
    "Social Media & Content Marketing",
    "Digital Marketing",
    "/Projects/download.webp",
  ],
  [
    "Performance Marketing",
    "Growth Marketing",
    "/Projects/performance.webp",
  ],
];
const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";
const pill =
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold leading-none transition hover:-translate-y-0.5";
const darkPill = `${pill} bg-[#073f35] text-white shadow-[0_12px_24px_rgba(7,63,53,0.22)]`;
const lightPill = `${pill} border border-[#96aaa2] bg-white/80 text-[#071117]`;


/* ---------------------------------------------------------------------- */
/* Scroll reveal utilities                                                */
/* ---------------------------------------------------------------------- */

// Fires once when the element scrolls into view, then disconnects.
function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users who've asked for reduced motion — just show it.
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px", ...options }
    );

    // The homepage loader covers the first second of the page. Waiting until
    // it has exited prevents the reveal from finishing behind that overlay.
    const startObserver = window.setTimeout(() => observer.observe(el), 1100);
    return () => {
      window.clearTimeout(startObserver);
      observer.disconnect();
    };
  }, []);

  return { ref, visible };
}

type RevealDirection = "up" | "left" | "right" | "scale" | "fade";

// Keep below-the-fold videos out of the network queue until the visitor is
// approaching them. This avoids downloading every reel during the initial load.
function LazyVideo({
  src,
  className = "",
  autoPlay = false,
}: {
  src: string;
  className?: string;
  autoPlay?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [muted, setMuted] = useState(true);

  const startWithSound = () => {
    const video = videoRef.current;
    if (!video || autoPlay) return;

    video.muted = false;
    setMuted(false);
    void video.play().catch(() => {
      // Some browsers require a tap before allowing sound. Keep the video
      // silent rather than showing an unhandled playback error in that case.
      video.muted = true;
      setMuted(true);
    });
  };

  const stopPreview = () => {
    if (autoPlay || !videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.muted = true;
    setMuted(true);
  };

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${className} ${autoPlay ? "" : "cursor-pointer"}`}
      onPointerEnter={() => {
        if (window.matchMedia("(hover: hover)").matches) startWithSound();
      }}
      onPointerLeave={stopPreview}
    >
      {shouldLoad && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          muted={autoPlay || muted}
          loop
          playsInline
          preload="metadata"
          onClick={() => {
            if (autoPlay) return;
            if (videoRef.current?.paused) startWithSound();
            else stopPreview();
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="h-full w-full object-cover"
          aria-label={autoPlay ? undefined : isPlaying ? "Pause reel with sound" : "Play reel with sound"}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

// Small wrapper component so any block of markup can be revealed on scroll
// without repeating the observer boilerplate everywhere.
function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className = "",
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  [key: string]: any;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as any}
      className={`${className} reveal reveal--${direction}${visible ? " is-revealed" : ""}`}
      style={{
        "--reveal-duration": `${duration}ms`,
        "--reveal-delay": `${Math.min(delay, 240)}ms`,
      } as React.CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}

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

  // Hero enters on mount rather than on scroll, since it's above the fold.
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setHeroLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

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
    <Loader>
    <main className="min-h-screen  bg-white">
      <Navbar />
      <FloatingSocial />

      <section
  className={`${shell} relative flex min-h-[85vh] items-center py-10
  max-lg:min-h-[75vh] max-lg:flex-col max-lg:gap-10 max-lg:py-8
  max-sm:min-h-[60svh] max-sm:py-6`}
>
  {/* Left Content */}
  <div
    className={`relative z-10 w-full max-w-[600px] pl-16 lg:pl-20 max-lg:px-8
    transition-all duration-1000 ease-out
    ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
  >
    {/* Badge */}

    {/* Heading - Consistent typography */}
    <h1 className="text-[clamp(32px,4vw,48px)] font-semibold leading-[1.20] tracking-tight text-white
      max-lg:text-[clamp(28px,3.5vw,40px)] max-sm:text-[clamp(24px,6vw,32px)]">
      Ideas That Spark.
      <br />
      Strategies That{" "}
      <span className="text-emerald-400">Drive Growth</span>
      <br />
      That Lasts.
    </h1>

    {/* Description - Consistent typography */}
    <p className="mt-8 max-w-[520px] text-[clamp(16px,1.2vw,18px)] leading-[1.8] text-white/80
      max-lg:mt-6 max-sm:mt-4 max-sm:text-[clamp(14px,3.5vw,16px)]">
      We create stunning websites, powerful brands and
      high-performing digital marketing strategies that
      help businesses grow faster.
    </p>

    {/* Buttons */}

  </div>

  {/* Background Image */}
  <div
    className={`absolute inset-0 z-0 transition-all duration-[1400ms] ease-out
    ${heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
  >
    {/* Background Video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/Reels/service-hero-reel.mp4" type="video/mp4" />
    </video>

    {/* Enhanced dark overlay for better text readability */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

    {/* Subtle gradient overlay for better text contrast */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/20" />

    {/* Mobile overlay - lighter for mobile */}
    <div className="absolute inset-0 rounded-2xl bg-black/40 lg:hidden" />
  </div>
</section>
      <Reveal className={`${shell} mt-8`} direction="up">
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

            {/* Logos - auto scrolling marquee */}
            <div className="group relative flex-1 overflow-hidden">
              <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                {/* render the list twice for a seamless loop */}
                {[...brands, ...brands].map((brand, index) => (
                  <div
                    key={`${brand.alt}-${index}`}
                    className="flex h-20 w-40 shrink-0 items-center justify-center border-r border-[#e6e6e6]"
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
        </div>
      </Reveal>

      <section className={`${shell} py-20`}>
        <Reveal direction="up" className="mx-auto mb-12 max-w-[460px] text-center">
          {/* Subheading - Consistent typography */}
          <p className="mb-3.5 text-[clamp(11px,0.8vw,13px)] font-extrabold uppercase tracking-[0.1em] text-[#5d6864]">What We Do</p>
          
          {/* Heading - Consistent with hero */}
          <h2 className="text-[clamp(30px,3.5vw,42px)] font-semibold leading-[1.2]">
            Digital Solutions That <em className="not-italic text-[#0e6b58]">Drive Real Impact</em>
          </h2>
        </Reveal>
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {services.map(([title, text, image], i) => (
            <Reveal
              key={title}
              direction="up"
              delay={i * 100}
              as="article"
              className="rounded-[18px] border border-[#0c30281a] bg-white p-6 shadow-[0_18px_45px_rgba(8,34,28,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(8,34,28,0.1)]"
            >
              <div className="mb-5 flex items-center justify-center">
                <Image src={image} alt={title} width={120} height={120} className="h-36 w-auto object-contain" />
              </div>
              {/* Service Title - Consistent typography */}
              <h3 className="mb-2.5 text-[clamp(18px,1.4vw,22px)] font-semibold">{title}</h3>
              {/* Service Description - Consistent typography */}
              <p className="mb-5 text-[clamp(14px,0.9vw,15px)] leading-[1.8] text-[#5d6864]">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className={`${shell} relative grid min-h-[340px] grid-cols-[0.95fr_1fr] items-center overflow-hidden rounded-[20px] bg-gradient-to-r from-[#021712] to-[#08382d] px-8 py-8 text-white max-lg:grid-cols-1 max-lg:px-6 max-lg:py-8 max-sm:px-5 max-sm:py-6`}
      >
        {/* Background Video */}
        <LazyVideo
          src="/Reels/main-reel.mp4"
          className="absolute inset-0"
          autoPlay
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011713]/90 via-[#07352b]/70 to-[#07352b]/55" />

        {/* Left Content */}
        <Reveal direction="left" className="relative z-10 max-w-[360px]">
          {/* Subheading - Consistent typography */}
          <p className="mb-2 text-[clamp(10px,0.7vw,12px)] font-extrabold uppercase tracking-[0.18em] text-emerald-300">
            Immersive Experience
          </p>

          {/* Heading - Consistent with hero */}
          <h2 className="mb-3 text-[clamp(28px,3vw,40px)] font-semibold leading-[1.2]">
            We Bring Ideas
            <br />
            To Life In 3D
          </h2>

          {/* Description - Consistent typography */}
          <p className="text-[clamp(14px,0.9vw,16px)] leading-[1.8] text-white/80">
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
        </Reveal>

        {/* Right Side Glow */}
        <div className="relative z-10 flex items-center justify-center max-lg:hidden">
          <div className="h-36 w-36 rounded-full bg-emerald-400/15 blur-3xl animate-pulse" />
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
        <Reveal direction="left" className="max-w-[360px]">
          {/* Subheading - Consistent typography */}
          <p className="mb-3.5 text-[clamp(11px,0.8vw,13px)] font-bold uppercase tracking-[0.12em] text-[#0a5144]">
            Instagram Reels
          </p>
          {/* Heading - Consistent with hero */}
          <h2 className="mb-4 text-[clamp(28px,2.8vw,36px)] font-semibold leading-[1.2]">
            Tips, Insights &<br />Behind The Scenes
          </h2>
          {/* Description - Consistent typography */}
          <span className="mb-5 block text-[clamp(16px,1.1vw,18px)] leading-[1.8] text-[#707070]">
            Short videos. Real strategies. Big impact.
          </span>
          <a className={darkPill} href="https://www.instagram.com/spark_skylytics/">
            Follow Us <ArrowUpRight size={16} />
          </a>
        </Reveal>

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
              <Reveal
                key={`${title}-${index}`}
                as="article"
                direction="scale"
                delay={index * 80}
                duration={500}
                className="relative flex h-[290px] min-w-[160px] flex-1 basis-0 flex-col justify-between overflow-hidden rounded-[20px] shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-2 max-lg:min-w-[170px]"
              >
                {/* Background */}
                {isVideo ? (
                  <LazyVideo src={media} className="absolute inset-0" />
                ) : (
                  <img
                    src={media}
                    alt={title}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}

                {/* Dark Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </Reveal>
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
          <Reveal direction="up">
            {/* Subheading - Consistent typography */}
            <p className="mb-3 text-[clamp(11px,0.8vw,13px)] font-black uppercase tracking-[0.08em] text-[#173f37]">
              Our Expertise
            </p>

            {/* Heading - Consistent with hero */}
            <h2 className="text-[clamp(24px,2.5vw,32px)] font-semibold leading-[1.3]">
              Digital Solutions
              <br />
              That Drive Growth
            </h2>
          </Reveal>

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
          {projects.map(([title, type, image], i) => (
            <Reveal
              key={title}
              as="article"
              direction="up"
              delay={i * 100}
              className="relative rounded-[18px] border border-[#0c30281a] bg-white p-4 shadow-[0_18px_45px_rgba(8,34,28,0.08)] transition hover:-translate-y-1"
            >
              <div className="relative mb-3.5 h-[150px] overflow-hidden rounded-md bg-[#eef1f0]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              {/* Project Title - Consistent typography */}
              <h3 className="mb-3 truncate text-[clamp(14px,1vw,16px)] font-semibold">
                {title}
              </h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className={`${shell} grid grid-cols-[220px_1fr_240px] items-center gap-10 py-16 max-lg:grid-cols-1 max-lg:text-center`}
      >
        {/* Left */}
        <Reveal direction="left" className="max-lg:flex max-lg:flex-col max-lg:items-center">
          {/* Subheading - Consistent typography */}
          <p className="mb-3 text-[clamp(11px,0.8vw,13px)] font-black uppercase tracking-[0.08em] text-[#173f37]">
            Client Love
          </p>

          {/* Heading - Consistent with hero */}
          <h2 className="text-[clamp(28px,3vw,42px)] font-semibold leading-[1.2]">
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
        </Reveal>

        {/* Testimonial */}
        <div
          key={currentTestimonial}
          className="rounded-3xl border border-[#ebe7df] bg-white/90 p-7 shadow-[0_20px_60px_rgba(7,63,53,0.08)] backdrop-blur-sm transition-all duration-700 animate-in fade-in slide-in-from-bottom-2"
        >
          {/* Quote */}
          <Quote size={32} strokeWidth={2.5} className="mb-4 text-[#0b6b58]" />

          {/* Review - Consistent typography */}
          <p className="min-h-[120px] text-[clamp(15px,1vw,17px)] leading-[1.8] text-[#374151] transition-all duration-500">
            {testimonial.review}
          </p>

          {/* User */}
          <div className="mt-7 flex items-center gap-4">
            {testimonial.logo ? (
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#e6e6e6] bg-white shadow-md">
                <Image
                  src={testimonial.logo}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain p-1.5"
                />
              </div>
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0e6b58] to-[#073f35] text-lg font-bold text-white shadow-lg">
                {initials}
              </div>
            )}

            <div>
              {/* Client Name - Consistent typography */}
              <h4 className="text-[clamp(16px,1.1vw,18px)] font-bold text-[#111827]">
                {testimonial.name}
              </h4>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <Reveal direction="right" className="flex justify-center">
          <Image
            src="/Icons/testimonial-chat-removebg-preview.png"
            alt="Testimonials"
            width={300}
            height={300}
            className="object-contain"
          />
        </Reveal>
      </section>

   

      <Footer />
    </main>
    </Loader>
  );
}
