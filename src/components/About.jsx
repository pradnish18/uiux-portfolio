import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        ease: "power1.inOut",
      });
    });
  });

  return (
    <div id="about" className="w-screen bg-obsidian py-24 scroll-mt-12">
      <div className="flex flex-col items-center gap-5 px-5 pb-16 text-center">
        <p className="font-general text-xs uppercase tracking-widest text-amber">
          About & Philosophy
        </p>

        <AnimatedTitle
          title="Bridging Product Design <br /> <b>&</b> UX Engineering"
          containerClass="mt-4 !text-snow text-center"
        />

        <div className="h-dvh w-screen my-8" id="clip">
          <div className="mask-clip-path about-image">
            <img
              src="img/about.webp"
              alt="About Pradnish"
              className="absolute left-0 top-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/40" />
          </div>
        </div>

        <div className="mt-4 w-full max-w-96 font-circular-web text-base sm:text-lg md:max-w-[36rem] leading-relaxed">
          <p className="text-snow/90">
            I&apos;m Pradnish Chintada — a Product Designer & UX Engineer with strong Computer Science fundamentals, bridging user empathy with technical execution.
          </p>
          <p className="mt-4 text-snow/60 text-sm">
            I specialize in framing complex user problems, iterating on high-fidelity Figma screens and wireframes, and building responsive, accessible web and mobile interfaces using React and React Native.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
