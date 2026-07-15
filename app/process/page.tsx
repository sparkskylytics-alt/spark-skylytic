"use client";

import { useState } from "react";
import {
  Search,
  Compass,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp,
  Check,
  ChevronDown,
  ArrowRight,
  Cloud,
  Triangle,
} from "lucide-react";
import { FaSlack, FaGithub, FaFigma } from "react-icons/fa";


import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  checklist: string[];
  image: string;
  imageSide: "left" | "right";
}

interface ChecklistProps {
  items: string[];
}

interface ProcessStepProps {
  step: Step;
  isLast: boolean;
}

interface FAQ {
  q: string;
  a: string;
}

interface FaqItemProps {
  item: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const STEPS: Step[] = [
  {
    number: "01",
    icon: Search,
    eyebrow: "Discovery",
    title: "We Understand Your Vision",
    description:
      "We start by learning about your business, goals, audience, and challenges to create a strong foundation.",
    checklist: [
      "Business Goals",
      "Market Research",
      "Target Audience",
      "Technical Requirements",
      "Competitor Analysis",
      "Budget & Timeline",
    ],
    image: "/process/vision.png",
    imageSide: "left",
  },
  {
    number: "02",
    icon: Compass,
    eyebrow: "Strategy",
    title: "We Plan For Success",
    description:
      "We craft a strategic roadmap tailored to your business that aligns with your goals and market opportunities.",
    checklist: [
      "Brand Strategy",
      "Content Strategy",
      "User Journey Mapping",
      "SEO Strategy",
      "Information Architecture",
      "Marketing Strategy",
    ],
    image: "/process/success.jpg",
    imageSide: "right",
  },
  {
    number: "03",
    icon: PenTool,
    eyebrow: "Design",
    title: "We Design With Purpose",
    description:
      "Our design team creates intuitive, engaging and conversion-focused designs that bring your brand to life.",
    checklist: [
      "Wireframes",
      "Design System",
      "UI/UX Design",
      "User Experience",
      "Prototyping",
      "Revisions & Feedback",
    ],
    image: "/process/purpose.png",
    imageSide: "left",
  },
  {
    number: "04",
    icon: Code2,
    eyebrow: "Development",
    title: "We Build With Precision",
    description:
      "Our developers turn designs into fast, secure and scalable websites and applications.",
    checklist: [
      "Front-end Development",
      "API Development",
      "Back-end Development",
      "Performance Optimization",
      "CMS Integration",
      "Responsive Development",
    ],
    image: "/process/precision.png",
    imageSide: "right",
  },
  {
    number: "05",
    icon: ShieldCheck,
    eyebrow: "Testing",
    title: "We Ensure Quality",
    description:
      "Every project goes through rigorous testing to ensure performance, security, and a seamless experience.",
    checklist: [
      "Functionality Testing",
      "Speed Optimization",
      "Cross Browser Testing",
      "SEO & Accessibility",
      "Mobile Responsiveness",
      "Security Testing",
    ],
    image: "/process/quality.png",
    imageSide: "left",
  },
  {
    number: "06",
    icon: Rocket,
    eyebrow: "Launch",
    title: "We Launch With Confidence",
    description:
      "Once everything is perfect, we launch your project and make it live for the world.",
    checklist: [
      "Deployment",
      "Analytics Setup",
      "Domain & Hosting Setup",
      "Search Console Setup",
      "SSL & Security",
      "Performance Check",
    ],
    image: "/process/confidense.png",
    imageSide: "right",
  },
  {
    number: "07",
    icon: TrendingUp,
    eyebrow: "Growth",
    title: "We Help You Grow",
    description:
      "Our relationship doesn't end at launch. We continue to optimize and grow your digital presence.",
    checklist: [
      "SEO & Content Marketing",
      "Analytics & Reporting",
      "Google Ads & Meta Ads",
      "Performance Tracking",
      "Conversion Optimization",
      "Continuous Improvement",
    ],
    image: "/process/grow.png",
    imageSide: "left",
  },
];

const TOOLS = [
  { name: "Figma", icon: FaFigma },
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Triangle },
  { name: "Node.js", icon: Code2 },
  { name: "WordPress", icon: Compass },
  { name: "Shopify", icon: Rocket },
  { name: "Google Ads", icon: TrendingUp },
  { name: "Analytics", icon: TrendingUp },
  { name: "GitHub", icon: FaGithub },
  { name: "Slack", icon: FaSlack },
  { name: "Cloudflare", icon: Cloud },
  { name: "Vercel", icon: Triangle },
];

