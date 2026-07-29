import { LegalPage, type LegalSection } from "@/components/pages/legal-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Terms governing access to and use of the Evergreen Lighting Malaysia website.",
  path: "/terms-of-use",
  image: "/images/pages/industry-designers.webp",
  imageAlt: "Evergreen Lighting installation in a modern interior",
  imageWidth: 2400,
  imageHeight: 1004,
});

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance and scope",
    content: (
      <>
        <p>
          These terms govern your use of evergreenmalaysia.com and the
          information, imagery, and enquiry features made available through it.
          By accessing the website, you agree to use it in accordance with these
          terms and applicable Malaysian law.
        </p>
        <p>
          If you do not agree with these terms, please discontinue use of the
          website. Separate written terms may apply to any quotation, supply,
          installation, consultancy, or other service arranged with us.
        </p>
      </>
    ),
  },
  {
    id: "information",
    title: "Website information",
    content: (
      <>
        <p>
          The website provides general information about Evergreen Lighting
          Malaysia, its capabilities, industries, and activities. It is not a
          quotation, product specification, professional lighting plan,
          warranty, or binding offer.
        </p>
        <p>
          Product appearance, availability, performance, specifications, and
          project suitability may change or vary by application. Please contact
          us for information specific to your project before relying on a
          product or design decision.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <>
        <p>
          Unless otherwise stated, the website design, text, graphics, logos,
          photographs, and other original material are owned by or licensed to
          Evergreen Lighting Malaysia and are protected by applicable
          intellectual-property laws.
        </p>
        <p>
          You may view and print limited extracts for personal or internal
          business evaluation. You may not reproduce, republish, sell, modify,
          distribute, or use the material commercially without prior written
          permission from the relevant rights holder.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <>
        <p>You must not use this website to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>break any law or infringe another person&apos;s rights;</li>
          <li>submit false, abusive, harmful, or unsolicited messages;</li>
          <li>
            introduce malware, probe security controls, or interfere with the
            website&apos;s availability;
          </li>
          <li>
            scrape, copy, or systematically extract content in a way that
            creates an unreasonable load or substitutes for the website; or
          </li>
          <li>misrepresent an affiliation with Evergreen Lighting Malaysia.</li>
        </ul>
      </>
    ),
  },
  {
    id: "enquiries-and-links",
    title: "Enquiries and external services",
    content: (
      <>
        <p>
          The contact form prepares an email in your own email application. An
          enquiry does not create a contract or guarantee acceptance,
          availability, pricing, or a response within a particular period.
        </p>
        <p>
          Links to external websites are provided for convenience. We do not
          control their content, availability, security, or privacy practices,
          and their own terms will apply when you visit them.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers and liability",
    content: (
      <>
        <p>
          We aim to keep this website accurate, secure, and available, but it is
          provided on an “as available” basis. To the extent permitted by law,
          we do not guarantee that every item is complete, current, error-free,
          or continuously available.
        </p>
        <p>
          To the extent permitted by applicable law, Evergreen Lighting
          Malaysia is not liable for indirect, incidental, or consequential
          loss arising solely from use of, or inability to use, this website.
          Nothing in these terms excludes liability or rights that cannot
          lawfully be excluded.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law and changes",
    content: (
      <>
        <p>
          These website terms are governed by the laws of Malaysia. Any dispute
          relating to the website is subject to the jurisdiction of the
          Malaysian courts, unless applicable law requires otherwise.
        </p>
        <p>
          We may update these terms when the website, our practices, or legal
          requirements change. The date shown above identifies the latest
          published version.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <p>
        Questions about these terms may be sent to{" "}
        <a href="mailto:evergreenlk@gmail.com">evergreenlk@gmail.com</a>.
      </p>
    ),
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      eyebrow="Website information"
      title="Terms of Use"
      summary="Clear, practical conditions for using the Evergreen Lighting Malaysia website and its content."
      lastUpdated="27 July 2026"
      path="/terms-of-use"
      sections={sections}
    />
  );
}
