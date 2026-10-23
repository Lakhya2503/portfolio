import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Float, Environment, Sparkles } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

/* --- Core animated knot --- */
function Spiral() {
  const groupRef = useRef();
  const knotRef = useRef();
  const materialRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.x = t * 0.15;
      groupRef.current.rotation.y = t * 0.22;
      groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.15;
    }
    // Subtle pulse on emissive for a "breathing" glow
    if (materialRef.current) {
      materialRef.current.emissiveIntensity =
        0.5 + Math.sin(t * 1.5) * 0.25;
    }
    // Smooth scale pulse
    if (knotRef.current) {
      const s = 1 + Math.sin(t * 0.8) * 0.03;
      knotRef.current.scale.setScalar(s);
    }
  });

  return (
    <Float speed={1.5} floatIntensity={1.2} rotationIntensity={0.4}>
      <group ref={groupRef}>
        <TorusKnot ref={knotRef} args={[1, 0.28, 256, 32]}>
          <meshStandardMaterial
            ref={materialRef}
            color="#c7d2fe"
            emissive="#a5f3fc"
            emissiveIntensity={0.5}
            roughness={0.15}
            metalness={0.9}
            transparent
            opacity={0.92}
            envMapIntensity={1.4}
          />
        </TorusKnot>
        {/* Wireframe halo for depth */}
        <TorusKnot args={[1.35, 0.02, 200, 12]}>
          <meshBasicMaterial
            color="#67e8f9"
            wireframe
            transparent
            opacity={0.25}
          />
        </TorusKnot>
      </group>
    </Float>
  );
}

/* --- Orbiting particles --- */
function OrbitingDust({ count = 60 }) {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const radius = 1.8 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr.push({
        pos: new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ),
        speed: 0.2 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array;
    particles.forEach((p, i) => {
      const i3 = i * 3;
      const wobble = Math.sin(t * p.speed + p.phase) * 0.15;
      positions[i3] = p.pos.x + wobble;
      positions[i3 + 1] = p.pos.y + Math.cos(t * p.speed + p.phase) * 0.15;
      positions[i3 + 2] = p.pos.z + Math.sin(t * p.speed * 0.5) * 0.1;
    });
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = t * 0.05;
  });

  const positions = useMemo(
    () => new Float32Array(particles.flatMap((p) => p.pos.toArray())),
    [particles]
  );

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a5f3fc"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function SpiralScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 55 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#a5b4fc" />
      <pointLight position={[-5, -5, 5]} intensity={0.9} color="#67e8f9" />
      <pointLight position={[0, 5, -5]} intensity={0.6} color="#f0abfc" />

      {/* Environment for realistic reflections on metal */}
      <Environment preset="night" />

      <Suspense fallback={null}>
        <Spiral />
        <OrbitingDust count={60} />
        <Sparkles
          count={40}
          scale={6}
          size={2}
          speed={0.4}
          color="#a5f3fc"
          opacity={0.6}
        />
      </Suspense>
    </Canvas>
  );
}