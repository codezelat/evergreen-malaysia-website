import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  lastUpdated: string;
  path: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  summary,
  lastUpdated,
  path,
  sections,
}: LegalPageProps) {
  return (
    <>
      <BreadcrumbJsonLd current={title} path={path} />
      <SiteHeader />
      <main>
        <section className="relative min-h-[26rem] overflow-hidden bg-evergreen-950 text-white">
          <Image
            src="/images/pages/about-hero-green.webp"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover opacity-[0.22]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,25,14,.98),rgba(8,25,14,.86)_55%,rgba(8,25,14,.94))]" />
          <div className="site-container relative flex min-h-[26rem] items-end pb-14 pt-32 sm:pb-16">
            <div className="max-w-4xl">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/62">
                {eyebrow}
              </p>
              <h1 className="mt-3 text-[clamp(2.4rem,6vw,5.2rem)] font-bold leading-[1.02] tracking-[-0.055em]">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                {summary}
              </p>
              <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-white/48">
                Last updated {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <div className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="site-container grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <p className="eyebrow">On this page</p>
              <nav aria-label={`${title} sections`} className="mt-5">
                <ol className="space-y-3 border-l border-evergreen-900/15 pl-5">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <Link
                        href={`#${section.id}`}
                        className="focus-ring group flex gap-3 text-sm leading-6 text-black/55 transition-colors hover:text-evergreen-800"
                      >
                        <span className="text-[0.65rem] font-semibold text-evergreen-700">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {section.title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className="min-w-0">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-8 py-10 first:pt-0 ${
                    index < sections.length - 1
                      ? "border-b border-evergreen-900/12"
                      : ""
                  }`}
                >
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.1em] text-evergreen-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-[0.94rem] leading-7 text-black/62 [&_a]:font-semibold [&_a]:text-evergreen-800 [&_a]:underline [&_a]:decoration-evergreen-800/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-evergreen-800 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-black/78">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
