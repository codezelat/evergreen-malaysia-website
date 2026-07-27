import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="bg-evergreen-950 text-white">
        <section className="site-container flex min-h-[72vh] items-center py-32">
          <div className="max-w-3xl">
            <p className="eyebrow text-white/55">Error 404</p>
            <h1 className="mt-4 text-[clamp(3.4rem,10vw,8rem)] font-bold leading-[0.92] tracking-[-0.07em]">
              Page not found.
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
              The page may have moved, or the address may be incomplete. Return
              to the homepage or speak with our team about your lighting
              project.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/"
                className="focus-ring inline-flex min-h-12 items-center gap-2 bg-white px-6 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-evergreen-950 transition-colors hover:bg-evergreen-200"
              >
                Return home
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href="/contact-us"
                className="focus-ring inline-flex min-h-12 items-center border border-white/22 px-6 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:border-white/50"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
