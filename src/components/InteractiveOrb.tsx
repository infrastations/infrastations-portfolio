import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create interconnected network points
  const points = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 100; i++) {
      positions.push(
        Math.random() * 6 - 3,
        Math.random() * 6 - 3,
        Math.random() * 6 - 3
      );
    }
    return new Float32Array(positions);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group>
      {/* Main distorted sphere */}
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#3B82F6"
            attach="material"
            distort={0.6}
            speed={2}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Smaller orbiting spheres */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Sphere position={[2, 1, 0]} args={[0.3, 32, 32]}>
          <MeshDistortMaterial
            color="#EC4899"
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere position={[-2, -1, 1]} args={[0.4, 32, 32]}>
          <MeshDistortMaterial
            color="#06B6D4"
            attach="material"
            distort={0.3}
            speed={2.5}
            roughness={0}
            metalness={0.7}
          />
        </Sphere>
      </Float>

      {/* Network points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={points}
            count={points.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#3B82F6"
          size={0.05}
          transparent
          opacity={0.6}
        />
      </points>
    </group>
  );
}

export default function InteractiveOrb() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#EC4899" />
        <AnimatedOrb />
      </Canvas>
    </div>
  );
}