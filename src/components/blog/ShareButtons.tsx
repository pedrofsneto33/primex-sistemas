"use client"

import { useState } from "react"
import { Share2, Link2, Check, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

interface ShareButtonsProps {
  title: string
  slug: string
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${slug}`
      : `/blog/${slug}`

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error("Erro ao copiar:", e)
    }
  }

  const buttonClass =
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primex-gray-800 bg-primex-dark text-primex-gray-300 hover:border-primex-green hover:text-primex-green transition-all duration-300 text-sm font-medium"

  return (
    <div className="flex flex-wrap items-center gap-3 mt-8 pt-8 border-t border-primex-gray-800">
      <span className="text-primex-gray-300 text-sm">
        Compartilhar:
      </span>

      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Compartilhar no WhatsApp"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Compartilhar no LinkedIn"
      >
        <Share2 size={16} />
        LinkedIn
      </a>

      <button
        onClick={handleCopy}
        className={buttonClass}
        aria-label="Copiar link"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="inline-flex items-center gap-2"
            >
              <Check size={16} className="text-primex-green" />
              <span className="text-primex-green">Copiado!</span>
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="inline-flex items-center gap-2"
            >
              <Link2 size={16} />
              Copiar link
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
