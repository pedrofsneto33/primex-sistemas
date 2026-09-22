"use client"

import { useEffect, useState } from "react"
import { useMotionValue, useTransform } from "motion/react"
import type { MotionValue } from "motion/react"

export interface MousePosition {
  x: MotionValue<number>
  y: MotionValue<number>
}

export function useMouseFollow(): MousePosition {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleMouseMove = (event: MouseEvent) => {
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1
      const normalizedY = (event.clientY / window.innerHeight) * 2 - 1
      x.set(normalizedX)
      y.set(normalizedY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  return { x, y }
}