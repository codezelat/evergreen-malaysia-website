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
import { JsonLd } from "@/components/seo/json-ld";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://evergreenmalaysia.com/#website",
      name: "Evergreen Lighting Malaysia",
      url: "https://evergreenmalaysia.com/",
      description:
        "Innovative, energy-efficient lighting solutions for Malaysian homes, businesses, and architectural spaces.",
      inLanguage: "en-MY",
    },
    {
      "@type": "Organization",
      "@id": "https://evergreenmalaysia.com/#organization",
      name: "Evergreen Lighting Malaysia",
      url: "https://evergreenmalaysia.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://evergreenmalaysia.com/images/home/evergreen-malaysia-logo-dark.png",
        width: 989,
        height: 252,
      },
      image: {
        "@type": "ImageObject",
        url: "https://evergreenmalaysia.com/images/pages/industry-designers.webp",
        width: 2400,
        height: 1004,
        caption:
          "Sculptural Evergreen lighting installation in a modern interior",
      },
      email: "evergreenlk@gmail.com",
      areaServed: {
        "@type": "Country",
        name: "Malaysia",
      },
      sameAs: ["https://evergreen.lk/"],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
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
