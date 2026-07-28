import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="content-auto bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="eyebrow">About Us</p>
              <h2
                id="about-heading"
                className="section-title mt-3 text-[clamp(2rem,4vw,3.5rem)]"
              >
                Evergreen Malaysia
              </h2>
            </div>
            <div>
              <p className="body-copy">
                From our roots in timeless design to our vision for a brighter
                Malaysia, Evergreen Lighting is your partner in creating spaces
                that inspire, welcome, and endure. We pair enduring quality with
                considered design to deliver lighting that feels as good as it
                performs.
              </p>
              <p className="body-copy mt-5">
                For intimate homes, dynamic commercial spaces, and landmark
                buildings, our collections bring together form, function, and
                energy-conscious technology.
              </p>
              <ArrowLink href="/about-us" className="mt-8">
                Read More About Us
              </ArrowLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-14 sm:mt-16">
          <div className="relative aspect-[16/6.2] min-h-64 overflow-hidden">
            <Image
              src="/images/home/about-evening.webp"
              alt="A warmly lit contemporary living space"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, 1248px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
