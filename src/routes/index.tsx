import { createFileRoute } from "@tanstack/react-router";
import config from "@/config.json";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Features } from "@/components/site/Features";
import { Commands } from "@/components/site/Commands";
import { FAQ } from "@/components/site/FAQ";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

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
      <main>
        <Hero />
        <Stats />
        <Features />
        <Commands />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
