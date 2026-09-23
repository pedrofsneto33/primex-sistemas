"use client"

import { Suspense, useMemo, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { useReducedMotion } from "motion/react"
import * as THREE from "three"

/** Detecta mobile por largura ou user-agent. */
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = (): void => {
      const mobile =
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      setIsMobile(mobile)
    }
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isMobile
}

function CoreShape({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  const geometry = useMemo(
    () => new THREE.IcosahedronGeometry(1.4, isMobile ? 0 : 1),
    [isMobile]
  )

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#00C853",
        emissive: "#00C853",
        emissiveIntensity: 0.4,
        metalness: isMobile ? 0.6 : 0.9,
        roughness: 0.15,
        clearcoat: isMobile ? 0 : 1,
        clearcoatRoughness: 0.1,
      }),
    [isMobile]
  )

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.2

    if (!isMobile) {
      const targetX = state.pointer.y * 0.15
      const targetY = state.pointer.x * 0.15
      meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.02
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.02
    }

    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.08
  })

  return <mesh ref={meshRef} geometry={geometry} material={material} />
}

function OrbitRings() {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  const geometry = useMemo(
    () => new THREE.TorusGeometry(2.2, 0.03, 8, 60),
    []
  )

  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#00E676",
        transparent: true,
        opacity: 0.3,
      }),
    []
  )

  useFrame((_state, delta) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.3
      ring1Ref.current.rotation.y += delta * 0.2
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.2
      ring2Ref.current.rotation.y += delta * 0.4
    }
  })

  return (
    <>
      <mesh
        ref={ring1Ref}
        geometry={geometry}
        material={material}
        rotation={[Math.PI / 3, 0, 0]}
      />
      <mesh
        ref={ring2Ref}
        geometry={geometry}
        material={material}
        rotation={[0, Math.PI / 4, 0]}
      />
    </>
  )
}

function Particles({ count }: { count: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const positions = useMemo(() => {
    const pos: THREE.Vector3[] = []
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 5 + Math.random() * 2
      pos.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        )
      )
    }
    return pos
  }, [count])

  const particleGeometry = useMemo(
    () => new THREE.SphereGeometry(0.02, 6, 6),
    []
  )

  const particleMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#69F0AE",
        transparent: true,
        opacity: 0.7,
      }),
    []
  )

  const instancedMesh = useMemo(() => {
    const m = new THREE.InstancedMesh(
      particleGeometry,
      particleMaterial,
      count
    )
    for (let i = 0; i < count; i++) {
      dummy.position.copy(positions[i])
      dummy.scale.setScalar(1)
      dummy.updateMatrix()
      m.setMatrixAt(i, dummy.matrix)
    }
    m.instanceMatrix.needsUpdate = true
    return m
  }, [particleGeometry, particleMaterial, positions, dummy, count])

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.02
    }
  })

  return <primitive ref={meshRef} object={instancedMesh} />
}

/** Fallback estático quando WebGL indisponível ou reduced motion. */
function StaticFallback(): React.JSX.Element {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(0,200,83,0.25) 0%, rgba(10,10,10,1) 60%)",
      }}
    />
  )
}

function Scene({ isMobile }: { isMobile: boolean }): React.JSX.Element {
  return (
    <>
      <color attach="background" args={["#0A0A0A"]} />
      <ambientLight intensity={isMobile ? 0.6 : 0.4} />
      <pointLight position={[5, 5, 5]} intensity={isMobile ? 1.5 : 2} color="#00C853" />
      {!isMobile && (
        <pointLight position={[-5, -5, -5]} intensity={1} color="#00E676" />
      )}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <CoreShape isMobile={isMobile} />
      </Float>
      {!isMobile && <OrbitRings />}
      <Particles count={isMobile ? 80 : 250} />
      {!isMobile && (
        <EffectComposer>
          <Bloom
            intensity={0.8}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </>
  )
}

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas")
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    )
  } catch {
    return false
  }
}

export default function Hero3D(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const [webglOk, setWebglOk] = useState<boolean | null>(null)

  useEffect(() => {
    setWebglOk(isWebGLAvailable())
  }, [])

  if (webglOk === null) {
    return <StaticFallback />
  }

  if (shouldReduceMotion || !webglOk) {
    return <StaticFallback />
  }

  return (
    <div className="absolute inset-0 -z-10">
      {/* Camadas CSS animadas (leves, mobile-friendly) */}
      <div className="hero-animated-bg" aria-hidden="true" />
      <div className="hero-glow-center" aria-hidden="true" />
      <div className="hero-ring" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={isMobile ? 1 : [1, 2]}
        gl={{
          antialias: !isMobile,
          alpha: false,
          powerPreference: isMobile ? "default" : "high-performance",
        }}
        frameloop={isMobile ? "demand" : "always"}
        style={{ width: "100%", height: "100%", background: "#0A0A0A" }}
      >
        <Suspense fallback={null}>
          <Scene isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  )
}