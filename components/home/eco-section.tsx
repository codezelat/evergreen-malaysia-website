import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/ui/reveal";

export function EcoSection() {
  return (
    <section
      aria-labelledby="eco-heading"
      className="content-auto relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -right-[8rem] -top-[11rem] size-[34rem] rounded-full bg-white/45 blur-sm"
      />
      <Reveal className="site-container relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <p className="eyebrow">Why Choose Us?</p>
          <h2
            id="eco-heading"
            className="section-title mt-3 text-[clamp(2.15rem,5vw,4.5rem)]"
          >
            Eco-Friendly
          </h2>
          <p className="body-copy mt-6 max-w-2xl">
            Light should improve a space without placing unnecessary demand on
            the planet. Our energy-conscious approach prioritises efficient LED
            technology, lasting performance, and thoughtful product selection
            to reduce waste while preserving atmosphere and comfort.
          </p>
          <div className="mt-8 flex items-center justify-between gap-6">
            <div className="flex gap-2 text-evergreen-900">
              <ArrowLeft aria-hidden="true" className="size-4" />
              <ArrowRight aria-hidden="true" className="size-4" />
            </div>
            <ArrowLink href="/about-us">Read More</ArrowLink>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-[31rem] justify-self-end overflow-hidden">
          <Image
            src="/images/home/eco-lightbulb.png"
            alt="Energy-efficient lightbulb surrounded by greenery"
            fill
            quality={82}
            sizes="(max-width: 1024px) 80vw, 470px"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
