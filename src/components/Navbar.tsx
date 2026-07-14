"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const navLinks = [
    { label: "Mission 100", href: "#mission100" },
    { label: "Live", href: "#live" },
    { label: "PRIME", href: "#prime" },
    { label: "Academy", href: "#academy" },
    { label: "Free Telegram", href: "#telegram" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-[40px] border-b border-primary/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
      <nav className="flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-4 max-w-[var(--spacing-container-max)] mx-auto">
        <Link href="/" className="text-xl md:text-2xl font-display text-primary tracking-tighter uppercase font-semibold hover:glow-gold transition-all">
          MISSION 100
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-sm md:text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 ease-out uppercase tracking-widest hover:glow-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a 
          href={siteConfig.links.watchLive}
          target="_blank"
          rel="noopener noreferrer" 
          className="bg-primary text-on-primary font-mono text-xs md:text-sm px-6 py-2 rounded-lg hover:opacity-80 transition-opacity duration-300 ease-out font-bold uppercase flex items-center gap-2 shadow-[0_0_10px_rgba(212,175,55,0.3)]"
        >
          Watch Live
        </a>
      </nav>
    </header>
  );
}
