"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Send, Bell } from "lucide-react";

export function FreeTelegram() {
  const benefits = [
    "Public Market Updates",
    "Challenge Announcements",
    "Livestream Notifications",
    "Community Updates"
  ];

  return (
    <section id="telegram" className="py-24 relative bg-surface-container-lowest">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none opacity-40"></div>
      
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-primary/20 text-center relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 opacity-5 pointer-events-none">
            <Send className="w-96 h-96 text-on-surface" />
          </div>

          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Send className="w-8 h-8 text-primary -ml-1" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-4 uppercase tracking-tight">
            Follow The <span className="italic text-primary">Public Challenge</span>
          </h2>
          
          <p className="font-mono text-sm md:text-base text-on-surface-variant mb-12 tracking-widest uppercase">
            Free Telegram Community
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12 max-w-2xl mx-auto text-left">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-surface-container/50 p-4 rounded-xl border border-outline-variant">
                <Bell className="w-5 h-5 text-primary" />
                <span className="font-sans text-base text-on-surface font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <a 
            href={siteConfig.links.freeTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-primary text-on-primary font-mono text-sm md:text-base font-bold px-10 py-5 rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)] uppercase items-center gap-3"
          >
            Join Free Telegram
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
