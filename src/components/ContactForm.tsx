"use client";

import { useState } from "react";
import { reportLeadConversion } from "@/lib/gtag";
import { leadAttribution } from "@/lib/leadAttribution";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    for (const [key, value] of Object.entries(leadAttribution(window.location.search))) {
      data.set(key, value);
    }

    try {
      const res = await fetch("https://formspree.io/f/xlgplgpn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        reportLeadConversion();
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="font-bold tracking-tight text-2xl text-charcoal mb-2">Thank you</h3>
        <p className="text-charcoal/65">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-charcoal/70 mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-paper border border-paper-dark text-charcoal placeholder:text-charcoal/30 focus:border-bronze focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-charcoal/70 mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-paper border border-paper-dark text-charcoal placeholder:text-charcoal/30 focus:border-bronze focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm text-charcoal/70 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-paper border border-paper-dark text-charcoal placeholder:text-charcoal/30 focus:border-bronze focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="project-type" className="block text-sm text-charcoal/70 mb-1.5">
            Project type
          </label>
          <select
            id="project-type"
            name="project-type"
            className="w-full px-4 py-3 bg-paper border border-paper-dark text-charcoal focus:border-bronze focus:outline-none transition-colors"
          >
            <option value="">Select...</option>
            <option value="new-deck">New deck build</option>
            <option value="deck-replacement">Deck replacement / rebuild</option>
            <option value="composite-deck">Composite / Trex deck</option>
            <option value="cedar-deck">Cedar / wood deck</option>
            <option value="deck-addon">Railing, stairs or pergola</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="project-location" className="block text-sm text-charcoal/70 mb-1.5">
            Project town or ZIP code
          </label>
          <input
            type="text"
            id="project-location"
            name="project-location"
            required
            maxLength={120}
            aria-describedby="project-location-help"
            className="w-full px-4 py-3 bg-paper border border-paper-dark text-charcoal placeholder:text-charcoal/30 focus:border-bronze focus:outline-none transition-colors"
          />
          <p id="project-location-help" className="mt-1.5 text-sm text-charcoal/65">
            This helps us confirm we serve your area.
          </p>
        </div>
        <div>
          <label htmlFor="project-timing" className="block text-sm text-charcoal/70 mb-1.5">
            Preferred timing (optional)
          </label>
          <select
            id="project-timing"
            name="project-timing"
            className="w-full px-4 py-3 bg-paper border border-paper-dark text-charcoal focus:border-bronze focus:outline-none transition-colors"
          >
            <option value="">Select...</option>
            <option value="soon">As soon as practical</option>
            <option value="1-3-months">In the next 1–3 months</option>
            <option value="later">Later this year or next year</option>
            <option value="exploring">Just exploring options</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-charcoal/70 mb-1.5">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 bg-paper border border-paper-dark text-charcoal placeholder:text-charcoal/30 focus:border-bronze focus:outline-none transition-colors resize-none"
        />
      </div>

      <div>
        <label htmlFor="referral-source" className="block text-sm text-charcoal/70 mb-1.5">
          How did you hear about us? (optional)
        </label>
        <input
          type="text"
          id="referral-source"
          name="referral-source"
          maxLength={120}
          placeholder="Google, a friend, a local business…"
          className="w-full px-4 py-3 bg-paper border border-paper-dark text-charcoal placeholder:text-charcoal/30 focus:border-bronze focus:outline-none transition-colors"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-50">
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
