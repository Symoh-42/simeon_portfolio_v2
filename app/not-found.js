import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-[12px] uppercase tracking-mono text-accent">
          Error 404
        </p>
        <h1 className="mt-5 font-display text-[64px] font-extrabold leading-none tracking-tight text-ink sm:text-[96px]">
          Page not found<span className="text-accent">.</span>
        </h1>
        <p className="mt-5 font-sans text-[15px] text-ink-soft">
          That route doesn&rsquo;t exist — let&rsquo;s get you back on track.
        </p>
        <div className="mt-9 flex justify-center gap-3">
          <Link href="/" className="btn btn-fill">Home</Link>
          <Link href="/work" className="btn btn-line">View work</Link>
        </div>
      </div>
    </section>
  );
}
