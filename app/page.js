import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import {
  profile,
  projects,
  services,
  skillGroups,
  experience,
  education,
  techMarquee,
} from "@/data/portfolio";

const featured = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative overflow-hidden pt-[120px] lg:pt-[150px]">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            {/* left */}
            <div>
              <p
                className="flex animate-rise items-center gap-3 font-mono text-[12px] uppercase tracking-mono text-ink-soft"
                style={{ animationDelay: "0.05s" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse2 rounded-full bg-accent" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Software Engineer · {profile.location}
              </p>

              <h1 className="mt-6 font-display text-[58px] font-extrabold leading-[0.92] tracking-tight text-ink sm:text-[80px] lg:text-[96px]">
                <span className="block animate-rise" style={{ animationDelay: "0.12s" }}>
                  Simeon
                </span>
                <span
                  className="block animate-rise"
                  style={{ animationDelay: "0.24s" }}
                >
                  Mwangi<span className="text-accent">.</span>
                </span>
              </h1>

              <p
                className="mt-7 max-w-prose2 animate-rise font-sans text-[16px] leading-relaxed text-ink-soft"
                style={{ animationDelay: "0.4s" }}
              >
                {profile.tagline}
              </p>

              <div
                className="mt-7 flex animate-rise flex-wrap gap-2"
                style={{ animationDelay: "0.52s" }}
              >
                {profile.roles.map((r) => (
                  <span key={r} className="tag">
                    {r}
                  </span>
                ))}
              </div>

              <div
                className="mt-9 flex animate-rise flex-wrap items-center gap-3"
                style={{ animationDelay: "0.64s" }}
              >
                <Link href="/#work" className="btn btn-fill">
                  View Work ↓
                </Link>
                <a href={`mailto:${profile.email}`} className="btn btn-line">
                  Hire Me
                </a>
                <a href={profile.cv} download className="btn btn-line">
                  Résumé
                </a>
              </div>
            </div>

            {/* right — spec card */}
            <div
              className="animate-fade self-start lg:mt-4"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="border border-[color:var(--hair-strong)] bg-card">
                <div className="flex items-center justify-between border-b border-[color:var(--hair)] px-5 py-3">
                  <span className="font-mono text-[11px] uppercase tracking-mono text-faint">
                    ~/status
                  </span>
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full border border-ink/20" />
                    <span className="h-2.5 w-2.5 rounded-full border border-ink/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                </div>
                <div className="grid grid-cols-2 divide-x divide-y divide-[color:var(--hair)]">
                  {profile.stats.map((s) => (
                    <div key={s.label} className="p-5">
                      <p className="font-display text-[36px] font-bold leading-none text-ink">
                        {s.k}
                      </p>
                      <p className="mt-2 font-mono text-[10.5px] uppercase tracking-wide2 text-faint">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[color:var(--hair)] px-5 py-4">
                  <p className="font-mono text-[11px] leading-relaxed text-ink-soft">
                    <span className="text-accent">const</span> available ={" "}
                    <span className="text-accent">true</span>
                    <br />
                    <span className="text-faint">{`// open to full-time & contract`}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tech marquee */}
        <div className="mt-16 border-y border-[color:var(--hair)] py-4 lg:mt-24">
          <div className="marquee-mask">
            <div className="marquee-track">
              {[...techMarquee, ...techMarquee].map((t, i) => (
                <span
                  key={i}
                  className="mx-6 flex items-center gap-6 font-mono text-[13px] uppercase tracking-wide2 text-ink-soft"
                >
                  {t}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── ABOUT ─────────────────────────── */}
      <section id="about" className="shell py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.5fr_1fr] lg:gap-20">
          <Reveal>
            <p className="mono-label">001 / About</p>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-display text-[26px] font-medium leading-[1.35] text-ink sm:text-[32px]">
                I build scalable, user-friendly applications — from UI and
                frontend to backend architecture, databases and integrations —
                for businesses, NGOs, law firms, fintech and real-estate
                companies.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <p className="font-sans text-[14px] leading-relaxed text-ink-soft">
                  Over 5+ years I&rsquo;ve shipped 25+ projects end-to-end,
                  working across cross-functional teams, integrating third-party
                  APIs like M-PESA, and keeping applications responsive and
                  high-performing.
                </p>
                <p className="font-sans text-[14px] leading-relaxed text-ink-soft">
                  My core stack is React.js, Next.js, Django and React Native —
                  backed by PostgreSQL, clean code, testing and secure,
                  role-based systems. I hold a B.Sc. in Mathematics & Computer
                  Science.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── SERVICES ─────────────────────────── */}
      <section id="services" className="border-t border-[color:var(--hair)] bg-paper2 py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="mono-label">002 / What I do</p>
            <h2 className="mt-4 max-w-2xl font-display text-[40px] font-bold leading-[1.02] tracking-tight text-ink sm:text-[52px]">
              Services & capabilities
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-[color:var(--hair)] bg-[color:var(--hair)] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 90} className="bg-card">
                <div className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-paper">
                  <span className="font-mono text-[12px] tracking-mono text-accent">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-display text-[22px] font-semibold leading-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-[13.5px] leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.skills.map((k) => (
                      <span key={k} className="tag">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── WORK ─────────────────────────── */}
      <section id="work" className="shell py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="mono-label">003 / Selected work</p>
            <h2 className="mt-4 max-w-2xl font-display text-[40px] font-bold leading-[1.02] tracking-tight text-ink sm:text-[52px]">
              Things I&rsquo;ve shipped
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="/work"
              className="font-mono text-[12px] uppercase tracking-wide2 text-accent hover:text-ink"
            >
              All {projects.length} projects →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100}>
              <ProjectCard project={p} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────────────────── EXPERIENCE ─────────────────────────── */}
      <section id="experience" className="border-t border-[color:var(--hair)] bg-paper2 py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-[0.5fr_1fr] lg:gap-20">
          <Reveal>
            <p className="mono-label">004 / Experience</p>
            <div className="mt-10 border-t border-[color:var(--hair-strong)] pt-6">
              <p className="mono-label">Education</p>
              <h3 className="mt-3 font-display text-[20px] font-semibold leading-snug text-ink">
                {education.degree}
              </h3>
              <p className="mt-1 font-sans text-[13px] text-ink-soft">
                {education.school}
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-wide2 text-faint">
                {education.period}
              </p>
            </div>
          </Reveal>

          <div className="space-y-px">
            {experience.map((e, i) => (
              <Reveal key={e.org} delay={i * 100}>
                <div className="border-t border-[color:var(--hair-strong)] py-8 first:border-t-0 first:pt-0">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="font-display text-[24px] font-semibold leading-tight text-ink">
                      {e.role}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wide2 text-faint">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[12px] uppercase tracking-wide2 text-accent">
                    {e.org}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {e.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 font-sans text-[13.5px] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── SKILLS ─────────────────────────── */}
      <section className="shell py-24 lg:py-32">
        <Reveal>
          <p className="mono-label">005 / Stack</p>
          <h2 className="mt-4 font-display text-[40px] font-bold leading-[1.02] tracking-tight text-ink sm:text-[52px]">
            Tools of the trade
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={(i % 3) * 80}>
              <div className="border-t border-[color:var(--hair-strong)] pt-5">
                <h3 className="font-mono text-[12px] uppercase tracking-wide2 text-accent">
                  {g.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="font-sans text-[14px] text-ink-soft"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────────────────── CONTACT ─────────────────────────── */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-[color:var(--hair)] bg-ink py-24 text-paper lg:py-36"
      >
        <div className="shell relative">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-mono text-paper/50">
              006 / Contact
            </p>
            <h2 className="mt-6 max-w-4xl font-display text-[48px] font-extrabold leading-[0.98] tracking-tight sm:text-[68px] lg:text-[84px]">
              Let&rsquo;s build something{" "}
              <span className="text-accent">together.</span>
            </h2>
            <p className="mt-7 max-w-xl font-sans text-[15px] leading-relaxed text-paper/70">
              I&rsquo;m currently open to full-time and contract roles —
              full-stack, frontend, backend, software engineering and system
              architecture. Have a project or a position in mind? Reach out.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border border-paper/80 bg-paper px-6 py-3.5 font-mono text-[12px] uppercase tracking-wide2 text-ink transition-all duration-300 hover:bg-accent hover:border-accent hover:text-paper"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="inline-flex items-center gap-2 border border-paper/30 px-6 py-3.5 font-mono text-[12px] uppercase tracking-wide2 text-paper transition-all duration-300 hover:border-paper"
              >
                {profile.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t border-paper/15 pt-8 font-mono text-[11px] uppercase tracking-wide2 text-paper/50">
              <span>{profile.location}</span>
              <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                Portfolio ↗
              </a>
              <a href={profile.cv} download className="hover:text-paper">
                Résumé ↓
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
