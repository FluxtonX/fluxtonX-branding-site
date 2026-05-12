import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpDown, Cloud, BrainCircuit, Shield, Database, Smartphone, Sparkles, Globe, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/solutions-hero.webp";

const filters = ["All Solutions", "Digital Strategy", "Infrastructure", "Intelligence"];

const solutions = [
  { slug: "digital-transformation", icon: ArrowUpDown, name: "Digital Transformation", desc: "Strategic realignment of organizational processes using frontier digital assets and streamlined workflows.", cat: "Digital Strategy" },
  { slug: "cloud-native", icon: Cloud, name: "Cloud Computing", desc: "Scalable, secure, and resilient cloud architectures designed for multi-region global operations.", cat: "Infrastructure" },
  { slug: "applied-intelligence", icon: BrainCircuit, name: "Applied Intelligence", desc: "Deploying generative models and machine learning to automate complex decision-making pipelines.", cat: "Intelligence" },
  { slug: "cybersecurity", icon: Shield, name: "Cybersecurity", desc: "Institutional-grade defense systems focused on proactive threat detection and zero-trust protocols.", cat: "Infrastructure" },
  { slug: "data-mastery", icon: Database, name: "Data Analytics", desc: "Advanced data harvesting and visualization that turns raw enterprise signals into strategic assets.", cat: "Intelligence" },
  { slug: "app-development", icon: Smartphone, name: "Mobile Ecosystems", desc: "High-performance native and cross-platform applications built for the mobile-first professional.", cat: "Infrastructure" },
  { slug: "experience-design", icon: Sparkles, name: "Experience Design", desc: "Precision-engineered user interfaces that bridge the gap between human intuition and machine logic.", cat: "Digital Strategy" },
  { slug: "enterprise-web", icon: Globe, name: "Enterprise Web", desc: "Modern web frameworks designed for massive concurrency and seamless global content delivery.", cat: "Infrastructure" },
];

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Our Solutions | FluxtonX" },
      { name: "description", content: "Explore FluxtonX solutions including AI platforms, mobile development, SaaS engineering, Fintech and enterprise automation." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const [active, setActive] = useState("All Solutions");
  const list = solutions.filter((s) => active === "All Solutions" || s.cat === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Global Expertise</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                <span className="text-foreground">Comprehensive</span><br />
                <span className="text-primary">Digital Solutions</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
                FluxtonX delivers enterprise-grade technological architectures that redefine operational efficiency. From legacy modernization to frontier AI integration, we empower global leaders to navigate complex digital landscapes with surgical precision.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#solutions" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">View Methodology</a>
                <Link to="/case-studies" className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">Case Studies</Link>
              </div>
            </div>
            <div className="relative">
              <img src={heroImg} alt="Digital warp" width={900} height={700} className="w-full rounded-xl object-cover" />
              <div className="absolute -bottom-6 left-6 bg-card border border-accent rounded-md px-5 py-3 shadow-card">
                <div className="text-xl font-bold text-primary">99.9%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Architectural Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter + Grid */}
        <section id="solutions" className="bg-surface border-t border-border py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[240px_1fr] gap-10">
            <aside>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent border-l-2 border-accent pl-3">Filter Expertise</p>
              <ul className="mt-5 space-y-1">
                {filters.map((f) => (
                  <li key={f}>
                    <button
                      onClick={() => setActive(f)}
                      className={`w-full text-left flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition ${active === f ? "bg-card text-primary font-semibold border border-border" : "text-foreground/70 hover:text-primary"}`}
                    >
                      {f}
                      {active === f && <ChevronRight className="h-4 w-4" />}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl bg-primary text-primary-foreground p-6">
                <h3 className="text-lg font-bold leading-snug">Need a custom framework?</h3>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">Our architects work with you to design bespoke systems tailored to your specific industry constraints.</p>
                <Link to="/contact" className="mt-4 inline-flex items-center rounded-md bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground hover:bg-accent-light transition">Consult an Expert</Link>
              </div>
            </aside>

            <div className="grid sm:grid-cols-2 gap-5">
              {list.map((s) => (
                <div key={s.slug} className="group rounded-xl bg-card border border-border p-7 hover:border-primary/40 hover:-translate-y-0.5 transition-all shadow-card">
                  <div className="h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link 
                    to="/solutions/$slug" 
                    params={{ slug: s.slug }}
                    className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-primary tracking-wider uppercase hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0b1020] text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to transform?</h2>
            <p className="mt-4 text-white/70">Join the world's leading organizations in building a more resilient, technology-driven future with FluxtonX.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-light transition">Start the Journey</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
