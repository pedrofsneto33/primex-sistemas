"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { solutions } from "@/data/solutions"
import { SolutionCard } from "./SolutionCard"
import { Filter } from "lucide-react"

const filters = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "sistemas", label: "Sistemas" },
  { id: "ia", label: "IA & Automação" },
]

export function SolutionGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filtered = activeFilter === "all"
    ? solutions
    : solutions.filter(s => s.category === activeFilter)

  return (
    <section className="py-20 bg-primex-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">
            TODAS AS SOLUÇÕES
          </h2>
          <p className="text-primex-gray-300">
            Do conceito à entrega, criamos a solução ideal para o seu ecossistema digital.
          </p>
        </div>

        {/* Filtros */}
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

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((solution, index) => (
              <motion.div
                key={solution.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SolutionCard solution={solution} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
