"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Lock, Target } from "lucide-react";

export function Academy() {

  const frameworks = [
    {
      label: "Framework 01",
      title: "Gold Clutch™",
      desc: "A complete trading framework built for identifying and executing high-probability trades across different market conditions and trading sessions.",
      points: [
        "Market Structure",
        "Entries",
        "Execution",
        "Trade Management",
        "Risk Management"
      ]
    },
    {
      label: "Framework 02",
      title: "Black Magic Setup™ (BMS)",
      desc: "A complete session-specific trading framework designed to identify and execute high-probability momentum moves during the London and New York sessions.",
      points: [
        "Session Bias",
        "Session Entries",
        "Execution",
        "Trade Management",
        "Session Momentum"
      ]
    }
  ];

  return (
    <section id="academy" className="py-12 md:py-24 relative bg-surface-container-lowest overflow-hidden">
      {/* Candlestick Chart Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop" 
          alt="Candlestick Chart"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-panel border border-primary/20 mb-6"
          >
            <span className="font-mono text-xs text-primary tracking-wider uppercase font-semibold">GOLD CLUTCH ACADEMY</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-semibold text-on-surface mb-6 max-w-3xl mx-auto"
          >
            The Exact Trading Frameworks Behind <span className="text-primary italic">Mission 100</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            Every trade throughout the $100 → $1,000,000 Challenge is executed using one of these two complete trading frameworks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-gutter)] mb-16">
          {frameworks.map((fw, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="glass-panel p-8 md:p-12 rounded-3xl border border-outline-variant hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_10px_40px_rgba(212,175,55,0.05)] bg-surface/80 backdrop-blur-xl"
            >
              <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4 font-semibold">
                {fw.label}
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-on-surface mb-6 font-semibold">
                {fw.title}
              </h3>
              <p className="font-sans text-base text-on-surface-variant mb-8 leading-relaxed">
                {fw.desc}
              </p>
              
              <ul className="space-y-4 border-t border-outline-variant pt-8">
                {fw.points.map((pt, j) => (
                  <li key={j} className="flex items-center gap-4 text-on-surface font-sans text-lg">
                    <Target className="w-5 h-5 text-primary/70" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-panel p-8 md:p-10 rounded-3xl border border-outline-variant text-center bg-surface-container-high/60 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-surface-container border border-outline-variant flex items-center justify-center mb-6 relative z-10">
            <Lock className="w-6 h-6 text-on-surface-variant" />
          </div>
          
          <h3 className="font-display text-2xl text-on-surface mb-2 font-semibold relative z-10">
            {siteConfig.academyAdmissions.status}
          </h3>
          <p className="font-mono text-sm text-primary uppercase tracking-widest mb-6 relative z-10">
            Next Batch Opens: {siteConfig.academyAdmissions.nextBatch}
          </p>
          <p className="font-sans text-on-surface-variant mb-8 relative z-10">
            Join the priority waitlist and be the first to know when admissions open.
          </p>
          
          <a 
            href={siteConfig.links.priorityWaitlist}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex bg-transparent border-2 border-primary/50 text-primary font-mono text-sm md:text-base font-bold px-8 py-4 rounded-xl hover:bg-primary/10 transition-colors uppercase items-center gap-2"
          >
            Join Priority Waitlist
          </a>
        </motion.div>

      </div>

    </section>
  );
}
