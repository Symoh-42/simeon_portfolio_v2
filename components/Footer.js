import Link from "next/link";
import Monogram from "./Monogram";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--hair)] bg-paper2">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Monogram />
            <p className="mt-5 max-w-xs font-sans text-[13px] leading-relaxed text-ink-soft">
              Full-stack developer & software engineer based in {profile.location}.
              Building scalable products for businesses across East Africa.
            </p>
          </div>

          <div>
            <p className="mono-label">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {[
                ["Selected Work", "/#work"],
                ["All Projects", "/work"],
                ["Services", "/#services"],
                ["Experience", "/#experience"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link
                    href={h}
                    className="font-sans text-[13px] text-ink-soft transition-colors hover:text-accent"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label">Connect</p>
            <ul className="mt-4 space-y-2.5 font-sans text-[13px] text-ink-soft">
              <li>
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phoneHref}`} className="transition-colors hover:text-accent">
                  {profile.phone}
                </a>
              </li>
              <li>
                <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  Current portfolio ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 hair" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-wide2 text-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wide2 text-faint">
            Built with Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
