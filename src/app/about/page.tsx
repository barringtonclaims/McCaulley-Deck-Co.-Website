import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import ProgressMarquee from "@/components/ProgressMarquee";

export const metadata: Metadata = {
  title: "About",
  description:
    "Custom outdoor design and build - from concept to finished project.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="font-bold tracking-tight text-4xl sm:text-5xl text-charcoal">About</h1>
            </div>
            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                McCaulley Deck Co. is a design/build company focused on custom
                outdoor spaces. We work primarily in decks, but we also take on
                pergolas, patios, roof overhangs, and full outdoor living
                builds - whatever the project&nbsp;needs.
              </p>
              <p>
                Every project starts with a design. We create 3D models so
                you can see exactly what we&apos;re building before anything is cut
                or poured. No surprises, no&nbsp;guesswork.
              </p>
              <p>
                Our crew takes real pride in the work. We don&apos;t rush, we
                don&apos;t cut corners, and we don&apos;t consider a job done until
                you&apos;re happy with&nbsp;it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProgressMarquee />

      <section className="section-padding border-t border-paper-dark">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bold tracking-tight text-3xl text-charcoal">The process</h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Conversation",
                  desc: "We come out to your place, walk the space, and talk about what you\u2019re looking for.",
                },
                {
                  title: "Design",
                  desc: "We create a 3D design of the build so you can see it, adjust it, and sign off before we start.",
                },
                {
                  title: "Build",
                  desc: "Our crew handles everything \u2014 on time, on budget, with clean work and clear communication.",
                },
                {
                  title: "Walkthrough",
                  desc: "We walk the finished project together. If anything\u2019s not right, we make it right.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="py-6 border-b border-paper-dark last:border-b-0"
                >
                  <h3 className="font-bold tracking-tight text-xl text-charcoal">{step.title}</h3>
                  <p className="text-charcoal/65 mt-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
