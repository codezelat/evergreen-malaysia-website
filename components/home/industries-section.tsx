import { IndustriesCarousel } from "@/components/home/industries-carousel";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/ui/reveal";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="content-auto bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow">Our Industries</p>
          <h2
            id="industries-heading"
            className="mx-auto mt-3 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.04] tracking-[-0.05em]"
          >
            Illuminating Possibilities Across Industries
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <IndustriesCarousel />
        </Reveal>

        <Reveal className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="body-copy max-w-3xl">
            Tailored lighting solutions for residential, industrial, commercial,
            and design-led spaces—built around how each environment needs to
            look, feel, and perform.
          </p>
          <ArrowLink href="/our-industries" className="shrink-0">
            Explore All Our Industries
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
