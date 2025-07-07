"use client";

import AnimatedTextLines from "@/components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const AnimatedHeader = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}: {
  subTitle?: string;
  title?: string;
  text?: string;
  textColor?: string;
  withScrollTrigger?: boolean;
}) => {
  const contextRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2",
    );
  }, []);
  return (
    <div ref={contextRef} className="">
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16">
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}
            }`}>
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col flex-wrap gap-12 uppercase banner-text-responsive sm:gap-16 md:block py-4 font-stretch-normal ${textColor}`}>
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLines
            className={`font-light uppercase value-text-responsive ${textColor}`}
            text={text || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeader;
