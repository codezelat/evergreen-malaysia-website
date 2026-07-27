import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Evergreen Lighting Malaysia's commitment to an inclusive and accessible website experience.",
  alternates: {
    canonical: "/accessibility",
  },
};

const sections: LegalSection[] = [
  {
    id: "commitment",
    title: "Our commitment",
    content: (
      <>
        <p>
          Evergreen Lighting Malaysia wants this website to be usable by the
          widest practical audience, including people who use keyboards,
          screen readers, magnification, voice input, or reduced-motion
          settings.
        </p>
        <p>
          We use the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA
          as our design and engineering reference. This statement expresses our
          ongoing goal; it is not a claim of formal third-party certification.
        </p>
      </>
    ),
  },
  {
    id: "measures",
    title: "Measures in place",
    content: (
      <>
        <p>The website currently includes:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>semantic headings, landmarks, lists, and descriptive page titles;</li>
          <li>keyboard-operable navigation and visible focus treatment;</li>
          <li>labels and validation requirements for enquiry fields;</li>
          <li>alternative text for meaningful images;</li>
          <li>responsive layouts that reflow for smaller screens and zoom;</li>
          <li>colour and typography choices designed for readable contrast; and</li>
          <li>reduced or removed motion when a device requests reduced motion.</li>
        </ul>
      </>
    ),
  },
  {
    id: "testing",
    title: "Testing and limitations",
    content: (
      <>
        <p>
          We combine automated checks with keyboard, responsive-layout, and
          interaction testing. Automated tools are useful indicators, but they
          cannot establish complete accessibility on their own.
        </p>
        <p>
          External websites, email applications, browsers, operating systems,
          and assistive technologies are outside our control and may behave
          differently. We will address confirmed barriers in our own website
          as reasonably practicable.
        </p>
      </>
    ),
  },
  {
    id: "feedback",
    title: "Accessibility feedback",
    content: (
      <>
        <p>
          If you encounter a barrier, email{" "}
          <a href="mailto:evergreenlk@gmail.com">evergreenlk@gmail.com</a> and
          include the page address, what you were trying to do, and the browser
          or assistive technology involved where possible.
        </p>
        <p>
          We will review the issue and aim to provide the information in an
          accessible alternative while we investigate.
        </p>
      </>
    ),
  },
  {
    id: "improvement",
    title: "Continuous improvement",
    content: (
      <p>
        Accessibility is considered as the website evolves. We may update this
        statement after material design, content, or testing changes.
      </p>
    ),
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Inclusive experience"
      title="Accessibility"
      summary="Our approach to building a clear, keyboard-friendly, responsive website for people with a broad range of access needs."
      lastUpdated="27 July 2026"
      path="/accessibility"
      sections={sections}
    />
  );
}
