import config from "@/config.json";

export function Stats() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
        {config.hero.stats.map((s, i) => (
          <div key={s.label} className="px-4 sm:px-6 first:pl-0 last:pr-0 animate-rise" style={{ animationDelay: `${i * 0.06}s` }}>
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-foreground">
              {s.value}<span className="text-gold">.</span>
            </div>
            <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
