import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Quote, Share2 } from "lucide-react";
import buildingImg from "@/assets/industry-finance.jpg";
import t1 from "@/assets/team-1.jpg";

const STUDIES: Record<string, { client: string; industry: string; tag: string; title: string; lead: string }> = {
  "global-bank-cloud": { client: "Zenith Global Capital", industry: "High-Frequency Trading & Wealth Management", tag: "Financial Services", title: "Revolutionizing Global Asset Liquidity through AI-Driven Architectures", lead: "How FluxtonX partnered with Zenith Global Capital to modernize legacy infrastructure and achieve sub-millisecond execution across four continents." },
  "ai-supply-chain": { client: "Velocity Motors", industry: "Automotive Manufacturing", tag: "Manufacturing", title: "AI-Driven Supply Chain Optimization at Scale", lead: "Deploying predictive analytics across a global manufacturing footprint to eliminate bottlenecks and unlock 25% throughput growth." },
  "telehealth": { client: "Beacon Health", industry: "Healthcare Networks", tag: "Healthcare", title: "Architecting a Nationwide Telehealth Ecosystem", lead: "A secure, compliant remote-care platform connecting hundreds of clinics and millions of patients in record time." },
  "omnichannel-retail": { client: "Lumina Retail", industry: "Specialty Retail", tag: "Retail", title: "Omnichannel Personalization for the Modern Shopper", lead: "Unifying physical and digital retail with real-time customer data orchestration." },
  "smart-grid": { client: "Eco-Power Systems", industry: "Utilities", tag: "Energy", title: "Smart Grid Modernization for Renewable Integration", lead: "IoT-enabled load balancing for a regional utility serving millions of households." },
  "national-security": { client: "Gov-Data Defense", industry: "Public Sector", tag: "Public Sector", title: "Zero-Trust Architecture for National Security", lead: "Identity, access, and data protection redesigned for the modern threat landscape." },
};

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const s = STUDIES[params.slug] ?? STUDIES["global-bank-cloud"];
    return { meta: [
      { title: `${s.title} — FluxtonX` },
      { name: "description", content: s.lead },
    ]};
  },
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { slug } = Route.useParams();
  const s = STUDIES[slug] ?? STUDIES["global-bank-cloud"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="border-t border-accent/40 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center gap-3">
              <span className="rounded bg-accent text-accent-foreground px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">Case Study</span>
              <span className="text-xs text-muted-foreground">— {s.tag}</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] max-w-4xl">{s.title}</h1>
            <p className="mt-5 max-w-2xl text-sm text-muted-foreground leading-relaxed">{s.lead}</p>

            <img src={buildingImg} alt={s.client} loading="lazy" className="mt-10 w-full aspect-[16/7] object-cover rounded-xl" />
          </div>
        </section>

        <section className="bg-surface pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[260px_1fr] gap-12">
            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="border-t border-accent pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">Client Overview</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Organization</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{s.client}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Industry</p>
                <p className="mt-1 text-sm text-foreground">{s.industry}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Services Provided</p>
                <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                  <li>· Cloud Infrastructure Scaling</li>
                  <li>· AI-Optimized Ledger Systems</li>
                  <li>· Cybersecurity Hardening</li>
                  <li>· Real-time Data Analytics</li>
                </ul>
              </div>
              <div className="rounded-xl bg-surface-2 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">Key Technologies</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Kubernetes", "AWS Lambda", "TensorFlow", "Rust", "Coreplay", "Snowflake"].map((t) => (
                    <span key={t} className="rounded border border-border bg-card px-2 py-1 text-[10px] font-semibold tracking-wider uppercase text-primary">{t}</span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Body */}
            <article className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground">The Challenge: Fragmented Legacy Latency</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.client} faced a critical bottleneck: their aging on-premise infrastructure was unable to handle the 400% surge in daily transaction volume. Data silos across regional offices in London, New York, and Singapore led to execution discrepancies and increased risk exposure.</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The requirement was clear but daunting: consolidate global operations into a unified, low-latency cloud environment while maintaining 99.999% uptime during the migration process.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">Our Approach: Structural Precision & AI</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">FluxtonX implemented a three-phase architectural overhaul. We replaced the monolithic core with a distributed microservices mesh, leveraging Rust for performance-critical execution layers.</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-card border border-border p-6">
                    <div className="h-9 w-9 grid place-items-center rounded-md bg-primary/10 text-primary">⚛︎</div>
                    <h3 className="mt-4 font-semibold text-foreground">Unified Mesh</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Connecting disparate global nodes into a single-pane-of-glass management console for real-time visibility.</p>
                  </div>
                  <div className="rounded-xl bg-card border border-border p-6">
                    <div className="h-9 w-9 grid place-items-center rounded-md bg-primary/10 text-primary">↻</div>
                    <h3 className="mt-4 font-semibold text-foreground">Predictive Scaling</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">AI models forecasting market volatility to auto-scale compute resources before traffic spikes occur.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground">The Results: Quantifiable Impact</h2>
                <div className="mt-6 grid grid-cols-3 gap-6">
                  {[
                    ["94", "%", "Latency Reduction"],
                    ["12", "M", "Savings Annually"],
                    ["5", "x", "Capacity Growth"],
                  ].map(([n, u, l]) => (
                    <div key={l as string}>
                      <div className="text-4xl sm:text-5xl font-bold text-primary">{n}<span className="text-2xl text-accent">{u}</span></div>
                      <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{l}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-xl bg-primary text-primary-foreground p-7 sm:p-9">
                  <Quote className="h-7 w-7 text-accent" />
                  <blockquote className="mt-4 text-lg sm:text-xl italic leading-snug">
                    "FluxtonX didn't just provide a vendor service; they acted as a strategic architect for our future. The precision of their execution transformed our technical debt into a competitive advantage within six months."
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <img src={t1} alt="Arthur Sterling" className="h-10 w-10 rounded-md object-cover" />
                    <div>
                      <div className="text-sm font-semibold text-accent">Arthur Sterling</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/70">Chief Technology Officer, {s.client}</div>
                    </div>
                  </figcaption>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary">Ready to Achieve Similar Results?</h2>
            <p className="mt-4 text-sm text-muted-foreground">Join the ranks of global leaders who have entrusted FluxtonX with their digital evolution. Let's build your next breakthrough together.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">Consult Our Architects</Link>
              <Link to="/case-studies" className="rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">Explore All Case Studies</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
