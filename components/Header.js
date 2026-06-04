"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Monogram from "./Monogram";
import { profile } from "@/data/portfolio";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--hair)] bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <Monogram />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-mono text-[12px] uppercase tracking-wide2 text-ink-soft transition-colors hover:text-accent"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {profile.available && (
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide2 text-ink-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse2 rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to work
            </span>
          )}
          <a
            href={profile.cv}
            download
            className="btn btn-fill !px-4 !py-2.5"
          >
            Résumé
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-px w-6 bg-ink transition-all duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-all duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[color:var(--hair)] bg-paper/95 backdrop-blur-xl transition-all duration-400 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="shell flex flex-col py-4">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-[color:var(--hair)] py-3.5 font-mono text-[12px] uppercase tracking-wide2 text-ink-soft"
            >
              {n.label}
            </Link>
          ))}
          <a href={profile.cv} download className="btn btn-fill mt-4">
            Download Résumé
          </a>
        </div>
      </div>
    </header>
  );
}
