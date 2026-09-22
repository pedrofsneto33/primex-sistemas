import Link from "next/link"
import type { JSX } from "react"

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className, size = 32 }: LogoProps): JSX.Element {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${className ?? ""}`}
      aria-label="Primex Sistemas - Voltar ao início"
    >
      {/* Símbolo geométrico — cubo isométrico verdes */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Losango superior (frente) */}
        <polygon
          points="20,4 34,12 20,20 6,12"
          fill="#00C853"
        />
        {/* Losango direito (direita) */}
        <polygon
          points="20,20 34,12 34,28 20,20"
          fill="none"
          stroke="#00C853"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Losango esquerdo (esquerda) */}
        <polygon
          points="20,20 6,12 6,28 20,20"
          fill="none"
          stroke="#00C853"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Losango inferior (costas) */}
        <polygon
          points="20,20 34,28 20,36 6,28"
          fill="#0A0A0A"
          stroke="#00C853"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* P estilizado no centro */}
        <text
          x="20"
          y="23"
          textAnchor="middle"
          fill="#0A0A0A"
          fontSize="14"
          fontWeight="700"
          fontFamily="'Space Grotesk', sans-serif"
        >
          P
        </text>
      </svg>

      {/* Wordmark */}
      <span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700 }} className="text-[color:var(--primex-white)] tracking-tight">
          PRIMEX
        </span>
        <span className="text-[color:var(--primex-green)] font-medium tracking-[0.15em] uppercase text-xs">
          Sistemas
        </span>
      </span>
    </Link>
  )
}
