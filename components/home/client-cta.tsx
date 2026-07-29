import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function ClientCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="content-auto bg-white py-20 text-center sm:py-24 lg:py-28"
    >
      <Reveal className="site-container">
        <h2
          id="contact-heading"
          className="mx-auto max-w-4xl text-[clamp(2rem,5vw,4.4rem)] font-bold leading-[1.03] tracking-[-0.055em]"
        >
          With over 5,500 clients working with us
        </h2>
        <p className="body-copy mx-auto mt-6 max-w-2xl">
          Ready to transform your space? Talk to our team about your lighting
          brief, project goals, or the right collection for your environment.
        </p>
        <Link
          href="/contact-us"
          className="focus-ring group mt-8 inline-flex min-h-12 items-center gap-3 bg-evergreen-600 px-7 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-evergreen-800"
        >
          Contact Us
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </Reveal>
    </section>
  );
}
