"use client";

import { motion } from "framer-motion";
import { EquityCurveTerminal } from "./EquityCurveTerminal";

export function MissionStatus() {
  return (
    <section className="py-8 md:py-16 relative z-20">
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl"
        >
          <EquityCurveTerminal />
        </motion.div>
      </div>
    </section>
  );
}
