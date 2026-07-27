"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    label: "House Projects",
    title: "Illuminate Your Home Life",
    description:
      "Create warmth, comfort, and character with lighting that complements your personal style and enhances everyday living.",
    image: "/images/home/industry-residential.jpg",
  },
  {
    label: "Industrial",
    title: "Lighting Built to Perform",
    description:
      "Reliable, efficient illumination designed for productive environments, demanding operating conditions, and safer work.",
    image: "/images/home/industry-industrial.png",
  },
  {
    label: "Commercial",
    title: "Make Every Space Memorable",
    description:
      "Strategic lighting for retail, hospitality, and workplaces that balances atmosphere with high-performance visibility.",
    image: "/images/home/industry-commercial.png",
  },
];

export function IndustriesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <article
              key={slide.label}
              aria-hidden={selectedIndex !== index}
              className="relative min-w-0 flex-[0_0_100%] overflow-hidden bg-evergreen-950 text-white"
            >
              <div className="relative aspect-[16/8.4] min-h-[24rem] sm:min-h-[29rem]">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  quality={82}
                  sizes="(max-width: 768px) 100vw, 1248px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-evergreen-950/90 via-evergreen-950/52 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:max-w-2xl lg:p-14">
                  <p className="text-[0.67rem] font-semibold uppercase tracking-[0.12em] text-white/65">
                    {slide.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] sm:text-4xl">
                    {slide.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/68">
                    {slide.description}
                  </p>
                  <Link
                    href="#contact"
                    tabIndex={selectedIndex === index ? 0 : -1}
                    className="focus-ring mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.08em]"
                  >
                    Learn More
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs font-semibold text-evergreen-900">
          {String(selectedIndex + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous industry"
            className="focus-ring grid size-11 place-items-center border border-evergreen-900/20 text-evergreen-900 transition-colors hover:bg-evergreen-900 hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next industry"
            className="focus-ring grid size-11 place-items-center border border-evergreen-900/20 text-evergreen-900 transition-colors hover:bg-evergreen-900 hover:text-white"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
