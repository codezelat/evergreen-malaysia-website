import { ArrowUpRight, Box, BriefcaseBusiness, Clock3, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "25+", label: "Years", icon: Clock3 },
  { value: "600+", label: "Products", icon: Box },
  { value: "1,000+", label: "Projects", icon: BriefcaseBusiness },
  { value: "5,500+", label: "Clients", icon: Users },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-svh overflow-hidden bg-evergreen-950 text-white"
    >
      <Image
        src="/images/home/hero-lighting.jpg"
        alt="Sculptural Evergreen lighting installation in a modern interior"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,13,9,.86)_0%,rgba(6,13,9,.54)_43%,rgba(6,13,9,.08)_78%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,12,8,.64)_0%,transparent_45%)]" />

      <div className="site-container relative z-10 flex min-h-svh flex-col justify-end pb-14 pt-32 lg:pb-16">
        <div className="max-w-[38rem] animate-[hero-in_.9s_cubic-bezier(.22,1,.36,1)_both]">
          <h1
            id="hero-heading"
            className="max-w-[10ch] text-[clamp(2.75rem,7vw,5.35rem)] font-bold leading-[0.94] tracking-[-0.058em]"
          >
            Illuminate Your World With Us
          </h1>
          <p className="mt-6 max-w-[34rem] text-sm font-medium leading-7 text-white/78 sm:text-base">
            Transform your space with innovative indoor, outdoor, and decorative
            lighting services.
          </p>
          <Link
            href="#industries"
            className="focus-ring group mt-7 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.08em]"
          >
            Explore Our Services
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <dl className="mt-12 grid max-w-[45rem] grid-cols-2 gap-x-5 gap-y-7 border-t border-white/20 pt-7 sm:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon
                aria-hidden="true"
                className="size-6 shrink-0 text-evergreen-500"
                strokeWidth={1.5}
              />
              <div>
                <dt className="text-[0.62rem] font-medium text-white/58">
                  {label}
                </dt>
                <dd className="text-lg font-bold tracking-tight">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
