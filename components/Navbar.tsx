"use client";

import { useState } from "react";
import Button from "./Button";

const navigation = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Who I Help",
    href: "#who-i-help",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Approach",
    href: "#approach",
  },
  {
    name: "Our Office",
    href: "#office",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/60 bg-[var(--color-background)]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <a
          href="#"
          aria-label="Dr. Maya Reynolds home"
          className="font-serif text-2xl font-medium text-[var(--color-primary)]"
        >
          Maya Reynolds
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              {item.name}
            </a>
          ))}

          <Button href="#contact">
            Schedule a Consultation
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[var(--color-border)] lg:hidden"
        >
          <span className="h-px w-5 bg-[var(--color-primary)]" />
          <span className="h-px w-5 bg-[var(--color-primary)]" />
          <span className="h-px w-5 bg-[var(--color-primary)]" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-background)] shadow-sm md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[var(--color-border)] py-4 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-5">
              <Button
                href="#contact"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Schedule a Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}