import { ImageResponse } from "next/og"

export const alt = "Primex Sistemas — Soluções Inteligentes"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0A0A0A",
          color: "#FFFFFF",
        }}
      >
        <div style={{ fontSize: 28, color: "#00C853", letterSpacing: 4, marginBottom: 24 }}>
          SOLUÇÕES INTELIGENTES
        </div>
        <div style={{ fontSize: 120, fontWeight: 700, display: "flex" }}>
          PRIMEX&nbsp;<span style={{ color: "#00C853" }}>SISTEMAS</span>
        </div>
        <div style={{ fontSize: 34, color: "#9CA3AF", marginTop: 28 }}>
          Software sob medida, automação e IA para o seu negócio.
        </div>
      </div>
    ),
    size
  )
}
