"use client";

import { ExternalLink, MapPinned } from "lucide-react";
import { useState } from "react";

type InteractiveMapProps = {
  title: string;
  query: string;
  externalUrl: string;
};

export function InteractiveMap({
  title,
  query,
  externalUrl,
}: InteractiveMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="relative min-h-72 overflow-hidden bg-[#e4ebe5] sm:min-h-80">
      {isLoaded ? (
        <iframe
          title={title}
          src={embedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-6 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-65 [background-image:linear-gradient(32deg,transparent_44%,rgba(255,255,255,.82)_45%,rgba(255,255,255,.82)_51%,transparent_52%),linear-gradient(116deg,transparent_44%,rgba(255,255,255,.7)_45%,rgba(255,255,255,.7)_50%,transparent_51%)] [background-size:8rem_8rem,10rem_10rem]"
          />
          <div className="relative max-w-xs">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-evergreen-800 text-white shadow-lg shadow-evergreen-950/15">
              <MapPinned aria-hidden="true" className="size-6" />
            </span>
            <p className="mt-4 text-sm font-bold text-evergreen-950">{title}</p>
            <p className="mt-2 text-xs leading-5 text-evergreen-950/60">
              Load the live Google map only when you need it. Google may receive
              technical request data after you continue.
            </p>
            <button
              type="button"
              onClick={() => setIsLoaded(true)}
              className="focus-ring mt-5 inline-flex min-h-11 items-center justify-center bg-evergreen-700 px-5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-evergreen-900"
            >
              Load interactive map
            </button>
            <a
              href={externalUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mx-auto mt-3 flex w-fit items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.07em] text-evergreen-900 underline decoration-evergreen-900/25 underline-offset-4 hover:decoration-evergreen-900"
            >
              Open in Google Maps
              <ExternalLink aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
