'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import type { MotionValue } from 'framer-motion';

const STEEL = new THREE.Color('#2B84AD');
const STEEL_BRIGHT = new THREE.Color('#4FB3DE');
const AMBER = new THREE.Color('#F5920D');
const AMBER_BRIGHT = new THREE.Color('#FFAE3F');

export type SDLCSceneProps = {
  progress: MotionValue<number>;
  stageCount: number;
  stageLabels: string[];
  reduceMotion: boolean;
  onActiveChange: (index: number) => void;
  onContextLost?: () => void;
};

function nodePosition(i: number, count: number): THREE.Vector3 {
  const t = i / (count - 1);
  const x = (t - 0.5) * 11;
  const y = Math.sin(t * Math.PI) * 0.9;
  const z = Math.sin(t * Math.PI * 2) * 0.5;
  return new THREE.Vector3(x, y, z);
}

function Flythrough({ progress, stageCount, reduceMotion, onActiveChange }: SDLCSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const lastActive = useRef(-1);
  const nodeRefs = useRef<THREE.Mesh[]>([]);
  const { invalidate } = useThree();

  // frameloop="demand" only renders on invalidate() — wake it on scroll, plus a
  // short settle window afterward so the camera/node lerps finish easing in.
  useEffect(() => {
    if (reduceMotion) return;
    let settleFrames = 0;
    let rafId: number;

    const wake = () => {
      settleFrames = 20;
    };
    const tick = () => {
      if (settleFrames > 0) {
        settleFrames -= 1;
        invalidate();
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const unsubscribe = progress.on('change', wake);
    invalidate();

    return () => {
      unsubscribe();
      cancelAnimationFrame(rafId);
    };
  }, [progress, reduceMotion, invalidate]);

  const positions = useMemo(
    () => Array.from({ length: stageCount }, (_, i) => nodePosition(i, stageCount)),
    [stageCount]
  );

  const linePositions = useMemo(() => {
    const arr = new Float32Array(positions.length * 3);
    positions.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [positions]);

  useFrame((state, delta) => {
    const p = THREE.MathUtils.clamp(progress.get(), 0, 1);
    const scaledT = p * (stageCount - 1);
    const idx = Math.round(scaledT);

    if (idx !== lastActive.current) {
      lastActive.current = idx;
      onActiveChange(idx);
    }

    // Wide framing that keeps the whole path in view — the camera pans gently
    // across the diagram as you scroll, rather than diving into each node.
    const target = nodePosition(scaledT, stageCount);
    const camera = state.camera;
    const panX = target.x * 0.35;
    const desiredCamPos = new THREE.Vector3(panX, 2.4, 10.5);
    const lookTarget = new THREE.Vector3(panX, 0.3, 0);

    if (reduceMotion) {
      camera.position.copy(desiredCamPos);
      camera.lookAt(lookTarget);
    } else {
      camera.position.lerp(desiredCamPos, Math.min(1, delta * 2));
      const m = new THREE.Matrix4().lookAt(camera.position, lookTarget, camera.up);
      const q = new THREE.Quaternion().setFromRotationMatrix(m);
      camera.quaternion.slerp(q, Math.min(1, delta * 2));
    }

    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const isActive = i === idx;
      const targetScale = isActive ? 1.3 : 1;
      mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), reduceMotion ? 1 : 0.15);
      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = THREE.MathUtils.lerp(
        mat.emissiveIntensity,
        isActive ? 0.9 : 0.2,
        reduceMotion ? 1 : 0.15
      );
    });

    if (groupRef.current && !reduceMotion) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={STEEL} transparent opacity={0.5} />
      </line>

      {positions.map((pos, i) => (
        <mesh
          key={i}
          position={pos}
          ref={(el) => {
            if (el) nodeRefs.current[i] = el;
          }}
        >
          <icosahedronGeometry args={[0.28, 1]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? STEEL_BRIGHT : STEEL}
            emissive={AMBER}
            emissiveIntensity={0.2}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function SDLCScene(props: SDLCSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop="demand"
      camera={{ position: [0, 2.4, 10.5], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      style={{ width: '100%', height: '100%' }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', (e) => {
          e.preventDefault();
          props.onContextLost?.();
        });
      }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 4, 5]} intensity={1} color={STEEL_BRIGHT} />
      <pointLight position={[-4, -2, 3]} intensity={0.5} color={AMBER_BRIGHT} />

      <Flythrough {...props} />

      <EffectComposer>
        <Bloom luminanceThreshold={0.45} luminanceSmoothing={0.3} intensity={0.5} radius={0.3} />
      </EffectComposer>
    </Canvas>
  );
}
