"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About Us", "/about"],
  ["Portfolio", "/portfolio"],
  ["Process", "/process"],
  // ["Blog", "/#blog"],
  ["Contact", "/contact"],
];

type NavbarProps = {
  active?: string;
};

export default function Navbar({ active = "Home" }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-30 mx-auto w-[min(1180px,calc(100%_-_32px))]">
      <div className="flex items-center justify-between gap-6 rounded-full border border-[#ebebe6] bg-white px-4 py-2.5 shadow-[0_4px_20px_rgba(7,17,17,0.06)] max-sm:px-3 max-sm:py-2">
        {/* Logo */}
        <a
          className="flex min-w-max items-center gap-2 rounded-full pl-1"
          href="/"
          aria-label="Spark Skylytics home"
        >
          <Image
            src="/Logo/new-logo.jpeg"
            alt="Spark Skylytics Logo"
            width={190}
            height={52}
            priority
            className="h-auto max-h-[42px] w-auto object-contain max-sm:max-h-[34px]"
          />
        </a>

        {/* Desktop nav */}
        <nav
          className="flex items-center gap-1 text-[13px] font-semibold text-[#4a534e] max-lg:hidden"
          aria-label="Primary navigation"
        >
          {navItems.map(([item, href]) => (
            <a
              className={`relative inline-flex items-center gap-1 rounded-full px-4 py-2.5 transition-colors duration-200 ${
                item === active
                  ? "bg-[#073f35]/[0.08] text-[#073f35]"
                  : "hover:bg-[#f4f3ee] hover:text-[#1a1f1d]"
              }`}
              href={href}
              key={item}
            >
              {item}
              {item === "Services" ? <ChevronDown size={13} /> : null}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            className="group inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-[#073f35] px-5 text-sm font-semibold leading-none text-white shadow-[0_10px_22px_rgba(7,63,53,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0a5144] max-sm:hidden"
            href="/contact"
          >
            Let&apos;s Talk
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>

          <button
            className="relative grid size-10 place-items-center rounded-full bg-[#f4f3ee] text-[#073f35] transition hover:bg-[#ece9e1] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu
              size={19}
              className={`absolute transition-all duration-200 ${
                menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              size={19}
              className={`absolute transition-all duration-200 ${
                menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* backdrop */}
      <div
        className={`fixed inset-0 z-10 bg-black/20 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* mobile menu panel */}
      <div
        id="mobile-nav"
        className={`absolute inset-x-0 top-full z-20 mt-3 origin-top overflow-hidden rounded-[28px] border border-[#ebebe6] bg-white shadow-[0_20px_50px_rgba(7,17,17,0.14)] transition-all duration-300 ease-out lg:hidden ${
          menuOpen
            ? "max-h-[32rem] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 p-3" aria-label="Mobile navigation">
          {navItems.map(([item, href]) => (
            <a
              key={item}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-semibold transition-colors ${
                item === active
                  ? "bg-[#073f35]/[0.08] text-[#073f35]"
                  : "text-[#1a1f1d] hover:bg-[#f4f3ee]"
              }`}
            >
              {item}
              {item === "Services" ? <ChevronDown size={14} /> : null}
            </a>
          ))}

          <a
            className="mt-2 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#073f35] px-5 text-sm font-semibold leading-none text-white shadow-[0_12px_24px_rgba(7,63,53,0.25)] transition hover:bg-[#0a5144]"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk <ArrowRight size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}