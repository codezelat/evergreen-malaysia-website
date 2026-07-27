type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}

type BreadcrumbJsonLdProps = {
  current: string;
  path: string;
};

export function BreadcrumbJsonLd({
  current,
  path,
}: BreadcrumbJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://evergreenmalaysia.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: current,
            item: `https://evergreenmalaysia.com${path}`,
          },
        ],
      }}
    />
  );
}
