"use client"

import { motion } from "motion/react"

const timeline = [
  { year: "2015", title: "Fundação", description: "Nascemos com a missão de transformar negócios através da tecnologia." },
  { year: "2018", title: "Primeiro grande cliente", description: "Firmamos parceria com uma indústria de médio porte." },
  { year: "2021", title: "Expansão nacional", description: "Atendemos clientes em 8 estados brasileiros." },
  { year: "2024", title: "Soluções em IA", description: "Incorporamos inteligência artificial em nossos produtos." },
  { year: "2025", title: "Soluções Inteligentes", description: "Reforçamos nosso lema: tecnologia que resolve." },
]

export function HistoryTimeline() {
  return (
    <section className="py-20 px-6 bg-primex-black">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primex-white mb-4">
            NOSSA HISTÓRIA
          </h2>
          <p className="text-primex-gray-300">
            Uma década construindo soluções que importam
          </p>
        </div>

        <div className="relative border-l border-primex-gray-800 ml-4 md:ml-32 space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Bolinha verde */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primex-green group-hover:scale-150 transition-transform shadow-[0_0_10px_#00C853]" />

              {/* Ano no mobile / desktop layout */}
              <div className="md:absolute md:-left-32 md:text-right md:w-24 top-0 mb-2 md:mb-0">
                <span className="font-display text-primex-green font-bold text-xl">
                  {item.year}
                </span>
              </div>

              <div className="bg-primex-dark border border-primex-gray-800 rounded-xl p-6 hover:border-primex-green transition-colors">
                <h3 className="font-display text-xl text-primex-white mb-2 font-semibold">
                  {item.title}
                </h3>
                <p className="text-primex-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
