import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import financeImg from "@/assets/finance-hero.jpg";
import buildingImg from "@/assets/industry-finance.jpg";
import tabletImg from "@/assets/solution-tablet.jpg";
import { Banknote, Shield, BarChart3, Sparkles, Database } from "lucide-react";

const SECTORS: Record<string, {
  name: string;
  tagline: string;
  intro: string;
}> = {
  finance: { name: "Financial Services", tagline: "Transforming Financial Services", intro: "We partner with global institutions to architect resilient, future-ready financial ecosystems through deep technological precision and strategic foresight." },
  healthcare: { name: "Healthcare", tagline: "Transforming Healthcare", intro: "We help healthcare leaders modernize delivery, harness data, and deploy AI-driven diagnostics with privacy at the core." },
  retail: { name: "Retail", tagline: "Transforming Retail", intro: "Unifying omnichannel commerce with real-time inventory and personalization at scale." },
  education: { name: "Education", tagline: "Transforming Education", intro: "Immersive learning platforms and institutional automation that empower educators and elevate outcomes." },
  government: { name: "Government", tagline: "Transforming Government", intro: "Secure citizen-portal architectures and digital infrastructure for the modern public sector." },
  logistics: { name: "Logistics", tagline: "Transforming Logistics", intro: "End-to-end supply chain visibility powered by IoT and autonomous flow management." },
};

const services = [
  { icon: BarChart3, title: "Payments Modernization", desc: "Architecting high-throughput, low-latency payment rails for the next generation of global commerce.", tags: ["ISO 20022", "Real-Time Rails"] },
  { icon: Shield, title: "Cybersecurity", desc: "Zero-trust frameworks for financial data." },
  { icon: BarChart3, title: "Analytics", desc: "Predictive modeling for market shifts." },
  { icon: Sparkles, title: "API Banking", desc: "Unlocking the power of Open Finance." },
  { icon: Database, title: "Data Governance & Wealth Management", desc: "Centralizing fragmented data sets into a unified, actionable intelligence layer for private banking excellence." },
];

const testimonials = [
  { q: "FluxtonX didn't just provide a solution, they redefined our entire approach to digital infrastructure. Their precision in the finance sector is unparalleled.", n: "Marcus Vanover", r: "CTO, Global Asset Management" },
  { q: "The transition to cloud-native was seamless. Their architectural insights eliminated years of operational inefficiencies.", n: "Sarah Chen", r: "Head of Digital, Prime Sterling Bank" },
  { q: "In an era of high regulation, FluxtonX provides the technical confidence we need to scale rapidly across new jurisdictions.", n: "Dr. Robert Aris", r: "Chief Risk Officer, FinTech Corp" },
];

