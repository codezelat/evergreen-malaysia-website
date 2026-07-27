import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  inverse?: boolean;
  className?: string;
};

export function ArrowLink({
  href,
  children,
  inverse = false,
  className = "",
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`focus-ring group inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.08em] ${
        inverse ? "text-white" : "text-evergreen-900"
      } ${className}`}
    >
      <span className="border-b border-current/25 pb-1 transition-colors group-hover:border-current">
        {children}
      </span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={1.8}
      />
    </Link>
  );
}
