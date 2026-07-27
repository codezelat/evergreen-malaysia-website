import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/montserrat-latin.woff2",
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  weight: "100 900",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evergreenmalaysia.com"),
  title: {
    default: "Evergreen Lighting Malaysia | Illuminate Your World",
    template: "%s | Evergreen Lighting Malaysia",
  },
  description:
    "Innovative, energy-efficient lighting solutions for Malaysian homes, businesses, and architectural spaces.",
  keywords: [
    "Evergreen Lighting Malaysia",
    "lighting solutions Malaysia",
    "indoor lighting",
    "outdoor lighting",
    "decorative lighting",
    "commercial lighting",
    "energy-efficient lighting",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "/",
    siteName: "Evergreen Lighting Malaysia",
    title: "Evergreen Lighting Malaysia | Illuminate Your World",
    description:
      "Innovative, energy-efficient lighting for homes, commercial spaces, and architectural projects.",
    images: [
      {
        url: "/images/home/hero-lighting.jpg",
        width: 512,
        height: 287,
        alt: "Evergreen Lighting feature installation in a modern interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen Lighting Malaysia",
    description:
      "Innovative, energy-efficient lighting for spaces that inspire.",
    images: ["/images/home/hero-lighting.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111b15",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
