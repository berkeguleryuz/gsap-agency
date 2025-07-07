"use client";
import AnimatedHeader from "@/components/AnimatedHeader";
import { Planet } from "@/components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const text = `We are a team of developers
  who are passionate about creating 
  beautiful and functional websites.`;

  return (
    <section id="home" className="z-100 flex flex-col justify-end min-h-screen">
      <AnimatedHeader
        subTitle="We are a team of developers"
        textColor="text-black"
        title="Clodron"
        text={text}
      />

      <figure
        className="absolute inset-0 -z-50 h-screen"
        style={{ width: "100vw", height: "100vh" }}>
        <Canvas
          shadows
          camera={{
            position: [0, 0, -10],
            fov: 17.5,
            near: 1,
            far: 20,
          }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <directionalLight position={[-1, -1, -1]} intensity={1} />
          <Float>
            <Planet scale={isMobile ? 0.6 : 0.7} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -0]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default HeroSection;
