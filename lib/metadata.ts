import type { Metadata } from "next";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  image: `/${string}`;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | Evergreen Lighting Malaysia`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_MY",
      url: path,
      siteName: "Evergreen Lighting Malaysia",
      title: socialTitle,
      description,
      images: [
        {
          url: image,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
