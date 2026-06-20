import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background image */}
      <img
        src="/images/completed%20hero%20photos/IMG_1103.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Charcoal overlay */}
      <div className="absolute inset-0 bg-charcoal/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 py-20 sm:py-28 max-w-3xl mx-auto">
        {/* Stacked brand lockup - yard-sign style */}
        <Logo
          variant="dark"
          stacked
          className="text-base sm:text-xl lg:text-2xl"
        />

        <h1 className="text-paper/70 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed mt-8 font-normal">
          Custom decks, designed and built&nbsp;by&nbsp;hand
        </h1>
        <p className="text-paper/50 text-xs sm:text-sm tracking-[0.15em] uppercase mt-4">
          Barrington &amp; the NW Chicago Suburbs
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-timber">
            Start a Conversation
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-paper/40 text-paper font-sans text-sm tracking-wide hover:bg-paper/10 transition-colors duration-200"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
