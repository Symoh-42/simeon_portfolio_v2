"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function WorkGrid({ projects, categories }) {
  const [cat, setCat] = useState("All");

  const list = useMemo(
    () => (cat === "All" ? projects : projects.filter((p) => p.category === cat)),
    [cat, projects]
  );

  return (
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
  );
}
