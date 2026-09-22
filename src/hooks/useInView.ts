"use client"

import { useEffect, useRef, useState } from "react"

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

interface UseInViewReturn {
  ref: React.RefObject<HTMLElement | null>
  isInView: boolean
}

export function useInView(options: UseInViewOptions = {}): UseInViewReturn {
  const { threshold = 0, rootMargin = "0px", once = false } = options
  const ref = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!once || !hasTriggered) {
            setIsInView(true)
            if (once) setHasTriggered(true)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once, hasTriggered])

  return { ref, isInView }
}