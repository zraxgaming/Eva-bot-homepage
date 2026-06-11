import config from "@/config.json";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={config.faq.eyebrow} title={config.faq.heading} subtitle={config.faq.subheading} />

        <div className="mt-14 border-t border-border/60">
          {config.faq.items.map((item, i) => (
            <details
              key={i}
              className="group border-b border-border/60 py-5 sm:py-6 animate-rise"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                <div className="flex items-center gap-5 min-w-0">
                  <span className="text-[11px] font-mono text-muted-foreground tabular-nums shrink-0">0{i + 1}</span>
                  <span className="font-display text-lg sm:text-xl tracking-tight">{item.q}</span>
                </div>
                <span className="h-9 w-9 shrink-0 rounded-full border border-border grid place-items-center text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 ml-0 sm:ml-12 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
