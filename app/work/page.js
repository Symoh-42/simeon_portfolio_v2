"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects, categories } from "@/data/portfolio";

export default function WorkPage() {
  const [cat, setCat] = useState("All");

  const list = useMemo(
    () => (cat === "All" ? projects : projects.filter((p) => p.category === cat)),
    [cat]
  );

  return (
    <>
      <section className="border-b border-[color:var(--hair)] pt-[130px] pb-14 lg:pt-[160px] lg:pb-20">
        <div className="shell">
          <Reveal>
            <Link
              href="/"
              className="font-mono text-[12px] uppercase tracking-wide2 text-ink-soft hover:text-accent"
            >
              ← Back home
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-7 font-display text-[48px] font-extrabold leading-[0.98] tracking-tight text-ink sm:text-[68px]">
              All projects<span className="text-accent">.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-ink-soft">
              {projects.length} shipped products across fintech, e-commerce,
              hospitality, legal, logistics, real estate and more. Click any
              card to open the live site.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="shell py-14 lg:py-20">
        {/* filters */}
        <div className="flex flex-wrap gap-2 border-b border-[color:var(--hair)] pb-7">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-wide2 transition-all duration-200 ${
                cat === c
                  ? "border-ink bg-ink text-paper"
                  : "border-[color:var(--hair)] text-ink-soft hover:border-ink/40 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-mono text-faint">
          {list.length} {list.length === 1 ? "project" : "projects"}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <ProjectCard project={p} priority={i < 6} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
