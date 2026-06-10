import { companyInfo } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-paper/10 px-6 sm:px-8 lg:px-12">
      <div className="container-max py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Logo variant="dark" className="text-base" />
            <p className="text-paper/40 text-sm mt-4">{companyInfo.address}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-paper/60">
            <a
              href={`tel:${companyInfo.phone}`}
              className="hover:text-timber transition-colors"
            >
              {companyInfo.phone}
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="hover:text-timber transition-colors"
            >
              {companyInfo.email}
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-paper/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-paper/40 text-xs">
            &copy; {new Date().getFullYear()} {companyInfo.name}
          </p>
          <p className="text-paper/40 text-xs italic">{companyInfo.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
