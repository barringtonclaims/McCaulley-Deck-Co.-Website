import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | McCaulley Deck Co",
  description: "Get in touch for a free consultation on your outdoor project.",
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl text-navy">
              Get in touch
            </h1>
            <p className="text-navy/50 mt-4 leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within
              24 hours.
            </p>

            <div className="mt-12 space-y-4 text-sm text-navy/50">
              <p>
                <a href={`tel:${companyInfo.phone}`} className="hover:text-navy transition-colors">
                  {companyInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-navy transition-colors">
                  {companyInfo.email}
                </a>
              </p>
              <p>{companyInfo.address}</p>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
