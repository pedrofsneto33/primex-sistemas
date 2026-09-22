"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cases } from "@/data/cases"
import { CaseCard } from "./CaseCard"
import { Filter } from "lucide-react"

const filters = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "sistemas", label: "Sistemas" },
  { id: "ia", label: "IA & Automação" },
]

export function CaseGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filtered = activeFilter === "all"
    ? cases
    : cases.filter(c => c.category === activeFilter)

  return (
    <section className="py-20 bg-primex-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">
            NOSSOS CASES
          </h2>
          <p className="text-primex-gray-300">
            Resultados reais que transformam negócios e elevam o padrão tecnológico.
          </p>
        </div>

        {/* Botões de Filtro */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-primex-green text-primex-black font-semibold shadow-lg shadow-primex-green/20"
                  : "border border-primex-gray-700 text-primex-gray-300 hover:border-primex-green hover:text-primex-white bg-primex-dark/50"
              }`}
            >
              {filter.id === "all" && <Filter className="w-3.5 h-3.5" />}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de Cases */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CaseCard caseItem={caseItem} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
