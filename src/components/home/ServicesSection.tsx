"use client"

import { motion } from "motion/react"
import { Globe, Smartphone, Settings, Brain, LucideIcon } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { services } from "@/data/services"

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Settings,
  Brain,
}

interface ServiceCardProps {
  service: (typeof services)[0]
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] ?? Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col"
    >
      <Card className="relative overflow-hidden bg-primex-dark border-primex-gray-800 hover:border-primex-green transition-all duration-300 group hover:bg-primex-gray-900 hover:shadow-lg hover:shadow-primex-green/10 hover:-translate-y-1 h-full">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 rounded-xl bg-primex-green/10 flex items-center justify-center mb-4 group-hover:bg-primex-green/20 transition-colors duration-300">
            <IconComponent size={28} className="text-primex-green" />
          </div>
          <CardTitle className="font-display text-xl text-primex-white">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-primex-gray-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </CardContent>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primex-green/0 via-transparent to-primex-green/0 group-hover:from-primex-green/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
      </Card>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-primex-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primex-white mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-primex-gray-300 text-lg max-w-2xl mx-auto">
            Soluções completas para transformar seu negócio digitalmente
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}