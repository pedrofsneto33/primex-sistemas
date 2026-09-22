import { ImageResponse } from "next/og"

export const alt = "Primex Sistemas — Soluções Inteligentes"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0A 0%, #121212 50%, #0A0A0A 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow verde no fundo */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(0,200,83,0.25) 0%, transparent 60%)",
            borderRadius: "50%",
          }}
        />

        {/* Conteúdo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 24px",
              border: "2px solid rgba(0,200,83,0.4)",
              background: "rgba(0,200,83,0.1)",
              borderRadius: "999px",
              color: "#00C853",
              fontSize: "24px",
              fontWeight: 500,
              marginBottom: "40px",
            }}
          >
            Soluções Inteligentes
          </div>

          {/* Título */}
          <div
            style={{
              display: "flex",
              fontSize: "128px",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginBottom: "8px",
            }}
          >
            PRIMEX
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "128px",
              fontWeight: 800,
              color: "#00C853",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginBottom: "40px",
            }}
          >
            SISTEMAS
          </div>

          {/* Subtítulo */}
          <div
            style={{
              display: "flex",
              fontSize: "32px",
              color: "#9CA3AF",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Desenvolvimento de softwares e soluções inteligentes
          </div>
        </div>

        {/* Detalhe decorativo - linha verde no topo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, transparent, #00C853, transparent)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
