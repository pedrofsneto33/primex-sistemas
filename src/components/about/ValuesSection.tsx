"use client"

import { values } from "@/data/values"
import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Shield, Award, Handshake } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Shield,
  Award,
  Handshake,
}

export function ValuesSection() {
  return (
    <section className="py-20 px-6 bg-primex-dark border-t border-primex-gray-800">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">
            NOSSOS VALORES
          </h2>
          <p className="text-primex-gray-300">
            Princípios que guiam cada linha de código e cada relacionamento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => {
            const IconComponent = iconMap[val.icon] || Lightbulb
            return (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-primex-black border-primex-gray-800 hover:border-primex-green transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-primex-green/10 flex items-center justify-center text-primex-green mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-xl text-primex-white mb-3 font-semibold group-hover:text-primex-green transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-primex-gray-300 text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
