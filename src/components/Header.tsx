"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Logo from "./Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-paper border-b border-paper-dark px-6 sm:px-8 lg:px-12">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="block">
            <Logo variant="light" className="text-lg sm:text-xl" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors pb-1 border-b-2 ${
                  pathname === link.href
                    ? "text-charcoal font-medium border-timber"
                    : "text-charcoal/70 hover:text-charcoal border-transparent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-charcoal/60 hover:text-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-paper-dark">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm tracking-wide ${
                  pathname === link.href
                    ? "text-charcoal font-medium"
                    : "text-charcoal/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
