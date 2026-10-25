import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { caseStudiesData } from "../data/caseStudiesData";
import LazyVideo from "./LazyVideo";

const CaseStudyTemplate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const caseStudy = caseStudiesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen w-screen bg-obsidian text-snow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-zentry font-bold text-amber mb-4">Case Study Not Found</h1>
        <p className="text-snow/60 mb-8 max-w-md">
          The project case study you requested (&quot;{id}&quot;) could not be found or may have been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-obsidian font-bold hover:bg-amber-light transition-colors"
        >
          <FaArrowLeft /> Return to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-obsidian text-snow selection:bg-amber selection:text-obsidian pb-24">
      {/* Sticky top bar navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-snow/10 bg-obsidian/90 backdrop-blur-md px-6 py-4">
        <button
          onClick={() => navigate("/#projects")}
          className="flex items-center gap-2 text-sm font-medium text-snow/70 hover:text-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-md px-2 py-1"
          aria-label="Back to selected work"
        >
          <FaArrowLeft className="text-amber" />
          <span>Back to Selected Work</span>
        </button>
        <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-general uppercase tracking-widest text-amber">
          {caseStudy.badge}
        </span>
      </nav>

      {/* Main Content Container */}
      <main className="container mx-auto px-5 md:px-12 max-w-5xl pt-12">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="font-zentry text-4xl sm:text-6xl md:text-7xl font-black text-snow uppercase tracking-widest mb-4">
            {caseStudy.title}
          </h1>
          <p className="font-circular-web text-lg sm:text-xl text-snow/70 max-w-3xl leading-relaxed mb-8">
            {caseStudy.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {caseStudy.liveUrl && caseStudy.liveUrl !== "#" && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold text-obsidian hover:bg-amber-light transition-colors"
              >
                <TiLocationArrow className="text-lg" />
                <span>Live Demo</span>
              </a>
            )}
            {caseStudy.githubUrl && caseStudy.githubUrl !== "#" && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-snow/20 bg-obsidian-surface px-6 py-3 text-sm font-medium text-snow hover:border-amber hover:text-amber transition-colors"
              >
                <FaGithub className="text-lg" />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          {/* Role & Metadata Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-snow/10 bg-obsidian-surface/60">
            <div>
              <p className="font-general text-[11px] uppercase tracking-widest text-snow/40">Role</p>
              <p className="font-robert-medium text-sm text-amber mt-1">{caseStudy.role}</p>
            </div>
            <div>
              <p className="font-general text-[11px] uppercase tracking-widest text-snow/40">Timeline</p>
              <p className="font-robert-medium text-sm text-snow mt-1">{caseStudy.timeline}</p>
            </div>
            <div className="col-span-2">
              <p className="font-general text-[11px] uppercase tracking-widest text-snow/40 mb-1">Tools & Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {caseStudy.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-snow/10 bg-obsidian-border px-2.5 py-0.5 text-xs text-snow/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            {caseStudy.organization && (
              <div className="col-span-2 md:col-span-4 pt-3 border-t border-snow/10">
                <p className="font-general text-[11px] uppercase tracking-widest text-snow/40">Collaboration & Context</p>
                <p className="font-robert-medium text-xs sm:text-sm text-snow/80 mt-1">{caseStudy.organization}</p>
              </div>
            )}
          </div>
        </header>

        {/* Overview & Problem */}
        <section className="space-y-12 mb-16">
          <div className="border-l-2 border-amber pl-6 py-2">
            <h2 className="font-general text-xs uppercase tracking-widest text-amber mb-2">01. Overview</h2>
            <p className="font-circular-web text-base sm:text-lg text-snow/90 leading-relaxed">
              {caseStudy.overview}
            </p>
            {caseStudy.designIntent && (
              <div className="mt-4 rounded-xl border border-amber/20 bg-amber/5 p-4 text-sm text-snow/80">
                <span className="font-general text-[10px] uppercase tracking-widest text-amber block mb-1">
                  Central Design Intent
                </span>
                <p className="italic font-circular-web">&ldquo;{caseStudy.designIntent}&rdquo;</p>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-snow/10 bg-obsidian-surface p-6 sm:p-8">
            <h2 className="font-general text-xs uppercase tracking-widest text-amber mb-3">02. Problem & Challenge</h2>
            <p className="font-circular-web text-base text-snow/80 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          {/* Design Direction (Optional) */}
          {caseStudy.designDirection && (
            <div className="rounded-2xl border border-snow/10 bg-obsidian-surface/60 p-6 sm:p-8">
              <h2 className="font-general text-xs uppercase tracking-widest text-amber mb-3">Design Direction & Aesthetic</h2>
              <p className="font-circular-web text-base text-snow/80 leading-relaxed">
                {caseStudy.designDirection}
              </p>
            </div>
          )}

          {/* Constraints (Optional) */}
          {caseStudy.constraints && caseStudy.constraints.length > 0 && (
            <div className="rounded-2xl border border-snow/10 bg-obsidian-surface/40 p-6 sm:p-8">
              <h3 className="font-general text-xs uppercase tracking-widest text-snow/50 mb-4">Core Constraints</h3>
              <ul className="space-y-2">
                {caseStudy.constraints.map((constraint, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-snow/70">
                    <span className="text-amber shrink-0">&bull;</span>
                    <span>{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Scope & Personal Contribution (Optional) */}
        {caseStudy.scope && caseStudy.scope.length > 0 && (
          <section className="mb-16">
            <h2 className="font-general text-xs uppercase tracking-widest text-amber mb-6">Scope & Direct Contribution</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {caseStudy.scope.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-snow/10 bg-obsidian-surface p-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-amber/10 px-2.5 py-0.5 text-[10px] font-bold text-amber mb-2">
                      Area #{idx + 1}
                    </span>
                    <h3 className="font-robert-medium text-sm text-snow mb-1.5">{item.title}</h3>
                    <p className="font-circular-web text-xs text-snow/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Audience Lenses & User Needs (Optional) */}
        {caseStudy.audience && caseStudy.audience.length > 0 && (
          <section className="mb-16">
            <h2 className="font-general text-xs uppercase tracking-widest text-amber mb-6">Audience Lenses & User Needs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.audience.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-snow/10 bg-obsidian-surface p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full border border-amber/30 bg-amber/10 px-3 py-0.5 text-[10px] font-bold text-amber uppercase tracking-wider mb-2">
                      {item.persona}
                    </span>
                    <h3 className="font-robert-medium text-base text-snow mb-2">{item.goal}</h3>
                    <p className="font-circular-web text-xs text-snow/70 leading-relaxed mb-3">
                      <strong className="text-snow/90 font-medium">Information Need:</strong> {item.need}
                    </p>
                  </div>
                  <div className="rounded-xl bg-obsidian/60 border border-snow/5 p-3 text-xs text-amber/90">
                    <strong className="text-amber">Design Consideration:</strong> {item.consideration}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* User Journey Flow (Optional) */}
        {caseStudy.journey && (
          <section className="mb-16">
            <h2 className="font-general text-xs uppercase tracking-widest text-amber mb-6">Information Architecture & User Journey</h2>
            <div className="rounded-2xl border border-snow/10 bg-obsidian-surface p-6 sm:p-8 space-y-6">
              <p className="font-circular-web text-sm text-snow/80 leading-relaxed">
                {caseStudy.journey.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                {caseStudy.journey.steps.map((step, idx) => (
                  <div key={idx} className="rounded-xl border border-amber/20 bg-amber/5 p-3 flex flex-col justify-between min-h-[90px]">
                    <span className="text-[10px] font-mono text-amber mb-1 font-bold">0{idx + 1}</span>
                    <p className="font-robert-medium text-xs text-snow leading-snug">{step}</p>
                  </div>
                ))}
              </div>

              {caseStudy.journey.principles && (
                <div className="pt-4 border-t border-snow/10">
                  <h3 className="font-general text-[11px] uppercase tracking-widest text-snow/50 mb-3">Navigation & Journey Principles</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudy.journey.principles.map((p, idx) => (
                      <li key={idx} className="text-xs text-snow/70 flex gap-2 leading-relaxed">
                        <span className="text-amber shrink-0">&bull;</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Key Design Decisions (Optional) */}
        {caseStudy.decisions && caseStudy.decisions.length > 0 && (
          <section className="mb-16">
            <h2 className="font-general text-xs uppercase tracking-widest text-amber mb-6">03. Key Design Decisions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.decisions.map((decision, idx) => (
                <div key={idx} className="rounded-2xl border border-snow/10 bg-obsidian-surface p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-amber/10 px-2.5 py-0.5 text-[10px] font-bold text-amber mb-3">
                      Decision #{idx + 1}
                    </span>
                    <h3 className="font-robert-medium text-lg text-snow mb-2">{decision.title}</h3>
                    <p className="font-circular-web text-sm text-snow/70 leading-relaxed">{decision.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Design System & Specifications (Optional) */}
        {caseStudy.designSystem && (
          <section className="mb-16">
            <h2 className="font-general text-xs uppercase tracking-widest text-amber mb-6">04. Design System & Tokens</h2>
            <div className="rounded-2xl border border-snow/10 bg-obsidian-surface p-6 sm:p-8 space-y-6">
              <p className="font-circular-web text-sm text-snow/80 leading-relaxed">
                {caseStudy.designSystem.description}
              </p>

              {/* Color Tokens Palette */}
              {caseStudy.designSystem.colors && (
                <div>
                  <h3 className="font-general text-[11px] uppercase tracking-widest text-snow/50 mb-3">
                    Color Tokens Palette
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {caseStudy.designSystem.colors.map((color, idx) => (
                      <div key={idx} className="rounded-xl border border-snow/10 bg-obsidian/60 p-2.5">
                        <div
                          className="h-10 w-full rounded-lg mb-2 border border-white/10"
                          style={{ backgroundColor: color.hex }}
                        />
                        <p className="font-robert-medium text-xs text-snow truncate">{color.name}</p>
                        <p className="font-mono text-[10px] text-snow/50 uppercase">{color.hex}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Typography, Grid & Elevation Specs */}
              {caseStudy.designSystem.specs && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-snow/10">
                  {caseStudy.designSystem.specs.map((spec, idx) => (
                    <div key={idx} className="rounded-xl bg-obsidian/40 border border-snow/5 p-4">
                      <p className="font-general text-[10px] uppercase tracking-widest text-amber mb-1">{spec.label}</p>
                      <p className="font-robert-medium text-sm text-snow">{spec.value}</p>
                      <p className="text-xs text-snow/50 mt-1 leading-relaxed">{spec.detail}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Visual Artifacts Showcase (Optional) */}
        {caseStudy.artifacts && caseStudy.artifacts.length > 0 && (
          <section className="mb-16">
            <h2 className="font-general text-xs uppercase tracking-widest text-amber mb-6">
              {caseStudy.designSystem ? "05. Key Screens & Flows" : "04. Design & UI Showcase"}
            </h2>
            <div className="space-y-8">
              {caseStudy.artifacts.map((artifact, idx) => (
                <div key={idx} className="overflow-hidden rounded-2xl border border-snow/10 bg-obsidian-surface">
                  {artifact.type === "video" ? (
                    <LazyVideo
                      src={artifact.url}
                      controls
                      autoPlay
                      muted
                      loop
                      className="w-full max-h-[500px] object-cover"
                    />
                  ) : (
                    <img
                      src={artifact.url}
                      alt={artifact.title}
                      className="w-full max-h-[640px] object-contain bg-obsidian/40 object-center"
                    />
                  )}
                  <div className="p-4 border-t border-snow/10 bg-obsidian/60">
                    <p className="font-robert-medium text-sm text-snow">{artifact.title}</p>
                    <p className="text-xs text-snow/50 mt-0.5">{artifact.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outcomes & Reflections (Optional) */}
        {(caseStudy.outcomes || caseStudy.reflections) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
              <div className="rounded-2xl border border-amber/20 bg-amber/5 p-6 sm:p-8">
                <h2 className="font-general text-xs uppercase tracking-widest text-amber mb-4">Outcomes & Results</h2>
                <ul className="space-y-3">
                  {caseStudy.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-snow/80">
                      <span className="text-amber shrink-0">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {caseStudy.reflections && caseStudy.reflections.length > 0 && (
              <div className="rounded-2xl border border-snow/10 bg-obsidian-surface p-6 sm:p-8">
                <h2 className="font-general text-xs uppercase tracking-widest text-snow/50 mb-4">Key Learnings & Next Steps</h2>
                <ul className="space-y-3">
                  {caseStudy.reflections.map((reflection, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-snow/70">
                      <span className="text-amber shrink-0">&bull;</span>
                      <span>{reflection}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Bottom Case Study Navigation */}
        <footer className="pt-12 border-t border-snow/10 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-sm font-medium text-amber hover:underline"
          >
            <FaArrowLeft /> Back to All Projects
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-snow/40 hover:text-snow transition-colors"
          >
            Back to Top &uarr;
          </button>
        </footer>
      </main>
    </div>
  );
};

export default CaseStudyTemplate;
