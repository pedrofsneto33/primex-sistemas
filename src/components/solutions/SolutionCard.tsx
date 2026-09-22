"use client"

import { Globe, Smartphone, Settings, Brain, Shield, Check } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Solution } from "@/types"

interface SolutionCardProps {
  solution: Solution
  index: number
}

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Settings,
  Brain,
  Shield,
}

const categoryMap: Record<string, string> = {
  web: "Web",
  mobile: "Mobile",
  sistemas: "Sistemas",
  ia: "IA & Automação",
}

export function SolutionCard({ solution, index }: SolutionCardProps) {
  const IconComponent = iconMap[solution.icon] || Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full bg-primex-dark border-primex-gray-800 hover:border-primex-green transition-all duration-300 flex flex-col justify-between group">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-primex-green/10 flex items-center justify-center text-primex-green group-hover:scale-110 transition-transform">
              <IconComponent className="w-7 h-7" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primex-green/10 text-primex-green border border-primex-green/20">
              {categoryMap[solution.category] || solution.category}
            </span>
          </div>
          <CardTitle className="font-display text-2xl text-primex-white group-hover:text-primex-green transition-colors">
            {solution.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
          <p className="text-primex-gray-300 text-sm leading-relaxed">
            {solution.description}
          </p>
          <div className="space-y-2 pt-4 border-t border-primex-gray-800">
            {solution.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-primex-gray-300">
                <Check className="w-4 h-4 text-primex-green shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
