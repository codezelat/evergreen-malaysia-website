import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Evergreen Lighting Malaysia",
    short_name: "Evergreen Malaysia",
    description:
      "Innovative, energy-efficient lighting solutions for Malaysian homes, businesses, and architectural spaces.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1c13",
    theme_color: "#0d1c13",
    lang: "en-MY",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
