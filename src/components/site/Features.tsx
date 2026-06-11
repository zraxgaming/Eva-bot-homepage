import config from "@/config.json";
import { Music, Shield, Coins, TrendingUp, Ticket, Gift, Bot, Settings2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Music, Shield, Coins, TrendingUp, Ticket, Gift, Bot, Settings2,
};

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={config.features.eyebrow} title={config.features.heading} subtitle={config.features.subheading} />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden">
          {config.features.items.map((f, i) => {
            const Icon = iconMap[f.icon] ?? Bot;
            return (
              <div
                key={f.title}
                className="group relative bg-background p-6 sm:p-7 hover:bg-card/60 transition-colors animate-rise"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="h-11 w-11 rounded-xl border border-border grid place-items-center group-hover:border-gold/60 group-hover:bg-gold/10 transition-colors">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground tabular-nums">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
