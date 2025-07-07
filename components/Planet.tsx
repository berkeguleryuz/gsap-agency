"use client";
import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import React, { useRef } from "react";
import * as THREE from "three";

type PlanetProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
};

export function Planet(props: PlanetProps) {
  const shapeContainerRef = useRef<THREE.Group>(null);
  const spheresContainerRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { nodes, materials } = useGLTF("/models/Planet.glb");

  useGSAP(() => {
    if (
      !shapeContainerRef.current ||
      !spheresContainerRef.current ||
      !ringRef.current
    )
      return;

    const tl = gsap.timeline({});

    tl.from(shapeContainerRef.current.position, {
      y: 5,
      duration: 3,
      ease: "circ.out",
    });

    tl.from(
      spheresContainerRef.current.rotation,
      {
        x: 0,
        y: Math.PI,
        z: -Math.PI,
        duration: 10,
        ease: "power1.inOut",
      },
      "-=25%",
    );
    tl.from(
      ringRef.current.rotation,
      {
        x: 0.8,
        y: 0,
        z: 0,
        duration: 10,
        ease: "power1.inOut",
      },
      "<",
    );
  });
  return (
    <group ref={shapeContainerRef} {...props} dispose={null}>
      <group ref={spheresContainerRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere as THREE.Mesh).geometry}
          material={materials["Material.002"]}
          rotation={[0, 0, 0.741]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere2 as THREE.Mesh).geometry}
          material={materials["Material.001"]}
          position={[0.647, 1.03, -0.724]}
          rotation={[0, 0, 0.741]}
          scale={0.223}
        />
        <mesh
          ref={ringRef}
          castShadow
          receiveShadow
          geometry={(nodes.Ring as THREE.Mesh).geometry}
          material={materials["Material.001"]}
          rotation={[-0.124, 0.123, -0.778]}
          scale={2}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Planet.glb");
