import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/pages/inner-page-hero";
import { NewsCard } from "@/components/pages/news-card";
import { Reveal } from "@/components/ui/reveal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { newsArticles } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & CSR",
  description:
    "Lighting insights, design developments, sustainability thinking, and community-focused updates from Evergreen Lighting Malaysia.",
  alternates: { canonical: "/news-csr" },
};

export default function NewsPage() {
  const latest = newsArticles.slice(0, 4);
  const featured = newsArticles[4];
  const csr = newsArticles.filter((article) => article.category === "CSR");

  return (
    <>
      <SiteHeader />
      <main>
        <InnerPageHero
          eyebrow="News & CSR"
          title="News & CSR from Evergreen Lighting Malaysia"
          image="/images/pages/news-hero.webp"
          imageAlt="Lighting specialist working with connected controls"
        />

        <section className="content-auto bg-white py-20 sm:py-24">
          <div className="site-container">
            <Reveal>
              <p className="eyebrow">Evergreen Insights</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Latest News
              </h2>
              <p className="body-copy mt-4 max-w-3xl">
                Explore practical ideas in lighting design, connected controls,
                energy-conscious specification, and the technologies shaping
                tomorrow’s spaces.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
              {latest.map((article, index) => (
                <Reveal key={article.slug} delay={index * 0.06}>
                  <NewsCard article={article} />
                </Reveal>
              ))}
            </div>

            <Reveal className="group relative mt-16 overflow-hidden bg-evergreen-800 text-white">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-72">
                  <Image
                    src={featured.image}
                    alt=""
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-white/60">
                    Featured Insight
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em] sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
                    {featured.excerpt}
                  </p>
                  <Link
                    href={`/news-csr/${featured.slug}`}
                    aria-label={`Read ${featured.title}`}
                    className="focus-ring mt-7 inline-flex w-fit items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.08em]"
                  >
                    Read Smart Home Lighting Insight
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="content-auto bg-mist py-20 sm:py-24">
          <div className="site-container">
            <Reveal>
              <p className="eyebrow">Responsible Lighting</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Latest CSR Projects
              </h2>
              <p className="body-copy mt-4 max-w-3xl">
                Our responsibility begins with honest information, efficient
                choices, durable solutions, and lighting that supports people
                while respecting the wider environment.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
              {csr.map((article, index) => (
                <Reveal key={article.slug} delay={index * 0.08}>
                  <NewsCard article={article} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
