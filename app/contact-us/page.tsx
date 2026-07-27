import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/pages/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Evergreen Lighting Malaysia for residential, commercial, industrial, and custom lighting enquiries.",
  alternates: { canonical: "/contact-us" },
};

const locations = [
  {
    name: "Malaysia",
    address: "Evergreen Lighting Malaysia",
    email: "evergreenlk@gmail.com",
    phone: "Malaysia project enquiries",
  },
  {
    name: "Sri Lanka Group",
    address: "175 Minuwangoda Road, Ekala, Sri Lanka",
    email: "sandun@evergreen.lk",
    phone: "+94 71 727 0222",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[27rem] overflow-hidden bg-evergreen-950 text-white sm:min-h-[31rem]">
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="relative">
              <Image
                src="/images/pages/contact-consultation.webp"
                alt=""
                fill
                priority
                sizes="50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/pages/contact-design.webp"
                alt=""
                fill
                priority
                sizes="50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-evergreen-950/62" />
          <div className="absolute inset-0 bg-gradient-to-r from-evergreen-950/35 via-evergreen-950/75 to-evergreen-950/35" />
          <div className="site-container relative flex min-h-[27rem] items-center justify-center pb-16 pt-28 text-center sm:min-h-[31rem]">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/70">
                Contact Us
              </p>
              <h1 className="mx-auto mt-3 max-w-[22ch] text-[clamp(2rem,5vw,4.25rem)] font-bold leading-[1.03] tracking-[-0.055em]">
                Get in Touch for Sustainable Lighting Solutions
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <Reveal className="site-container">
            <div className="text-center">
              <p className="eyebrow">Start a Conversation</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Get in touch
              </h2>
              <p className="body-copy mx-auto mt-4 max-w-3xl">
                Tell us about your space, timeline, and lighting needs. The
                completed form opens a ready-to-send email so your enquiry goes
                directly to the Evergreen team.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl">
              <ContactForm />
            </div>
          </Reveal>
        </section>

        <section className="content-auto bg-mist py-20 sm:py-24">
          <div className="site-container">
            <Reveal className="text-center">
              <p className="eyebrow">Our Network</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Authorized distributors
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {locations.map((location, index) => (
                <Reveal
                  key={location.name}
                  delay={index * 0.08}
                  className="grid overflow-hidden bg-white sm:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="p-7 sm:p-9">
                    <h3 className="text-xl font-bold tracking-[-0.035em]">
                      {location.name}
                    </h3>
                    <ul className="mt-6 space-y-4 text-sm leading-6 text-black/60">
                      <li className="flex items-start gap-3">
                        <MapPin
                          aria-hidden="true"
                          className="mt-1 size-4 shrink-0 text-evergreen-700"
                        />
                        {location.address}
                      </li>
                      <li>
                        <a
                          href={`mailto:${location.email}`}
                          className="focus-ring flex items-start gap-3 transition-colors hover:text-evergreen-700"
                        >
                          <Mail
                            aria-hidden="true"
                            className="mt-1 size-4 shrink-0 text-evergreen-700"
                          />
                          {location.email}
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone
                          aria-hidden="true"
                          className="mt-1 size-4 shrink-0 text-evergreen-700"
                        />
                        {location.phone}
                      </li>
                    </ul>
                  </div>
                  <div className="relative min-h-64 bg-white">
                    <Image
                      src="/images/pages/distributor-map.webp"
                      alt={`Map showing the ${location.name} distributor area`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className={`object-cover ${
                        index === 0 ? "object-left" : "object-right"
                      }`}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
