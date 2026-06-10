import Link from "next/link";
import { BrandMark } from "./Logo";

export default function CTABanner() {
  return (
    <section className="bg-charcoal">
      <div className="container-max px-6 sm:px-8 lg:px-12 py-20 sm:py-28 text-center">
        <BrandMark className="w-12 h-12 mx-auto mb-6" />
        <h2 className="font-bold tracking-tight text-3xl sm:text-4xl text-paper">
          Have a project in mind?
        </h2>
        <p className="text-paper/60 mt-4 max-w-md mx-auto">
          Tell us what you&apos;re thinking. We&apos;ll come take a look and put
          together a design.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn-timber">
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
