export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type NewsArticle = {
  slug: string;
  title: string;
  category: "News" | "CSR";
  date: string;
  displayDate: string;
  excerpt: string;
  image: string;
  sections: ArticleSection[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "five-cutting-edge-lighting-trends-shaping-2025",
    title: "Five Cutting-Edge Lighting Trends Shaping 2025",
    category: "News",
    date: "2025-07-01",
    displayDate: "July 2025",
    excerpt:
      "Human-centric controls, connected systems, and flexible luminaires are changing how designers shape healthier, more efficient spaces.",
    image: "/images/pages/industry-commercial.webp",
    sections: [
      {
        heading: "1. Human-Centric Lighting Comes Mainstream",
        paragraphs: [
          "Human-centric lighting follows the natural rhythm of daylight, adjusting intensity and colour temperature throughout the day. The approach can support visual comfort, concentration, and a calmer transition into evening.",
        ],
      },
      {
        heading: "2. The Rise of Li-Fi Data Transmission",
        paragraphs: [
          "Li-Fi uses modulated light to transmit data. As connected luminaires become part of a building’s digital infrastructure, lighting can contribute to secure, high-capacity indoor connectivity without adding visual clutter.",
        ],
      },
      {
        heading: "3. Sustainability Drives Circular Design",
        paragraphs: [
          "Long-life LEDs are only one part of responsible lighting. Repairable components, replaceable drivers, efficient optics, and recyclable materials are increasingly central to product selection and whole-life value.",
        ],
      },
      {
        heading: "4. Intelligent Lighting Networks and IoT Integration Deepen",
        paragraphs: [
          "Sensors and connected controls allow lighting to respond to occupancy, available daylight, and real-time space use. Carefully planned systems can improve comfort while reducing unnecessary energy consumption.",
        ],
      },
      {
        heading: "5. Flexible and Tunable Form Factors",
        paragraphs: [
          "Compact LEDs and adaptable optical systems are giving architects more freedom to integrate light into furniture, ceilings, facades, and landscape elements without compromising performance.",
        ],
      },
    ],
  },
  {
    slug: "the-art-of-architectural-illumination",
    title: "The Art of Architectural Illumination",
    category: "News",
    date: "2025-06-12",
    displayDate: "June 2025",
    excerpt:
      "A practical guide to revealing material, depth, and movement while keeping the light source visually quiet.",
    image: "/images/pages/news-smart-lighting.webp",
    sections: [
      {
        heading: "Light should reveal the architecture",
        paragraphs: [
          "Successful architectural lighting starts with the surfaces, materials, and movement paths that define a place. The goal is not simply brightness; it is a readable hierarchy that helps people understand and enjoy the space.",
          "Grazing light can reveal texture, concealed linear light can define form, and carefully aimed accents can guide attention without overwhelming the architecture.",
        ],
      },
      {
        heading: "Balance atmosphere with performance",
        paragraphs: [
          "Glare control, consistent colour rendering, maintainability, and energy use matter as much as the visual concept. Early collaboration between the architect, interior designer, and lighting team produces the strongest result.",
        ],
      },
    ],
  },
  {
    slug: "natural-light-emulation-for-healthier-interiors",
    title: "Natural Light Emulation for Healthier Interiors",
    category: "News",
    date: "2025-05-20",
    displayDate: "May 2025",
    excerpt:
      "Layered electric light can complement daylight and keep interiors comfortable as conditions change.",
    image: "/images/pages/about-hero-green.webp",
    sections: [
      {
        heading: "Designing around changing daylight",
        paragraphs: [
          "Daylight is dynamic. Its direction, intensity, and colour shift across the day, so electric lighting works best when it supports those changes rather than competing with them.",
          "Dimmable ambient light, focused task lighting, and warm evening scenes give occupants useful control while preserving a coherent visual atmosphere.",
        ],
      },
    ],
  },
  {
    slug: "sustainable-lighting-solutions",
    title: "Sustainable Lighting Solutions",
    category: "CSR",
    date: "2025-04-18",
    displayDate: "April 2025",
    excerpt:
      "How efficient sources, durable components, and thoughtful controls reduce the lifetime impact of a lighting scheme.",
    image: "/images/pages/news-sustainable.webp",
    sections: [
      {
        heading: "Efficiency begins with the lighting plan",
        paragraphs: [
          "Sustainable lighting considers the quantity of light, the hours it is needed, and the surfaces it must illuminate. Efficient luminaires and controls then support that plan with less wasted energy.",
          "Long service life, replaceable components, and accessible maintenance reduce disruption and help projects avoid premature product replacement.",
        ],
      },
    ],
  },
  {
    slug: "innovative-smart-home-lighting",
    title: "Innovative Smart Home Lighting",
    category: "News",
    date: "2025-03-26",
    displayDate: "March 2025",
    excerpt:
      "Simple scenes and responsive controls can make everyday lighting more comfortable without making it complicated.",
    image: "/images/pages/news-office.webp",
    sections: [
      {
        heading: "Useful automation feels effortless",
        paragraphs: [
          "Good smart-home lighting supports daily routines: a bright preparation scene, comfortable evening light, safe low-level navigation, and automatic switch-off when rooms are unused.",
          "The best systems keep manual control intuitive, remain useful without a phone, and are planned around the people who live in the space.",
        ],
      },
    ],
  },
  {
    slug: "responsible-lighting-for-community-spaces",
    title: "Responsible Lighting for Community Spaces",
    category: "CSR",
    date: "2025-02-10",
    displayDate: "February 2025",
    excerpt:
      "Clear, efficient illumination can improve safety and access while respecting neighbours and the night environment.",
    image: "/images/pages/news-smart-lighting.webp",
    sections: [
      {
        heading: "Light only where it is needed",
        paragraphs: [
          "Community lighting should make paths, entrances, and gathering spaces easy to understand without creating excessive spill or glare. Shielded optics and sensible control schedules protect both visibility and the surrounding environment.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
