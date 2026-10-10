import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
import AnimatedTitle from "./AnimatedTitle";

// ─── BentoTilt — 3D mouse-tilt wrapper ───────────────────────────────────────
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`
    );
  };

  const handleMouseLeave = () => setTransformStyle("");

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// ─── Flagship Case Study Card ──────────────────────────────────────────────────
const FeaturedCaseStudyCard = ({
  id,
  badge,
  title,
  subtitle,
  description,
  tech,
  imgSrc,
  src,
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative size-full overflow-hidden rounded-2xl border border-snow/10 bg-obsidian-surface transition-all duration-300 hover:border-amber/40">
      {src ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center opacity-60"
        />
      ) : (
        <img
          src={imgSrc || "/img/gallery-1.jpg"}
          alt={title}
          className="absolute left-0 top-0 size-full object-cover object-center opacity-60"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/20" />

      <div className="relative z-10 flex size-full flex-col justify-between p-6 md:p-8 text-snow">
        <div>
          <span className="inline-block rounded-full border border-amber/40 bg-amber/20 px-3 py-1 text-xs font-general uppercase tracking-widest text-amber mb-3">
            {badge}
          </span>
          <h2 className="font-zentry text-3xl md:text-5xl font-black uppercase text-snow tracking-tight mb-2">
            {title}
          </h2>
          <p className="font-robert-medium text-sm md:text-base text-amber/90 mb-3">
            {subtitle}
          </p>
          <p className="max-w-xl font-circular-web text-xs sm:text-sm text-snow/80 leading-relaxed mb-4">
            {description}
          </p>
          {tech && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-amber/30 bg-obsidian/80 px-2.5 py-0.5 text-[10px] sm:text-xs text-amber"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => navigate(`/work/${id}`)}
            className="flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-xs sm:text-sm font-bold text-obsidian hover:bg-amber-light transition-colors focus-visible:ring-2 focus-visible:ring-amber focus-visible:outline-none"
          >
            <TiLocationArrow className="text-base" />
            <span>View Full Case Study &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Secondary Project Card ─────────────────────────────────────────────────────
const SecondaryProjectCard = ({ title, badge, description, tech, imgSrc, src, githubUrl }) => (
  <div className="relative size-full overflow-hidden rounded-xl border border-snow/10 bg-obsidian-surface p-5 text-snow flex flex-col justify-between hover:border-snow/20 transition-colors">
    {src ? (
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover opacity-20"
      />
    ) : imgSrc ? (
      <img
        src={imgSrc}
        alt={title}
        className="absolute left-0 top-0 size-full object-cover opacity-20"
      />
    ) : null}
    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />

    <div className="relative z-10">
      <span className="inline-block text-[10px] font-general uppercase tracking-widest text-amber mb-1">
        {badge}
      </span>
      <h3 className="font-robert-medium text-lg text-snow font-bold mb-2">{title}</h3>
      <p className="font-circular-web text-xs text-snow/70 leading-relaxed mb-3">{description}</p>
    </div>

    <div className="relative z-10 flex items-center justify-between mt-4">
      <div className="flex flex-wrap gap-1">
        {tech.slice(0, 3).map((t) => (
          <span key={t} className="rounded-full border border-snow/10 bg-obsidian/60 px-2 py-0.5 text-[9px] text-snow/60">
            {t}
          </span>
        ))}
      </div>
      {githubUrl && githubUrl !== "#" && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-snow/50 hover:text-amber transition-colors p-1"
          aria-label={`GitHub repo for ${title}`}
        >
          <FaGithub className="text-base" />
        </a>
      )}
    </div>
  </div>
);

// ─── Projects Section ──────────────────────────────────────────────────────────
const Projects = () => {
  return (
    <section id="projects" className="bg-obsidian-surface py-24 scroll-mt-12">
      <div className="container mx-auto px-5 md:px-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-general text-xs uppercase tracking-widest text-amber mb-2">
            Selected Work & Case Studies
          </p>
          <AnimatedTitle
            title="Product Design <b>&</b> <br /> UX Case Studies"
            containerClass="!text-snow text-left !sm:px-0 !px-0 mb-4"
            alignLeft={true}
          />
          <p className="max-w-2xl font-circular-web text-base text-snow/70 leading-relaxed mt-4">
            Detailed design case studies demonstrating problem framing, user interaction flows, high-fidelity UI design, and engineering implementations.
          </p>
        </div>

        {/* ── 3 Flagship Case Studies ── */}
        <div className="space-y-10 mb-20">
          
          {/* 1. KytchenPulse */}
          <BentoTilt className="h-[480px] md:h-[520px] w-full">
            <FeaturedCaseStudyCard
              id="kytchenpulse"
              badge="Dashboard & Workflow UI"
              title="KytchenPulse"
              subtitle="Restaurant & Kitchen Display System (KDS) Dashboard Interface"
              description="Freelance restaurant management and kitchen display interface designed to streamline order status tracking, inventory management, and kitchen display workflows for high-stress culinary environments."
              tech={["Figma", "UI/UX Research", "Design System", "Workflow Mapping", "React"]}
              imgSrc="/img/gallery-4.png"
            />
          </BentoTilt>

          {/* 2. UniRide */}
          <BentoTilt className="h-[480px] md:h-[520px] w-full">
            <FeaturedCaseStudyCard
              id="uniride"
              badge="Mobile UX & Real-Time Sync"
              title="UniRide"
              subtitle="Real-Time Campus Ride-Pooling & Safety-First Mobile Experience"
              description="A campus-focused mobile ride-sharing app focusing on ride discovery, quick request-to-acceptance flows, and safety-first verification between university students."
              tech={["Figma", "React Native", "TypeScript", "WebSockets", "Mapbox", "Node.js"]}
              src="/img/gallery-2.mp4"
            />
          </BentoTilt>

          {/* 3. SRM Sports Council */}
          <BentoTilt className="h-[480px] md:h-[520px] w-full">
            <FeaturedCaseStudyCard
              id="sports-council"
              badge="Workflow & Dashboard Design"
              title="SRM Sports Council"
              subtitle="University Sports Management, Event Approval & Facility Booking Workflows"
              description="Streamlining event registrations, court slot bookings, and administrative approval queues for university student athletes and sports officials."
              tech={["Figma", "React.js", "Node.js", "Express", "MongoDB", "Framer Motion"]}
              imgSrc="/img/gallery-3.gif"
            />
          </BentoTilt>
        </div>

        {/* ── Secondary Projects Section Header ── */}
        <div className="mb-10">
          <p className="font-general text-xs uppercase tracking-widest text-amber mb-1">
            Engineering & Auxiliary Projects
          </p>
          <AnimatedTitle
            title="More Selected <b>W</b>ork"
            containerClass="!text-snow text-left !sm:px-0 !px-0 !text-3xl sm:!text-5xl"
            alignLeft={true}
          />
        </div>

        {/* Bento Grid for Secondary Projects (Including Qiskit Fall Fest) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <BentoTilt key={project.id} className="h-72 w-full">
              <SecondaryProjectCard
                title={project.title}
                badge={project.badge}
                description={project.description}
                tech={project.tech}
                imgSrc={project.imgSrc}
                src={project.src}
                githubUrl={project.githubUrl}
              />
            </BentoTilt>
          ))}

          {/* GitHub Link Card */}
          <BentoTilt className="h-72 w-full">
            <div
              className="flex size-full cursor-pointer flex-col justify-between rounded-xl bg-amber p-6 transition-opacity hover:opacity-95"
              onClick={() => window.open("https://github.com/pradnish18", "_blank")}
            >
              <div>
                <span className="font-general text-[10px] uppercase tracking-widest text-obsidian/70">
                  Open Source & Repos
                </span>
                <h4 className="font-zentry text-3xl font-black text-obsidian uppercase mt-1">
                  More on <b>G</b>itHub
                </h4>
                <p className="font-circular-web text-xs text-obsidian/80 mt-2">
                  Explore full codebase repositories, algorithms, and experiments.
                </p>
              </div>
              <FaGithub className="text-4xl self-end text-obsidian" />
            </div>
          </BentoTilt>
        </div>

      </div>
    </section>
  );
};

export default Projects;
