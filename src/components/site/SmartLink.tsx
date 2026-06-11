import config from "@/config.json";

export function resolveHref(href: string): string {
  if (!href) return "#";
  if (href.startsWith("@")) {
    const key = href.slice(1) as keyof typeof config.links;
    return (config.links as Record<string, string>)[key] ?? "#";
  }
  return href;
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const resolved = resolveHref(href);
  const ext = isExternal(resolved);
  return (
    <a href={resolved} className={className} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
