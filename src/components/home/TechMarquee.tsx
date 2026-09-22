"use client"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "React Native",
  "AWS",
  "Docker",
  "OpenAI",
  "Supabase",
]

/**
 * Marquee infinito com as tecnologias dominadas.
 * Keyframes `marquee` definidos em globals.css (Tailwind v4).
 * Pausa no hover.
 */
export default function TechMarquee(): React.JSX.Element {
  return (
    <section className="py-16 bg-primex-dark border-y border-primex-gray-800 overflow-hidden relative">
      {/* Gradientes laterais */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primex-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primex-dark to-transparent z-10 pointer-events-none" />

      <div className="mb-6 text-center">
        <span className="text-primex-gray-300 text-sm uppercase tracking-widest">
          Tecnologias que dominamos
        </span>
      </div>

      <div className="flex gap-12 w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        {[...technologies, ...technologies].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="font-display text-2xl md:text-3xl font-bold text-primex-gray-700 hover:text-primex-green transition-colors whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