const TIMELINE = [
  { label: "Week 1", phase: "Discovery", icon: Rocket },
  { label: "Week 2", phase: "Strategy", icon: PenTool },
  { label: "Week 3-4", phase: "Design", icon: Compass },
  { label: "Week 5-7", phase: "Development", icon: Code2 },
  { label: "Week 8", phase: "Testing", icon: ShieldCheck },
  { label: "Week 9", phase: "Launch", icon: Rocket },
];

const COLLAB = [
  { label: "Regular Updates" },
  { label: "Weekly Meetings" },
  { label: "Feedback & Review" },
  { label: "Project Dashboard" },
];

const FAQS = [
  {
    q: "What digital marketing services do you offer?",
    a: "We provide end-to-end digital marketing solutions, including SEO, Google Ads, Meta (Facebook & Instagram) Ads, Social Media Marketing, Website Design & Development, Content Creation, Branding, Local SEO, Google Business Profile Optimization, and Lead Generation strategies tailored to your business.",
  },
  {
    q: "How soon can I expect to see results?",
    a: "The timeline depends on the service. Paid advertising can start generating leads within days, while SEO typically takes 3–6 months to build long-term organic growth. We focus on sustainable strategies that deliver measurable business results.",
  },
  {
    q: " Do you work with businesses of all sizes?",
    a: "Yes. Whether you're a startup, local business, clinic, school, e-commerce brand, or an established company, we create customized marketing strategies based on your goals, industry, and budget.",
  },
  {
    q: " Will I receive regular reports and updates?",
    a: "Absolutely. We provide transparent performance reports with key metrics, campaign insights, and actionable recommendations so you always know how your marketing investment is performing.",
  },
  {
    q: "Can you manage everything from website to advertising?",
    a: "Yes. We offer complete digital growth solutions under one roof—from website design and SEO to paid advertising, social media management, branding, and ongoing optimization—so you don't need multiple agencies.",
  },
  {
    q: " How do I get started with Spark Skylytics?",
    a: "Getting started is simple. Book your free business audit, share your business goals with our team, and we'll create a customized digital marketing strategy designed to increase leads, sales, and long-term growth.",
  },
];

/* -------------------------------------------------------------------------- */
/*  SMALL COMPONENTS                                                         */
/* -------------------------------------------------------------------------- */

