"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "primex-cookie-consent";

export function CookieBanner(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (choice: "all" | "essential"): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, timestamp: Date.now() }));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[60]"
          role="dialog"
          aria-label="Aviso de cookies"
        >
          <div className="relative rounded-2xl border border-primex-gray-800 bg-primex-dark/95 backdrop-blur-xl p-5 md:p-6 shadow-2xl shadow-primex-black/60">
            <button
              onClick={() => handleAccept("essential")}
              aria-label="Fechar e aceitar apenas essenciais"
              className="absolute top-3 right-3 p-1.5 rounded-lg text-primex-gray-500 hover:text-primex-white hover:bg-primex-white/5 transition-colors"
            >
              <X size={16} />
            </button>
            <div className="flex items-start gap-3 mb-3">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primex-green/10 border border-primex-green/20 flex items-center justify-center">
                <Cookie size={20} className="text-primex-green" />
              </div>
              <div className="pt-0.5">
                <h3 className="font-display font-bold text-primex-white text-base">
                  Nós usamos cookies
                </h3>
                <p className="text-primex-gray-300 text-xs mt-0.5">
                  Para melhorar sua experiência
                </p>
              </div>
            </div>
            <p className="text-primex-gray-300 text-sm leading-relaxed mb-4">
              Usamos cookies essenciais para o funcionamento do site e
              cookies analíticos para entender como você navega. Saiba mais
              na nossa{" "}
              <Link
                href="/privacidade"
                className="text-primex-green hover:underline font-medium"
              >
                Política de Privacidade
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={() => handleAccept("all")}
                size="sm"
                className="flex-1 bg-primex-green hover:bg-primex-green-hover text-primex-black font-semibold h-10"
              >
                Aceitar todos
              </Button>
              <Button
                onClick={() => handleAccept("essential")}
                size="sm"
                variant="outline"
                className="flex-1 border-primex-gray-700 text-primex-white hover:bg-primex-gray-900 h-10"
              >
                Apenas essenciais
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
