import config from "@/config.json";
import logoAsset from "@/assets/eva-logo.png.asset.json";
import { SmartLink } from "./SmartLink";

export function Footer() {
  return (
    <footer id="support" className="border-t border-border/60 bg-card/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))] gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logoAsset.url} alt={config.brand.name} width={32} height={32} className="h-8 w-8 rounded-lg ring-1 ring-gold/40" />
            <div className="font-display text-xl tracking-tight">{config.brand.name}<span className="text-gold">.</span></div>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">{config.footer.description}</p>
        </div>
        {config.footer.columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold/80 mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <SmartLink href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-grow">
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span>{config.footer.copyright}</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-dot" /> All systems nominal</span>
        </div>
      </div>
    </footer>
  );
}
