import { LegalPage, type LegalSection } from "@/components/pages/legal-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description:
    "Evergreen Lighting Malaysia’s current cookie and website storage practices.",
  path: "/cookie-policy",
  image: "/images/pages/industry-designers.webp",
  imageAlt: "Evergreen Lighting installation in a modern interior",
  imageWidth: 2400,
  imageHeight: 1004,
});

const sections: LegalSection[] = [
  {
    id: "current-position",
    title: "Our current cookie position",
    content: (
      <>
        <p>
          This website does not currently set analytics, advertising,
          behavioural profiling, or marketing cookies. We do not use Google
          Analytics, advertising pixels, or third-party personalisation tools
          in the current website build.
        </p>
        <p>
          Because no optional tracking cookies are presently used, the website
          does not display a consent banner that would serve no genuine choice.
        </p>
      </>
    ),
  },
  {
    id: "necessary-technology",
    title: "Strictly necessary technology",
    content: (
      <>
        <p>
          The site may rely on essential network, hosting, load-balancing, or
          security mechanisms when deployed. Depending on the hosting
          configuration, these services may process technical request data or
          use short-lived identifiers strictly to deliver and protect the site.
        </p>
        <p>
          These mechanisms are not used by Evergreen to build advertising
          profiles or track you across unrelated websites.
        </p>
      </>
    ),
  },
  {
    id: "local-storage",
    title: "Browser storage",
    content: (
      <p>
        The current site code does not use localStorage or sessionStorage to
        retain visitor preferences or marketing identifiers. The navigation and
        page animations work without storing a visitor profile in your browser.
      </p>
    ),
  },
  {
    id: "contact-email",
    title: "Contact form and email",
    content: (
      <p>
        Completing the contact form prepares an email in your own email
        application. It does not place your enquiry in a website cookie or local
        database. Your email provider may use its own cookies or account
        technologies under its separate terms.
      </p>
    ),
  },
  {
    id: "interactive-maps",
    title: "Interactive maps",
    content: (
      <>
        <p>
          The contact page does not load Google Maps automatically. A map is
          loaded only after you select “Load interactive map”, or you may
          choose the separate link that opens Google Maps in a new tab.
        </p>
        <p>
          After that choice, Google may receive technical request information
          and may use cookies or similar technologies under its own terms. The
          Evergreen website does not read or use those identifiers for
          analytics or advertising.
        </p>
      </>
    ),
  },
  {
    id: "future-changes",
    title: "Future changes",
    content: (
      <>
        <p>
          If we introduce optional analytics, automatically loaded third-party
          services, or advertising technologies in the future, we will update
          this policy and implement an appropriate consent mechanism before
          using them where required.
        </p>
        <p>
          Questions about this policy may be sent to{" "}
          <a href="mailto:evergreenlk@gmail.com">evergreenlk@gmail.com</a>.
        </p>
      </>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal & Privacy"
      title="Cookie Policy"
      summary="The current website is deliberately simple: no advertising trackers, no analytics cookies, and no unnecessary consent banner."
      lastUpdated="29 July 2026"
      path="/cookie-policy"
      sections={sections}
    />
  );
}
