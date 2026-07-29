import { LegalPage, type LegalSection } from "@/components/pages/legal-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How Evergreen Lighting Malaysia handles personal data, website enquiries, technical information, retention, and privacy requests.",
  path: "/privacy-policy",
  image: "/images/pages/industry-designers.webp",
  imageAlt: "Evergreen Lighting installation in a modern interior",
  imageWidth: 2400,
  imageHeight: 1004,
});

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Who this notice applies to",
    content: (
      <>
        <p>
          This notice explains how Evergreen Lighting Malaysia (“Evergreen”,
          “we”, “our”, or “us”) handles personal data when you visit this
          website, contact us, or communicate with our team about a product,
          service, project, or business relationship.
        </p>
        <p>
          It is written with reference to Malaysia’s Personal Data Protection
          Act 2010 (Act 709), as amended, and the guidance published by the
          Personal Data Protection Commissioner.
        </p>
      </>
    ),
  },
  {
    id: "data-we-handle",
    title: "Personal data we may handle",
    content: (
      <>
        <p>Depending on how you contact us, this may include:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>your name, email address, telephone number, and organisation;</li>
          <li>
            project details, lighting requirements, messages, attachments, and
            other information you choose to include;
          </li>
          <li>
            records of our correspondence, quotations, or service discussions;
          </li>
          <li>
            limited technical information, such as IP address, browser type,
            requested URL, and timestamp, where recorded by our hosting or
            security infrastructure.
          </li>
        </ul>
        <p>
          Please do not send identity documents, financial details, health
          information, or other sensitive information unless we specifically
          request it for a legitimate and clearly explained purpose.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    title: "How information reaches us",
    content: (
      <>
        <p>
          The website’s contact form does not store your message in a website
          database. It prepares an email in your own email application. Your
          information reaches Evergreen only if you choose to send that email.
        </p>
        <p>
          We may also receive information when you email, telephone, meet, or
          otherwise communicate with us, or when another project participant
          provides your business contact details for a relevant purpose.
        </p>
      </>
    ),
  },
  {
    id: "purposes",
    title: "Why we use personal data",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>to respond to enquiries and provide requested information;</li>
        <li>
          to prepare consultations, quotations, specifications, or project
          communications;
        </li>
        <li>to provide and improve our products, services, and website;</li>
        <li>
          to maintain business, safety, security, accounting, and legal records;
        </li>
        <li>
          to protect our systems, prevent misuse, and investigate security
          incidents;
        </li>
        <li>to comply with applicable law and lawful authority requests.</li>
      </ul>
    ),
  },
  {
    id: "disclosure",
    title: "Disclosure and service providers",
    content: (
      <>
        <p>
          We do not sell personal data. We may share information only where
          reasonably necessary with relevant Evergreen group personnel, project
          partners you expect us to coordinate with, professional advisers, or
          service providers that support hosting, communications, security, and
          business administration.
        </p>
        <p>
          Some providers may process information outside Malaysia. Where this
          occurs, we take reasonable steps to use appropriate protections and
          limit processing to the intended service.
        </p>
      </>
    ),
  },
  {
    id: "retention-security",
    title: "Retention and security",
    content: (
      <>
        <p>
          We retain personal data only for as long as reasonably necessary for
          the purpose for which it was collected, to maintain appropriate
          project and business records, or to meet legal requirements.
        </p>
        <p>
          We use proportionate administrative and technical safeguards. No
          internet transmission or storage method is completely secure, so
          absolute security cannot be guaranteed. If a qualifying personal data
          breach occurs, we will respond in accordance with applicable
          Malaysian notification requirements.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your choices and rights",
    content: (
      <>
        <p>
          Subject to applicable law, you may ask to access or correct personal
          data we hold about you, withdraw a consent you previously provided,
          or request that certain processing be limited. We may need to verify
          your identity and may retain information where the law allows or
          requires it.
        </p>
        <p>
          For general information about Malaysia’s personal data framework, you
          may visit the{" "}
          <a
            href="https://www.pdp.gov.my/ppdpv1/en/"
            target="_blank"
            rel="noreferrer"
          >
            Personal Data Protection Commissioner
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "children-links",
    title: "Interactive maps and external links",
    content: (
      <>
        <p>
          Maps on the contact page are inactive until you choose “Load
          interactive map”. If you load a map or open it in Google Maps, your
          browser connects directly to Google. Google may receive technical
          request data, including your IP address and browser information, and
          will handle it under its own privacy terms.
        </p>
        <p>
          External websites and email services operate under their own privacy
          terms. We are not responsible for their practices and encourage you
          to review their notices before providing information.
        </p>
        <p>
          This business website is not directed to children, and we do not
          knowingly request personal data from children through it.
        </p>
      </>
    ),
  },
  {
    id: "contact-changes",
    title: "Contact and changes",
    content: (
      <>
        <p>
          Privacy questions, correction requests, or complaints may be sent to{" "}
          <a href="mailto:evergreenlk@gmail.com">evergreenlk@gmail.com</a>.
          Please describe your request clearly and avoid including unnecessary
          sensitive information.
        </p>
        <p>
          We may update this notice when our services, technology, or legal
          obligations change. The date at the top identifies the current
          version.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal & Privacy"
      title="Privacy Policy"
      summary="A clear explanation of what information this website handles, why it may be used, and the choices available to you."
      lastUpdated="29 July 2026"
      path="/privacy-policy"
      sections={sections}
    />
  );
}
