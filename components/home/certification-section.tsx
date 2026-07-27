import Image from "next/image";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/ui/reveal";

export function CertificationSection() {
  return (
    <section
      aria-labelledby="certification-heading"
      className="content-auto bg-evergreen-800 py-16 text-white lg:py-20"
    >
      <Reveal className="site-container grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
        <div>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/62">
            Trusted &amp; Certified
          </p>
          <h2
            id="certification-heading"
            className="mt-3 max-w-[24ch] text-2xl font-bold tracking-[-0.035em] sm:text-3xl"
          >
            A trusted Malaysian lighting partner
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/68">
            Our focus on dependable performance, responsible materials, and
            energy-efficient technology gives designers, project teams, and
            homeowners confidence from specification through installation.
          </p>
          <ArrowLink href="/about-us" inverse className="mt-7">
            View Our Standards
          </ArrowLink>
        </div>

        <Image
          src="/images/home/certifications.png"
          alt="Evergreen lighting certifications and quality marks"
          width={421}
          height={228}
          sizes="(max-width: 1024px) 70vw, 390px"
          className="h-auto w-full max-w-[28rem] justify-self-start object-contain lg:justify-self-end"
        />
      </Reveal>
    </section>
  );
}
