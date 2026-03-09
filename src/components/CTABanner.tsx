import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="border-t border-cream-dark">
      <div className="container-max px-6 sm:px-8 lg:px-12 py-20 sm:py-28 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-navy">
          Have a project in mind?
        </h2>
        <p className="text-navy/50 mt-4 max-w-md mx-auto">
          Tell us what you&apos;re thinking. We&apos;ll come take a look and put
          together a design.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
