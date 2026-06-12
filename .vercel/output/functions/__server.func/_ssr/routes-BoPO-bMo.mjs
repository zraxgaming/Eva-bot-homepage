import { r as __toESM } from "../_runtime.mjs";
import { n as config_default, t as LOGO } from "./routes-kNpjMX97.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Shield, c as Music, d as Coins, f as Bot, i as Sparkles, l as Menu, n as TrendingUp, o as Settings2, p as ArrowUpRight, r as Ticket, s as Plus, t as X, u as Gift } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BoPO-bMo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var iconMap = {
	Music,
	Shield,
	Coins,
	TrendingUp,
	Ticket,
	Gift,
	Bot,
	Settings2
};
function resolveHref(href) {
	if (!href) return "#";
	if (href.startsWith("@")) {
		const key = href.slice(1);
		return config_default.links[key] ?? "#";
	}
	return href;
}
var isExt = (h) => /^https?:\/\//i.test(h);
function A({ href, className, children }) {
	const r = resolveHref(href);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: r,
		className,
		...isExt(r) ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		children
	});
}
function gridColsFor(n) {
	if (n <= 1) return "grid-cols-1";
	if (n === 2) return "grid-cols-1 sm:grid-cols-2";
	if (n === 3) return "grid-cols-1 sm:grid-cols-3";
	if (n === 4) return "grid-cols-2 lg:grid-cols-4";
	if (n === 5) return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";
	return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3";
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground relative overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundFX, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Commands, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function BackgroundFX() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.28_295/0.45),transparent_70%)] animate-orb" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/2 -right-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.25_300/0.28),transparent_70%)] animate-orb",
				style: { animationDelay: "-6s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.2_305/0.22),transparent_70%)] animate-orb",
				style: { animationDelay: "-3s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.035]",
				style: {
					backgroundImage: "linear-gradient(oklch(0.98_0.01_295) 1px,transparent 1px),linear-gradient(90deg,oklch(0.98_0.01_295) 1px,transparent 1px)",
					backgroundSize: "56px 56px"
				}
			})
		]
	});
}
function TopNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/40 backdrop-blur-xl bg-background/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(A, {
					href: "#home",
					className: "flex items-center gap-2.5 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: LOGO,
						alt: `${config_default.brand.name} logo`,
						width: 40,
						height: 40,
						loading: "eager",
						decoding: "async",
						fetchPriority: "high",
						className: "h-10 w-10 rounded-full ring-2 ring-primary/70 shadow-gold shrink-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-none min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg tracking-tight truncate",
							children: config_default.brand.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden sm:block text-[9px] text-muted-foreground uppercase tracking-[0.25em] mt-0.5",
							children: config_default.brand.tagline
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-1",
					children: config_default.nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
						href: n.href,
						className: "px-3.5 py-2 rounded-full text-sm text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-colors",
						children: n.label
					}, n.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(A, {
						href: "@invite",
						className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " Add Bot"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Menu",
						onClick: () => setOpen((v) => !v),
						className: "md:hidden h-10 w-10 rounded-full border border-border grid place-items-center",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl px-4 py-3 animate-fade-up",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				children: [config_default.nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
					href: n.href,
					className: "px-3 py-2.5 rounded-lg text-sm hover:bg-primary/10",
					children: n.label
				}, n.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
					href: "@invite",
					className: "mt-2 text-center rounded-full bg-gradient-gold px-4 py-3 text-sm font-semibold text-primary-foreground shadow-gold",
					children: "Add to Discord"
				})]
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "pt-16 lg:pt-24 pb-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center animate-fade-up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] tracking-[0.18em] uppercase text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
						" ",
						config_default.hero.badge
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-7 mx-auto max-w-4xl font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight animate-fade-up-delay-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-pan",
					children: config_default.hero.title
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up-delay-2",
				children: config_default.hero.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-9 flex flex-wrap justify-center gap-3 animate-fade-up-delay-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(A, {
					href: config_default.hero.primaryCta.href,
					className: "group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform",
					children: [config_default.hero.primaryCta.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 group-hover:rotate-45 transition-transform" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
					href: config_default.hero.secondaryCta.href,
					className: "inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3.5 text-sm font-semibold hover:bg-primary/10 transition-colors",
					children: config_default.hero.secondaryCta.label
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 lg:mt-20 relative mx-auto w-full max-w-md aspect-square animate-fade-up-delay-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.28_300/0.45),transparent_65%)] blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-4 rounded-full border border-primary/30 animate-[spin_30s_linear_infinite]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-10 rounded-full border border-primary/20 animate-[spin_22s_linear_infinite_reverse]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: LOGO,
							alt: `${config_default.brand.name} mascot`,
							width: 420,
							height: 420,
							loading: "eager",
							decoding: "async",
							fetchPriority: "high",
							className: "w-[78%] h-[78%] rounded-full object-cover ring-2 ring-primary/50 shadow-[0_30px_90px_-20px_oklch(0.65_0.3_300/0.7)] animate-glow-pulse"
						})
					})
				]
			})
		]
	});
}
function Stats() {
	const stats = config_default.hero.stats;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 lg:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-3xl glass p-6 sm:p-8 lg:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid ${gridColsFor(stats.length)} gap-6 sm:gap-8`,
				children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `text-center animate-fade-up ${i > 0 ? "lg:border-l border-border/50" : ""}`,
					style: { animationDelay: `${i * .08}s` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-3xl sm:text-4xl lg:text-5xl text-gradient-gold leading-none",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			})
		})
	});
}
function SectionHeader({ eyebrow, heading, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center max-w-2xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-[11px] tracking-[0.25em] uppercase text-primary mb-3",
				children: [
					"— ",
					eyebrow,
					" —"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05]",
				children: heading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: sub
			})
		]
	});
}
function Features() {
	const items = config_default.features.items;
	const cols = items.length <= 1 ? "grid-cols-1" : items.length === 2 ? "sm:grid-cols-2" : items.length === 4 ? "sm:grid-cols-2 lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "features",
		className: "py-20 lg:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Modules",
			heading: config_default.features.heading,
			sub: config_default.features.subheading
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-12 grid ${cols} gap-4 sm:gap-5`,
			children: items.map((f, i) => {
				const Icon = iconMap[f.icon] ?? Bot;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative rounded-2xl glass p-6 hover-lift overflow-hidden animate-fade-up",
					style: { animationDelay: `${i * .05}s` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-11 w-11 rounded-xl bg-primary/15 border border-primary/30 grid place-items-center mb-4 group-hover:bg-gradient-gold transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary group-hover:text-primary-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl tracking-tight",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: f.description
							})
						]
					})]
				}, f.title);
			})
		})]
	});
}
function Commands() {
	const cats = config_default.commands.categories;
	const [active, setActive] = (0, import_react.useState)(0);
	const current = cats[active] ?? cats[0];
	if (!current) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "commands",
		className: "py-20 lg:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Reference",
			heading: config_default.commands.heading,
			sub: config_default.commands.subheading
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-8 lg:grid-cols-[1.35fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl glass overflow-hidden border border-border/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background/15 p-6 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-[0.25em] text-primary mb-3",
								children: "Popular categories"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl sm:text-4xl tracking-tight",
								children: "Find the commands your server needs fast."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed",
								children: "Browse the most useful slash commands across music, moderation, economy and more. Tap any category to preview live command examples."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border/50 bg-background/40 px-4 py-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-foreground",
								children: config_default.hero.stats[2]?.value ?? "120+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 tracking-[0.18em] uppercase text-[10px] text-primary",
								children: "Commands available"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-3",
						children: cats.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActive(index),
							className: `rounded-3xl border p-4 text-left transition-all ${active === index ? "border-primary/60 bg-primary/10 shadow-gold" : "border-border/40 bg-background/30 hover:border-primary/50 hover:bg-primary/5"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm tracking-tight",
									children: category.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary",
									children: category.items.length
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: [
									category.items.slice(0, 2).map((item) => item.cmd).join(" • "),
									" ",
									category.items.length > 2 ? "…" : ""
								]
							})]
						}, category.name))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border/40 bg-background/10 p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: current.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-3xl border border-border/40 bg-background/30 p-4 sm:p-5 transition-all hover:border-primary/50 hover:bg-primary/5",
							style: { animationDelay: `${index * .04}s` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-semibold text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground font-mono",
									children: "/"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono",
									children: item.cmd.replace(/^ ?\//, "").trim()
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: item.desc
							})]
						}, item.cmd))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 border-t border-border/40 pt-5 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs uppercase tracking-[0.24em] text-muted-foreground font-mono",
							children: [
								current.items.length,
								" ",
								current.items.length === 1 ? "command" : "commands",
								" in ",
								current.name.toLowerCase()
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(A, {
							href: "@docs",
							className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline",
							children: ["View all commands ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl glass p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.25em] text-primary",
							children: "Slash command ready"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-2xl tracking-tight",
							children: "Everything is built for fast Discord use."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "EVa uses slash commands with autocomplete, permission-aware help and instant responses. Join your server and start managing channels, music and economy in seconds."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/40 bg-background/40 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: "Quick start"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 font-mono text-sm text-foreground",
										children: "/play > song name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "Play music instantly from YouTube, Spotify, or SoundCloud."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border/40 bg-background/40 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
										children: "Power user"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 font-mono text-sm text-foreground",
										children: "/ban <member> <reason>"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "Moderate safely with audit logs and role checks built in."
									})
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl glass p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-[0.25em] text-primary",
							children: "Need help?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-2xl tracking-tight",
							children: "Full command support is just one click away."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "Access docs, browse full syntax, and see permission requirements from the support server or command reference page."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(A, {
							href: "@support",
							className: "mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform",
							children: ["Visit support server ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					]
				})]
			})]
		})]
	});
}
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "py-20 lg:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Help",
			heading: config_default.faq.heading,
			sub: config_default.faq.subheading
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 max-w-3xl mx-auto space-y-3",
			children: config_default.faq.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group rounded-2xl glass p-5 sm:p-6 open:bg-card/60 transition-colors animate-fade-up",
				style: { animationDelay: `${i * .04}s` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "flex items-center justify-between cursor-pointer list-none gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-base sm:text-lg text-left",
						children: item.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-8 w-8 shrink-0 rounded-full border border-primary/40 grid place-items-center text-primary text-lg transition-transform group-open:rotate-45",
						children: "+"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground leading-relaxed",
					children: item.a
				})]
			}, i))
		})]
	});
}
function CtaBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cta",
		className: "py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative rounded-[2rem] overflow-hidden glass p-10 sm:p-16 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.28_300/0.25),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl lg:text-5xl text-gradient-pan",
						children: config_default.cta.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground max-w-xl mx-auto",
						children: config_default.cta.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(A, {
						href: config_default.cta.button.href,
						className: "mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform",
						children: [
							config_default.cta.button.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
						]
					})
				]
			})]
		})
	});
}
function Footer() {
	const cols = config_default.footer.columns;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "support",
		className: "border-t border-border/40 bg-card/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `grid gap-10 ${[
					"md:grid-cols-1",
					"md:grid-cols-2",
					"md:grid-cols-3",
					"md:grid-cols-4"
				][Math.min(cols.length, 3)]}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: LOGO,
							alt: config_default.brand.name,
							width: 36,
							height: 36,
							loading: "lazy",
							decoding: "async",
							className: "h-9 w-9 rounded-full ring-2 ring-primary/50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl",
							children: config_default.brand.name
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: config_default.footer.description
					})]
				}), cols.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-primary mb-4 text-sm uppercase tracking-[0.18em]",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, {
						href: l.href,
						className: "text-sm text-muted-foreground hover:text-primary transition-colors",
						children: l.label
					}) }, l.label))
				})] }, col.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 pt-8 border-t border-border/40 text-center text-xs text-muted-foreground",
				children: config_default.footer.copyright
			})]
		})
	});
}
//#endregion
export { Index as component };
