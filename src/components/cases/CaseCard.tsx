"use client"

import { Globe, Smartphone, Settings, Brain, ExternalLink } from "lucide-react"
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

        <CardContent className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <span className="text-primex-green text-xs font-semibold tracking-wide uppercase">
              {caseItem.tag}
            </span>
            <h3 className="font-display text-xl text-primex-white group-hover:text-primex-green transition-colors mt-2 mb-3">
              {caseItem.title}
            </h3>
            <p className="text-primex-gray-300 text-sm leading-relaxed mb-6">
              {caseItem.description}
            </p>
          </div>

          <div>
            {caseItem.technologies && caseItem.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {caseItem.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-primex-gray-900 text-primex-gray-300 text-xs px-2 py-1 border border-primex-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {caseItem.url && (
              <a
                href={caseItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-4 border-t border-primex-gray-800 flex items-center gap-2 text-primex-green text-sm font-medium hover:underline"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                Ver projeto
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
