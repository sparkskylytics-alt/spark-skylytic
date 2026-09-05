"use client";
import Image from "next/image";
import {
  CalendarDays,
  Send,
} from "lucide-react";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingSocial from "../components/FloatingSocial";
import { useState } from "react";

const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";
const inputClass =
  "min-h-12 rounded-lg border border-[#e2ddd3] bg-white/70 px-4 text-sm outline-none transition placeholder:text-[#6f7773] focus:border-[#073f35] focus:ring-2 focus:ring-[#073f35]/10";

const contactCards = [
  {
    title: "Email",
    text: "sparkskylytics@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "Phone",
    text: "+91 9997932324",
    icon: FaPhone,
  },
  {
    title: "Office",
    text: "Rampur Tiraha, Muzaffarnagar, Uttar Pradesh — plus remote clients across India & worldwide",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Working Hours",
    text: "Mon - Fri: 10:00 AM - 6:00 PM",
    icon: FaClock,
  },
];

const helpers = [
  ["PS", "bg-[#183d35]"],
  ["TB", "bg-[#c8a978]"],
  ["DM", "bg-[#10231f]"],
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "full-name" ? "name" : id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Map form fields to Formspree expected field names
      const formPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      };

      const response = await fetch("https://formspree.io/f/mdaqezej", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#071117]">
      <Navbar active="Contact" />
      <FloatingSocial />

      <section className={`${shell} grid min-h-[560px] grid-cols-[0.82fr_1fr] items-center gap-14 py-14 max-lg:grid-cols-1`}>
        <div>
          <p className="mb-6 text-[11px] font-black uppercase tracking-[0.18em] text-[#073f35]">Start a conversation</p>
          <h1 className="max-w-[560px] text-[clamp(40px,5vw,62px)] font-semibold leading-[1.04] tracking-[-0.05em]">
            Tell us where you&apos;re headed. <span className="text-[#0e6b58]">We&apos;ll help map the way.</span>
          </h1>
          <p className="mt-7 max-w-[450px] text-[17px] leading-8 text-[#394541]">
            Whether you&apos;re working through a fresh idea or need momentum on something already in motion, tell us a little about it. We&apos;ll reply within one business day.
          </p>
          <div className="mt-10 flex items-center gap-5">
          
            <div>
              <strong className="block text-sm">We&apos;re here to help</strong>
              <span className="text-sm text-[#5d6864]">Mon - Fri, 10AM - 6PM</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[6px] border border-[#e5ded3] bg-white shadow-[0_22px_60px_rgba(7,63,53,0.1)] max-sm:min-h-[300px]">
          <Image
            src="/contact/contact-hero-v2.webp"
            alt="A Spark Skylytics client conversation in the studio"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className={`${shell} grid grid-cols-[1.2fr_1fr] overflow-hidden rounded-[6px] border border-[#e6ded2] bg-[#f8f7f4] shadow-[0_18px_48px_rgba(7,63,53,0.07)] max-lg:grid-cols-1`}>
        <div className="p-7 max-sm:p-5">
          <p className="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0e6b58]">Project enquiry</p>
          <h2 className="mb-2 text-[clamp(24px,2.5vw,30px)] font-semibold tracking-[-0.04em]">Tell us what you&apos;re working on.</h2>
          <p className="mb-5 max-w-[500px] text-[13px] leading-5 text-[#5d6864]">A few details are enough to get the conversation started.</p>

          {submitStatus === "success" && (
            <div className="mb-5 rounded-lg bg-green-50 p-4 text-sm text-green-800 border border-green-200">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-5 rounded-lg bg-red-50 p-4 text-sm text-red-800 border border-red-200">
              Oops! Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <form className="grid gap-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              <label className="sr-only" htmlFor="full-name">Full Name</label>
              <input 
                className={`${inputClass} min-h-10 h-10`} 
                id="full-name" 
                placeholder="Full Name" 
                type="text" 
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label className="sr-only" htmlFor="email">Email Address</label>
              <input 
                className={`${inputClass} min-h-10 h-10`} 
                id="email" 
                placeholder="Email Address" 
                type="email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="sr-only" htmlFor="phone">Phone Number</label>
              <input 
                className={`${inputClass} min-h-10 h-10`} 
                id="phone" 
                placeholder="Phone Number" 
                type="tel" 
                value={formData.phone}
                onChange={handleChange}
              />
              <label className="sr-only" htmlFor="company">Company Name</label>
              <input 
                className={`${inputClass} min-h-10 h-10`} 
                id="company" 
                placeholder="Company Name" 
                type="text" 
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <label className="sr-only" htmlFor="message">How can we help you?</label>
            <textarea
              className={`${inputClass} min-h-[96px] resize-none py-3`}
              id="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              className="inline-flex h-10 min-h-10 w-fit items-center justify-center gap-2 rounded-full bg-[#073f35] px-5 text-sm font-bold text-white shadow-[0_10px_20px_rgba(7,63,53,0.18)] transition hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"} 
              <Send size={16} />
            </button>
          </form>
        </div>

        <aside className="border-l border-[#e6ded2] bg-white p-7 max-lg:border-l-0 max-lg:border-t max-sm:p-5">
          <p className="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0e6b58]">Reach us directly</p>
          <h2 className="mb-5 text-[clamp(22px,2.2vw,28px)] font-semibold tracking-[-0.04em]">Prefer a quick hello?</h2>
          <div className="divide-y divide-[#e3dbcf]">
            {contactCards.map(({ title, text, icon: Icon }) => (
              <article className="grid grid-cols-[40px_1fr] gap-3 py-4 first:pt-0" key={title}>
                <span className="grid size-10 place-items-center rounded-full bg-[#f2eee6] text-[#073f35]">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="mb-0.5 text-[15px] font-bold">{title}</h3>
                  <p className="max-w-[290px] text-[13px] leading-5 text-[#36443f]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section
        className={`${shell} my-8 overflow-hidden rounded-[18px] border border-[#e5ded4] bg-white shadow-[0_16px_40px_rgba(7,63,53,0.06)]`}
      >
        <div className="border-b border-[#e8e1d6] bg-[#f8f5ef] px-6 py-4">
          <h3 className="text-lg font-bold text-[#021d19]">
            Visit Our Office
          </h3>
          <p className="mt-1 text-sm text-[#5d6864]">
            Spark Skylytics • Muzaffarnagar, Uttar Pradesh
          </p>
        </div>

        <div className="relative h-[360px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3471.8712435734346!2d77.71187499999999!3d29.520112!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDMxJzEyLjQiTiA3N8KwNDInNDIuOCJF!5e0!3m2!1sen!2sin!4v1782752962487!5m2!1sen!2sin"
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />

          <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#073f35] text-white">
                <FaMapMarkerAlt size={18} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-[#021d19]">
                  Spark Skylytics
                </h4>
                <p className="mt-1 text-sm leading-5 text-[#5d6864]">
                  Muzaffarnagar,
                  <br />
                  Uttar Pradesh, India
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-sm font-semibold text-[#0b6b58] hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
