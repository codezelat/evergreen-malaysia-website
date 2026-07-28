import type { Metadata } from "next";
import Image from "next/image";
import { InnerPageHero } from "@/components/pages/inner-page-hero";
import { PageCta } from "@/components/pages/page-cta";
import { Reveal } from "@/components/ui/reveal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Evergreen Lighting Malaysia’s vision, experience, quality standards, and commitment to responsible lighting.",
  alternates: { canonical: "/about-us" },
};

const milestones = [
  {
    year: "1997",
    title: "A foundation in electrical manufacturing",
    copy: "Evergreen’s manufacturing experience created a strong base in dependable products, quality processes, and responsive customer service.",
  },
  {
    year: "2005",
    title: "Growing across markets and applications",
    copy: "The group expanded its lighting knowledge across residential, commercial, industrial, and decorative applications.",
  },
  {
    year: "Today",
    title: "A dedicated Malaysian lighting partner",
    copy: "Evergreen Lighting Malaysia brings that practical experience to projects that value atmosphere, performance, and responsible energy use.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <InnerPageHero
          eyebrow="Evergreen Malaysia Limited"
          title="Making Quality, Eco-Friendly Lighting Mainstream"
          image="/images/pages/about-hero-green.webp"
          imageAlt="A naturally lit interior filled with greenery"
          stats={[
            { value: "25+", label: "Years" },
            { value: "600+", label: "Products" },
            { value: "1,000+", label: "Projects" },
            { value: "5,500+", label: "Clients" },
          ]}
        />

        <section className="content-auto bg-white py-20 sm:py-24 lg:py-28">
          <Reveal className="site-container grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="eyebrow">About Us</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Evergreen Malaysia
              </h2>
              <p className="body-copy mt-6">
                From our roots in electrical manufacturing to our vision for a
                brighter Malaysia, Evergreen brings together practical
                engineering knowledge and a deep appreciation for the way light
                shapes a space.
              </p>
              <p className="body-copy mt-5">
                We work with homeowners, designers, contractors, and project
                teams to select lighting that balances visual comfort,
                dependable performance, energy efficiency, and lasting style.
                Our role goes beyond supplying a fixture: we help create places
                that feel welcoming, productive, and memorable.
              </p>
            </div>
            <div className="relative aspect-[1.25/1] overflow-hidden">
              <Image
                src="/images/pages/about-interior-project.webp"
                alt="A warmly lit Evergreen interior"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        <section className="content-auto bg-white pb-20 sm:pb-24">
          <div className="site-container space-y-10">
            <Reveal className="grid items-center gap-8 bg-evergreen-800 p-6 text-white sm:p-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-14">
              <div className="relative aspect-[1.45/1] overflow-hidden">
                <Image
                  src="/images/pages/vision-eye.webp"
                  alt=""
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow !text-white/62">Vision</p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                  Light that elevates everyday life
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/70">
                  To make well-designed, energy-conscious lighting accessible
                  across Malaysia, helping every home, workplace, and public
                  space feel more comfortable, expressive, and enduring.
                </p>
              </div>
            </Reveal>

            <Reveal className="grid items-center gap-8 border-b border-evergreen-900/15 pb-10 lg:grid-cols-[1.32fr_0.68fr] lg:gap-14">
              <div>
                <p className="eyebrow">Mission</p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                  Thoughtful solutions, delivered responsibly
                </h2>
                <p className="body-copy mt-5">
                  We combine quality products, attentive guidance, and
                  application knowledge to help clients make confident lighting
                  decisions. We prioritise efficient technology, reliable
                  service, and solutions designed around the needs of each
                  project.
                </p>
              </div>
              <div className="relative aspect-[1.45/1] overflow-hidden lg:order-last">
                <Image
                  src="/images/pages/mission-technology.webp"
                  alt=""
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="content-auto bg-mist py-20 sm:py-24 lg:py-28">
          <div className="site-container">
            <Reveal className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="relative aspect-[1.35/1] overflow-hidden">
                <Image
                  src="/images/pages/team-at-work.webp"
                  alt="Lighting professionals at work on a project"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow">Our Story</p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                  Over 25 years in electronics manufacturing
                </h2>
                <p className="body-copy mt-5">
                  Experience has taught us that lasting lighting begins with
                  listening: understanding the space, the people using it, and
                  the performance expected over time.
                </p>
              </div>
            </Reveal>

            <ol className="mt-14 border-l border-evergreen-800/30 lg:ml-[38%]">
              {milestones.map((milestone) => (
                <li key={milestone.year}>
                  <Reveal className="relative border-b border-evergreen-900/10 py-8 pl-9 last:border-b-0">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[0.36rem] top-10 size-3 rounded-full bg-evergreen-600 ring-4 ring-mist"
                    />
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-evergreen-700">
                      {milestone.year}
                    </p>
                    <h3 className="mt-2 text-lg font-bold tracking-[-0.03em]">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-black/58">
                      {milestone.copy}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="content-auto bg-white py-20 sm:py-24">
          <Reveal className="site-container grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
            <div>
              <p className="eyebrow">Trusted &amp; Certified</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Quality considered from selection to installation
              </h2>
              <p className="body-copy mt-5">
                Our product decisions are guided by performance, electrical
                safety, energy efficiency, and long-term value. Certifications
                vary by product and market; our team can provide the relevant
                documentation for your specification.
              </p>
            </div>
            <Image
              src="/images/home/certifications.webp"
              alt="Lighting certification and quality marks"
              width={1684}
              height={912}
              quality={90}
              sizes="(max-width: 1024px) 90vw, 500px"
              className="h-auto w-full object-contain"
            />
          </Reveal>
        </section>

        <section className="content-auto bg-evergreen-800 py-20 text-white sm:py-24">
          <Reveal className="site-container grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/60">
                Eco-Friendly Lighting Solutions
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Powering a greener future
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70">
                Efficient LEDs, appropriate controls, durable components, and a
                carefully planned lighting scheme can lower energy demand while
                preserving comfort and atmosphere. We help clients consider
                whole-life performance—not wattage alone.
              </p>
            </div>
            <div className="relative aspect-square max-w-sm overflow-hidden justify-self-end">
              <Image
                src="/images/pages/about-hero-green.webp"
                alt=""
                fill
                quality={90}
                sizes="380px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        <PageCta />
      </main>
      <SiteFooter />
    </>
  );
}
