import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsCard } from "@/components/pages/news-card";
import { Reveal } from "@/components/ui/reveal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { getArticle, newsArticles } from "@/lib/news";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/news-csr/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "en_MY",
      url: `/news-csr/${article.slug}`,
      siteName: "Evergreen Lighting Malaysia",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      images: [
        {
          url: article.image,
          width: article.imageWidth,
          height: article.imageHeight,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const related = newsArticles
    .filter((candidate) => candidate.slug !== article.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    image: {
      "@type": "ImageObject",
      url: `https://evergreenmalaysia.com${article.image}`,
      width: article.imageWidth,
      height: article.imageHeight,
      caption: article.imageAlt,
    },
    author: {
      "@type": "Organization",
      name: "Evergreen Lighting Malaysia",
      url: "https://evergreenmalaysia.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Evergreen Lighting Malaysia",
      url: "https://evergreenmalaysia.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://evergreenmalaysia.com/images/home/evergreen-malaysia-logo-dark.png",
        width: 989,
        height: 252,
      },
    },
    mainEntityOfPage: `https://evergreenmalaysia.com/news-csr/${article.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://evergreenmalaysia.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "News & CSR",
        item: "https://evergreenmalaysia.com/news-csr",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://evergreenmalaysia.com/news-csr/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <SiteHeader />
      <main>
        <section className="relative min-h-[27rem] overflow-hidden bg-evergreen-950 text-white sm:min-h-[31rem]">
          <Image
            src="/images/pages/news-hero.webp"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-evergreen-950/68" />
          <div className="site-container relative flex min-h-[27rem] items-center justify-center pb-16 pt-28 text-center sm:min-h-[31rem]">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/70">
                {article.category}
              </p>
              <h1 className="mx-auto mt-3 max-w-[24ch] text-[clamp(2rem,4.7vw,4.2rem)] font-bold leading-[1.04] tracking-[-0.055em]">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        <article className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="site-container max-w-5xl">
            <Reveal>
              <div className="relative aspect-[1.35/1] overflow-hidden sm:aspect-[1.85/1]">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 border-b border-evergreen-900/12 pb-5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-black/60">
                <time dateTime={article.date}>{article.displayDate}</time>
                <span>{article.category}</span>
              </div>
            </Reveal>

            <div className="mx-auto max-w-3xl pt-10">
              <Reveal>
                <p className="text-lg leading-8 text-black/65">
                  {article.excerpt}
                </p>
              </Reveal>
              {article.sections.map((section, index) => (
                <Reveal
                  key={section.heading}
                  delay={Math.min(index * 0.04, 0.12)}
                  className="mt-10"
                >
                  <h2 className="text-xl font-bold tracking-[-0.035em] sm:text-2xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="body-copy mt-4">
                      {paragraph}
                    </p>
                  ))}
                </Reveal>
              ))}

              <Link
                href="/news-csr"
                className="focus-ring mt-12 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-evergreen-900"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                All News &amp; CSR
              </Link>
            </div>
          </div>
        </article>

        <section className="content-auto bg-mist py-20 sm:py-24">
          <div className="site-container">
            <Reveal>
              <p className="eyebrow">Continue Reading</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                More from Evergreen
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-3">
              {related.map((relatedArticle, index) => (
                <Reveal key={relatedArticle.slug} delay={index * 0.07}>
                  <NewsCard article={relatedArticle} />
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
