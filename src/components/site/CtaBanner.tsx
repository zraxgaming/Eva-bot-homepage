import config from "@/config.json";
import { ArrowUpRight } from "lucide-react";
import { SmartLink } from "./SmartLink";

export function CtaBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl panel p-10 sm:p-16">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-orb pointer-events-none" aria-hidden />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-orb pointer-events-none" aria-hidden style={{ animationDelay: "-4s" }} />

          <div className="relative grid md:grid-cols-[1.4fr_auto] gap-8 items-center">
            <div>
              <div className="text-[11px] font-mono tracking-[0.28em] text-gold/80 uppercase mb-3">[ READY ]</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-[-0.035em] leading-[1.05]">
                {config.cta.heading}
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">{config.cta.description}</p>
            </div>
            <SmartLink
              href={config.cta.button.href}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-4 text-sm font-semibold text-ink shadow-warm hover:scale-[1.02] transition-transform whitespace-nowrap self-start md:self-center"
            >
              {config.cta.button.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}
