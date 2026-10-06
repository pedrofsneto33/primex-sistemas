"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

interface Phrase {
  text: string
  highlight: boolean
}

const phrases: Phrase[] = [
  { text: "Tecnologia não é sobre código.", highlight: false },
  { text: "É sobre tempo que você não perde.", highlight: true },
  { text: "É sobre decisão que você toma melhor.", highlight: true },
  { text: "É sobre crescer sem contratar 10 pessoas.", highlight: true },
  { text: "É sobre resolver.", highlight: false },
]

function Phrase({
  phrase,
}: {
  phrase: Phrase
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.15, 1, 1, 0.15]
  )
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="text-center py-6 md:py-12"
    >
      <p
        className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight ${
          phrase.highlight ? "text-primex-green" : "text-primex-white"
        }`}
      >
        {phrase.text}
      </p>
    </motion.div>
  )
}

export default function ManifestoSection() {
  return (
    <section className="py-24 md:py-40 px-6 bg-primex-black relative overflow-hidden section-top-line">
      {/* Glow verde de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primex-green/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primex-green/30 bg-primex-green/5 text-primex-green text-sm font-medium">
            Como Pensamos
          </span>
        </motion.div>

        <div className="space-y-2 md:space-y-4">
          {phrases.map((phrase, index) => (
            <Phrase key={index} phrase={phrase} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-primex-gray-300 text-base md:text-lg mt-20 max-w-xl mx-auto"
        >
          Na Primex Sistemas, cada linha de código existe por um motivo real.
        </motion.p>
      </div>
    </section>
  )
}
