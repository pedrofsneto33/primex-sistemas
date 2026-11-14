"use client"

import { useSyncExternalStore } from "react"
import dynamic from "next/dynamic"

const Hero3D = dynamic(() => import("@/components/home/Hero3D"), { ssr: false })

const QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY)
  mql.addEventListener("change", callback)
  return () => mql.removeEventListener("change", callback)
}

/**
 * Só carrega o WebGL (three.js) em telas grandes e sem "reduzir movimento".
 * No celular fica o gradiente — mais leve e rápido.
 */
export default function HeroBackground() {
  const enabled = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  )

  if (!enabled) {
    return (
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primex-black via-primex-dark to-primex-black" />
    )
  }
  return <Hero3D />
}
