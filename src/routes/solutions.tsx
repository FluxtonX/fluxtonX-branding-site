import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/home";

const SLUGS = ["strategy-consulting", "cloud-native", "applied-intelligence", "cyber-resilience", "data-mastery", "experience-design", "app-development", "digital-strategy"];
const NAMES = ["Strategy & Consulting", "Cloud Native", "Applied Intelligence", "Cyber Resilience", "Data Mastery", "Experience Design", "App Development", "Digital Strategy"];

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — FluxtonX" },
      { name: "description", content: "End-to-end digital solutions: cloud, AI, data, security, and experience design for the modern enterprise." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const cards = NAMES.map((name, i) => ({
    slug: SLUGS[i],
    name,
    desc: services[i % services.length].desc,
    Icon: services[i % services.length].icon,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="border-t border-accent/40 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our Solutions</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] max-w-3xl">
              End-to-End Digital Solutions for Ambitious Enterprises
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
              From strategy to scale — explore the FluxtonX practice areas that power transformation across cloud, intelligence, data, and experience.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((c) => (
              <Link
                key={c.slug}
                to="/solutions/$slug"
                params={{ slug: c.slug }}
                className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all shadow-card hover:shadow-card-hover"
              >
                <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <c.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{c.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
