"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Image/Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-outline-variant relative z-10">
              <div className="absolute inset-0 bg-surface-container-high animate-pulse"></div>
              {/* Placeholder for Hitesh Sakhare's Image */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop" 
                alt="Hitesh Sakhare" 
                className="w-full h-full object-cover relative z-10 grayscale-[50%] contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-[80px] z-0"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-[60px] z-0"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4 font-semibold">
                THE TRADER BEHIND THE TERMINAL
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface mb-8">
                Meet <span className="text-primary italic">Hitesh Sakhare</span>
              </h2>
            </div>
            
            <div className="space-y-6 font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
              <p>
                I’m a full-time Forex trader from India with over five years of market experience.
              </p>
              <p>
                My trading journey didn’t begin with a large account or a flashy lifestyle. It was built through years of studying price action, refining execution, and developing repeatable trading frameworks.
              </p>
              <p>
                Today, I’m documenting one of my biggest public projects yet—<strong>Mission 100</strong>, where I’m attempting to turn $100 into $1,000,000 while showing both winning and losing days.
              </p>
              <p>
                Alongside the challenge, I teach the same trading frameworks I use every day inside Gold Clutch Academy, mentor traders through PRIME, and trade live on YouTube so people can see my process in real time.
              </p>
              <p className="text-on-surface font-semibold text-lg md:text-xl border-l-4 border-primary pl-6 mt-8 py-2">
                My goal isn’t to promise shortcuts. It’s to build disciplined traders who understand market structure, execution, and risk management.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
