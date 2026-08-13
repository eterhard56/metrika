"use client";

import { useEffect, useState } from "react";
import { agency } from "@/data/agency";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-fog/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-baseline gap-2">
          <span
            className={`font-display text-lg font-semibold tracking-tight transition-colors md:text-xl ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            МЕТРИКА
          </span>
          <span
            className={`hidden text-xs uppercase tracking-[0.22em] sm:inline ${
              scrolled ? "text-stone" : "text-white/60"
            }`}
          >
            Оренбург
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {[
            ["Каталог", "#catalog"],
            ["Подход", "#approach"],
            ["Контакты", "#contacts"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`transition-colors hover:text-signal ${
                scrolled ? "text-ink/80" : "text-white/80"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:+${agency.phones[0].e164}`}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            scrolled
              ? "bg-ink text-fog hover:bg-moss"
              : "bg-white/15 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/25"
          }`}
        >
          {agency.phones[0].display}
        </a>
      </div>
    </header>
  );
}
