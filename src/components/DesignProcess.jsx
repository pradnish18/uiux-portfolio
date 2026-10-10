import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand Context & Pain Points",
    description:
      "Gather context through stakeholder conversations, user observation, competitive analysis, and auditing existing workflow friction points.",
  },
  {
    step: "02",
    title: "Define",
    subtitle: "Frame Core Problem & Architecture",
    description:
      "Synthesize research findings into clear problem statements, key user personas, task flows, and structured information architecture.",
  },
  {
    step: "03",
    title: "Explore",
    subtitle: "Rapid Wireframing & Layouts",
    description:
      "Explore low-fidelity wireframes, test multiple UI layout concepts, and evaluate navigation hierarchies before committing to visuals.",
  },
  {
    step: "04",
    title: "Prototype & Test",
    subtitle: "Interactive UI & Micro-interactions",
    description:
      "Build high-fidelity Figma screens and interactive prototypes to validate user flows, edge-case states, and micro-interactions.",
  },
  {
    step: "05",
    title: "Implement & Refine",
    subtitle: "Design Tokens & Frontend Handoff",
    description:
      "Translate Figma components into reusable React UI, audit WCAG accessibility contrast, and refine responsive states for production.",
  },
];

const DesignProcess = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          containerRef.current.querySelectorAll(".process-card"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="process" className="bg-obsidian py-24 scroll-mt-12">
      <div className="container mx-auto px-5 md:px-10" ref={containerRef}>
        
        {/* Header */}
        <div className="mb-16">
          <p className="font-general text-xs uppercase tracking-widest text-amber mb-2">
            Design Methodology
          </p>
          <AnimatedTitle
            title="How I <b>D</b>esign"
            containerClass="!text-snow text-left !sm:px-0 !px-0 mb-4"
            alignLeft={true}
          />
          <p className="max-w-xl font-circular-web text-sm sm:text-base text-snow/60 leading-relaxed mt-2">
            A structured, user-centered approach to transforming ambiguous requirements into clear, accessible, and delightful digital products.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="process-card rounded-2xl border border-snow/10 bg-obsidian-surface/60 p-6 flex flex-col justify-between hover:border-amber/40 transition-colors"
            >
              <div>
                <span className="font-zentry text-3xl font-bold text-amber block mb-2">
                  {item.step}
                </span>
                <h3 className="font-robert-medium text-lg text-snow font-bold mb-1">
                  {item.title}
                </h3>
                <p className="font-general text-[11px] uppercase tracking-wider text-amber/80 mb-3">
                  {item.subtitle}
                </p>
                <p className="font-circular-web text-xs text-snow/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DesignProcess;