function Checklist({ items }: ChecklistProps) {
  return (
    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProcessStep({
  step,
  isLast,
}: ProcessStepProps) {
  const Icon = step.icon;
  const imageBlock = (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-200">
      {/* Replace with the real screenshot/photo for this step */}
      <img
        src={step.image}
        alt={step.title}
        className="h-full w-full object-cover"
      />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
        {step.eyebrow}
      </span>
      <h3 className="mt-2 text-2xl font-bold text-stone-900 sm:text-3xl">
        {step.title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-500">
        {step.description}
      </p>
      <Checklist items={step.checklist} />
    </div>
  );

  return (
    <div className="relative flex gap-6 sm:gap-10">
      {/* timeline rail */}
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-sm font-bold text-stone-900 shadow-sm">
          {step.number}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-stone-200" />}
        <div className="mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-emerald-700 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-stone-200" />}
      </div>

      {/* content */}
      <div className="grid flex-1 grid-cols-1 gap-8 pb-16 sm:grid-cols-2 sm:items-center sm:gap-10">
        {step.imageSide === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            <div className="sm:order-2">{imageBlock}</div>
            <div className="sm:order-1">{textBlock}</div>
          </>
        )}
      </div>
    </div>
  );
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: FaqItemProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 border-b border-stone-200 py-4 text-left"
    >
      <span className="text-sm font-medium text-stone-800">{item.q}</span>
      <ChevronDown
        className={`h-4 w-4 shrink-0 text-stone-400 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                     */
/* -------------------------------------------------------------------------- */

export default function ProcessPage() {
const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#F7F4ED] text-stone-900">
      <Navbar />

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                              */}
      {/* ---------------------------------------------------------------- */}
     <section className="relative overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-emerald-100/60 blur-3xl" />
    <div className="absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-amber-100/50 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left */}
      <div>

        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
          Our Process
        </span>

        <h1 className="mt-6 text-[clamp(25px,6vw,35px)] font-bold leading-[1.02] tracking-[-2px] text-[#021d19]">
          From
          <span className="italic font-light text-[#6b7b74]">
            {" "}Vision
          </span>

          <br />

          To
          <span className="text-emerald-700">
            {" "}Business Growth.
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-[16px] leading-8 text-stone-600">
          Every successful project begins with understanding your business.
          From strategy and branding to websites and digital marketing,
          we create solutions that deliver measurable growth.
        </p>

        {/* <div className="mt-10 flex flex-wrap gap-4">

          <button className="inline-flex items-center gap-2 rounded-full bg-[#073f35] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0b5d4d]">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-7 py-3 text-sm font-semibold text-stone-700 transition hover:border-[#073f35] hover:text-[#073f35]">
            View Our Work
            <ArrowRight className="h-4 w-4" />
          </button>

        </div> */}

        {/* Metrics */}
        {/* <div className="mt-12 flex flex-wrap gap-8">

          <div>
            <h3 className="text-3xl font-bold text-[#021d19]">
              200+
            </h3>
            <p className="text-sm text-stone-500">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#021d19]">
              98%
            </h3>
            <p className="text-sm text-stone-500">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#021d19]">
              4+
            </h3>
            <p className="text-sm text-stone-500">
              Years Experience
            </p>
          </div>

        </div> */}

      </div>

      {/* Right */}
   <div className="relative">
  {/* Background Card */}
  <div className="absolute -left-5 -top-5 hidden h-full w-full rounded-[36px] bg-[#073f35]/5 lg:block" />

  <div className="relative overflow-hidden rounded-[28px] border border-stone-200 bg-white p-3 shadow-[0_20px_60px_rgba(7,63,53,0.12)] sm:p-5">
    {/* Image */}
    <img
      src="/process/process.jpg"
      alt="Process"
      className="h-auto w-full rounded-2xl object-cover"
    />

    {/* Process Card */}
    <div
      className="
        mt-5
        rounded-2xl
        bg-white
        p-4
        shadow-xl

        lg:absolute
        lg:bottom-6
        lg:left-6
        lg:mt-0
        lg:w-[230px]
      "
    >
      <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
        Process
      </p>

      <div className="mt-4 space-y-3">
        {[
          "Discovery",
          "Strategy",
          "Creative",
          "Marketing",
          "Growth",
        ].map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
              {i + 1}
            </div>

            <span className="text-sm font-medium text-[#021d19]">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</section>
      {/* ---------------------------------------------------------------- */}
      {/* STEPS TIMELINE                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-4 lg:px-8">
        {STEPS.map((step, i) => (
          <ProcessStep
            key={step.number}
            step={step}
            isLast={i === STEPS.length - 1}
          />
        ))}
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* TOOLS & TECHNOLOGIES                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-stone-400">
          Tools &amp; Technologies We Use
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-6">
          {TOOLS.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white py-6 shadow-sm"
            >
              <Icon className="h-6 w-6 text-stone-700" />
              <span className="text-[11px] font-medium text-stone-500">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* TIMELINE STRIP                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Typical Project Timeline
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              A Clear Timeline For Your Project
            </h2>
            <p className="mt-3 max-w-xs text-sm text-stone-500">
              Timelines vary based on project scope and complexity. Here's a
              general flow.
            </p>
          </div>

          <div className="flex items-start justify-between overflow-x-auto">
            {TIMELINE.map(({ label, phase, icon: Icon }, i) => (
              <div
                key={label}
                className="flex flex-1 flex-col items-center text-center"
              >
                <div className="flex w-full items-center">
                  <div
                    className={`h-px flex-1 ${i === 0 ? "bg-transparent" : "bg-stone-300"}`}
                  />
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-emerald-700 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`h-px flex-1 ${
                      i === TIMELINE.length - 1 ? "bg-transparent" : "bg-stone-300"
                    }`}
                  />
                </div>
                <span className="mt-3 text-xs font-semibold text-stone-800">
                  {label}
                </span>
                <span className="text-xs text-stone-400">{phase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* COLLABORATION                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-stone-200">
            <img
              src="/process/steps.jpg"
              alt="Team collaborating"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              We Work Together
            </span>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              You're Involved, Every Step Of The Way
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">
              We believe in transparent communication and collaboration.
              You'll always know what's happening with your project.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {COLLAB.map(({ label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-stone-200 px-4 py-3 text-sm font-medium text-stone-700"
                >
                  <Check className="h-4 w-4 text-emerald-600" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ                                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Have Questions?
              <br />
              We Have Answers.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {FAQS.map((item, i) => (
              <div key={item.q}>
                <FaqItem
                  item={item}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
                {openFaq === i && (
                  <p className="pb-4 text-sm leading-relaxed text-stone-500">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA BANNER                                                        */}
      {/* ---------------------------------------------------------------- */}
      {/* <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-emerald-950 px-8 py-12 sm:flex-row sm:items-center sm:px-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Ready To Get Started?
            </span>
            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Let's Build Something
              <br />
              Amazing Together.
            </h3>
            <p className="mt-3 text-sm text-emerald-200/70">
              Your vision + our process = unstoppable results.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50">
              Start Your Project
            </button>
            <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Book A Free Call
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}