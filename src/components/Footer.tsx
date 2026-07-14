"use client";

import { Terminal, Activity } from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  const footerLinks = [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: siteConfig.links.watchLive },
    { label: "PRIME", href: siteConfig.links.joinPrime },
    { label: "Gold Clutch Academy", href: siteConfig.links.goldClutchAcademy },
    { label: "Free Telegram", href: siteConfig.links.freeTelegram },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/50 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-gutter)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-12 max-w-[var(--spacing-container-max)] mx-auto">
        
        <div className="space-y-6">
          <div className="text-2xl font-display text-on-surface uppercase font-bold tracking-tighter">MISSION 100</div>
          <p className="font-mono text-[10px] md:text-xs text-on-surface-variant max-w-sm uppercase leading-relaxed tracking-wider">
            © 2024 MISSION 100. INSTITUTIONAL GRADE TRADING TERMINAL. REGULATED ACCESS ONLY. ALL CAPITAL IS AT RISK.
          </p>
          <div className="flex gap-4 font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-8 font-mono text-[10px] md:text-xs uppercase tracking-widest font-semibold max-w-lg md:justify-end">
            {footerLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}
