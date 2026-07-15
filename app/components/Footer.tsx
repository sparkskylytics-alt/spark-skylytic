import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
    FaWhatsapp,

} from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Process", "/process"],
  // ["Blog", "/#blog"],
  ["Contact", "/contact"],
];
const serviceLinks = ["Web Design", "Digital Marketing", "SEO & Analytics", "Branding",];

export default function Footer() {
  return (
    <footer className="mt-5 border-t border-[#e2ded4] bg-[#f5f1e8]/90">
      <div className="mx-auto grid w-[min(1120px,calc(100%_-_48px))] grid-cols-[1.45fr_0.8fr_0.9fr_1.3fr] gap-14 py-8 max-lg:grid-cols-2 max-sm:w-[calc(100%_-_28px)] max-sm:grid-cols-1">
        <div>
          <a href="/" aria-label="Spark Skylytics home">
            <Image src="/Logo/new-logo.jpeg" alt="Spark Skylytics Logo" width={220} height={60} className="h-auto w-auto" />
          </a>
          <p className="mt-3 text-sm leading-7 text-[#59635f]">
            We help businesses grow online with creative web design and result-driven marketing strategies.
          </p>
         <div className="mt-4 flex items-center gap-3">
  <a
    href="https://www.instagram.com/spark_skylytics/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073f35]/20 bg-white text-[#073f35] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d212ae] hover:text-white"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://www.youtube.com/@Spark_Skylytics"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073f35]/20 bg-white text-[#073f35] transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:text-white"
  >
    <FaYoutube size={18} />
  </a>

  <a
    href="https://www.facebook.com/Sparkskylytics/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073f35]/20 bg-white text-[#073f35] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white"
  >
    <FaFacebookF size={17} />
  </a>

   <a
    href="https://wa.me/919997932324"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#073f35]/20 bg-white text-[#073f35] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:text-white"
  >
    <FaWhatsapp size={18} />
  </a>

  {/* <a
    href="https://sparkskylytics.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Website"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#073f35] text-white transition-all duration-300 hover:-translate-y-1 hover:rotate-45"
  >
    <HiArrowUpRight size={18} />
  </a> */}
</div>
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">Quick Links</h3>
          {quickLinks.map(([item, href]) => (
            <a className="mb-2 block text-sm leading-6 text-[#59635f]" href={href} key={item}>{item}</a>
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">Services</h3>
          {serviceLinks.map((item) => (
            <a className="mb-2 block text-sm leading-6 text-[#59635f]" href="#" key={item}>{item}</a>
          ))}
        </div>

       <div>
  <h3 className="mb-4 text-[15px] font-bold">Contact Us</h3>

  <div className="space-y-2 text-sm leading-7 text-[#59635f]">
    {/* Phone */}
    <a
      href="tel:+919997932324"
      className="block transition-colors hover:text-[#073f35] hover:underline"
    >
      +91 99979 32324
    </a>

    {/* Email */}
    <a
      href="mailto:connect@sparkskylytics.com"
      className="block transition-colors hover:text-[#073f35] hover:underline"
    >
      connect@sparkskylytics.com
    </a>

    {/* Address */}
    <a
      href="https://maps.google.com/?q=Rampur+Tiraha+Muzaffarnagar+Uttar+Pradesh"
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-colors hover:text-[#073f35] hover:underline"
    >
      Rampur Tiraha,<br />
      Muzaffarnagar, Uttar Pradesh
    </a>

    {/* Working Hours */}
    <span className="block">
      Mon – Fri: 10:00 AM – 6:00 PM
    </span>
  </div>
</div>
      </div>
      <div className="mx-auto flex min-h-12 w-[min(1120px,calc(100%_-_48px))] items-center justify-between border-t border-[#ded9ce] text-xs text-[#6c716f] max-sm:w-[calc(100%_-_28px)] max-sm:flex-col max-sm:items-start max-sm:justify-center max-sm:gap-2">
        <span>&copy; 2026 SparkSkylytics. All rights reserved.</span>
        <span>Privacy Policy &nbsp;&nbsp;&nbsp; Terms & Conditions</span>
      </div>
    </footer>
  );
}
