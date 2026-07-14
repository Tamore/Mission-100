"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WatchLive() {
  return (
    <section id="live" className="py-12 md:py-24 bg-surface-container-lowest">
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
        
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-gutter)] items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-on-surface mb-6">
              Watch Me Trade <span className="text-primary italic">Live</span>
            </h2>
            <div className="space-y-4 font-sans text-base md:text-lg text-on-surface-variant">
              <p>
                Every trading day I analyze Gold, execute trades, manage risk, and explain my decision-making live on YouTube.
              </p>
              <ul className="space-y-2 font-semibold text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  No edited results.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  No cherry-picked trades.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Just the market in real time.
                </li>
              </ul>
            </div>
            
            <a 
              href={siteConfig.links.watchLive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 bg-primary text-on-primary font-mono text-sm md:text-base font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)] uppercase items-center gap-3"
            >
              Watch Live on YouTube
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="block relative rounded-3xl overflow-hidden glass-panel border border-outline-variant/50 shadow-2xl aspect-square xl:aspect-video group cursor-pointer mt-8 lg:mt-0"
            onClick={() => window.open(siteConfig.links.watchLive, '_blank')}
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" 
              alt="Trading workstation" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsIYR95ghq8hGtPCIBlJ6-i59V_EnrmDLbbevtvYFDLlBVdaYCWFnTnc1W8Dypa_934Z1iWfNeGHh1UFUS7AhphGoODV_lB5j1R6-K4YAJkK0AKTJLpf6vkhaoSD_B0AGjrFvTRfpvpglUsx5vQxE5sfPddULhpYHJBY-MS3QYcASZRy5l1y-6hSkTDu-ahlKlUKlfz78tkNK-dTf9Cl5ecp725LKkECVnkSk2EArIZr_VTt_VwkXDFVoL_4_RwUelvOSVga2G7XoG"
            />
            
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500"></div>

            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/40 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-primary ml-1 group-hover:text-on-primary transition-colors" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
