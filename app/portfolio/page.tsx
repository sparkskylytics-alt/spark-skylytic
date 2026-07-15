"use client";

import { useState } from "react";
import { Play, ArrowUpRight, ChevronDown } from "lucide-react";
import {
  FaInstagram,
} from "react-icons/fa";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const CATEGORIES = [
  "All",
  "Web Design",
  "UI/UX Design",
  "Digital Marketing",
  "SEO",
  "Branding",
  "Videos",
];

const SORT_OPTIONS = ["Latest", "Oldest", "A - Z"];

const PROJECTS = [
  {
    title: "Fintech Website Design",
    category: "Web Design",
    image: "/images/portfolio/fintech-website.jpg",
    dark: false,
  },
  {
    title: "Social Media Campaign",
    category: "Digital Marketing",
    image: "/images/portfolio/social-campaign.jpg",
    dark: true,
  },
  {
    title: "E-commerce Platform",
    category: "Web Design",
    image: "/images/portfolio/ecommerce-platform.jpg",
    dark: true,
  },
  {
    title: "SEO Results That Speak",
    category: "SEO",
    image: "/images/portfolio/seo-results.jpg",
    dark: true,
  },
  {
    title: "Brand Identity Design",
    category: "Branding",
    image: "/images/portfolio/brand-identity.jpg",
    dark: false,
  },
  {
    title: "Ad Campaign Design",
    category: "Digital Marketing",
    image: "/images/portfolio/ad-campaign.jpg",
    dark: true,
  },
  {
    title: "Real Estate Website",
    category: "Web Design",
    image: "/images/portfolio/real-estate.jpg",
    dark: true,
  },
  {
    title: "Mobile App UI/UX",
    category: "UI/UX Design",
    image: "/images/portfolio/mobile-app.jpg",
    dark: true,
  },
  {
    title: "Analytics Setup",
    category: "SEO",
    image: "/images/portfolio/analytics-setup.jpg",
    dark: false,
  },
  {
    title: "Packaging Design",
    category: "Branding",
    image: "/images/portfolio/packaging-design.jpg",
    dark: false,
  },
  {
    title: "Corporate Website",
    category: "Web Design",
    image: "/images/portfolio/corporate-website.jpg",
    dark: true,
  },
  {
    title: "Food App UI Design",
    category: "UI/UX Design",
    image: "/images/portfolio/food-app.jpg",
    dark: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  SMALL COMPONENTS                                                         */
/* -------------------------------------------------------------------------- */
interface Project {
  title: string;
  category: string;
  image: string;
  dark: boolean;
}

interface ProjectCardProps {
  project: Project;
}

interface FilterPillProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterPill({
  label,
  active,
  onClick,
}: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-emerald-900 text-white"
          : "border border-stone-200 bg-white text-stone-600 hover:border-stone-300"
      }`}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href="#"
      className="group relative block aspect-[4/3] rounded-2xl bg-stone-300"
    >
      {/* Replace with the real project screenshot / photo */}
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />

      {/* gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />

      {/* instagram badge */}
      <div className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm">
        <FaInstagram className="h-3.5 w-3.5" />
      </div>

      {/* play button, center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-emerald-900">
          <Play className="h-5 w-5" fill="currentColor" />
        </span>
      </div>

      {/* caption */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-sm font-semibold text-white">{project.title}</p>
        <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-white/80 transition group-hover:text-white">
          View Project
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                     */
/* -------------------------------------------------------------------------- */

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Latest");

  const projects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#F7F4ED] text-stone-900">
      <Navbar />

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 sm:pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
              Our Work, In Real Time
            </span>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] sm:text-6xl">
              A Glimpse Of
              <br />
              What <span className="text-emerald-700">We Create.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-stone-500">
              Explore real projects, campaigns, and creative moments from our
              Instagram.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              <FaInstagram className="h-4 w-4" />
              Follow Us On Instagram
            </a>
          </div>

          <div className="relative">
            {/* Replace with the real device / instagram preview illustration */}
            <img
              src="/images/portfolio/hero-devices.png"
              alt="Instagram preview on devices"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FILTERS                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => (
              <FilterPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setSortOpen((o) => !o)}
              className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700"
            >
              {sortBy}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  sortOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {sortOpen && (
              <div className="absolute right-0 z-10 mt-2 w-36 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-lg">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSortBy(opt);
                      setSortOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-stone-600 hover:bg-stone-50"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* PROJECT GRID                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
        {projects.length === 0 ? (
          <p className="py-20 text-center text-sm text-stone-500">
            No projects in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA BANNER                                                        */}
      {/* ---------------------------------------------------------------- */}
      {/* <section className="relative overflow-hidden bg-emerald-950 px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Have A Project In Mind?
            </span>
            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Let's Create Something
              <br />
              Amazing Together.
            </h3>
            <button className="mt-6 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Start A Project →
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}