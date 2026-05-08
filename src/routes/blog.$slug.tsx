import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Quote, Share2, Link as LinkIcon } from "lucide-react";
import cover from "@/assets/blog-2.jpg";
import t1 from "@/assets/team-1.jpg";
import b1 from "@/assets/blog-chip.jpg";
import b2 from "@/assets/blog-3.jpg";
import b3 from "@/assets/finance-hero.jpg";

const TOC = [
  { id: "mandate", label: "The Strategic Mandate" },
  { id: "speed", label: "Illusion of Speed" },
  { id: "integrity", label: "Structural Integrity" },
  { id: "future", label: "Future of Scalability" },
];

const further = [
  { tag: "Report", img: b1, title: "Quantum Readiness: Preparing the Enterprise Core", desc: "Analyzing the 5-year timeline for post-quantum cryptographic standards in...", read: "8 min read" },
  { tag: "Case Study", img: b2, title: "Optimizing Cloud OpEx through AI Orchestration", desc: "How a Fortune 100 retailer reduced infrastructure spend by 32% using...", read: "10 min read" },
  { tag: "Perspective", img: b3, title: "The Human Factor in Large-Scale Digital Change", desc: "Addressing the psychological barriers to technical adoption in heritage...", read: "10 min read" },
];

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Navigating the Architectural Shift — FluxtonX` },
      { name: "description", content: `Insights on ${params.slug}: precision in enterprise cloud migration." }` },
    ],
  }),
  component: BlogPost,
});

function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-surface border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center gap-3">
              <span className="rounded bg-accent/15 text-accent px-3 py-1 text-[11px] font-semibold tracking-wider uppercase">Digital Transformation</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">15 min read</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] max-w-4xl">
              Navigating the Architectural Shift: Precision in Enterprise Cloud Migration
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <img src={t1} alt="Author" className="h-10 w-10 rounded-md object-cover" />
              <div>
                <div className="text-sm font-semibold text-foreground">Dr. Alistair Vance</div>
                <div className="text-xs text-muted-foreground">Chief Strategist, FluxtonX Global</div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
            <img src={cover} alt="Cover" className="w-full aspect-[16/7] object-cover rounded-xl" />
          </div>
        </section>

        {/* Body + Sidebar */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_280px] gap-12">
            <article className="prose-blog">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Chapter 01: The Strategic Mandate</p>
              <p id="mandate" className="mt-6 text-base text-foreground/85 leading-relaxed">
                In the current global economic landscape, digital transformation is no longer a peripheral objective but a fundamental requirement for institutional survival. As enterprises scale, the complexity of their legacy systems often acts as a friction point, slowing down innovation and increasing operational risk.
              </p>

              <h2 id="speed" className="mt-12 text-2xl font-bold text-primary">The Illusion of Speed in Migration</h2>
              <p className="mt-4 text-base text-foreground/85 leading-relaxed">
                Many organizations mistake "lift-and-shift" strategies for actual modernization. While moving existing workloads to the cloud provides immediate infrastructure relief, it often fails to address the underlying architectural inefficiencies that prevent true agility. Precision requires a deeper look at the data fabric.
              </p>

              <blockquote className="mt-8 rounded-r-lg border-l-4 border-accent bg-surface px-6 py-5">
                <p className="text-lg italic text-foreground leading-relaxed">"True architectural precision isn't about the speed of movement, but the integrity of the system during transition. If you migrate a mess, you simply have a faster, more expensive mess."</p>
                <footer className="mt-3 text-xs font-semibold text-muted-foreground">— Dr. Alistair Vance, FluxtonX Global</footer>
              </blockquote>

              <h2 id="integrity" className="mt-12 text-2xl font-bold text-primary">Structural Integrity and Governance</h2>
              <p className="mt-4 text-base text-foreground/85 leading-relaxed">
                Building a robust cloud-native architecture involves more than just selecting a provider. It demands a rigorous approach to security, compliance, and cost management from day one. At FluxtonX, we utilize a proprietary framework that ensures every byte moved is mapped to a specific business outcome.
              </p>
              <ul className="mt-5 space-y-2.5">
                {["Integrated Multi-Cloud Governance Layers", "Automated Compliance Orchestration", "Zero-Trust Network Architecture Implementation"].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-none mt-0.5" /> {p}
                  </li>
                ))}
              </ul>

              <p id="future" className="mt-12 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Conclusion: The Future of Scalability</p>
              <p className="mt-4 text-base text-foreground/85 leading-relaxed">
                As we look toward 2025, the gap between digitally mature organizations and their competitors will only widen. Precision in migration today is the foundation for AI-driven operations tomorrow.
              </p>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">In This Article</p>
                <ul className="mt-4 space-y-2.5">
                  {TOC.map((t, i) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`} className="flex gap-2 text-sm text-foreground/80 hover:text-primary transition">
                        <span className="text-accent font-semibold">{String(i + 1).padStart(2, "0")}.</span>
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-primary text-primary-foreground p-6">
                <h3 className="text-base font-bold">Strategic Insights</h3>
                <p className="mt-2 text-xs text-white/80 leading-relaxed">Join 45,000+ executives receiving our weekly briefing on digital precision and architectural leadership.</p>
                <input type="email" placeholder="Corporate Email" className="mt-4 w-full rounded-md bg-white px-3 py-2 text-xs text-foreground focus:outline-none" />
                <button className="mt-2 w-full rounded-md bg-accent px-3 py-2 text-xs font-semibold text-accent-foreground hover:bg-accent-light transition">Subscribe Now</button>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">Share Insights</span>
                <div className="flex gap-2">
                  <button className="h-8 w-8 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition"><Share2 className="h-3.5 w-3.5" /></button>
                  <button className="h-8 w-8 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition"><LinkIcon className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Further */}
        <section className="bg-surface py-16 border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">Further Intelligence</h2>
              <Link to="/blog" className="text-sm font-semibold text-primary hover:text-primary-dark">Explore All Insights →</Link>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {further.map((a) => (
                <article key={a.title} className="rounded-xl bg-card border border-border overflow-hidden shadow-card">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="rounded bg-primary text-primary-foreground px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">{a.tag}</span>
                    <h3 className="mt-3 text-base font-bold text-foreground leading-snug">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                    <div className="mt-4 text-[10px] uppercase tracking-wider text-muted-foreground">{a.read}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
