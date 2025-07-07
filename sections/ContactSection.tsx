import AnimatedHeader from "@/components/AnimatedHeader";
import Marquee from "@/components/Marquee";
import { socials } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const ContactSection = () => {
  const text = `Got a question? 
  Let's talk
  We're here to help`;

  const items = [
    "just imagine",
    "just imagine",
    "just imagine",
    "just imagine",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black">
      <div className="">
        <AnimatedHeader
          subTitle="You Dream, We Build"
          title="Contact"
          text={text}
          textColor="text-white"
          withScrollTrigger={true}
        />

        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mv-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>Email</h2>
              <div className="w-full h-[1px] bg-white/30 my-2" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                berke@clodron.com
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-[1px] bg-white/30 my-2" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                +49 176 212 06664
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <Link
                    href={social.href}
                    key={index}
                    className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200">
                    {`{ ${social.name} }`}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default ContactSection;
