import { ArrowLink } from "@/components/ui/arrow-link";
import { Reveal } from "@/components/ui/reveal";

type PageCtaProps = {
  title?: string;
  copy?: string;
};

export function PageCta({
  title = "Let’s create something brilliant.",
  copy = "Talk with our team about your space, performance requirements, and the atmosphere you want to create.",
}: PageCtaProps) {
  return (
    <section className="content-auto bg-white py-16 sm:py-20">
      <Reveal className="site-container text-center">
        <h2 className="mx-auto max-w-[24ch] text-2xl font-bold tracking-[-0.04em] sm:text-4xl">
          {title}
        </h2>
        <p className="body-copy mx-auto mt-4 max-w-2xl">{copy}</p>
        <ArrowLink href="/contact-us" className="mt-7">
          Contact Us
        </ArrowLink>
      </Reveal>
    </section>
  );
}
