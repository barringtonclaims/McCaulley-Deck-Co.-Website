import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/images/completed%20hero%20photos/IMG_1103.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 py-20 sm:py-28 max-w-3xl mx-auto">
        {/* White logo badge */}
        <Logo variant="white" badge className="h-28 sm:h-36 lg:h-40 w-auto mx-auto mb-8" />

        <p className="text-cream/70 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed">
          Custom outdoor spaces, designed and built&nbsp;by&nbsp;hand
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-cream text-navy font-sans text-sm tracking-wide hover:bg-cream/90 transition-colors duration-200"
          >
            Start a Conversation
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-cream/40 text-cream font-sans text-sm tracking-wide hover:bg-cream/10 transition-colors duration-200"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
