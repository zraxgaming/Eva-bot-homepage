import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import config from "@/config.json";
import {
  Music, Shield, Coins, TrendingUp, Ticket, Gift, Bot, Settings2,
  ArrowUpRight, ArrowUp, Sparkles, Plus, Menu, X, Terminal, Crown, BadgeDollarSign,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Music, Shield, Coins, TrendingUp, Ticket, Gift, Bot, Settings2,
};

const LOGO = config.brand.logoUrl || "/eva-logo.png";

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

// Pick a balanced grid column count for a given item count (1–6+).
function gridColsFor(n: number): string {
  if (n <= 1) return "grid-cols-1";
  if (n === 2) return "grid-cols-1 sm:grid-cols-2";
  if (n === 3) return "grid-cols-1 sm:grid-cols-3";
  if (n === 4) return "grid-cols-2 lg:grid-cols-4";
  if (n === 5) return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";
  return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3";
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${config.brand.name} — ${config.brand.tagline}` },
      { name: "description", content: config.hero.description },
      { property: "og:title", content: `${config.brand.name} — ${config.brand.tagline}` },
      { property: "og:description", content: config.hero.description },
      { property: "og:image", content: LOGO },
      { name: "twitter:image", content: LOGO },
    ],
    links: [
      { rel: "preload", as: "image", href: LOGO },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <BackgroundFX />
      <TopNav />
      <main className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <Hero />
        <Stats />
        <Features />
        <Commands />
        <PremiumSection />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.28_295/0.45),transparent_70%)] animate-orb" />
      <div className="absolute top-1/2 -right-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.25_300/0.28),transparent_70%)] animate-orb" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.2_305/0.22),transparent_70%)] animate-orb" style={{ animationDelay: "-3s" }} />
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: "linear-gradient(oklch(0.98_0.01_295) 1px,transparent 1px),linear-gradient(90deg,oklch(0.98_0.01_295) 1px,transparent 1px)",
        backgroundSize: "56px 56px",
      }} />
    </div>
  );
}

function TopNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-border/40 backdrop-blur-xl transition-colors ${scrolled ? "bg-background/90 shadow-[0_10px_30px_rgba(0,0,0,0.28)]" : "bg-background/70"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <A href="#home" className="flex items-center gap-2.5 min-w-0">
          <img
            src={LOGO}
            alt={`${config.brand.name} logo`}
            width={40} height={40}
            loading="eager" decoding="async" fetchPriority="high"
            className="h-10 w-10 rounded-full ring-2 ring-primary/70 shadow-gold shrink-0"
          />
          <div className="leading-none min-w-0">
            <div className="font-display text-lg tracking-tight truncate">{config.brand.name}</div>
            <div className="hidden sm:block text-[9px] text-muted-foreground uppercase tracking-[0.25em] mt-0.5">{config.brand.tagline}</div>
          </div>
        </A>

        <nav className="hidden md:flex items-center gap-1">
          {config.nav.map((n) => (
            <A key={n.label} href={n.href}
              className="px-3.5 py-2 rounded-full text-sm text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-colors">
              {n.label}
            </A>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <A href="@invite"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform">
            <Plus className="h-3.5 w-3.5" /> Add Bot
          </A>
          <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="md:hidden h-10 w-10 rounded-full border border-border grid place-items-center">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl px-4 py-3 animate-fade-up">
          <nav className="flex flex-col gap-1">
            {config.nav.map((n) => (
              <A key={n.label} href={n.href} className="px-3 py-2.5 rounded-lg text-sm hover:bg-primary/10">{n.label}</A>
            ))}
            <A href="@invite" className="mt-2 text-center rounded-full bg-gradient-gold px-4 py-3 text-sm font-semibold text-primary-foreground shadow-gold">
              Add to Discord
            </A>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-8 lg:pt-16 pb-12 text-center">
      <div className="flex justify-center animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] tracking-[0.18em] uppercase text-primary">
          <Sparkles className="h-3 w-3" /> {config.hero.badge}
        </div>
      </div>

      <h1 className="mt-7 mx-auto max-w-4xl font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight animate-fade-up-delay-1">
        <span className="text-gradient-pan">{config.hero.title}</span>
      </h1>

      <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up-delay-2">
        {config.hero.description}
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3 animate-fade-up-delay-3">
        <A href={config.hero.primaryCta.href}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform">
          {config.hero.primaryCta.label}
          <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
        </A>
        <A href={config.hero.secondaryCta.href}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3.5 text-sm font-semibold hover:bg-primary/10 transition-colors">
          {config.hero.secondaryCta.label}
        </A>
      </div>

      <div className="mt-14 lg:mt-20 relative mx-auto w-full max-w-md aspect-square animate-fade-up-delay-3">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.28_300/0.45),transparent_65%)] blur-2xl" />
        <div className="absolute inset-4 rounded-full border border-primary/30 animate-[spin_30s_linear_infinite]" />
        <div className="absolute inset-10 rounded-full border border-primary/20 animate-[spin_22s_linear_infinite_reverse]" />
        <div className="absolute inset-0 grid place-items-center">
          <img
            src={LOGO}
            alt={`${config.brand.name} mascot`}
            width={420} height={420}
            loading="eager" decoding="async" fetchPriority="high"
            className="w-[78%] h-[78%] rounded-full object-cover ring-2 ring-primary/50 shadow-[0_30px_90px_-20px_oklch(0.65_0.3_300/0.7)] animate-glow-pulse"
          />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = config.hero.stats;
  return (
    <section className="py-12 lg:py-16">
      <div className="rounded-3xl glass p-6 sm:p-8 lg:p-10">
        <div className={`grid ${gridColsFor(stats.length)} gap-6 sm:gap-8`}>
          {stats.map((s, i) => (
            <div key={s.label}
              className={`text-center animate-fade-up ${i > 0 ? "lg:border-l border-border/50" : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-gradient-gold leading-none">{s.value}</div>
              <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, heading, sub }: { eyebrow: string; heading: string; sub: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="text-[11px] tracking-[0.25em] uppercase text-primary mb-3">— {eyebrow} —</div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">{heading}</h2>
      <p className="mt-4 text-muted-foreground">{sub}</p>
    </div>
  );
}

