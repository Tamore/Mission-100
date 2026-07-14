"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mission100_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("mission100_cookie_consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto glass-panel p-4 md:p-6 rounded-2xl border border-primary/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto bg-surface/90 backdrop-blur-xl">
            <div className="text-on-surface-variant font-sans text-sm">
              We use cookies to improve your experience and analyze site traffic. By continuing to use this site, you agree to our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a> and <a href="/terms" className="underline hover:text-primary">Terms of Service</a>.
            </div>
            <button 
              onClick={acceptCookies}
              className="bg-primary text-on-primary px-6 py-2 rounded-xl font-mono text-xs uppercase font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
