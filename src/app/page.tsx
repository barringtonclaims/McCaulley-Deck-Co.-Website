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
                Design. Build. Enjoy.
              </h2>
            </div>
            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                Every project starts with a conversation about how you want to
                use your outdoor space. From there, we create a 3D design so
                you can see exactly what we&apos;re building before a single board
                is&nbsp;cut.
              </p>
              <p>
                We specialize in custom decks - but we also build pergolas, patios,
                roof overhangs, and full outdoor living areas. Whatever the project
                calls&nbsp;for.
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
