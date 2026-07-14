"use client";

import { motion } from "framer-motion";

// Sample data for candlesticks
const candleData = [
  { isBullish: true, open: 40, close: 70, high: 80, low: 20 },
  { isBullish: false, open: 70, close: 50, high: 75, low: 40 },
  { isBullish: true, open: 50, close: 65, high: 85, low: 45 },
  { isBullish: true, open: 65, close: 90, high: 95, low: 55 },
  { isBullish: false, open: 90, close: 75, high: 95, low: 60 },
  { isBullish: true, open: 75, close: 85, high: 90, low: 65 },
  { isBullish: true, open: 85, close: 100, high: 110, low: 80 },
];

export function CandlestickChart() {
  return (
    <div className="w-full h-full min-h-[300px] flex items-end justify-between px-4 pb-8 pt-16 relative">
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-8">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-px bg-outline-variant/20"></div>
        ))}
      </div>

      <div className="flex w-full h-full items-end justify-between gap-2 md:gap-4 relative z-10 pt-12">
        {candleData.map((candle, index) => {
          // Normalize heights to percentages for CSS
          // Assuming max height represents 120
          const maxVal = 120;
          const bodyHeight = Math.abs(candle.close - candle.open);
          const bodyBottom = Math.min(candle.open, candle.close);
          
          const wickHeight = candle.high - candle.low;
          const wickBottom = candle.low;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="relative flex flex-col items-center justify-end w-full group origin-bottom"
              style={{ height: "100%" }}
            >
              {/* Wick */}
              <div 
                className={`absolute w-1 rounded-full ${candle.isBullish ? 'bg-success/50' : 'bg-error/50'}`}
                style={{ 
                  height: `${(wickHeight / maxVal) * 100}%`,
                  bottom: `${(wickBottom / maxVal) * 100}%`
                }}
              ></div>
              
              {/* Body */}
              <div 
                className={`absolute w-full max-w-[24px] md:max-w-[32px] rounded-sm transition-all duration-300 group-hover:scale-x-110 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${
                  candle.isBullish 
                    ? 'bg-success border border-success' 
                    : 'bg-error border border-error'
                }`}
                style={{ 
                  height: `${(bodyHeight / maxVal) * 100}%`,
                  bottom: `${(bodyBottom / maxVal) * 100}%`
                }}
              ></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
