"use client"

import { Globe, Smartphone, Settings, Brain, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import type { Case } from "@/types"

interface CaseCardProps {
  caseItem: Case
  index: number
}

const categoryIconMap: Record<string, LucideIcon> = {
  web: Globe,
  mobile: Smartphone,
  sistemas: Settings,
  ia: Brain,
}

const categoryLabelMap: Record<string, string> = {
  web: "Web",
  mobile: "Mobile",
  sistemas: "Sistemas",
  ia: "IA & Automação",
}

export function CaseCard({ caseItem, index }: CaseCardProps) {
  const IconComponent = categoryIconMap[caseItem.category] || Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full bg-primex-dark border-primex-gray-800 hover:border-primex-green transition-all duration-300 flex flex-col overflow-hidden group">
        {/* Header / Placeholder de imagem */}
        <div className="h-40 bg-gradient-to-br from-primex-green/20 via-primex-dark to-primex-black flex items-center justify-center relative border-b border-primex-gray-800">
          <div className="w-16 h-16 rounded-2xl bg-primex-green/10 flex items-center justify-center text-primex-green group-hover:scale-110 transition-transform">
            <IconComponent className="w-8 h-8" />
          </div>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primex-green/10 text-primex-green border border-primex-green/20">
              {categoryLabelMap[caseItem.category] || caseItem.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-primex-green text-xs font-semibold tracking-wide uppercase">
                {caseItem.client}
              </span>
            </div>
            <h3 className="font-display text-xl text-primex-white group-hover:text-primex-green transition-colors mb-3">
              {caseItem.title}
            </h3>
            <p className="text-primex-gray-300 text-sm leading-relaxed line-clamp-3 mb-6">
              {caseItem.description}
            </p>
          </div>

          <div>
            {/* Tecnologias */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {caseItem.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded bg-primex-gray-900 text-primex-gray-300 text-xs px-2 py-1 border border-primex-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Resultado */}
            <div className="pt-4 border-t border-primex-gray-800 flex items-center gap-2 text-primex-green text-sm font-medium">
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span className="line-clamp-1">{caseItem.result}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
