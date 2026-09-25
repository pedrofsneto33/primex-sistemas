"use client"

export function Hero3DFallback(): React.JSX.Element {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(0,200,83,0.25) 0%, rgba(10,10,10,1) 65%)",
      }}
      aria-hidden="true"
    />
  )
}
