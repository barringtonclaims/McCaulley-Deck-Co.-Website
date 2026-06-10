"use client";

import { useState } from "react";

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

    try {
      const res = await fetch("https://formspree.io/f/xlgplgpn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
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
            <option value="deck">Deck</option>
            <option value="patio">Patio</option>
            <option value="pergola">Pergola</option>
            <option value="outdoor-living">Full Outdoor Living</option>
            <option value="other">Other</option>
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
