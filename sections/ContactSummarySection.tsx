"use client";
import Marquee from "@/components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const ContactSummarySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const items = [
    "Innovation",
    "Quality",
    "Scalability",
    "Performance",
    "Trust",
    "Excellence",
  ];

  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });
  }, []);
  
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16">
      <Marquee items={items} />

      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          &quot; Let&apos;s build <br />{" "}
          <span className="font-normal">memorable</span> &
          <span className="italic">inspiring</span> products{" "}
          <span className="text-gold">together</span> &quot;
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        icon="material-symbols-light:square"
        iconClassName="stroke-gold stroke-2 text-primary"
      />
    </section>
  );
};

export default ContactSummarySection;
