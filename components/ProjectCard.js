"use client";

import { useState } from "react";
import { shot } from "@/data/portfolio";

export default function ProjectCard({ project, priority = false }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block border border-[color:var(--hair)] bg-card transition-all duration-300 hover:border-ink/40"
    >
      {/* screenshot */}
      <div className="relative aspect-[16/11] overflow-hidden bg-paper2">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[11px] uppercase tracking-mono text-faint">
              loading preview…
            </span>
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shot(project.url)}
          alt={`${project.title} — screenshot`}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-[1.04] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-ink/15 bg-paper/80 text-ink opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>

      {/* meta */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10.5px] uppercase tracking-mono text-accent">
            {project.category}
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-mono text-faint">
            {project.company === "Greenbear Technologies" ? "GBT" : "Ohmspace"}
          </span>
        </div>

        <h3 className="mt-2.5 font-display text-[22px] font-semibold leading-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 font-sans text-[13px] leading-relaxed text-ink-soft">
          {project.blurb}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
