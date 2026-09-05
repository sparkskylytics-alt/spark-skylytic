import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FloatingSocial from "../components/FloatingSocial";
import { getAllPosts } from "../../lib/wordpress";

const shell = "mx-auto w-[min(1120px,calc(100%_-_48px))] max-sm:w-[calc(100%_-_28px)]";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="min-h-screen bg-white text-[#111312]">
      <Navbar active="Blog" />
      <FloatingSocial />

      <section className={`${shell} py-8 lg:py-10`}>
        <div className="overflow-hidden rounded-[6px] border border-[#dedbd5] bg-[#f7f6f3] p-7 lg:p-9">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#77736c]">Blog</p>
          <h1 className="mt-4 max-w-[560px] text-[clamp(34px,3.8vw,50px)] font-semibold leading-[1.02] tracking-[-0.05em]">
            Ideas on marketing, design and growth.
          </h1>
          <p className="mt-4 max-w-[460px] text-[13px] leading-6 text-[#676963]">
            Practical guides on digital marketing, SEO, branding, web design and custom software development from the Spark Skylytics team.
          </p>
        </div>
      </section>

      <section className={`${shell} border-t border-[#dedbd5] py-10`}>
        {sorted.length === 0 ? (
          <div className="rounded-[6px] border border-dashed border-[#dedbd5] bg-[#f7f6f3] p-10 text-center">
            <p className="text-[15px] font-semibold text-[#151c19]">New posts are on the way.</p>
            <p className="mt-2 text-[13px] leading-6 text-[#696a65]">
              We&apos;re setting up the blog — check back soon for guides on marketing, design and growth.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <article key={post.id} className="group overflow-hidden rounded-[4px] border border-[#dedbd5] bg-white transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(23,31,27,0.07)]">
                <a href={`/blog/${post.slug}/`} className="block">
                  <div className="relative aspect-[16/9] border-b border-[#dedbd5] bg-[#e8e5df]">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    ) : null}
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#176c5b]">{formatDate(post.date)}</p>
                    <h2 className="mt-2 text-[18px] font-semibold leading-[1.15] tracking-[-0.025em]">{post.title}</h2>
                    <p className="mt-2 line-clamp-3 text-[13px] leading-6 text-[#696a65]">{post.excerpt}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#073f35]">
                      Read more <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
