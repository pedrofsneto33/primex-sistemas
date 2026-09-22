"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { Code2, Users, Award, Clock } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Stat {
  value: number
  suffix: string
  label: string
  icon: LucideIcon
}

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projetos entregues", icon: Code2 },
  { value: 30, suffix: "+", label: "Clientes ativos", icon: Users },
  { value: 10, suffix: " anos", label: "De experiência", icon: Award },
  { value: 98, suffix: "%", label: "Satisfação dos clientes", icon: Clock },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-primex-green leading-none">
      {count}
      <span className="text-primex-white">{suffix}</span>
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-24 px-6 bg-primex-black relative overflow-hidden">
      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,200,83,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,200,83,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Glow central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primex-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primex-green/10 border border-primex-green/20 mb-6">
                  <Icon size={24} className="text-primex-green" strokeWidth={1.5} />
                </div>
                <div className="mb-3">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-primex-gray-300 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
