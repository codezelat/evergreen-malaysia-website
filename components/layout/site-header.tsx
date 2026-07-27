"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Industries", href: "/our-industries" },
  { label: "News & CSR", href: "/news-csr" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-evergreen-950/75 text-white backdrop-blur-md">
      <div className="site-container flex h-[4.65rem] items-center justify-between">
        <Link
          href="/"
          aria-label="Evergreen Lighting Malaysia home"
          className="focus-ring relative z-50 block"
        >
          <Image
            src="/images/home/evergreen-malaysia-logo.png"
            alt="Evergreen Malaysia Limited"
            width={268}
            height={71}
            priority
            className="h-auto w-[9.4rem]"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                      ? "page"
                      : undefined
                  }
                  className="focus-ring relative py-3 text-[0.69rem] font-semibold tracking-[0.025em] text-white/85 transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-evergreen-500 after:transition-transform hover:text-white hover:after:scale-x-100 aria-[current=page]:text-white aria-[current=page]:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact-us"
                className="focus-ring inline-flex min-h-9 items-center bg-evergreen-600 px-4 text-[0.67rem] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-evergreen-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((current) => !current)}
          className="focus-ring relative z-50 grid size-11 place-items-center text-white lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full z-40 min-h-[calc(100svh-4.65rem)] bg-evergreen-950 px-[var(--page-gutter)] pt-4 transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                      ? "page"
                      : undefined
                  }
                  onClick={() => setOpen(false)}
                  className="focus-ring flex min-h-16 items-center text-xl font-semibold text-white aria-[current=page]:text-evergreen-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="focus-ring flex min-h-16 items-center text-xl font-semibold text-evergreen-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
