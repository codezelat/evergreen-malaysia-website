import type { Metadata } from "next";
import Image from "next/image";
import { PageCta } from "@/components/pages/page-cta";
import { Reveal } from "@/components/ui/reveal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Our Industries",
  description:
    "Residential, industrial, commercial, and designer lighting solutions from Evergreen Lighting Malaysia.",
  alternates: { canonical: "/our-industries" },
};

const industries = [
  {
    eyebrow: "House Holders",
    title: "Illuminate Your Home Life",
    image: "/images/pages/industry-residential.webp",
    imageAlt: "Warm pendant lighting in a contemporary living room",
    paragraphs: [
      "Enhance the beauty and functionality of your home with lighting that creates warm, inviting, and energy-conscious living spaces. We help balance ambient, task, and accent light across living rooms, kitchens, bedrooms, bathrooms, and outdoor areas.",
      "From comfortable reading corners to flexible dining scenes and intuitive smart controls, each layer is chosen to complement the interior while making daily life easier.",
    ],
  },
  {
    eyebrow: "Industrial Lighting",
    title: "Powering Productivity, Safely",
    image: "/images/pages/industry-industrial.webp",
    imageAlt: "High-output LED lighting in an industrial facility",
    paragraphs: [
      "Industrial environments demand reliable illumination, controlled glare, and consistent visibility. Our solutions include high-bay, low-bay, task, exterior, and specialist lighting selected around ceiling height, working conditions, and maintenance access.",
      "Efficient optics and appropriate controls help improve visual comfort and reduce wasted energy while supporting safe, productive operations.",
    ],
  },
  {
    eyebrow: "Commercial Lighting",
    title: "Enhance Every Business Space",
    image: "/images/pages/industry-commercial.webp",
    imageAlt: "Modern lighting across an open commercial workspace",
    paragraphs: [
      "Lighting shapes how people experience offices, retail environments, hospitality venues, and public spaces. We create schemes that support focus, highlight products and architecture, and establish a memorable atmosphere.",
      "Energy-efficient LED systems, daylight response, and occupancy controls can reduce operating demand while preserving the visual quality customers and teams expect.",
    ],
  },
  {
    eyebrow: "Designer Collaboration",
    title: "Bring Distinctive Ideas to Light",
    image: "/images/pages/industry-designers.webp",
    imageAlt: "Designer developing a custom lighting concept",
    paragraphs: [
      "We collaborate with architects and interior designers to turn a creative direction into practical, well-resolved lighting. That may include custom decorative pieces, concealed architectural light, facade accents, or carefully coordinated standard fixtures.",
      "Early technical collaboration helps align aesthetics, output, controls, installation constraints, and long-term maintenance—without diluting the design intent.",
    ],
  },
];

const heroImages = [
  "/images/pages/industry-designers.webp",
  "/images/pages/industry-hero-decorative.webp",
  "/images/pages/industry-commercial.webp",
  "/images/pages/industry-residential.webp",
  "/images/pages/industry-industrial.webp",
];

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[31rem] overflow-hidden bg-evergreen-950 text-white sm:min-h-[35rem]">
          <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-5">
            {heroImages.map((image, index) => (
              <div
                key={image}
                className={`relative ${
                  index > 2 ? "hidden sm:block" : "block"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 34vw, 20vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-evergreen-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950/80 via-transparent to-evergreen-950/28" />
          <div className="site-container relative flex min-h-[31rem] items-center justify-center pb-16 pt-28 text-center sm:min-h-[35rem]">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/70">
                Our Industries
              </p>
              <h1 className="mx-auto mt-3 max-w-[20ch] text-[clamp(2.1rem,5.4vw,4.8rem)] font-bold leading-[1.02] tracking-[-0.055em]">
                Illuminating Possibilities Across Industries
              </h1>
            </div>
          </div>
        </section>

        <div className="bg-white">
          {industries.map((industry, index) => (
            <section
              key={industry.title}
              className="content-auto border-b border-evergreen-900/10 py-20 last:border-b-0 sm:py-24 lg:py-28"
            >
              <Reveal
                className={`site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <p className="eyebrow">{industry.eyebrow}</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                    {industry.title}
                  </h2>
                  {industry.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="body-copy mt-5">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="relative aspect-[1.45/1] min-h-64 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
              </Reveal>
            </section>
          ))}
        </div>

        <PageCta
          title="Lighting shaped around your sector."
          copy="Share your brief with Evergreen and we’ll help define a solution that balances atmosphere, performance, efficiency, and long-term value."
        />
      </main>
      <SiteFooter />
    </>
  );
}
