import Image from "next/image";

type Stat = {
  value: string;
  label: string;
};

type InnerPageHeroProps = {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt?: string;
  stats?: Stat[];
  priority?: boolean;
};

export function InnerPageHero({
  eyebrow,
  title,
  image,
  imageAlt = "",
  stats,
  priority = true,
}: InnerPageHeroProps) {
  return (
    <section className="relative min-h-[31rem] overflow-hidden bg-evergreen-950 text-white sm:min-h-[35rem]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        quality={82}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,11,.9),rgba(6,18,11,.46)_52%,rgba(6,18,11,.66))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950/90 via-transparent to-evergreen-950/25" />

      <div className="site-container relative flex min-h-[31rem] items-center justify-center pb-28 pt-28 text-center sm:min-h-[35rem]">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/72">
            {eyebrow}
          </p>
          <h1 className="mx-auto mt-3 max-w-[21ch] text-[clamp(2rem,5.2vw,4.65rem)] font-bold leading-[1.02] tracking-[-0.055em]">
            {title}
          </h1>
        </div>
      </div>

      {stats ? (
        <dl className="site-container absolute inset-x-0 bottom-7 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/18 pt-5 text-left sm:grid-cols-4 sm:text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-xl font-bold tracking-[-0.04em] sm:text-2xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-[0.65rem] text-white/60">{stat.label}</dt>
            </div>
          ))}
        </dl>
      ) : null}
    </section>
  );
}
