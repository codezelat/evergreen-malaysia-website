import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Industries", href: "/our-industries" },
  { label: "News & CSR", href: "/news-csr" },
  { label: "Contact Us", href: "/contact-us" },
];

const legalNavigation = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Accessibility", href: "/accessibility" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#151716] text-white">
      <div className="site-container grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.65fr_0.7fr_1fr] lg:py-16">
        <div className="max-w-md">
          <Image
            src="/images/home/evergreen-malaysia-logo.png"
            alt="Evergreen Malaysia Limited"
            width={989}
            height={252}
            quality={90}
            className="mb-6 h-auto w-40"
          />
          <p className="text-sm leading-7 text-white/58">
            Creating enduring, energy-conscious lighting experiences for homes,
            businesses, and landmark spaces across Malaysia.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.12em]">
            Information
          </h2>
          <ul className="space-y-3">
            {legalNavigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="focus-ring text-sm text-white/58 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.12em]">
            Main Menu
          </h2>
          <ul className="space-y-3">
            {footerNavigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="focus-ring text-sm text-white/58 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.12em]">
            Contact Us
          </h2>
          <ul className="space-y-4 text-sm text-white/58">
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              <span>Malaysia</span>
            </li>
            <li>
              <a
                href="mailto:evergreenlk@gmail.com"
                className="focus-ring flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" className="size-4 shrink-0" />
                evergreenlk@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container py-5 text-[0.68rem] text-white/60">
          <p>
            © {new Date().getFullYear()} Evergreen Lighting Malaysia. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
