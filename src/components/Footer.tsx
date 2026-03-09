import { companyInfo } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-cream-dark px-6 sm:px-8 lg:px-12">
      <div className="container-max py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Logo variant="navy" className="h-10 w-auto" />
            <p className="text-navy/40 text-sm mt-3">{companyInfo.address}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-navy/50">
            <a href={`tel:${companyInfo.phone}`} className="hover:text-navy transition-colors">
              {companyInfo.phone}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="hover:text-navy transition-colors">
              {companyInfo.email}
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream-dark text-navy/30 text-xs">
          &copy; {new Date().getFullYear()} {companyInfo.name}
        </div>
      </div>
    </footer>
  );
}
