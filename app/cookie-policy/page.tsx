import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Evergreen Lighting Malaysia’s current cookie and website storage practices.",
  alternates: { canonical: "/cookie-policy" },
};

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
    id: "future-changes",
    title: "Future changes",
    content: (
      <>
        <p>
          If we introduce optional analytics, embedded services, or advertising
          technologies in the future, we will update this policy and implement
          an appropriate consent mechanism before using them where required.
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
      lastUpdated="27 July 2026"
      path="/cookie-policy"
      sections={sections}
    />
  );
}
