import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkGrid from "@/components/WorkGrid";
import { getProjects, getCategories } from "@/data/portfolio";

export default async function WorkPage() {
  const projects = await getProjects();
  const categories = getCategories(projects);

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

      <WorkGrid projects={projects} categories={categories} />
    </>
  );
}
