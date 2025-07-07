"use client";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import ContactSummarySection from "@/sections/ContactSummarySection";
import HeroSection from "@/sections/HeroSection";
import NavSection from "@/sections/NavSection";
import ServicesSection from "@/sections/ServicesSection";
import ServiceSummarySection from "@/sections/ServiceSummarySection";
import WorksSection from "@/sections/WorksSection";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Home() {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  if (!isReady) return null;

  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}>
        <NavSection />
        <HeroSection />
        <ServiceSummarySection />
        <ServicesSection />
        <AboutSection />
        <WorksSection />
        <ContactSummarySection />
        <ContactSection />
      </div>
    </main>
  );
}
