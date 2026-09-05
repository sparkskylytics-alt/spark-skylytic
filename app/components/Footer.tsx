"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const quickLinks = [
  ["Home", "/"],
  ["Services", "/services/"],
  ["About Us", "/about/"],
  ["Process", "/process/"],
  ["Blog", "/blog/"],
  ["Contact", "/contact/"],
];

const serviceLinks = ["Branding", "Web Design", "SEO & Analytics", "Digital Marketing"];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/spark_skylytics/", icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com/@Spark_Skylytics", icon: FaYoutube },
  { label: "Facebook", href: "https://www.facebook.com/Sparkskylytics/", icon: FaFacebookF },
  { label: "WhatsApp", href: "https://wa.me/919997932324", icon: FaWhatsapp },
];

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      ["Information we collect", "When you contact Spark Skylytics, request a quote, or work with us, we may collect your name, business name, email address, phone number, project details and any information you choose to share."],
      ["How we use it", "We use this information to respond to enquiries, prepare proposals, deliver services, improve our website and send relevant service updates. We do not sell your personal information."],
      ["Marketing and analytics", "Our website may use cookies and analytics tools to understand traffic and improve performance. You can control cookies through your browser settings."],
      ["Sharing and security", "We share information only with trusted service providers when needed to operate our business or deliver agreed services, or where required by law. We use reasonable safeguards to protect information, but no online transmission is completely secure."],
      ["Your choices", "You may ask to access, correct or delete your personal information, or unsubscribe from marketing emails, by contacting us at sparkskylytics@gmail.com."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      ["Services and proposals", "Our services, scope, timelines, deliverables and fees are set out in the applicable proposal or agreement. Work outside the agreed scope may require a revised timeline and additional fee."],
      ["Client responsibilities", "Clients are responsible for providing accurate content, approvals, access, brand assets and feedback in a timely manner. Delays in these items may affect the delivery schedule."],
      ["Fees and payments", "Invoices must be paid according to the terms stated in the proposal or invoice. We may pause work or withhold deliverables where payments are overdue."],
      ["Intellectual property", "Once all invoices are paid, clients receive rights to the final agreed deliverables. Spark Skylytics retains ownership of its pre-existing tools, processes, templates and working files unless otherwise agreed in writing."],
      ["Third-party platforms", "Results from search engines, advertising platforms, social networks and other third parties cannot be guaranteed. Clients remain responsible for complying with the policies of those platforms and all applicable laws."],
      ["Liability", "To the extent permitted by law, Spark Skylytics is not liable for indirect or consequential losses arising from the use of our website or services. Any liability is limited to the fees paid for the relevant services."],
    ],
  },
} as const;

type LegalDocument = keyof typeof legalContent;

export default function Footer() {
  const [openDocument, setOpenDocument] = useState<LegalDocument | null>(null);

  useEffect(() => {
    if (!openDocument) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenDocument(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openDocument]);

  const documentContent = openDocument ? legalContent[openDocument] : null;

  return (
    <>
    <footer className="mt-14 border-t border-[#e2ded4] bg-[#f5f1e8] text-[#111614]">
      <div className="mx-auto grid w-[calc(100%-28px)] grid-cols-2 gap-x-6 gap-y-10 py-12 sm:w-[calc(100%-48px)] sm:gap-x-8 lg:w-[min(1120px,calc(100%-48px))] lg:grid-cols-[1.35fr_0.7fr_0.85fr_1.1fr] lg:gap-14 lg:py-14">
        <div className="col-span-2 lg:col-span-1">
          <a href="/" aria-label="Spark Skylytics home">
            <Image src="/Logo/new-logo.png" alt="Spark Skylytics" width={200} height={60} className="h-auto w-[165px] sm:w-[180px]" />
          </a>
          <p className="mt-5 max-w-[300px] text-sm leading-7 text-[#59635f]">
            Clear strategy, considered design and marketing that helps ambitious businesses move forward.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-9 place-items-center rounded-full border border-[#073f35]/20 bg-white text-[#073f35] transition hover:-translate-y-0.5 hover:border-[#073f35] hover:bg-[#073f35] hover:text-white">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.18em] text-[#77736c]">Explore</p>
          {quickLinks.map(([label, href]) => (
            <a key={label} href={href} className="mb-3 block text-sm text-[#59635f] transition hover:translate-x-1 hover:text-[#073f35]">{label}</a>
          ))}
        </div>

        <div>
          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.18em] text-[#77736c]">Services</p>
          {serviceLinks.map((label) => (
            <a key={label} href="/services/" className="mb-3 block text-sm text-[#59635f] transition hover:translate-x-1 hover:text-[#073f35]">{label}</a>
          ))}
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.18em] text-[#77736c]">Contact</p>
          <div className="space-y-3 text-sm leading-6 text-[#59635f]">
            <a href="tel:+919997932324" className="block transition hover:text-[#073f35]">+91 99979 32324</a>
            <a href="mailto:sparkskylytics@gmail.com" className="block break-words transition hover:text-[#073f35]">sparkskylytics@gmail.com</a>
            <a href="https://maps.google.com/?q=Rampur+Tiraha+Muzaffarnagar+Uttar+Pradesh" target="_blank" rel="noopener noreferrer" className="block transition hover:text-[#073f35]">Rampur Tiraha,<br />Muzaffarnagar, Uttar Pradesh</a>
            <span className="block text-[#85857f]">Mon – Fri · 10:00 AM – 6:00 PM</span>
            <span className="block text-[#85857f]">Serving clients across India &amp; remotely worldwide</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-[calc(100%-28px)] flex-col items-start justify-center gap-2 border-t border-[#ded9ce] py-5 text-xs text-[#6c716f] sm:w-[calc(100%-48px)] lg:min-h-14 lg:w-[min(1120px,calc(100%-48px))] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:py-0">
        <span>© 2026 Spark Skylytics. All rights reserved.</span>
        <span className="flex gap-5">
          <button type="button" onClick={() => setOpenDocument("privacy")} className="transition hover:text-[#073f35]">Privacy Policy</button>
          <button type="button" onClick={() => setOpenDocument("terms")} className="transition hover:text-[#073f35]">Terms &amp; Conditions</button>
        </span>
      </div>
    </footer>

    {documentContent && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
        role="presentation"
        onMouseDown={() => setOpenDocument(null)}
      >
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-document-title"
          className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 text-[#18201d] shadow-2xl sm:p-8"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#e7e4dc] pb-5">
            <div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#0e6b58]">Spark Skylytics</p>
              <h2 id="legal-document-title" className="text-2xl font-semibold">{documentContent.title}</h2>
            </div>
            <button type="button" onClick={() => setOpenDocument(null)} aria-label="Close dialog" className="grid size-10 shrink-0 place-items-center rounded-full border border-[#dce1dc] text-[#073f35] transition hover:bg-[#073f35] hover:text-white">
              <IoClose size={21} />
            </button>
          </div>

          <p className="mb-6 text-sm leading-6 text-[#5d6864]">Last updated: August 12, 2026</p>
          <div className="space-y-6">
            {documentContent.sections.map(([heading, text]) => (
              <div key={heading}>
                <h3 className="mb-2 text-base font-bold">{heading}</h3>
                <p className="text-sm leading-7 text-[#59635f]">{text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-[#e7e4dc] pt-5 text-sm leading-6 text-[#59635f]">Questions about this document? Email <a className="font-semibold text-[#073f35] hover:underline" href="mailto:sparkskylytics@gmail.com">sparkskylytics@gmail.com</a>.</p>
        </section>
      </div>
    )}
    </>
  );
}
