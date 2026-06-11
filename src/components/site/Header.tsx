import config from "@/config.json";
import logoAsset from "@/assets/eva-logo.png.asset.json";
import { SmartLink } from "./SmartLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-3">
        <a href="#home" className="flex items-center gap-2.5 min-w-0 group">
          <span className="relative">
            <img
              src={logoAsset.url}
              alt={`${config.brand.name}`}
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl object-cover ring-1 ring-gold/40 shrink-0"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-gold animate-pulse-dot" />
          </span>
          <div className="leading-tight min-w-0">
            <div className="font-display text-lg tracking-tight truncate">{config.brand.name}<span className="text-gold">.</span></div>
            <div className="hidden sm:block text-[10px] font-mono text-muted-foreground uppercase tracking-[0.18em]">{config.brand.tagline}</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-7 text-sm font-medium">
          {config.nav.map((n) => (
            <SmartLink key={n.label} href={n.href} className="underline-grow text-foreground/75 hover:text-foreground transition-colors">
              {n.label}
            </SmartLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 min-w-0">
          <SmartLink
            href="@invite"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold tracking-tight hover:bg-gold transition-colors whitespace-nowrap"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold group-hover:bg-background" />
            Add to Discord
          </SmartLink>
        </div>
      </div>
    </header>
  );
}