function Features() {
  const items = config.features.items;
  // 1 → 1 col, 2 → 2, 3 → 3, 4 → 2x2, otherwise 3 cols (handles 5,6,7,8,9+ gracefully)
  const cols =
    items.length <= 1 ? "grid-cols-1" :
    items.length === 2 ? "sm:grid-cols-2" :
    items.length === 4 ? "sm:grid-cols-2 lg:grid-cols-2" :
    "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section id="features" className="py-20 lg:py-28">
      <SectionHeader eyebrow="Modules" heading={config.features.heading} sub={config.features.subheading} />
      <div className={`mt-12 grid ${cols} gap-4 sm:gap-5`}>
        {items.map((f, i) => {
          const Icon = iconMap[f.icon] ?? Bot;
          return (
            <div key={f.title}
              className="group relative rounded-2xl glass p-6 hover-lift overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/30 grid place-items-center mb-4 group-hover:bg-gradient-gold transition-all">
                  <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
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
  const current = cats[active] ?? cats[0];
  if (!current) return null;

  return (
    <section id="commands" className="py-20 lg:py-28">
      <SectionHeader eyebrow="Reference" heading={config.commands.heading} sub={config.commands.subheading} />

      <div className="mt-12 space-y-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center">
          {cats.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActive(index)}
              className={`px-6 py-3 rounded-full font-display text-sm tracking-tight transition-all ${
                active === index
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "border border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Commands Grid */}
        <div className="rounded-3xl glass p-8 sm:p-10 border border-border/40">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {current.items.map((item, index) => (
              <div
                key={item.cmd}
                className="group rounded-2xl border border-border/50 bg-background/30 p-6 transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-primary/60 font-mono text-lg">/</span>
                  <code className="text-primary font-mono font-semibold text-base">{item.cmd.replace(/^ ?\//, "").trim()}</code>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-center">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-mono">
              {current.items.length} {current.items.length === 1 ? "command" : "commands"} • {current.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PremiumSection() {
  const premium = config.premium;
  return (
    <section id="premium" className="py-20 lg:py-28">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-primary">
          <Crown className="h-3 w-3" /> {premium.badge}
        </div>
        <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">{premium.heading}</h2>
        <p className="mt-4 text-muted-foreground">{premium.subheading}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl glass p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {premium.items.map((item) => (
              <div key={item.cmd} className="rounded-2xl border border-border/50 bg-background/30 p-5">
                <div className="flex items-center gap-2 text-primary">
                  <BadgeDollarSign className="h-4 w-4" />
                  <code className="font-mono text-sm font-semibold">{item.cmd}</code>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl glass p-6 sm:p-8">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <h3 className="font-display text-2xl">What premium adds</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {premium.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/30 px-4 py-3 text-sm text-muted-foreground">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <SectionHeader eyebrow="Help" heading={config.faq.heading} sub={config.faq.subheading} />
      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {config.faq.items.map((item, i) => (
          <details key={i}
            className="group rounded-2xl glass p-5 sm:p-6 open:bg-card/60 transition-colors animate-fade-up"
            style={{ animationDelay: `${i * 0.04}s` }}>
            <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
              <span className="font-display text-base sm:text-lg text-left">{item.q}</span>
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
    <section id="cta" className="py-16 lg:py-24">
      <div className="relative rounded-[2rem] overflow-hidden glass p-10 sm:p-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.28_300/0.25),transparent_70%)]" />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gradient-pan">{config.cta.heading}</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">{config.cta.description}</p>
          <A href={config.cta.button.href}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform">
            {config.cta.button.label} <ArrowUpRight className="h-4 w-4" />
          </A>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = config.footer.columns;
  return (
    <footer id="support" className="border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid gap-10 ${["md:grid-cols-1","md:grid-cols-2","md:grid-cols-3","md:grid-cols-4"][Math.min(cols.length, 3)]}`}>
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={LOGO} alt={config.brand.name} width={36} height={36} loading="lazy" decoding="async" className="h-9 w-9 rounded-full ring-2 ring-primary/50" />
              <div className="font-display text-xl">{config.brand.name}</div>
            </div>
            <p className="text-sm text-muted-foreground">{config.footer.description}</p>
          </div>
          {cols.map((col) => (
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
      </div>
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-primary/30 bg-background/90 text-primary shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl hover:border-primary/60"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
