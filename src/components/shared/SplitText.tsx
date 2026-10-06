"use client"

import { motion } from "motion/react"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

export function SplitText({
  text,
  className = "",
  delay = 0,
}: SplitTextProps) {
  const letters = text.split("")

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          className="inline-block"
          initial={{ y: 0 }}
          whileHover={{ y: -3 }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.02,
            ease: "easeOut",
          }}
          style={{ willChange: "transform" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  )
}
