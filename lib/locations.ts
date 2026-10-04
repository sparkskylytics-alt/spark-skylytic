// City landing pages. Every city has its own copy — local business mix, search
// priorities and FAQs — so these are useful pages, not name-swapped duplicates.
// Only state things that are true: no fake offices, clients or prices.

export type Location = {
  slug: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string[];
  marketHeading: string;
  market: { title: string; text: string }[];
  focus: { title: string; text: string; href: string }[];
  workingTogether: string;
  faqs: { q: string; a: string }[];
  nearby: string[];
};

export const locations: Location[] = [
  {
    slug: "muzaffarnagar",
    city: "Muzaffarnagar",
    region: "Uttar Pradesh",
    metaTitle: "Digital Marketing Agency in Muzaffarnagar – SEO & Websites",
    metaDescription:
      "Spark Skylytics is a Muzaffarnagar-based digital marketing agency for SEO, website design, Google Business Profile and social media for local businesses.",
    headline: "Digital marketing agency in Muzaffarnagar",
    intro: [
      "Muzaffarnagar is our home. Our studio is at Rampur Tiraha, so we know how people here actually look for a school, a clinic, a showroom or a supplier — usually on a phone, often in Hindi or Hinglish, and very often through Google Maps.",
      "We help Muzaffarnagar businesses get found on Google, look credible online and turn enquiries into customers, without the jargon or long contracts.",
    ],
    marketHeading: "What we see in Muzaffarnagar",
    market: [
      {
        title: "Trade and manufacturing",
        text: "The city's jaggery, sugar and paper businesses sell to buyers far beyond the district. A clear website and product pages help traders and manufacturers win enquiries from other states, not just walk-ins.",
      },
      {
        title: "Schools, coaching and clinics",
        text: "Parents and patients compare options on Google before they call. Reviews, an accurate Google Business Profile and a mobile-friendly site decide who gets that call.",
      },
      {
        title: "Local retail and showrooms",
        text: "Searches like \"near me\" are mostly won on Google Maps. Getting categories, photos, hours and reviews right often brings results faster than ads.",
      },
    ],
    focus: [
      { title: "Local SEO & Google Business Profile", text: "Rank in the map pack for searches in Muzaffarnagar and nearby towns.", href: "/services/" },
      { title: "Website design", text: "Fast, bilingual-friendly websites that work well on budget smartphones.", href: "/services/" },
      { title: "Social media marketing", text: "Instagram and Facebook content that local customers actually engage with.", href: "/services/" },
    ],
    workingTogether:
      "Because we are based in Muzaffarnagar, local clients can meet the team at our studio. Most day-to-day work then happens over WhatsApp, calls and a shared progress report.",
    faqs: [
      {
        q: "Do you have an office in Muzaffarnagar?",
        a: "Yes. Our studio is at Rampur Tiraha, Patel Nagar, New Mandi, Muzaffarnagar, Uttar Pradesh 251001. We are open Monday to Friday, 10 AM to 6 PM.",
      },
      {
        q: "Can you help us rank in Hindi searches?",
        a: "Yes. Many local customers search in Hindi or Hinglish. We add Hindi or Hinglish sections and FAQs where it makes sense, so your pages match how people actually search.",
      },
      {
        q: "We are a small business. Is digital marketing worth it for us?",
        a: "Often the biggest gains for small local businesses come from free channels: a well-managed Google Business Profile, reviews and a simple, fast website. We start there before suggesting any ad spend.",
      },
    ],
    nearby: ["meerut", "dehradun", "delhi"],
  },
  {
    slug: "meerut",
    city: "Meerut",
    region: "Uttar Pradesh",
    metaTitle: "Digital Marketing Agency in Meerut – SEO, Ads & Websites",
    metaDescription:
      "SEO, website design and digital marketing for Meerut businesses — sports goods makers, jewellers, schools and retailers. Talk to Spark Skylytics.",
    headline: "Digital marketing for Meerut businesses",
    intro: [
      "Meerut is about an hour from our Muzaffarnagar studio, and its businesses have a very different mix of needs: manufacturers selling across India and abroad, a busy jewellery trade, and a large education sector.",
      "We help Meerut businesses reach buyers outside the city while still winning local customers on Google.",
    ],
    marketHeading: "What we see in Meerut",
    market: [
      {
        title: "Sports goods manufacturers",
        text: "Meerut is one of India's best-known centres for sports goods. Makers selling to distributors or direct to buyers need product catalogues, B2B enquiry pages and search visibility well beyond Meerut.",
      },
      {
        title: "Jewellers and traders",
        text: "Jewellery buyers research online before visiting. Trust signals — photos, reviews, clear hallmarking information — matter as much as rankings.",
      },
      {
        title: "Education",
        text: "Colleges, schools and coaching centres compete hard during admission season. Planned content and ads timed to admission cycles make budgets go further.",
      },
    ],
    focus: [
      { title: "B2B websites & catalogues", text: "Product pages and enquiry forms built for distributors and bulk buyers.", href: "/services/" },
      { title: "SEO across India", text: "Rank for product searches nationally, not just \"in Meerut\".", href: "/services/" },
      { title: "Google & Meta Ads", text: "Admission-season and festive campaigns with clear cost-per-enquiry reporting.", href: "/services/" },
    ],
    workingTogether:
      "Meerut is a short drive from our Muzaffarnagar studio. We run projects remotely with regular calls and a shared report, and can arrange a meeting when the project needs one.",
    faqs: [
      {
        q: "Can you help a Meerut manufacturer get enquiries from other states?",
        a: "Yes. That is mainly an SEO and website job: dedicated pages for each product range, written for the terms buyers use, plus listings on B2B directories that link back to your site.",
      },
      {
        q: "Do you run ads for admission season?",
        a: "Yes. We plan Google and Meta campaigns around admission dates and track cost per enquiry, so you can see which ads bring real applicants.",
      },
      {
        q: "Is your team based in Meerut?",
        a: "Our studio is in Muzaffarnagar, about an hour away. We work with Meerut clients remotely and by appointment.",
      },
    ],
    nearby: ["muzaffarnagar", "delhi", "noida"],
  },
  {
    slug: "dehradun",
    city: "Dehradun",
    region: "Uttarakhand",
    metaTitle: "Digital Marketing Agency for Dehradun – SEO & Web Design",
    metaDescription:
      "Websites, SEO and social media for Dehradun schools, hotels, homestays and local businesses. Remote digital marketing from Spark Skylytics.",
    headline: "Digital marketing for Dehradun businesses",
    intro: [
      "Dehradun's economy leans on two things that both live or die online: education and tourism. Families research schools for months, and travellers to Mussoorie and the hills book stays almost entirely through search and social media.",
      "We help Dehradun businesses show up in those searches and give people a website they trust enough to enquire or book.",
    ],
    marketHeading: "What we see in Dehradun",
    market: [
      {
        title: "Schools and institutes",
        text: "Boarding and day schools attract families from across India. Their websites need to answer parents' real questions — admissions, fees structure, facilities, results — clearly.",
      },
      {
        title: "Hotels, homestays and cafés",
        text: "Travellers decide from photos, reviews and Instagram. Direct-booking websites and strong Google profiles reduce reliance on commission-based booking platforms.",
      },
      {
        title: "Real estate and services",
        text: "A growing city brings new builders, clinics and service businesses that need to establish trust quickly with people moving in.",
      },
    ],
    focus: [
      { title: "Websites for schools & hotels", text: "Clear, photo-led sites with enquiry and booking paths.", href: "/services/" },
      { title: "Instagram & content", text: "Content that shows the place and the experience, not just offers.", href: "/services/" },
      { title: "SEO for out-of-town searches", text: "Be found by people searching from Delhi, Mumbai and abroad.", href: "/services/" },
    ],
    workingTogether:
      "We work with Dehradun clients remotely from our Muzaffarnagar studio, with video calls, a shared content calendar and monthly reporting.",
    faqs: [
      {
        q: "Can you help our hotel get more direct bookings?",
        a: "We build fast websites with a clear booking or enquiry path, improve your Google Business Profile and run social content that sends people to book directly.",
      },
      {
        q: "Our school gets enquiries from other states. Can SEO help?",
        a: "Yes. Parents search terms like \"boarding school in Dehradun\" from anywhere in India. We build pages that answer their questions and rank for those searches.",
      },
      {
        q: "Do you work with Mussoorie and Rishikesh businesses too?",
        a: "Yes. We work remotely, so location is not a limit. The search strategy simply changes to match each town.",
      },
    ],
    nearby: ["muzaffarnagar", "chandigarh", "delhi"],
  },
  {
    slug: "delhi",
    city: "Delhi",
    region: "Delhi NCR",
    metaTitle: "Digital Marketing Agency for Delhi Businesses – SEO & Ads",
    metaDescription:
      "SEO, Google & Meta Ads and website design for Delhi retailers, D2C brands, coaching institutes and service businesses. Remote team, clear reporting.",
    headline: "Digital marketing for Delhi businesses",
    intro: [
      "Delhi is one of the most competitive search markets in India. For almost any service, dozens of businesses are bidding on the same keywords and fighting for the same map results.",
      "That makes focus more important than budget. We help Delhi businesses pick the searches they can actually win, then build the pages, profiles and campaigns to win them.",
    ],
    marketHeading: "What we see in Delhi",
    market: [
      {
        title: "Retail markets going online",
        text: "Traders from markets like Chandni Chowk, Karol Bagh and Lajpat Nagar now sell on Instagram, WhatsApp and their own websites. A proper catalogue site turns that into a brand.",
      },
      {
        title: "Coaching and education",
        text: "Delhi's coaching institutes compete nationally. Ad costs are high, so landing pages, follow-up and tracking matter more than raw spend.",
      },
      {
        title: "Area-level local search",
        text: "People search by neighbourhood — \"dentist in Dwarka\", \"CA in Rohini\". Winning one area well beats ranking nowhere for the whole city.",
      },
    ],
    focus: [
      { title: "Google & Meta Ads", text: "Tightly targeted campaigns with cost-per-lead tracking.", href: "/services/" },
      { title: "Neighbourhood-level SEO", text: "Pages and map listings for the areas you really serve.", href: "/services/" },
      { title: "E-commerce websites", text: "Catalogue and Shopify sites for traders and D2C brands.", href: "/services/" },
    ],
    workingTogether:
      "We work with Delhi clients remotely from our Muzaffarnagar studio, about three hours away, with weekly check-ins and live reporting dashboards.",
    faqs: [
      {
        q: "Delhi is very competitive. Can a smaller business still rank?",
        a: "Yes, by being specific. Instead of \"best boutique in Delhi\", target your area, product and audience. These searches are smaller but convert better and are realistic to win.",
      },
      {
        q: "Do you have an office in Delhi?",
        a: "No. Our studio is in Muzaffarnagar and we work with Delhi clients remotely. Many of our processes are built for remote collaboration.",
      },
      {
        q: "How do you measure whether ads are working?",
        a: "We track leads, calls and sales back to each campaign, so you see cost per enquiry, not just clicks and impressions.",
      },
    ],
    nearby: ["noida", "gurugram", "meerut"],
  },
  {
    slug: "noida",
    city: "Noida",
    region: "Uttar Pradesh",
    metaTitle: "Digital Marketing Agency for Noida – SEO, Web & Software",
    metaDescription:
      "Website development, SEO and lead generation for Noida startups, IT companies and real estate firms. Spark Skylytics works remotely across NCR.",
    headline: "Digital marketing and web development for Noida",
    intro: [
      "Noida's business community is dominated by IT and service companies, startups, manufacturers and real estate developers. Most of them sell to other businesses or to buyers making large decisions — so the website has to do serious work.",
      "We build websites, custom software and SEO programmes for Noida businesses that need qualified leads, not just traffic.",
    ],
    marketHeading: "What we see in Noida",
    market: [
      {
        title: "IT companies and startups",
        text: "B2B buyers read case studies and service pages before they ever book a call. Clear positioning and technical SEO matter more than social media volume.",
      },
      {
        title: "Real estate",
        text: "Project launches along the expressway and in Greater Noida rely on paid leads. Fast landing pages and quick follow-up decide what those leads are worth.",
      },
      {
        title: "Manufacturing",
        text: "Electronics and industrial units benefit from product pages and B2B listings that reach buyers searching nationally.",
      },
    ],
    focus: [
      { title: "Custom web & software development", text: "Next.js websites, dashboards and internal tools.", href: "/services/" },
      { title: "B2B SEO & content", text: "Service pages and articles that rank for what buyers search.", href: "/services/" },
      { title: "Lead generation campaigns", text: "Google Ads and landing pages for project launches.", href: "/services/" },
    ],
    workingTogether:
      "We work with Noida teams remotely, using the tools tech companies already use — shared boards, staging links and scheduled calls.",
    faqs: [
      {
        q: "Do you build custom software, or only websites?",
        a: "Both. We build marketing websites and custom web applications such as dashboards, portals and CRMs using modern frameworks like React and Next.js.",
      },
      {
        q: "Can you run lead campaigns for a real estate launch?",
        a: "Yes. We set up landing pages, Google and Meta campaigns and lead tracking, so your sales team can see which campaigns produce site visits.",
      },
      {
        q: "Are you based in Noida?",
        a: "Our studio is in Muzaffarnagar, Uttar Pradesh. We work with Noida and NCR clients remotely.",
      },
    ],
    nearby: ["delhi", "gurugram", "meerut"],
  },
  {
    slug: "gurugram",
    city: "Gurugram",
    region: "Haryana",
    metaTitle: "Digital Marketing Agency for Gurugram – SEO & Performance",
    metaDescription:
      "Performance marketing, SEO and websites for Gurugram startups, SaaS companies and consultancies. Remote agency with transparent reporting.",
    headline: "Digital marketing for Gurugram companies",
    intro: [
      "Gurugram is home to corporate offices, SaaS startups, consultancies and premium consumer brands. Buyers here are used to polished digital experiences and compare several options before deciding.",
      "We help Gurugram businesses look as good online as they are, and build marketing that shows clear returns.",
    ],
    marketHeading: "What we see in Gurugram",
    market: [
      {
        title: "SaaS and startups",
        text: "Growth depends on content, product pages and paid acquisition working together. Founders want numbers, not vanity metrics.",
      },
      {
        title: "Consultancies and professional services",
        text: "Trust is built through case studies, thought leadership and a professional website — LinkedIn and Google both matter.",
      },
      {
        title: "Premium real estate and hospitality",
        text: "High-value decisions need strong visuals, fast mobile pages and careful follow-up on every lead.",
      },
    ],
    focus: [
      { title: "Performance marketing", text: "Google, Meta and LinkedIn campaigns tied to pipeline.", href: "/services/" },
      { title: "Content & SEO for SaaS", text: "Product-led content that ranks and converts.", href: "/services/" },
      { title: "Brand & website", text: "Positioning and a site that matches your market.", href: "/services/" },
    ],
    workingTogether:
      "We work with Gurugram clients fully remotely, with sprint-style planning, shared dashboards and regular reviews.",
    faqs: [
      {
        q: "Do you run LinkedIn ads for B2B companies?",
        a: "Yes, alongside Google and Meta. For B2B we usually combine LinkedIn targeting with search ads for people already looking for your solution.",
      },
      {
        q: "Can you work with our in-house marketing team?",
        a: "Yes. We often handle a specific part — SEO, the website or paid campaigns — and report into your existing team.",
      },
      {
        q: "Are you a Gurugram agency?",
        a: "No. We are based in Muzaffarnagar and work with Gurugram clients remotely.",
      },
    ],
    nearby: ["delhi", "noida", "jaipur"],
  },
  {
    slug: "chandigarh",
    city: "Chandigarh",
    region: "Chandigarh Tricity",
    metaTitle: "Digital Marketing Agency for Chandigarh – SEO & Lead Gen",
    metaDescription:
      "SEO, websites and lead generation for Chandigarh, Mohali and Panchkula businesses — immigration consultants, clinics, IT firms and retail.",
    headline: "Digital marketing for Chandigarh, Mohali & Panchkula",
    intro: [
      "Businesses in the Chandigarh Tricity serve customers across Punjab, Haryana and Himachal. Many sectors here — immigration and study-abroad consulting, healthcare, IT in Mohali — are highly competitive and lead-driven.",
      "We help Tricity businesses earn trust online and turn more of their enquiries into clients.",
    ],
    marketHeading: "What we see in the Tricity",
    market: [
      {
        title: "Immigration and study-abroad consultants",
        text: "One of the most crowded ad markets in the region. Clear, honest content and strong reviews set credible firms apart from the noise.",
      },
      {
        title: "Healthcare and clinics",
        text: "Patients come from surrounding states. Doctor profiles, treatment pages and Google reviews drive appointments.",
      },
      {
        title: "IT and services in Mohali",
        text: "Service companies need clear positioning and case studies to win clients in India and overseas.",
      },
    ],
    focus: [
      { title: "Lead generation", text: "Campaigns and landing pages with tracked enquiries.", href: "/services/" },
      { title: "SEO for clinics & consultants", text: "Service pages and FAQs that answer real questions.", href: "/services/" },
      { title: "Reputation & reviews", text: "Systems to collect and respond to Google reviews.", href: "/services/" },
    ],
    workingTogether:
      "We work with Tricity clients remotely from our Muzaffarnagar studio, with regular calls and monthly reports.",
    faqs: [
      {
        q: "Can you work with immigration consultants?",
        a: "Yes. We focus on clear, accurate content and lead tracking. We do not make claims about visa outcomes in ads or on websites.",
      },
      {
        q: "Do you cover Mohali and Panchkula as well?",
        a: "Yes. We plan SEO and map listings for the specific parts of the Tricity you serve.",
      },
      {
        q: "Do you have an office in Chandigarh?",
        a: "No. We are based in Muzaffarnagar and work with Tricity clients remotely.",
      },
    ],
    nearby: ["dehradun", "delhi", "gurugram"],
  },
  {
    slug: "lucknow",
    city: "Lucknow",
    region: "Uttar Pradesh",
    metaTitle: "Digital Marketing Agency for Lucknow – SEO & Social Media",
    metaDescription:
      "SEO, social media and websites for Lucknow brands — chikankari and fashion, restaurants, clinics and education. Remote team from Uttar Pradesh.",
    headline: "Digital marketing for Lucknow businesses",
    intro: [
      "Lucknow has strong local brands with stories worth telling — chikankari and fashion labels, well-known food businesses, hospitals and a large education sector.",
      "We help Lucknow businesses sell beyond the city through e-commerce and social media, while staying visible to local customers on Google.",
    ],
    marketHeading: "What we see in Lucknow",
    market: [
      {
        title: "Chikankari and fashion",
        text: "Buyers across India and abroad shop Lucknow craft online. A proper e-commerce site plus Instagram builds a brand rather than depending on marketplaces.",
      },
      {
        title: "Food and restaurants",
        text: "Discovery happens on Google Maps, Instagram and delivery apps. Photos, reviews and consistent posting drive footfall.",
      },
      {
        title: "Healthcare and education",
        text: "Patients and students arrive from across eastern Uttar Pradesh. Clear service pages and Hindi content widen your reach.",
      },
    ],
    focus: [
      { title: "E-commerce websites", text: "Shopify and custom stores for fashion and craft brands.", href: "/services/" },
      { title: "Instagram & content", text: "Content that shows craft, process and people.", href: "/services/" },
      { title: "Hindi & English SEO", text: "Pages that match how people in UP actually search.", href: "/services/" },
    ],
    workingTogether:
      "We are an Uttar Pradesh team working with Lucknow clients remotely, with video calls, WhatsApp updates and monthly reporting.",
    faqs: [
      {
        q: "Can you build an online store for our chikankari brand?",
        a: "Yes. We build e-commerce sites with product photography guidance, payment and shipping setup, and SEO for product searches.",
      },
      {
        q: "Should we create content in Hindi?",
        a: "Often yes, for local and regional audiences. We look at what your customers search for and add Hindi or Hinglish content where it helps.",
      },
      {
        q: "Are you based in Lucknow?",
        a: "We are based in Muzaffarnagar, Uttar Pradesh, and work with Lucknow clients remotely.",
      },
    ],
    nearby: ["delhi", "noida", "muzaffarnagar"],
  },
  {
    slug: "jaipur",
    city: "Jaipur",
    region: "Rajasthan",
    metaTitle: "Digital Marketing Agency for Jaipur – SEO, Web & Social",
    metaDescription:
      "Websites, SEO and social media for Jaipur hotels, jewellers, handicraft and textile exporters. Remote digital marketing from Spark Skylytics.",
    headline: "Digital marketing for Jaipur businesses",
    intro: [
      "Jaipur sells to the world — tourists, jewellery buyers and international importers of block prints, textiles and handicrafts. Many of those customers will never visit in person before buying.",
      "We help Jaipur businesses build websites and search visibility that win trust from customers in other cities and countries.",
    ],
    marketHeading: "What we see in Jaipur",
    market: [
      {
        title: "Hotels and heritage stays",
        text: "Travellers compare on Google and Instagram. Direct-booking sites and strong review profiles reduce dependence on booking platforms.",
      },
      {
        title: "Gems and jewellery",
        text: "High-value purchases need trust: clear product information, certifications and real photos, on a fast, secure website.",
      },
      {
        title: "Textile and handicraft exporters",
        text: "International buyers search in English for products and suppliers. Export-focused catalogue sites and SEO bring enquiries without middlemen.",
      },
    ],
    focus: [
      { title: "Export & catalogue websites", text: "B2B product sites for international buyers.", href: "/services/" },
      { title: "International SEO", text: "Rank for buyers searching from the US, UK and Europe.", href: "/services/" },
      { title: "Instagram for hospitality", text: "Content that sells the experience.", href: "/services/" },
    ],
    workingTogether:
      "We work with Jaipur clients remotely, with scheduled calls, shared drafts and monthly reporting.",
    faqs: [
      {
        q: "Can you help us get international buyers?",
        a: "Yes. We build English-language catalogue sites, optimise them for searches from your target countries and add enquiry forms built for bulk orders.",
      },
      {
        q: "Do you do product photography?",
        a: "We guide you on what to shoot and how, and can coordinate with a local photographer. We focus on the website, SEO and marketing.",
      },
      {
        q: "Are you a Jaipur agency?",
        a: "No. We are based in Muzaffarnagar, Uttar Pradesh, and work with Jaipur clients remotely.",
      },
    ],
    nearby: ["delhi", "gurugram", "mumbai"],
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    region: "Maharashtra",
    metaTitle: "Digital Marketing Agency for Mumbai Businesses – SEO & Ads",
    metaDescription:
      "Focused SEO, paid ads and websites for Mumbai D2C brands, startups and service businesses. A remote team with clear, honest reporting.",
    headline: "Digital marketing for Mumbai businesses",
    intro: [
      "Mumbai has some of the highest advertising costs in India and some of the most crowded search results. Spending more is rarely the answer; spending more precisely usually is.",
      "We work with Mumbai D2C brands, startups and service firms that want a focused partner without big-agency overheads.",
    ],
    marketHeading: "What we see in Mumbai",
    market: [
      {
        title: "D2C and consumer brands",
        text: "Growth depends on the full funnel — ads, product pages, checkout and retention. Small conversion gains are worth more than extra traffic.",
      },
      {
        title: "Professional and financial services",
        text: "Buyers want expertise and proof. Content, case studies and a clear website matter more than volume of posts.",
      },
      {
        title: "Hyper-local competition",
        text: "Searches are split by area — Andheri, Bandra, Thane, Navi Mumbai. Targeting the areas you serve keeps ad costs in check.",
      },
    ],
    focus: [
      { title: "Conversion-focused websites", text: "Faster pages and clearer paths to purchase or enquiry.", href: "/services/" },
      { title: "Paid social & search", text: "Meta and Google campaigns with tight targeting.", href: "/services/" },
      { title: "SEO content", text: "Articles and pages that bring steady, non-paid traffic.", href: "/services/" },
    ],
    workingTogether:
      "We work with Mumbai clients fully remotely, with clear scopes, shared dashboards and fixed review dates.",
    faqs: [
      {
        q: "Why work with a remote agency instead of a Mumbai agency?",
        a: "You get a focused team and lower overheads. Everything we do — SEO, ads, websites — is managed online, so location does not affect the work.",
      },
      {
        q: "Can you work on our Shopify store?",
        a: "Yes. We improve Shopify themes, speed, product pages and tracking, and run campaigns that drive traffic to them.",
      },
      {
        q: "Do you have a Mumbai office?",
        a: "No. We are based in Muzaffarnagar, Uttar Pradesh, and work with Mumbai clients remotely.",
      },
    ],
    nearby: ["bengaluru", "jaipur", "delhi"],
  },
  {
    slug: "bengaluru",
    city: "Bengaluru",
    region: "Karnataka",
    metaTitle: "Digital Marketing & Web Development for Bengaluru Startups",
    metaDescription:
      "Websites, custom software, SEO and growth marketing for Bengaluru startups and SaaS companies. Remote team with clear, measurable reporting.",
    headline: "Web development and growth marketing for Bengaluru",
    intro: [
      "Bengaluru is India's startup capital. Teams here move fast and need partners who can ship websites, landing pages and product features quickly — and measure what works.",
      "We support Bengaluru startups and SaaS companies with development, SEO and growth marketing as an extension of their team.",
    ],
    marketHeading: "What we see in Bengaluru",
    market: [
      {
        title: "SaaS and B2B startups",
        text: "Organic growth comes from product-led content, comparison pages and documentation that rank. Paid channels need careful attribution.",
      },
      {
        title: "Consumer apps and D2C",
        text: "Landing pages, app-store presence and paid social have to be tested quickly and iterated often.",
      },
      {
        title: "Engineering-heavy teams",
        text: "Many startups have strong engineers but no time for the marketing site. We take that off their plate without slowing the product.",
      },
    ],
    focus: [
      { title: "Next.js websites & landing pages", text: "Fast, SEO-ready sites your team can easily update.", href: "/services/" },
      { title: "Custom software development", text: "Dashboards, internal tools and MVPs.", href: "/services/" },
      { title: "SEO for SaaS", text: "Content and technical SEO built for B2B search.", href: "/services/" },
    ],
    workingTogether:
      "We work with Bengaluru teams fully remotely, using your tools — Slack, Notion, Jira or GitHub — and short delivery cycles.",
    faqs: [
      {
        q: "Can you work inside our existing codebase?",
        a: "Yes. We regularly work in existing React and Next.js projects through pull requests and code review.",
      },
      {
        q: "Do you help with SaaS SEO?",
        a: "Yes. We plan comparison pages, use-case pages and articles around how your buyers search, and fix the technical SEO on your site.",
      },
      {
        q: "Are you based in Bengaluru?",
        a: "No. We are based in Muzaffarnagar, Uttar Pradesh, and work with Bengaluru clients remotely.",
      },
    ],
    nearby: ["mumbai", "noida", "gurugram"],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
