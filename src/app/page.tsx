import Link from "next/link";
import Hero from "@/components/Hero";
import ImageMarquee from "@/components/ImageMarquee";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import { testimonials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      <ImageMarquee />

      <section className="section-padding border-t border-paper-dark">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bold tracking-tight text-3xl text-charcoal">
                Decks are all we do.
              </h2>
            </div>
            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                We&apos;re a custom deck builder serving Barrington and the NW
                Chicago suburbs. Cedar, composite, and pressure-treated - plus the
                railings, stairs, lighting, and built-in features that make a deck
                truly&nbsp;yours.
              </p>
              <p>
                Every deck starts with a conversation about how you want to use the
                space. From there, we create a 3D design so you can see exactly what
                we&apos;re building before a single board is&nbsp;cut.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-paper-dark">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bold tracking-tight text-3xl text-charcoal">Kind words</h2>
            </div>
            <div>
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
