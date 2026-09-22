"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"
import { faqItems } from "@/data/faq"

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section className="py-24 px-6 bg-primex-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,200,83,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium"
          >
            Dúvidas frequentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-primex-white mb-4"
          >
            PERGUNTAS <span className="text-primex-green">FREQUENTES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primex-gray-300 text-lg max-w-2xl mx-auto"
          >
            Respostas para as principais dúvidas sobre nossos serviços
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={[
                  "rounded-xl border transition-all duration-300 overflow-hidden backdrop-blur-sm",
                  isOpen
                    ? "bg-primex-black/60 border-primex-green/40 shadow-lg shadow-primex-green/5"
                    : "bg-primex-black/40 border-primex-gray-800 hover:border-primex-gray-700",
                ].join(" ")}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={[
                      "font-display font-semibold text-base md:text-lg transition-colors pr-4",
                      isOpen ? "text-primex-green" : "text-primex-white",
                    ].join(" ")}
                  >
                    {item.question}
                  </span>
                  <span
                    className={[
                      "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                      isOpen
                        ? "bg-primex-green text-primex-black rotate-45"
                        : "bg-primex-gray-800 text-primex-gray-300",
                    ].join(" ")}
                  >
                    <Plus size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                        <div className="border-t border-primex-gray-800 pt-4">
                          <p className="text-primex-gray-300 text-sm md:text-base leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
