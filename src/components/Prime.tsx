"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { CheckCircle2, TrendingUp } from "lucide-react";

export function Prime() {
  const insidePrime = [
    "London Session Bias",
    "New York Session Bias",
    "Key Trading Levels",
    "Weekly Trade Reviews"
  ];

  return (
    <section id="prime" className="py-12 md:py-24 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none opacity-50"></div>
      
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-panel border border-primary/20 mb-6"
          >
            <span className="font-mono text-xs text-primary tracking-wider uppercase font-semibold">PRIME</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-semibold text-on-surface mb-4"
          >
            Trade With Greater <span className="text-primary italic">Context</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            Get access to my daily market preparation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-gutter)] max-w-5xl mx-auto mb-12">
          
          {/* Inside PRIME */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-outline-variant hover:border-primary/30 transition-colors"
          >
            <h3 className="font-display text-2xl text-on-surface mb-8 font-semibold flex items-center gap-3">
              <CheckCircle2 className="text-primary w-6 h-6" /> Inside PRIME
            </h3>
            <ul className="space-y-4">
              {insidePrime.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface-variant font-sans text-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PRIME Performance */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-outline-variant hover:border-primary/30 transition-colors bg-surface-container-high/50"
          >
            <h3 className="font-display text-2xl text-on-surface mb-8 font-semibold flex items-center gap-3">
              <TrendingUp className="text-primary w-6 h-6" /> PRIME Performance
            </h3>
            
            <div className="space-y-6">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest block mb-1">Last Week Pips Captured</span>
                <span className="font-mono text-3xl font-bold text-success">{siteConfig.primePerformance.lastWeekPips}</span>
              </div>
              <div className="border-b border-outline-variant pb-4">
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest block mb-1">Total Pips Captured Since Launch</span>
                <span className="font-mono text-3xl font-bold text-primary">{siteConfig.primePerformance.totalPips}</span>
              </div>
              <div>
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest block mb-2">Sessions Covered</span>
                <div className="flex gap-2">
                  {siteConfig.primePerformance.sessionsCovered.map(session => (
                    <span key={session} className="px-3 py-1 rounded-md bg-surface-container border border-outline-variant font-mono text-sm text-on-surface">
                      {session}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href={siteConfig.links.joinPrime}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-primary text-on-primary font-mono text-sm md:text-base font-bold px-10 py-5 rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)] uppercase items-center gap-3"
          >
            Join PRIME
          </a>
        </motion.div>

      </div>
    </section>
  );
}
