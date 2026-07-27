"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Evergreen Malaysia enquiry from ${String(data.get("name"))}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${String(data.get("name"))}`,
        `Email: ${String(data.get("email"))}`,
        `Phone: ${String(data.get("phone") || "Not provided")}`,
        `Service: ${String(data.get("service"))}`,
        "",
        String(data.get("message")),
      ].join("\n"),
    );

    setSubmitted(true);
    window.location.href = `mailto:evergreenlk@gmail.com?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "focus-ring min-h-12 w-full border border-evergreen-900/12 bg-white px-4 text-sm text-evergreen-950 placeholder:text-black/35";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-evergreen-500/68 p-4 sm:p-6"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          placeholder="Name*"
          className={fieldClass}
        />
        <label className="sr-only" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email*"
          className={fieldClass}
        />
        <label className="sr-only" htmlFor="contact-phone">
          Contact number
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Contact number"
          className={fieldClass}
        />
        <label className="sr-only" htmlFor="contact-service">
          Service
        </label>
        <select
          id="contact-service"
          name="service"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Interested service*
          </option>
          <option>Residential lighting</option>
          <option>Commercial lighting</option>
          <option>Industrial lighting</option>
          <option>Designer collaboration</option>
          <option>General enquiry</option>
        </select>
      </div>

      <label className="sr-only" htmlFor="contact-message">
        Comments
      </label>
      <textarea
        id="contact-message"
        name="message"
        required
        rows={6}
        placeholder="Comments*"
        className={`${fieldClass} mt-3 resize-y py-4`}
      />

      <button
        type="submit"
        className="focus-ring mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-evergreen-800 px-6 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-evergreen-950"
      >
        Submit
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </button>

      {submitted ? (
        <p
          role="status"
          className="mt-4 flex items-center gap-2 text-sm font-medium text-evergreen-950"
        >
          <CheckCircle2 aria-hidden="true" className="size-4" />
          Your email application is opening with the completed enquiry.
        </p>
      ) : null}

      <p className="mt-4 text-xs leading-5 text-evergreen-950/65">
        This form prepares an email in your own email application. See how we
        handle enquiry details in our{" "}
        <Link
          href="/privacy-policy"
          className="focus-ring font-semibold underline decoration-evergreen-950/30 underline-offset-2 hover:decoration-evergreen-950"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
