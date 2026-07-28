import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="content-auto bg-white py-20 sm:py-24 lg:py-28"
    >
      <Reveal className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[1.5/1] min-h-64 overflow-hidden">
          <Image
            src="/images/pages/industry-industrial.webp"
            alt="A high-performance industrial lighting installation"
            fill
            quality={90}
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">Our Experience</p>
          <h2
            id="experience-heading"
            className="section-title mt-3 text-[clamp(1.8rem,3.5vw,3.25rem)]"
          >
            Over 25 years in electronics manufacturing
          </h2>
          <p className="body-copy mt-6">
            Evergreen combines manufacturing knowledge with a practical
            understanding of the spaces people use every day. That experience
            helps us select, develop, and deliver lighting that balances visual
            comfort, durability, energy efficiency, and long-term value.
          </p>
          <p className="body-copy mt-5">
            Our team supports residential, commercial, hospitality, industrial,
            and architectural applications with solutions shaped around the
            project—not the other way around.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
