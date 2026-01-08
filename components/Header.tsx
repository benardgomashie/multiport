"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getPersonaColor = () => {
    if (pathname.startsWith("/founder")) return "border-founder";
    if (pathname.startsWith("/developer")) return "border-developer";
    if (pathname.startsWith("/researcher")) return "border-researcher";
    return "border-gray-900";
  };

  const navLinks = [
    { href: "/founder", label: "Founder", color: "text-founder hover:text-founder-dark" },
    { href: "/developer", label: "Developer", color: "text-developer hover:text-developer-dark" },
    { href: "/researcher", label: "Researcher", color: "text-researcher hover:text-researcher-dark" },
    { href: "/contact", label: "Contact", color: "text-gray-700 hover:text-gray-900" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 ${getPersonaColor()} transition-colors`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            BG
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? link.color.split(" ")[0]
                    : link.color
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    pathname === link.href
                      ? link.color.split(" ")[0]
                      : link.color
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
