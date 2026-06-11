export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div className="text-[11px] font-mono tracking-[0.28em] text-gold/80 uppercase">
          [ {eyebrow} ]
        </div>
      )}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl tracking-[-0.035em] leading-[1.05]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
