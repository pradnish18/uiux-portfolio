import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

// ─── Work experience entries ──────────────────────────────────────────────────
const workEntries = [
  {
    period: "June 2025 — July 2025",
    role: "Software Development Intern",
    company: "Purple Techno Solutions",
    description: [
      "Translated Figma designs into reusable React components for cross-device UI consistency.",
      "Integrated REST APIs via Axios, managing async data flows and optimizing frontend payload handling.",
      "Built an AI Prompt Navigator using iterative prompt engineering, improving user prompt precision.",
      "Performed UI validation, API debugging via Postman, and regression testing in Agile sprints.",
    ],
    tech: ["React", "Node.js", "Express", "Axios", "Postman", "Git"],
  },
];

// ─── Education entries ────────────────────────────────────────────────────────
const educationEntries = [
  {
    period: "2023 — 2027",
    role: "B.Tech — Computer Science & Engineering",
    company: "SRM University AP",
    description:
      "CGPA: 8.23 / 10.0. Coursework: Data Structures, Algorithms, OOP, Operating Systems, DBMS. Built full-stack web & mobile projects spanning AI and product UX.",
    badge: "8.23 CGPA",
  },
  {
    period: "2021 — 2023",
    role: "Class 12th Senior Secondary",
    company: "Board of Secondary Education",
    description: "Scored 92.5% — strong foundation in Mathematics and Computer Science.",
    badge: "92.5%",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
const certEntries = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Coursera / Google",
    status: "In Progress",
    accent: "amber",
  },
  {
    title: "Figma UI/UX Design Megacourse",
    issuer: "Udemy",
    status: "Completed",
    accent: "indigo",
  },
  {
    title: "Oracle Certified Professional",
    issuer: "Oracle Java SE 17",
    status: "Certified (Feb 2026)",
    accent: "amber",
  },
];

const TimelineEntry = ({ entry, accentColor, isWork }) => (
  <div className="relative border-l-2 border-snow/10 pl-6 pb-8 last:pb-0">
    <div
      className={`absolute -left-[7px] top-1.5 size-3 rounded-full border-2 ${
        accentColor === "amber"
          ? "border-amber bg-obsidian-surface"
          : "border-indigo bg-obsidian-surface"
      }`}
    />

    <span className="inline-block rounded-full border border-snow/10 bg-obsidian/60 px-2.5 py-0.5 font-general text-[10px] uppercase tracking-widest text-snow/40">
      {entry.period}
    </span>

    <p className="mt-2 font-robert-medium text-base text-snow leading-snug">
      {entry.role}
    </p>

    <div className="mt-0.5 flex items-center gap-2 flex-wrap">
      <p className={`font-general text-xs ${accentColor === "amber" ? "text-amber" : "text-indigo"}`}>
        {entry.company}
      </p>
      {entry.badge && (
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
          accentColor === "amber"
            ? "bg-amber/15 text-amber"
            : "bg-indigo/15 text-indigo"
        }`}>
          {entry.badge}
        </span>
      )}
    </div>

    {isWork ? (
      <ul className="mt-2 space-y-1.5">
        {entry.description.map((point, i) => (
          <li key={i} className="flex gap-2 text-xs text-snow/65 leading-relaxed">
            <span className="mt-0.5 shrink-0 text-amber">&rsaquo;</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="mt-2 text-xs text-snow/65 leading-relaxed">
        {entry.description}
      </p>
    )}

    {entry.tech && entry.tech.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-1">
        {entry.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-amber/20 bg-amber/10 px-2.5 py-0.5 text-[10px] text-amber"
          >
            {t}
          </span>
        ))}
      </div>
    )}
  </div>
);

const Experience = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  return (
    <div id="experience" className="w-screen bg-obsidian-surface text-snow py-24 scroll-mt-12">
      <div className="container mx-auto px-5 md:px-10">

        <p className="mb-2 font-general text-xs uppercase tracking-widest text-amber">
          Background & Learning
        </p>
        <AnimatedTitle
          title="Experience <b>&</b> Credentials"
          containerClass="mt-4 !text-snow !text-left !sm:px-0 !px-0"
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

          {/* Work Experience */}
          <div ref={leftRef}>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-amber/40 to-transparent" />
              <span className="font-general text-xs uppercase tracking-widest text-amber">
                Work Experience
              </span>
              <div className="size-1.5 rounded-full bg-amber" />
            </div>

            <div>
              {workEntries.map((entry, i) => (
                <TimelineEntry
                  key={i}
                  entry={entry}
                  accentColor="amber"
                  isWork={true}
                />
              ))}
            </div>

            <Button
              id="resume-exp-btn"
              title="View Full Résumé ↗"
              containerClass="mt-8 bg-amber text-obsidian !text-black font-bold hover:bg-amber-light transition-colors"
              onClick={() => window.open("/resume.pdf", "_blank")}
            />
          </div>

          {/* Education & Credentials */}
          <div ref={rightRef}>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-indigo/40 to-transparent" />
              <span className="font-general text-xs uppercase tracking-widest text-indigo">
                Education
              </span>
              <div className="size-1.5 rounded-full bg-indigo" />
            </div>

            <div>
              {educationEntries.map((entry, i) => (
                <TimelineEntry
                  key={i}
                  entry={entry}
                  accentColor="indigo"
                  isWork={false}
                />
              ))}
            </div>

            <div className="mt-10">
              <p className="mb-4 font-general text-xs uppercase tracking-widest text-snow/40">
                Design Credentials & Certifications
              </p>
              <div className="space-y-3">
                {certEntries.map((cert, idx) => (
                  <div key={idx} className="rounded-xl border border-snow/10 bg-obsidian/60 p-4 flex items-center justify-between">
                    <div>
                      <p className="font-robert-medium text-sm text-snow">{cert.title}</p>
                      <p className="text-xs text-snow/50">{cert.issuer}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      cert.accent === "amber"
                        ? "bg-amber/15 text-amber border border-amber/30"
                        : "bg-indigo/15 text-indigo border border-indigo/30"
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-snow/10 to-transparent" />
      </div>
    </div>
  );
};

export default Experience;
