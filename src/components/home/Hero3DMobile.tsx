"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

function CoreShape(): React.JSX.Element {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.4, 0), []);
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#00C853",
        emissive: "#00C853",
        emissiveIntensity: 0.5,
        metalness: 0.6,
        roughness: 0.2,
      }),
    []
  );
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.08;
  });
  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

function Particles({ count }: { count: number }): React.JSX.Element {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const positions = useMemo(() => {
    const pos: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 5 + Math.random() * 2;
      pos.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        )
      );
    }
    return pos;
  }, [count]);
  const particleGeometry = useMemo(() => new THREE.SphereGeometry(0.03, 6, 6), []);
  const particleMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({ color: "#69F0AE", transparent: true, opacity: 0.8 }),
    []
  );
  const instancedMesh = useMemo(() => {
    const m = new THREE.InstancedMesh(particleGeometry, particleMaterial, count);
    for (let i = 0; i < count; i++) {
      dummy.position.copy(positions[i]);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
    return m;
  }, [particleGeometry, particleMaterial, positions, dummy, count]);
  useFrame((state, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.02;
  });
  return <primitive ref={meshRef} object={instancedMesh} />;
}

function StaticFallback(): React.JSX.Element {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(0,200,83,0.35) 0%, rgba(10,10,10,1) 65%)",
      }}
    />
  );
}

export default function Hero3DMobile(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <StaticFallback />;
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={1}
        gl={{ antialias: false, alpha: false, powerPreference: "default", stencil: false, depth: true }}
        frameloop="always"
        style={{ width: "100%", height: "100%", background: "#0A0A0A" }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#0A0A0A"]} />
          <ambientLight intensity={0.8} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#00C853" />
          <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
            <CoreShape />
          </Float>
          <Particles count={60} />
        </Suspense>
      </Canvas>
    </div>
  );
}
