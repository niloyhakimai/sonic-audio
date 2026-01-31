"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
  // FIX: useRef এর ভেতর 'null' দেওয়া হয়েছে
  const sphereRef = useRef<any>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // স্কেল এবং পজিশন এনিমেট করা হচ্ছে মিউজিক বিটের মতো
    if (sphereRef.current) {
        sphereRef.current.distort = 0.4 + Math.sin(t * 2) * 0.2;
        sphereRef.current.rotation.x = t * 0.5;
        sphereRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.2}>
      <MeshDistortMaterial
        color="#4f46e5" // Indigo Color
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export function AudioVisualizer() {
  return (
    <div className="absolute top-0 right-0 w-full h-full md:w-1/2 z-0 opacity-60 md:opacity-100">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="red" intensity={2} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}