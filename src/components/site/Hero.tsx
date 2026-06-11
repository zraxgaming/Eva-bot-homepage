import config from "@/config.json";
import logoAsset from "@/assets/eva-logo.png.asset.json";
import { ArrowUpRight, Terminal } from "lucide-react";
import { SmartLink } from "./SmartLink";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-noise pointer-events-none" aria-hidden />
      <div className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl animate-orb pointer-events-none" aria-hidden />
      <div className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-3xl animate-orb pointer-events-none" aria-hidden style={{ animationDelay: "-6s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-end">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground animate-rise">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-dot" />
              {config.hero.badge}
            </div>

            <div className="mt-6 text-[11px] font-mono tracking-[0.3em] text-gold/80 animate-rise-1">
              [ {config.hero.eyebrow} ]
            </div>

            <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.04em] animate-rise-2">
              <span className="block">One bot.</span>
              <span className="block">Every <em className="not-italic text-gradient-warm">module</em>.</span>
              <span className="block">Zero clutter.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-rise-3">
              {config.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4 animate-rise-4">
              <SmartLink
                href={config.hero.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-semibold text-ink shadow-warm hover:scale-[1.02] transition-transform"
              >
                {config.hero.primaryCta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </SmartLink>
              <SmartLink
                href={config.hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground/85 hover:border-gold/60 hover:text-foreground transition-colors"
              >
                <Terminal className="h-4 w-4 text-gold" />
                {config.hero.secondaryCta.label}
              </SmartLink>
            </div>
          </div>

          {/* Right — terminal card */}
          <TerminalCard />
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-y border-border/60 bg-card/30 py-4 overflow-hidden">
        <div className="ticker-track">
          {[...config.hero.marquee, ...config.hero.marquee].map((m, i) => (
            <div key={i} className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-gold/70" />
              {m}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="relative animate-rise-3">
      <div className="panel shadow-card overflow-hidden animate-drift">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-background/40">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <img src={logoAsset.url} alt="" width={16} height={16} className="h-4 w-4 rounded" />
            eva-shell
          </div>
        </div>
        <div className="p-5 font-mono text-[13px] leading-relaxed space-y-2">
          <Line prompt="$" cmd="eva /play imagine dragons - enemy" />
          <Reply label="music">Queued · Imagine Dragons — Enemy · 03:21</Reply>
          <Line prompt="$" cmd="eva /ban @spammer reason: raid" />
          <Reply label="mod" tone="warn">User banned · audit logged · #mod-log</Reply>
          <Line prompt="$" cmd="eva /daily" />
          <Reply label="econ">+250 coins · streak: 12 days</Reply>
          <div className="pt-1 flex items-center gap-2 text-muted-foreground">
            <span className="text-gold">$</span>
            <span>eva</span>
            <span className="inline-block w-2 h-4 bg-gold animate-[caret_1s_steps(2)_infinite]" />
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 panel px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-dot" /> online · 99.9%
      </div>
    </div>
  );
}

function Line({ prompt, cmd }: { prompt: string; cmd: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gold">{prompt}</span>
      <span className="text-foreground/90">{cmd}</span>
    </div>
  );
}

function Reply({ label, children, tone = "ok" }: { label: string; children: React.ReactNode; tone?: "ok" | "warn" }) {
  return (
    <div className="flex items-start gap-2 text-muted-foreground">
      <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wider ${tone === "warn" ? "bg-accent/15 text-accent" : "bg-gold/15 text-gold"}`}>{label}</span>
      <span>{children}</span>
    </div>
  );
}
