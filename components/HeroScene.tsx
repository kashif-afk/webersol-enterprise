'use client';

import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import type { MotionValue } from 'framer-motion';

type HeroSceneProps = {
  driftProgress: MotionValue<number>;
  reduceMotion: boolean;
  onContextLost?: () => void;
};

const STEEL = new THREE.Color('#2B84AD');
const STEEL_BRIGHT = new THREE.Color('#4FB3DE');
const AMBER = new THREE.Color('#F5920D');
const AMBER_BRIGHT = new THREE.Color('#FFAE3F');

function ShatteredSculpture({ driftProgress, reduceMotion }: HeroSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const emberMaterialRef = useRef<THREE.PointsMaterial>(null);

  // Base wireframe cage — an icosahedron edge skeleton
  const wireGeometry = useMemo(() => new THREE.IcosahedronGeometry(1.6, 2), []);
  const wireEdges = useMemo(() => new THREE.EdgesGeometry(wireGeometry), [wireGeometry]);

  // Deterministic hash instead of Math.random() — keeps the sculpture's shape stable
  // across re-renders rather than reshuffling on every render pass.
  const hash = (seed: number) => {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  };

  // Ember particle cloud — sampled near the icosahedron surface, biased asymmetrically
  // toward one side so the glow reads as concentrated, not evenly scattered.
  const { positions, isEmber } = useMemo(() => {
    const posAttr = wireGeometry.getAttribute('position');
    const count = posAttr.count;
    const positions = new Float32Array(count * 3);
    const isEmber = new Float32Array(count);
    const bias = new THREE.Vector3(0.6, -0.3, 0.5).normalize();

    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
      const r = v.length();
      const jitter = 0.85 + hash(i) * 0.35;
      v.multiplyScalar(jitter / r);
      positions[i * 3] = v.x;
      positions[i * 3 + 1] = v.y;
      positions[i * 3 + 2] = v.z;

      const alignment = v.clone().normalize().dot(bias);
      isEmber[i] = alignment > 0.15 && hash(i + 1000) > 0.4 ? 1 : 0;
    }
    return { positions, isEmber };
  }, [wireGeometry]);

  const emberPositions = useMemo(() => {
    const pts: number[] = [];
    for (let i = 0; i < isEmber.length; i++) {
      if (isEmber[i]) {
        pts.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      }
    }
    return new Float32Array(pts);
  }, [positions, isEmber]);

  useFrame((_, delta) => {
    const drift = driftProgress.get();

    if (groupRef.current) {
      if (!reduceMotion) {
        groupRef.current.rotation.y += delta * 0.12;
        groupRef.current.rotation.x = Math.sin(Date.now() * 0.0001) * 0.08;
      }
      const scale = 1 + drift * 0.35;
      groupRef.current.scale.setScalar(scale);
      groupRef.current.position.z = -drift * 1.2;
    }

    if (emberMaterialRef.current) {
      emberMaterialRef.current.opacity = reduceMotion ? 0.9 : 0.75 + Math.sin(Date.now() * 0.002) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={wireEdges}>
        <lineBasicMaterial color={STEEL} transparent opacity={0.55} />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[emberPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={emberMaterialRef}
          color={AMBER_BRIGHT}
          size={0.08}
          sizeAttenuation
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {[2.4, 2.9, 3.5].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2 + i * 0.3, i * 0.4, 0]}>
          <torusGeometry args={[radius, 0.004, 8, 96]} />
          <meshBasicMaterial color={i === 1 ? AMBER : STEEL_BRIGHT} transparent opacity={0.12} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene({ driftProgress, reduceMotion, onContextLost }: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={reduceMotion ? 'demand' : 'always'}
      camera={{ position: [0, 0, 6], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      style={{ width: '100%', height: '100%' }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', (e) => {
          e.preventDefault();
          onContextLost?.();
        });
      }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 3, 5]} intensity={1.1} color={STEEL_BRIGHT} />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color={AMBER} />

      <ShatteredSculpture driftProgress={driftProgress} reduceMotion={reduceMotion} />

      <EffectComposer>
        <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.35} intensity={1.4} radius={0.6} />
      </EffectComposer>
    </Canvas>
  );
}
