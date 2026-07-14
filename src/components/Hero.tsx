"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="mission100" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Large Faceted Bull Background */}
      <div className="absolute inset-0 md:inset-auto md:right-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-1/2 h-full md:h-screen opacity-5 md:opacity-20 pointer-events-none faceted-bull flex items-center justify-center">
        <img 
          className="w-full h-full object-cover md:object-contain" 
          alt="Low-poly 3D faceted gold bull statue" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkpK0e8gtvqvu8Uwca4obmnQKMP-IF4AaZ9BQQkjmeGjw10RPw9W7fiDofWTjMm0A-tpanE7Ey8_khfVourzqDuElt1j_UR6RNSXDAEEZ00CJ2EkwiemhIVoL6D6eot9MII6cJthjAvjYyV654XG8JGrqZeYCGfoNHboO9-szIckled_5-JO30xZxyihPhp06e8Yh72uQBlQZbJcngfH2ErjwZHNZ_vv0E2w0GJULbjCCPepV8RLXofnEn8mj-MOC7Wu_jB9xT0ljB"
        />
      </div>

      <div className="relative z-10 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-panel border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-xs md:text-sm text-primary tracking-wider uppercase font-semibold">MISSION 100</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[72px] font-bold text-on-background leading-tight tracking-tight">
            Building <span className="text-primary italic">$100</span> <br/>
            <span className="text-on-surface-variant font-medium">Into</span> $1,000,000.
          </h1>

          <div className="space-y-4">
            <p className="font-sans text-xl md:text-2xl font-semibold text-on-surface">
              Every trade. Every win. Every loss. Documented publicly.
            </p>
            <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
              I’m documenting every step of this challenge in public while trading live and teaching the exact frameworks behind every decision.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 pt-4">
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-on-primary font-mono text-[10px] sm:text-xs md:text-base font-bold px-3 py-2 sm:px-4 sm:py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl flex items-center justify-center gap-2 md:gap-3 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 uppercase cursor-pointer"
            >
              Watch Live
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('prime')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass-panel text-on-surface border border-outline-variant font-mono text-[10px] sm:text-xs md:text-base font-bold px-3 py-2 sm:px-4 sm:py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:bg-surface-container-high hover:border-primary/50 transition-colors uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              Join PRIME
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass-panel text-on-surface border border-outline-variant font-mono text-[10px] sm:text-xs md:text-base font-bold px-3 py-2 sm:px-4 sm:py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl hover:bg-surface-container-high hover:border-primary/50 transition-colors uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              Gold Clutch Academy
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
