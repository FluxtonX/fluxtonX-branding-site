import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import buildingImg from "@/assets/industry-finance.webp";
import manuImg from "@/assets/case-manufacturing.webp";
import healthImg from "@/assets/case-health.webp";
import bankingImg from "@/assets/case-banking.webp";
import energyImg from "@/assets/case-energy.webp";
import securityImg from "@/assets/case-security.webp";

const STUDIES = [
  { slug: "global-bank-cloud", img: buildingImg, industry: "Financial Services", metric: "40% OP-EX Reduction", title: "Global Bank Cloud Migration", desc: "Transitioning legacy infrastructure for a Tier-1 global bank to a hybrid-cloud environment to enhance security and agility.", client: "Nexus Global" },
  { slug: "ai-supply-chain", img: manuImg, industry: "Manufacturing", metric: "25% Throughput Increase", title: "AI-Driven Supply Chain", desc: "Implementation of predictive analytics and real-time tracking for a leading automotive manufacturer to eliminate bottlenecks.", client: "Velocity Motors" },
  { slug: "telehealth", img: healthImg, industry: "Healthcare", metric: "1.5× Patient Recovery Rate", title: "Telehealth Ecosystem", desc: "Architecting a secure, scalable platform for remote patient monitoring and virtual consultations across a nationwide network.", client: "Beacon Health" },
  { slug: "omnichannel-retail", img: bankingImg, industry: "Retail", metric: "2× Customer Retention", title: "Omnichannel Personalization", desc: "Leveraging customer data platforms to deliver hyper-personalized shopping experiences across physical and digital touchpoints.", client: "Lumina Retail" },
  { slug: "smart-grid", img: energyImg, industry: "Energy", metric: "18% Energy Efficiency", title: "Smart Grid Modernization", desc: "Deploying IoT-enabled monitoring and automated load balancing for a regional utility provider to support renewable integration.", client: "Eco-Power Systems" },
  { slug: "national-security", img: securityImg, industry: "Public Sector", metric: "Zero Security Breaches", title: "National Security Upgrade", desc: "Designing a Zero-Trust architecture and identity management framework for a government agency handling sensitive data.", client: "Gov-Data Defense" },
];

const INDUSTRIES = ["All Industries", "Financial Services", "Healthcare", "Retail", "Manufacturing", "Energy", "Public Sector"];
const SERVICES = ["All Services", "Cloud", "AI", "Data", "Cybersecurity"];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | FluxtonX" },
      { name: "description", content: "Explore how FluxtonX has helped startups and enterprises build impactful digital products." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const [industry, setIndustry] = useState("All Industries");
  const [service, setService] = useState("All Services");

  const filtered = STUDIES.filter((s) => industry === "All Industries" || s.industry === industry);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our Impact</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
              Global Impact: Our<br />Success Stories
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Discover how FluxtonX partners with the world's leading organizations to navigate digital complexity, drive sustainable growth, and architect future-ready ecosystems.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="border-y border-accent/40 bg-background sticky top-16 z-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">Filter by:</span>
              <Select value={industry} onChange={setIndustry} options={INDUSTRIES} />
              <Select value={service} onChange={setService} options={SERVICES} />
            </div>
            <p className="text-xs text-muted-foreground">Showing {filtered.length} results</p>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((s) => (
                <article key={s.slug} className="group rounded-xl overflow-hidden bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={s.img} alt={s.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-wider rounded-sm bg-muted px-2 py-1 text-foreground/70">{s.industry}</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">Metric: {s.metric}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-foreground leading-snug group-hover:text-primary transition">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Client: {s.client}</span>
                      <Link to="/case-studies/$slug" params={{ slug: s.slug }} className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all">
                        Read Case Study <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">
                View All Case Studies <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground border-b-4 border-accent">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Architect Your Success?</h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Join the ranks of global industry leaders who have transformed their digital potential into tangible market dominance with FluxtonX.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-light transition">Start Your Transformation</Link>
              <Link to="/contact" className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">Speak to a Strategist</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-md border border-border bg-background pl-3 pr-9 py-2 text-sm font-medium text-foreground focus:outline-none focus:border-primary cursor-pointer"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-muted-foreground" />
    </div>
  );
}
