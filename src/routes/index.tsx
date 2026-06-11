import { createFileRoute } from "@tanstack/react-router";
import config from "@/config.json";
import {
  Music, Shield, Coins, TrendingUp, Ticket, Gift, Bot, Settings2,
  Gem, Globe, Check, ArrowRight, Sparkles, Play, SkipForward, SkipBack, Volume2,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Music, Shield, Coins, TrendingUp, Ticket, Gift, Bot, Settings2,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${config.brand.name} — ${config.brand.tagline}` },
      { name: "description", content: config.hero.description },
      { property: "og:title", content: `${config.brand.name} — ${config.brand.tagline}` },
      { property: "og:description", content: config.hero.description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Commands />
      <Premium />
      <CtaBanner />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <div className="h-9 w-9 rounded-full bg-gradient-gold grid place-items-center text-primary-foreground font-display text-lg shadow-gold">
            {config.brand.logoEmoji}
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-wider">{config.brand.name}</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">{config.brand.tagline}</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
          {config.nav.map((n, i) => (
            <a key={n.label} href={n.href} className={i === 0 ? "text-gold" : "text-foreground/80 hover:text-gold transition-colors"}>
              {n.label}
              {n.label.toLowerCase() === "premium" && <Gem className="inline ml-1 h-3.5 w-3.5 text-gold" />}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <button className="hidden sm:flex items-center gap-1 text-sm text-foreground/80 hover:text-gold transition-colors">
            EN <Globe className="h-4 w-4" />
          </button>
          <a href="#invite" className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-bold tracking-wider text-primary-foreground shadow-gold hover:scale-105 transition-transform">
            LOGIN
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wider uppercase text-gold mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Trusted by 1M+ servers
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-foreground">
            {config.hero.title}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg">
            {config.hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={config.hero.primaryCta.href} className="rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold tracking-wider text-primary-foreground shadow-gold hover:scale-105 transition-transform inline-flex items-center gap-2">
              {config.hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
            </a>
            <a href={config.hero.secondaryCta.href} className="rounded-full border border-gold/40 px-7 py-3.5 text-sm font-bold tracking-wider text-gold hover:bg-gold/10 transition-colors">
              {config.hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <BotCard />
      </div>
    </section>
  );
}

function BotCard() {
  return (
    <div className="relative h-[420px] sm:h-[500px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,oklch(0.82_0.12_85/0.25),transparent_60%)]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[110%] max-w-[560px] rotate-[-8deg] glass rounded-3xl p-5 shadow-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-gradient-gold grid place-items-center text-primary-foreground font-display text-xl">
            {config.brand.logoEmoji}
          </div>
          <div>
            <div className="font-display text-2xl tracking-wide">PLAYING NOW</div>
            <div className="text-xs text-muted-foreground italic">Imagine Dragons x J.I.D — Enemy</div>
          </div>
        </div>
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-800 to-orange-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0_0_0/0.6))]" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="w-0.5 bg-gold/60" style={{ height: `${Math.sin(i) * 20 + 25}px` }} />
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="h-1 rounded-full bg-muted relative">
            <div className="h-full w-1/3 rounded-full bg-gradient-gold" />
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-3 w-3 rounded-full bg-gold shadow-gold" />
          </div>
          <div className="mt-4 flex items-center justify-center gap-6 text-gold">
            <SkipBack className="h-5 w-5" />
            <button className="h-12 w-12 rounded-full bg-gradient-gold grid place-items-center text-primary-foreground shadow-gold">
              <Play className="h-5 w-5 ml-0.5" />
            </button>
            <SkipForward className="h-5 w-5" />
            <Volume2 className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="border-y border-border/40 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {config.hero.stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl sm:text-5xl text-gradient-gold">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl">{config.features.heading}</h2>
          <p className="mt-4 text-muted-foreground">{config.features.subheading}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {config.features.items.map((f) => {
            const Icon = iconMap[f.icon] ?? Bot;
            return (
              <div key={f.title} className="group relative rounded-2xl glass p-6 hover:border-gold/40 transition-all hover:-translate-y-1">
                <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/20 grid place-items-center mb-4 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all">
                  <Icon className="h-6 w-6 text-gold group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl tracking-wide">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Commands() {
  return (
    <section id="commands" className="py-24 bg-card/30 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-gradient-gold">{config.commands.heading}</h2>
          <p className="mt-4 text-muted-foreground">{config.commands.subheading}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {config.commands.categories.map((cat) => (
            <div key={cat.name} className="rounded-2xl glass p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-2xl tracking-wide">{cat.name}</h3>
                <span className="text-xs text-gold uppercase tracking-wider">{cat.items.length}+</span>
              </div>
              <ul className="space-y-3">
                {cat.items.map((it) => (
                  <li key={it.cmd} className="border-l-2 border-gold/40 pl-3">
                    <code className="text-gold text-sm font-mono">{it.cmd}</code>
                    <div className="text-xs text-muted-foreground mt-0.5">{it.desc}</div>
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

function Premium() {
  return (
    <section id="premium" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl">{config.premium.heading}</h2>
          <p className="mt-4 text-muted-foreground">{config.premium.subheading}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {config.premium.plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-8 ${p.highlighted ? "bg-gradient-gold text-primary-foreground shadow-gold scale-105" : "glass"}`}>
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-gold border border-gold/40 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                  Most Popular
                </div>
              )}
              <div className="font-display text-2xl tracking-wide">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl">{p.price}</span>
                <span className={`text-sm ${p.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.highlighted ? "text-primary-foreground" : "text-gold"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-full py-3 text-sm font-bold tracking-wider uppercase transition-transform hover:scale-[1.02] ${p.highlighted ? "bg-background text-gold" : "bg-gradient-gold text-primary-foreground shadow-gold"}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section id="invite" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.12_85/0.15),transparent_70%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl">{config.cta.heading}</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{config.cta.description}</p>
            <a href={config.cta.button.href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold tracking-wider text-primary-foreground shadow-gold hover:scale-105 transition-transform">
              {config.cta.button.label} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="support" className="border-t border-border/40 py-16 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-full bg-gradient-gold grid place-items-center text-primary-foreground font-display">{config.brand.logoEmoji}</div>
            <div className="font-display text-xl tracking-wider">{config.brand.name}</div>
          </div>
          <p className="text-sm text-muted-foreground">{config.footer.description}</p>
        </div>
        {config.footer.columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display tracking-wider text-gold mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-border/40 text-center text-xs text-muted-foreground">
        {config.footer.copyright}
      </div>
    </footer>
  );
}
