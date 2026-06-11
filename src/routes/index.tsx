import { createFileRoute } from "@tanstack/react-router";
import config from "@/config.json";
import logoAsset from "@/assets/eva-logo.png.asset.json";
import {
  Music, Shield, Coins, TrendingUp, Ticket, Gift, Bot, Settings2,
  ArrowRight, Sparkles, Play, SkipForward, SkipBack, Volume2, Plus,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Music, Shield, Coins, TrendingUp, Ticket, Gift, Bot, Settings2,
};

function resolveHref(href: string): string {
  if (!href) return "#";
  if (href.startsWith("@")) {
    const key = href.slice(1) as keyof typeof config.links;
    return (config.links as Record<string, string>)[key] ?? "#";
  }
  return href;
}

function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

function SmartLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const resolved = resolveHref(href);
  const ext = isExternal(resolved);
  return (
    <a
      href={resolved}
      className={className}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

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
      <FAQ />
      <CtaBanner />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-3">
        <a href="#home" className="flex items-center gap-2 min-w-0">
          <img src={logoAsset.url} alt={`${config.brand.name} logo`} className="h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-primary/60 shadow-gold shrink-0" />
          <div className="leading-none min-w-0">
            <div className="font-display text-lg sm:text-xl tracking-tight truncate">{config.brand.name}</div>
            <div className="hidden sm:block text-[10px] text-muted-foreground uppercase tracking-[0.2em]">{config.brand.tagline}</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center justify-center gap-8 text-sm font-semibold tracking-wide">
          {config.nav.map((n, i) => (
            <SmartLink key={n.label} href={n.href} className={i === 0 ? "text-gold" : "text-foreground/70 hover:text-gold transition-colors"}>
              {n.label}
            </SmartLink>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-3 min-w-0">
          <SmartLink href="@invite" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-primary-foreground shadow-gold hover:scale-105 transition-transform whitespace-nowrap">
            <Plus className="h-4 w-4 shrink-0" /> <span className="hidden xs:inline sm:inline">Add Bot</span>
          </SmartLink>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wide uppercase text-gold mb-6">
            <Sparkles className="h-3.5 w-3.5" /> {config.hero.badge}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.02] text-gradient-pan">
            {config.hero.title}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
            {config.hero.description}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <SmartLink href={config.hero.primaryCta.href} className="rounded-full bg-gradient-gold px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-gold hover:scale-105 hover:shadow-[0_25px_70px_-15px_oklch(0.65_0.3_300/0.7)] transition-all inline-flex items-center gap-2">
              {config.hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
            </SmartLink>
            <SmartLink href={config.hero.secondaryCta.href} className="rounded-full border border-gold/40 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold tracking-wide text-gold hover:bg-gold/10 transition-colors">
              {config.hero.secondaryCta.label}
            </SmartLink>
          </div>
        </div>

        <BotCard />
      </div>
    </section>
  );
}

function BotCard() {
  return (
    <div className="relative h-[380px] sm:h-[460px] lg:h-[500px] animate-fade-up-delay-2">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,oklch(0.65_0.28_300/0.35),transparent_60%)]" />
      <div className="absolute left-1/2 lg:left-auto lg:right-0 top-1/2 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[95%] sm:w-[90%] lg:w-[110%] max-w-[480px] lg:max-w-[560px] glass rounded-3xl p-4 sm:p-5 shadow-card animate-float-slow">
        <div className="flex items-center gap-3 mb-4">
          <img src={logoAsset.url} alt="EVa" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-primary/60 shrink-0" />
          <div className="min-w-0">
            <div className="font-display text-lg sm:text-2xl tracking-tight truncate">Now Playing</div>
            <div className="text-xs text-muted-foreground italic truncate">Imagine Dragons — Enemy</div>
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {config.hero.stats.map((s, i) => (
          <div key={s.label} className="text-center animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-gradient-gold">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">{config.features.heading}</h2>
          <p className="mt-4 text-muted-foreground">{config.features.subheading}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {config.features.items.map((f, i) => {
            const Icon = iconMap[f.icon] ?? Bot;
            return (
              <div key={f.title} className="group relative rounded-2xl glass p-6 hover:border-gold/40 transition-all hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/20 grid place-items-center mb-4 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all">
                  <Icon className="h-6 w-6 text-gold group-hover:text-primary-foreground" />
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

function Commands() {
  return (
    <section id="commands" className="py-20 sm:py-24 bg-card/30 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gradient-gold">{config.commands.heading}</h2>
          <p className="mt-4 text-muted-foreground">{config.commands.subheading}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {config.commands.categories.map((cat, i) => (
            <div key={cat.name} className="rounded-2xl glass p-6 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-2xl tracking-tight">{cat.name}</h3>
                <span className="text-xs text-gold uppercase tracking-wide">{cat.items.length}+</span>
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


function CtaBanner() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass p-8 sm:p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.12_85/0.15),transparent_70%)]" />
          <div className="relative">
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl">{config.cta.heading}</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{config.cta.description}</p>
            <SmartLink href={config.cta.button.href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-gold hover:scale-105 transition-transform">
              {config.cta.button.label} <ArrowRight className="h-4 w-4" />
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">{config.faq.heading}</h2>
          <p className="mt-4 text-muted-foreground">{config.faq.subheading}</p>
        </div>
        <div className="space-y-3">
          {config.faq.items.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl glass p-5 open:bg-card/50 transition-colors animate-fade-up"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                <span className="font-display text-base sm:text-lg tracking-tight">{item.q}</span>
                <span className="h-8 w-8 shrink-0 rounded-full border border-gold/40 grid place-items-center text-gold text-lg transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
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
            <img src={logoAsset.url} alt={config.brand.name} className="h-9 w-9 rounded-full ring-2 ring-primary/50" />
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
                  <SmartLink href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l.label}</SmartLink>
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
