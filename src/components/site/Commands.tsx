import config from "@/config.json";
import { SectionHeader } from "./SectionHeader";

export function Commands() {
  return (
    <section id="commands" className="py-24 sm:py-32 bg-card/30 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={config.commands.eyebrow} title={config.commands.heading} subtitle={config.commands.subheading} />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {config.commands.categories.map((cat, i) => (
            <div
              key={cat.name}
              className="panel p-6 hover-lift animate-rise"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
                <h3 className="font-display text-2xl tracking-tight">{cat.name}</h3>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold">
                  {cat.items.length}+ cmds
                </span>
              </div>
              <ul className="space-y-4">
                {cat.items.map((it) => (
                  <li key={it.cmd} className="group">
                    <code className="text-gold text-sm font-mono group-hover:underline underline-offset-4 decoration-gold/40">{it.cmd}</code>
                    <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{it.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