export const Route = createFileRoute("/industries/$slug")({
  head: ({ params }) => {
    const s = SECTORS[params.slug] ?? SECTORS.finance;
    return {
      meta: [
        { title: `${s.name} — FluxtonX` },
        { name: "description", content: s.intro },
      ],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { slug } = Route.useParams();
  const sector = SECTORS[slug] ?? SECTORS.finance;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <Breadcrumb items={[
                { label: "Home", to: "/" },
                { label: "Industries", to: "/industries" },
                { label: sector.name },
              ]} />
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-primary">
                {sector.tagline}
              </h1>
              <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">{sector.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/solutions" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">Explore Solutions</Link>
                <Link to="/contact" className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">Speak with an Expert</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <img src={financeImg} alt={sector.name} width={800} height={600} className="w-full h-72 lg:h-[420px] object-cover" />
            </div>
          </div>
        </section>

        {/* Strategic Context */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Strategic Context</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Navigating Complexity</h2>

            <div className="mt-10 grid lg:grid-cols-[1.2fr_1fr] gap-8">
              <div className="space-y-8">
                <div className="border-b border-border pb-8">
                  <h3 className="text-xl font-semibold text-foreground">Legacy Modernization</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Transitioning away from monolithic architectures without disrupting critical daily operations or compromising data integrity across cross-border nodes.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Regulatory Compliance</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Automating complex reporting workflows to ensure real-time adherence to shifting global financial mandates and localized jurisdictional requirements.</p>
                </div>
              </div>
              <div className="rounded-xl bg-surface-2 p-8">
                <Banknote className="h-7 w-7 text-accent" />
                <h4 className="mt-4 text-lg font-bold text-primary">The FluxtonX Framework</h4>
                <ul className="mt-5 space-y-3.5">
                  {["Cloud-Native Core Banking Integration", "AI-Driven Risk Mitigation & Fraud Detection", "Omni-Channel Customer Experience Platforms"].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                      <CheckCircle2 className="h-5 w-5 flex-none text-accent mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Targeted Services */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our Expertise</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">Targeted {sector.name} Services</h2>
              <Link to="/solutions" className="text-sm font-semibold text-primary hover:text-primary-dark">View All Services →</Link>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.slice(0, 3).map((s) => (
                <div key={s.title} className="rounded-xl bg-card border border-border p-6 shadow-card">
                  <div className="h-9 w-9 rounded-md bg-primary/10 text-primary grid place-items-center"><s.icon className="h-4.5 w-4.5" /></div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  {s.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="text-[10px] font-semibold tracking-wider uppercase rounded-full bg-accent/15 text-accent px-2.5 py-1">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="rounded-xl bg-card border border-border p-6 shadow-card">
                <div className="h-9 w-9 rounded-md bg-primary/10 text-primary grid place-items-center"><Sparkles className="h-4 w-4" /></div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">API Banking</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Unlocking the power of Open Finance.</p>
              </div>
              <div className="sm:col-span-2 rounded-xl bg-card border border-border p-6 shadow-card flex gap-6 items-center">
                <div className="flex-1">
                  <div className="h-9 w-9 rounded-md bg-primary/10 text-primary grid place-items-center"><Database className="h-4 w-4" /></div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Data Governance & Wealth Management</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Centralizing fragmented data sets into a unified, actionable intelligence layer for private banking excellence.</p>
                </div>
                <img src={tabletImg} alt="" width={700} height={700} loading="lazy" className="hidden sm:block w-32 h-24 object-cover rounded-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Impact */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={buildingImg} alt="Featured client" width={800} height={600} loading="lazy" className="w-full rounded-2xl object-cover" />
              <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground rounded-lg px-6 py-5 max-w-[220px]">
                <div className="text-3xl font-bold">45%</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/80">Reduction in Operational Latency</div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Featured Impact</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary leading-tight">Reimagining Retail Banking for Global Prime</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">For a tier-one global bank, FluxtonX architected a cloud-native transformation strategy that unified siloed legacy systems across 14 jurisdictions, enabling real-time cross-border settlements and a 360-degree customer view.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-accent flex-none mt-0.5" /><span><b className="text-foreground">Client Demographic:</b> Global Private & Retail Banking</span></li>
                <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-accent flex-none mt-0.5" /><span><b className="text-foreground">Time to Market:</b> Full Deployment in 14 Months</span></li>
              </ul>
              <Link to="/case-studies" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">Read the Full Case Study →</Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Partnership Echoes</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Trusted by Industry Leaders</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-5 text-left">
              {testimonials.map((t) => (
                <figure key={t.n} className="rounded-xl bg-card border border-border p-6 shadow-card">
                  <blockquote className="text-sm leading-relaxed text-foreground/90">"{t.q}"</blockquote>
                  <figcaption className="mt-5 pt-4 border-t border-border">
                    <div className="text-sm font-semibold text-primary">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground border-b-4 border-accent">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Architect Your Transformation?</h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">Speak with our dedicated {sector.name.toLowerCase()} services team to discuss how FluxtonX can drive precision into your digital roadmap.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-light transition">Contact Industry Expert</Link>
              <Link to="/contact" className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">Download Sector Report</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
