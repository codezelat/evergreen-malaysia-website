import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/lib/news";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group">
      <Link
        href={`/news-csr/${article.slug}`}
        className="focus-ring block overflow-hidden"
      >
        <div className="relative aspect-[1.45/1] overflow-hidden bg-mist">
          <Image
            src={article.image}
            alt=""
            fill
            quality={82}
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
        </div>
        <div className="pt-5">
          <div className="flex items-center justify-between gap-4 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-evergreen-800">
            <span>{article.category}</span>
            <span className="text-black/42">{article.displayDate}</span>
          </div>
          <h2 className="mt-3 text-lg font-bold leading-snug tracking-[-0.035em] transition-colors group-hover:text-evergreen-700 sm:text-xl">
            {article.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-black/58">
            {article.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-evergreen-900">
            Read More
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}
