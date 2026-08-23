"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { IoClose, IoChatbubbleEllipses } from "react-icons/io5";
const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Sparkskylytics/",
    icon: FaFacebookF,
    color: "hover:bg-[#1877F2]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/spark_skylytics/",
    icon: FaInstagram,
    color: "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Spark_Skylytics",
    icon: FaYoutube,
    color: "hover:bg-[#FF0000]",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919997932324",
    icon: FaWhatsapp,
    color: "hover:bg-[#25D366]",
  },
];

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.912.535 3.696 1.462 5.216L2 22l4.918-1.44A9.955 9.955 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.183a8.16 8.16 0 0 1-4.166-1.143l-.298-.177-3.098.908.926-3.024-.194-.31A8.15 8.15 0 0 1 3.85 12c0-4.501 3.65-8.15 8.151-8.15 4.5 0 8.15 3.649 8.15 8.15 0 4.501-3.65 8.183-8.15 8.183z" />
    </svg>
  );
}

export default function FloatingSocial() {
  const [open, setOpen] = useState(false);

  return (
<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 max-sm:bottom-4 max-sm:right-4">      {/* Social icons */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
    {socials.map(({ name, href, icon: Icon }, index) => (
  <a
    key={name}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    style={{
      transitionDelay: open ? `${index * 60}ms` : "0ms",
    }}
    className="
flex h-12 w-12 items-center justify-center
rounded-full
bg-white
text-[#073f35]
border border-[#e5e7eb]
shadow-lg
transition-all duration-300
hover:-translate-y-1
hover:scale-110
hover:text-white
hover:border-transparent
"
  >
    <Icon size={20} />
  </a>
))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close social links" : "Open social links"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#073f35] text-white shadow-[0_10px_25px_rgba(7,63,53,0.35)] transition hover:-translate-y-0.5"
      >
{open ? <IoClose size={24} /> : <IoChatbubbleEllipses size={24} />}
      </button>
    </div>
  );
}