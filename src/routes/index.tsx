import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import config from "@/config.json";
import logoAsset from "@/assets/eva-logo.png.asset.json";
import {
  Music, Shield, Coins, TrendingUp, Ticket, Gift, Bot, Settings2,
  ArrowUpRight, Sparkles, Plus, Menu, X, ChevronRight,
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
const isExt = (h: string) => /^https?:\/\//i.test(h);

function A({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  const r = resolveHref(href);
  const ext = isExt(r);
  return <a href={r} className={className} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${config.brand.name} — ${config.brand.tagline}` },
      { name: "description", content: config.hero.description },
      { property: "og:title", content: `${config.brand.name} — ${config.brand.tagline}` },
      { property: "og:description", content: config.hero.description },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:image", content: logoAsset.url },
    ],
    links: [
      { rel: "preload", as: "image", href: logoAsset.url, fetchpriority: "high" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <BackgroundFX />
      <SideRail />
      <MobileBar />
      <main className="lg:pl-72">
        <Hero />
        <Marquee />
        <Features />
        <Commands />
        <FAQ />
        <CtaBanner />
        <Footer />
      </main>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.28_295/0.45),transparent_70%)] animate-orb" />
      <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.25_300/0.32),transparent_70%)] animate-orb" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.2_305/0.22),transparent_70%)] animate-orb" style={{ animationDelay: "-3s" }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(oklch(0.98_0.01_295) 1px,transparent 1px),linear-gradient(90deg,oklch(0.98_0.01_295) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }} />
    </div>
  );
}

function SideRail() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col justify-between border-r border-border/40 bg-background/40 backdrop-blur-xl px-6 py-8 z-40">
      <div>
        <A href="#home" className="flex items-center gap-3 group">
          <img
            src={logoAsset.url}
            alt={`${config.brand.name} logo`}
            width={48}
            height={48}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-12 w-12 rounded-full ring-2 ring-primary/70 shadow-gold group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="font-display text-xl tracking-tight">{config.brand.name}</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.25em]">{config.brand.tagline}</div>
          </div>
        </A>
        <nav className="mt-12 flex flex-col gap-1">
          {config.nav.map((n, i) => (
            <A key={n.label} href={n.href}
              className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-all">
              <span className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-primary/60 w-4">0{i + 1}</span>
                {n.label}
              </span>
              <ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </A>
          ))}
        </nav>
      </div>
      <div className="space-y-4">
        <A href="@invite"
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-gold px-4 py-3 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-[1.02] transition-transform">
          <Plus className="h-4 w-4" /> Add to Discord
        </A>
        <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] text-center">
          {config.footer.copyright}
        </div>
      </div>
    </aside>
  );
}

function MobileBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 border-b border-border/40 backdrop-blur-xl bg-background/70">
        <div className="px-4 h-14 flex items-center justify-between">
          <A href="#home" className="flex items-center gap-2">
            <img src={logoAsset.url} alt={config.brand.name} width={36} height={36} loading="eager" decoding="async" fetchPriority="high" className="h-9 w-9 rounded-full ring-2 ring-primary/60" />
            <span className="font-display text-lg">{config.brand.name}</span>
          </A>
          <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="h-10 w-10 rounded-full border border-border grid place-items-center">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl px-4 py-4 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {config.nav.map((n) => (
                <A key={n.label} href={n.href} className="px-3 py-2.5 rounded-lg text-sm hover:bg-primary/10" >
                  {n.label}
                </A>
              ))}
              <A href="@invite" className="mt-2 text-center rounded-xl bg-gradient-gold px-4 py-3 text-sm font-semibold text-primary-foreground shadow-gold">
                Add to Discord
              </A>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="relative px-4 sm:px-8 lg:px-14 pt-12 lg:pt-24 pb-16 lg:pb-24">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] tracking-[0.18em] uppercase text-primary">
            <Sparkles className="h-3 w-3" /> {config.hero.badge}
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
            <span className="text-gradient-pan">{config.hero.title}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {config.hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <A href={config.hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform">
              {config.hero.primaryCta.label}
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
            </A>
            <A href={config.hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-4 text-sm font-semibold hover:bg-primary/10 transition-colors">
              {config.hero.secondaryCta.label}
            </A>
          </div>
        </div>

        <div className="relative aspect-square max-w-md mx-auto w-full animate-fade-up-delay-2">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.28_300/0.5),transparent_65%)] blur-2xl" />
          <div className="absolute inset-6 rounded-full border border-primary/30 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-12 rounded-full border border-primary/20 animate-[spin_22s_linear_infinite_reverse]" />
          <div className="absolute inset-0 grid place-items-center">
            <img
              src={logoAsset.url}
              alt={`${config.brand.name} mascot`}
              width={420}
              height={420}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-[78%] h-[78%] rounded-full object-cover ring-2 ring-primary/50 shadow-[0_30px_90px_-20px_oklch(0.65_0.3_300/0.7)] animate-glow-pulse"
            />
          </div>
          <div className="absolute -top-2 left-1/4 h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_oklch(0.7_0.25_300)] animate-pulse" />
          <div className="absolute bottom-6 -right-2 h-3 w-3 rounded-full bg-primary/70 shadow-[0_0_20px_oklch(0.7_0.25_300)] animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="border-y border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="px-4 sm:px-8 lg:px-14 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {config.hero.stats.map((s, i) => (
          <div key={s.label} className="flex items-baseline gap-3 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="font-display text-3xl lg:text-4xl text-gradient-gold">{s.value}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  // Bento layout — first card spans wider
  return (
    <section id="features" className="px-4 sm:px-8 lg:px-14 py-20 lg:py-28">
      <SectionHeader eyebrow="Modules" heading={config.features.heading} sub={config.features.subheading} />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {config.features.items.map((f, i) => {
          const Icon = iconMap[f.icon] ?? Bot;
          const span = i === 0 ? "lg:col-span-3" : i === 1 ? "lg:col-span-3" : "lg:col-span-2";
          const big = i === 0 || i === 1;
          return (
            <div key={f.title}
              className={`group relative ${span} rounded-3xl glass p-6 lg:p-8 hover-lift overflow-hidden animate-fade-up`}
              style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-primary/15 border border-primary/30 grid place-items-center mb-5 group-hover:bg-gradient-gold transition-all">
                  <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className={`font-display tracking-tight ${big ? "text-2xl lg:text-3xl" : "text-xl"}`}>{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">{f.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Commands() {
  const cats = config.commands.categories;
  const [active, setActive] = useState(0);
  const current = cats[active];
  return (
    <section id="commands" className="px-4 sm:px-8 lg:px-14 py-20 lg:py-28 bg-card/20 border-y border-border/40">
      <SectionHeader eyebrow="Reference" heading={config.commands.heading} sub={config.commands.subheading} />
      <div className="mt-12 grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-10">
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {cats.map((c, i) => (
            <button key={c.name} onClick={() => setActive(i)}
              className={`shrink-0 lg:w-full text-left px-4 py-3 rounded-2xl border transition-all ${
                active === i
                  ? "border-primary/50 bg-gradient-to-r from-primary/20 to-transparent text-foreground"
                  : "border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}>
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-lg">{c.name}</span>
                <span className="text-[10px] font-mono text-primary">/{c.items.length}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {current.items.map((it) => (
            <div key={it.cmd} className="rounded-2xl glass p-5 hover-lift">
              <code className="text-primary text-sm font-mono">{it.cmd}</code>
              <div className="mt-1.5 text-sm text-muted-foreground">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="px-4 sm:px-8 lg:px-14 py-20 lg:py-28">
      <SectionHeader eyebrow="Help" heading={config.faq.heading} sub={config.faq.subheading} />
      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {config.faq.items.map((item, i) => (
          <details key={i}
            className="group rounded-2xl glass p-5 sm:p-6 open:bg-card/60 transition-colors animate-fade-up"
            style={{ animationDelay: `${i * 0.04}s` }}>
            <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
              <span className="font-display text-base sm:text-lg">{item.q}</span>
              <span className="h-8 w-8 shrink-0 rounded-full border border-primary/40 grid place-items-center text-primary text-lg transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section id="cta" className="px-4 sm:px-8 lg:px-14 py-20">
      <div className="relative rounded-[2rem] overflow-hidden glass p-10 sm:p-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.28_300/0.25),transparent_70%)]" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%,oklch(0.78_0.2_305/0.3),transparent 40%),radial-gradient(circle at 80% 50%,oklch(0.55_0.28_295/0.3),transparent 40%)",
        }} />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl text-gradient-pan">{config.cta.heading}</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">{config.cta.description}</p>
          <A href={config.cta.button.href}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform">
            {config.cta.button.label} <ArrowUpRight className="h-4 w-4" />
          </A>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="support" className="border-t border-border/40 px-4 sm:px-8 lg:px-14 py-12 bg-card/30">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logoAsset.url} alt={config.brand.name} width={36} height={36} loading="lazy" decoding="async" className="h-9 w-9 rounded-full ring-2 ring-primary/50" />
            <div className="font-display text-xl">{config.brand.name}</div>
          </div>
          <p className="text-sm text-muted-foreground">{config.footer.description}</p>
        </div>
        {config.footer.columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-primary mb-4 text-sm uppercase tracking-[0.18em]">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <A href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</A>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-border/40 text-center text-xs text-muted-foreground">
        {config.footer.copyright}
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, heading, sub }: { eyebrow: string; heading: string; sub: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-[11px] tracking-[0.25em] uppercase text-primary mb-3">— {eyebrow}</div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">{heading}</h2>
      <p className="mt-4 text-muted-foreground">{sub}</p>
    </div>
  );
}
