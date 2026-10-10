import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    category: "UX Research & Strategy",
    skills: [
      "Personas",
      "User Journeys",
      "Competitive Analysis",
      "Information Architecture",
      "Usability Evaluation",
      "Task Flows",
    ],
  },
  {
    category: "UI & Interaction Design",
    skills: [
      "Wireframing",
      "High-Fidelity UI",
      "Prototyping",
      "Responsive Layouts",
      "Micro-interactions",
      "Interaction States",
    ],
  },
  {
    category: "Design Systems & Prototyping",
    skills: [
      "Figma",
      "FigJam",
      "Auto Layout",
      "Components & Variants",
      "Design Tokens",
      "Style Guides",
    ],
  },
  {
    category: "UX Engineering",
    skills: [
      "React 18",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Developer Handoff",
      "Accessibility (WCAG)",
    ],
  },
  {
    category: "Engineering Toolkit",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "REST APIs",
      "WebSockets",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Docker",
    ],
  },
];

const SkillGroup = ({ category, skills, index }) => {
  const groupRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          groupRef.current.querySelectorAll(".skill-pill"),
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: groupRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: groupRef }
  );

  return (
    <div ref={groupRef} className="mb-8">
      <p className="mb-3 font-general text-xs uppercase tracking-widest text-amber">
        {category}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-pill rounded-full border border-snow/20 bg-obsidian-border px-3.5 py-1.5 text-xs sm:text-sm font-medium text-snow transition-all duration-200 hover:border-amber hover:bg-amber hover:text-obsidian hover:shadow-[0_0_12px_#f59e0b66] cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="w-screen bg-obsidian-surface py-24 scroll-mt-12">
      <div className="container mx-auto px-5 md:px-10">
        <p className="mb-2 font-general text-xs uppercase tracking-widest text-amber">
          Design Toolkit & Capabilities
        </p>

        <div className="flex flex-col gap-12 md:flex-row md:gap-20">
          {/* Left Column */}
          <div className="flex-shrink-0 md:w-[38%]">
            <AnimatedTitle
              title="Design <b>t</b>oolkit <br /> & skill<b>s</b>"
              containerClass="!text-snow text-left !sm:px-0 !px-0 !text-4xl md:!text-6xl"
            />
            <p className="mt-6 max-w-xs font-circular-web text-sm text-snow/60 leading-relaxed">
              Design methods, prototyping tools, and engineering capabilities I use to solve product problems end-to-end.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            {skillGroups.map((group, index) => (
              <SkillGroup
                key={group.category}
                category={group.category}
                skills={group.skills}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-snow/10 to-transparent" />
      </div>
    </section>
  );
};

export default Skills;
