"use client";

import { motion } from "framer-motion";

export function Allocations() {
  const allocations = [
    {
      id: "TR_01",
      traderId: "ALPHA_X",
      fundedBy: "FTMO",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOVjHLoMjLa6vPZz6tgSguBUyPt4heficJb9CzNg_QayklB8sIzfB6hUr_rNOYYO_8DW5yLMgFpR2ymFkPhIzSEUCR8zjzn7asOPoN7cSDg6kFhSWjShC0suDIrevT7KZBu7MLHS10It2jc8XNQsynGQGHdG4vlNyu8A43ROkl3uYHw267yiYI7XvMgUYIQggmcST_9jBbaQxzpSkKk00NuFxasLTpquNiMc_ERZ8Wc4Z6GnUjamQWB3Vss9ODJrUj4uWo13JMhzz6",
      quote: "The risk management modules in Mission 100 changed everything for my funded journey."
    },
    {
      id: "TR_02",
      traderId: "QUANT_V",
      fundedBy: "MYFOREXFUNDS",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh_TyvMNLZBqxdB6lGQnmLLBQ25ZBXREU-bppK4776BGZYX5KOUK6WsQQQl2RW5XERhuaQYxQ8fWLLPqPVh29whZwz3VXCXSq5dmRhPAihJGgj5AKlMBOJEHPoxk_9Snd2ulmTiIYVztOKw91UVbyyNzIAEiwO1uG1gpFEOAEHj4Sxz3JiIb4iW01oJG_l08BPvR8awa_v0IUloV0L7hyNHW9rQYLrXK_sy3jikheVFYAItz-ubk2UB6TIbReK5awF9WJJ-bphZau3",
      quote: "Consistency found through the terminal's data clarity."
    },
    {
      id: "TR_03",
      traderId: "DELTA_9",
      fundedBy: "MISSION COMPLETE",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5OsSNRxez06VMfVnFP1Mvr5TQ6ejSkgc7k2RsCK7X3THHU_2AEhJC7dRpBBEIkbZL7rSLw3rrFUArIylvS0nI1TVU-lsEu0RzZdK7oUFSMx1N_gYjAo1Dp6fhCCiWd9KIAn5ImqkE9a408JUYVqC6x44zfnaXXq2qoLu4gfq2u8Z8pTTjkBhiWbhJdK7XLhlgt-zv4v4ok8ASbNDT0MEvByonRDt8SRsxOSdCo_sj9HBZIzUpIjFpyIRJ5inTBoYIGV6tNffEeyWM",
      quote: "First payout from the terminal strategy funded my entire setup upgrade."
    }
  ];

  return (
    <section id="assets" className="py-12 md:py-24 bg-surface-container-lowest/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none opacity-50"></div>
      
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-semibold text-on-surface mb-4 uppercase tracking-wide"
          >
            Student <span className="text-primary italic">Results</span>
          </motion.h2>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-gutter)] overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-[var(--spacing-margin-mobile)] px-[var(--spacing-margin-mobile)] md:mx-0 md:px-0">
          {allocations.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="w-[85vw] md:w-auto shrink-0 snap-center glass-panel rounded-2xl border border-outline-variant p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-mono text-primary font-bold border border-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-shadow">
                  {item.id}
                </div>
                <div>
                  <div className="font-mono text-xs text-on-surface font-semibold tracking-wider">
                    TRADER_ID: <span className="text-primary">{item.traderId}</span>
                  </div>
                  <div className="font-mono text-[10px] text-on-surface-variant mt-1 tracking-widest uppercase">
                    STATUS: {item.fundedBy}
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg mb-6 border border-outline-variant/50 overflow-hidden relative group-hover:border-primary/30 transition-colors">
                <img 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  alt={`Proof of ${item.traderId}`} 
                  src={item.img} 
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="font-sans text-sm md:text-base text-on-surface italic leading-relaxed relative">
                <span className="text-primary text-2xl absolute -top-2 -left-2 opacity-50">"</span>
                <span className="relative z-10 pl-2">{item.quote}</span>
                <span className="text-primary text-2xl absolute -bottom-4 right-0 opacity-50">"</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
