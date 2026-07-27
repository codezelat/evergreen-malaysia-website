import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/ui/reveal";

const newsItems = [
  {
    title: "The Art of Architectural Innovation",
    summary:
      "How considered light, material, and form can turn practical spaces into memorable experiences.",
    image: "/images/home/news-smart-lighting.png",
    date: "Design Insight",
  },
  {
    title: "Sustainable Lighting Solutions",
    summary:
      "A practical look at efficient LED choices that reduce energy use without compromising atmosphere.",
    image: "/images/home/news-sustainable-lighting.jpg",
    date: "Sustainability",
  },
];

export function NewsSection() {
  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="content-auto bg-evergreen-800 py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/60">
              News &amp; CSR
            </p>
            <h2
              id="news-heading"
              className="mt-3 max-w-3xl text-[clamp(2rem,4.2vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.05em]"
            >
              Latest Updates &amp; Innovations in Lighting Solutions
            </h2>
          </div>
          <ArrowLink href="#contact" inverse className="shrink-0">
            Explore All News &amp; CSR
          </ArrowLink>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {newsItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group grid min-h-full overflow-hidden bg-white text-evergreen-950 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    quality={82}
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-7">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-evergreen-800">
                    {item.date}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-0.035em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-black/58">
                    {item.summary}
                  </p>
                  <Link
                    href="#contact"
                    aria-label={`Read ${item.title}`}
                    className="focus-ring mt-7 inline-flex items-center gap-2 self-start text-[0.68rem] font-bold uppercase tracking-[0.08em]"
                  >
                    Read More
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
