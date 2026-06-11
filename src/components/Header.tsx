"use client";

import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services", hasDropdown: true },
  { label: "ABOUT US", href: "#about" },
  { label: "CARRIERS", href: "#carriers" },
  { label: "CUSTOMERS", href: "#customers" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-main">
        <div className="grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-4">
          <a href="#home" aria-label="Perfomanto Freight Systems home" className="shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center justify-center gap-6 xl:gap-7 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-[10px] font-semibold tracking-[0.12em] text-[#4a4a5a] transition-colors hover:text-primary xl:text-[11px]"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                )}
              </a>
            ))}
          </nav>

          <a href="#quote" className="btn-primary hidden justify-self-end sm:inline-flex">
            GET A QUOTE
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded border border-border lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
              <path d="M0 1H20M0 7H20M0 13H20" stroke="#1a1a2e" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="border-t border-border py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[12px] font-semibold tracking-[0.1em] text-text-body"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#quote" className="btn-primary mt-2 w-fit" onClick={() => setMobileOpen(false)}>
                GET A QUOTE
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
