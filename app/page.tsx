import type { WebSite, WithContext } from "schema-dts";
import { AboutSection } from "@/components/home/about-section";
import { CertificationSection } from "@/components/home/certification-section";
import { ClientCta } from "@/components/home/client-cta";
import { EcoSection } from "@/components/home/eco-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { Hero } from "@/components/home/hero";
import { IndustriesSection } from "@/components/home/industries-section";
import { NewsSection } from "@/components/home/news-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const websiteJsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Evergreen Lighting Malaysia",
  url: "https://evergreenmalaysia.com",
  description:
    "Innovative, energy-efficient lighting solutions for Malaysian homes, businesses, and architectural spaces.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <CertificationSection />
        <ExperienceSection />
        <EcoSection />
        <IndustriesSection />
        <NewsSection />
        <ClientCta />
      </main>
      <SiteFooter />
    </>
  );
}
