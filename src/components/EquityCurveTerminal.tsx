"use client";

import { motion } from "framer-motion";

export function EquityCurveTerminal() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full glass-panel p-6 md:p-8 rounded-3xl border border-outline-variant/50 shadow-2xl bg-surface/80 backdrop-blur-xl relative overflow-hidden"
    >
      <div className="terminal-scanline absolute inset-0 pointer-events-none"></div>
      
      {/* Header */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">
            Active Mission
          </p>
          <p className="font-mono text-xs md:text-sm text-primary font-semibold uppercase tracking-wider">
            M100-INST-TERMINAL_01
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">
            Session Time
          </p>
          <p className="font-mono text-xs text-on-surface font-semibold">
            04:22:15:08
          </p>
        </div>
      </div>

      {/* Equity Curve Graph */}
      <div className="mb-6 relative z-10">
        <div className="flex justify-between items-end mb-4">
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
            Equity Curve
          </p>
          <p className="font-mono text-2xl md:text-3xl text-primary font-bold">
            $442,109.20
          </p>
        </div>
        
        <div className="h-32 md:h-48 w-full bg-surface-container/50 border border-outline-variant/30 rounded-xl relative overflow-hidden flex items-center justify-center p-4">
           {/* SVG Smooth Line Chart */}
           <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="glow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(212,175,55,0.3)" />
                  <stop offset="100%" stopColor="rgba(212,175,55,0)" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M0,80 C50,70 100,85 150,70 C200,50 250,20 300,50 C350,80 380,75 400,20"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
                className="drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
              />
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M0,80 C50,70 100,85 150,70 C200,50 250,20 300,50 C350,80 380,75 400,20 L400,100 L0,100 Z"
                fill="url(#glow)"
              />
           </svg>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
        <div className="bg-surface-container/30 border border-outline-variant/30 p-4 rounded-xl">
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">
            Win Rate
          </p>
          <p className="font-mono text-xl md:text-2xl text-on-surface font-semibold">
            68.4%
          </p>
        </div>
        <div className="bg-surface-container/30 border border-outline-variant/30 p-4 rounded-xl">
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">
            Max DD
          </p>
          <p className="font-mono text-xl md:text-2xl text-error font-semibold drop-shadow-[0_0_8px_rgba(229,115,115,0.3)]">
            -4.21%
          </p>
        </div>
      </div>

      {/* Ticker Bottom */}
      <div className="border-t border-outline-variant/30 pt-4 flex relative z-10">
        <div className="flex flex-wrap justify-between gap-2 md:gap-4 font-mono text-[9px] md:text-[10px] text-primary uppercase font-semibold w-full">
          <span>XAUUSD: 2,324.50</span>
          <span>EURUSD: 1.0821</span>
          <span>BTCUSD: 67,422.0</span>
        </div>
      </div>

    </motion.div>
  );
}
