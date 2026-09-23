"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

function CoreShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.4, 1), [])

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#00C853",
        emissive: "#00C853",
        emissiveIntensity: 0.4,
        metalness: 0.9,
        roughness: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      }),
    []
  )

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.2

    const targetX = state.pointer.y * 0.15
    const targetY = state.pointer.x * 0.15
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.02
    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.02

    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.08
  })

  return <mesh ref={meshRef} geometry={geometry} material={material} />
}

function OrbitRings() {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  const geometry = useMemo(
    () => new THREE.TorusGeometry(2.2, 0.03, 16, 100),
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

  useFrame((state, delta) => {
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

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 250
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
  }, [])

  const particleGeometry = useMemo(
    () => new THREE.SphereGeometry(0.02, 8, 8),
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
  }, [particleGeometry, particleMaterial, positions, dummy])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.02
    }
  })

  return <primitive ref={meshRef} object={instancedMesh} />
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
        style={{ width: "100%", height: "100%", background: "#0A0A0A" }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#0A0A0A"]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#00C853" />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#00E676" />
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
            <CoreShape />
          </Float>
          <OrbitRings />
          <Particles />
          <EffectComposer>
            <Bloom
              intensity={0.8}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}