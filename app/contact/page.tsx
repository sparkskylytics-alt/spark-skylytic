import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";
const inputClass =
  "min-h-12 rounded-lg border border-[#e2ddd3] bg-white/70 px-4 text-sm outline-none transition placeholder:text-[#6f7773] focus:border-[#073f35] focus:ring-2 focus:ring-[#073f35]/10";

const contactCards = [
  {
    title: "Email",
    text: "connect@sparkskylytics.com",
    icon: Mail,
  },
  {
    title: "Phone",
    text: "+91 9997932324",
    icon: Phone,
  },
  {
    title: "Office",
    text: "Rampur Tiraha, Muzaffarnagar, Uttar Pradesh",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    text: "Mon - Fri: 10:00 AM - 6:00 PM",
    icon: Clock3,
  },
];

const helpers = [
  ["PS", "bg-[#183d35]"],
  ["TB", "bg-[#c8a978]"],
  ["DM", "bg-[#10231f]"],
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_18%_18%,rgba(188,165,112,0.12),transparent_24rem),radial-gradient(circle_at_78%_8%,rgba(7,63,53,0.08),transparent_24rem),linear-gradient(180deg,#fffdfa_0%,#fbf8f2_62%,#f6f0e7_100%)] text-[#071117]">
      <Navbar active="Contact" />

      <section className={`${shell} grid min-h-[520px] grid-cols-[0.82fr_1fr] items-center gap-14 py-10 max-lg:grid-cols-1`}>
        <div>
          <p className="mb-7 text-[11px] font-black uppercase tracking-[0.18em] text-[#073f35]">Let&apos;s Connect</p>
          <h1 className="max-w-[560px] text-[clamp(44px,5vw,66px)] font-semibold leading-[1.08]">
            We&apos;d Love To Hear From <span className="relative inline-block text-[#0e6b58] after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-14 after:-translate-x-1/2 after:rounded-full after:bg-[#0e6b58]">You.</span>
          </h1>
          <p className="mt-9 max-w-[430px] text-[17px] leading-8 text-[#394541]">
            Have a project in mind or just want to say hello? Drop us a message and we&apos;ll get back to you within one
            business day.
          </p>
          <div className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-3">
              {helpers.map(([initials, color]) => (
                <span className={`grid size-12 place-items-center rounded-full border-2 border-white ${color} text-sm font-black text-white shadow-[0_10px_24px_rgba(7,63,53,0.12)]`} key={initials}>
                  {initials}
                </span>
              ))}
            </div>
            <div>
              <strong className="block text-sm">We&apos;re here to help</strong>
              <span className="text-sm text-[#5d6864]">Mon - Fri, 10AM - 6PM</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[18px] border border-[#ebe3d7] bg-white shadow-[0_22px_60px_rgba(7,63,53,0.1)] max-sm:min-h-[300px]">
          <Image
            src="/contact/contact-hero.png"
            alt="Spark Skylytics contact desk"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className={`${shell} grid grid-cols-[1.2fr_1fr] overflow-hidden rounded-[18px] border border-[#e6ded2] bg-white/70 shadow-[0_18px_48px_rgba(7,63,53,0.07)] max-lg:grid-cols-1`}>
        <div className="p-10 max-sm:p-6">
          <h2 className="mb-3 text-3xl font-bold">Send Us A Message</h2>
          <p className="mb-7 text-sm text-[#5d6864]">Fill out the form below and we&apos;ll get back to you.</p>

          <form className="grid gap-5">
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <label className="sr-only" htmlFor="full-name">Full Name</label>
              <input className={inputClass} id="full-name" placeholder="Full Name" type="text" />
              <label className="sr-only" htmlFor="email">Email Address</label>
              <input className={inputClass} id="email" placeholder="Email Address" type="email" />
              <label className="sr-only" htmlFor="phone">Phone Number</label>
              <input className={inputClass} id="phone" placeholder="Phone Number" type="tel" />
              <label className="sr-only" htmlFor="company">Company Name</label>
              <input className={inputClass} id="company" placeholder="Company Name" type="text" />
            </div>
            <label className="sr-only" htmlFor="message">How can we help you?</label>
            <textarea
              className={`${inputClass} min-h-[140px] resize-none py-4`}
              id="message"
              placeholder="How can we help you?"
            />
            <button
              className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-[#073f35] px-7 text-sm font-bold text-white shadow-[0_14px_28px_rgba(7,63,53,0.22)] transition hover:-translate-y-0.5"
              type="button"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>

        <aside className="border-l border-[#e6ded2] p-10 max-lg:border-l-0 max-lg:border-t max-sm:p-6">
          <h2 className="mb-8 text-3xl font-bold">Other Ways To Reach Us</h2>
          <div className="divide-y divide-[#e3dbcf]">
            {contactCards.map(({ title, text, icon: Icon }) => (
              <article className="grid grid-cols-[56px_1fr] gap-5 py-6 first:pt-0" key={title}>
                <span className="grid size-14 place-items-center rounded-full bg-[#f2eee6] text-[#073f35] shadow-[0_10px_22px_rgba(7,63,53,0.08)]">
                  <Icon size={24} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-bold">{title}</h3>
                  <p className="max-w-[290px] text-sm leading-6 text-[#36443f]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section
  className={`${shell} my-8 overflow-hidden rounded-[18px] border border-[#e5ded4] bg-white shadow-[0_16px_40px_rgba(7,63,53,0.06)]`}
>
  {/* Header */}
  <div className="border-b border-[#e8e1d6] bg-[#f8f5ef] px-6 py-4">
    <h3 className="text-lg font-bold text-[#021d19]">
      Visit Our Office
    </h3>

    <p className="mt-1 text-sm text-[#5d6864]">
      Spark Skylytics • Muzaffarnagar, Uttar Pradesh
    </p>
  </div>

  {/* Google Map */}
  <div className="relative h-[360px] w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3471.8712435734346!2d77.71187499999999!3d29.520112!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDMxJzEyLjQiTiA3N8KwNDInNDIuOCJF!5e0!3m2!1sen!2sin!4v1782752962487!5m2!1sen!2sin"
      className="h-full w-full"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />

    {/* Floating Address Card */}
    <div className="absolute bottom-5 left-5 max-w-xs rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#073f35] text-white">
          <MapPin size={18} fill="currentColor" />
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

   <section className="mt-6 font-semibold bg-[radial-gradient(circle_at_88%_58%,rgba(239,216,164,0.34),transparent_12rem),linear-gradient(120deg,#021d19,#06493c)] text-white">
  <div
    className={`${shell} grid min-h-[180px] grid-cols-[1fr_auto] items-center gap-6 py-8 max-sm:grid-cols-1 max-sm:py-6`}
  >
    <div>
      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#e5d5a8]">
        Start A Project
      </p>

      <h2 className="max-w-[430px] text-[clamp(26px,3vw,38px)] font-bold leading-tight">
        Let's Build Something Amazing Together.
      </h2>

      <p className="mt-3 max-w-[420px] text-sm leading-6 text-[#d8e7e1]">
        Whether you have a clear plan or just an idea, we're here to bring it
        to life.
      </p>
    </div>

    <a
      href="/contact"
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
    >
      Schedule A Call
      <CalendarDays size={17} />
    </a>
  </div>
</section>

      <section className={`${shell} grid grid-cols-3 gap-5 py-10 max-lg:grid-cols-1`}>
        {[
          ["Quick Response", "Most messages receive a reply within one business day.", MessageCircle],
          ["Dedicated Team", "Talk to specialists who understand design, growth, and delivery.", UserRound],
          ["Clear Next Steps", "We help you turn your idea into a realistic project plan.", ArrowRight],
        ].map(([title, text, Icon]) => (
          <article className="rounded-[16px] border border-[#e6ded2] bg-white/70 p-6 shadow-[0_12px_30px_rgba(7,63,53,0.05)]" key={title as string}>
            <Icon className="mb-5 text-[#073f35]" size={28} />
            <h3 className="mb-2 text-lg font-bold">{title as string}</h3>
            <p className="text-sm leading-6 text-[#5d6864]">{text as string}</p>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
