import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import featImg from "@/assets/case-energy.jpg";
import b1 from "@/assets/blog-feat.jpg";
import b2 from "@/assets/blog-chip.jpg";
import b3 from "@/assets/blog-2.jpg";
import b4 from "@/assets/blog-1.jpg";
import b5 from "@/assets/blog-sun.jpg";
import b6 from "@/assets/blog-3.jpg";
import t1 from "@/assets/team-1.jpg";

const tabs = ["All", "AI", "Mobile", "Web", "Cloud", "Design", "Business"];

const articles = [
  { slug: "generative-governance", img: b1, cat: "AI & Automation", read: "12 min read", title: "Generative Governance: A New Framework for Enterprise AI", desc: "Establishing guardrails for generative technology within highly regulated financial environments requires more than just speed.", author: "Sarah Chen", date: "Oct 24" },
  { slug: "quantum-banking", img: b2, cat: "Financial Services", read: "8 min read", title: "The Ledger of Tomorrow: Quantum Resistance in Banking", desc: "Preparing global financial systems for the quantum computing shift through cryptographic resilience and architecture.", author: "Marcus Thorne", date: "Oct 18" },
  { slug: "hybrid-by-design", img: b3, cat: "Cloud Architecture", read: "15 min read", title: "Hybrid by Design: Why the Public Cloud Isn't the Only Answer", desc: "Analyzing the cost-performance ratio of multi-cloud strategies for high-frequency trading platforms and large-scale data.", author: "Elena Rodriguez", date: "Oct 12" },
  { slug: "systematic-elegance", img: b4, cat: "Design & UX", read: "9 min read", title: "Systematic Elegance: Building Design Systems for Scale", desc: "Moving beyond UI kits to create living design ecosystems that empower thousands of developers across global teams.", author: "Thomas Kahl", date: "Oct 05" },
  { slug: "sustainable-digital", img: b5, cat: "Business Strategy", read: "10 min read", title: "Sustainable Digitalization: The ROI of Green Tech", desc: "How environmental responsibility is becoming a primary driver for technological investment and competitive positioning.", author: "Linda Wu", date: "Sep 29" },
  { slug: "beyond-the-browser", img: b6, cat: "Mobile Solutions", read: "8 min read", title: "Beyond the Browser: The Resurgence of Native Excellence", desc: "Why high-stakes user interactions still demand the performance and security of native mobile development over web-first.", author: "Arthur Miller", date: "Sep 22" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — FluxtonX" },
      { name: "description", content: "Expert perspectives on architectural precision, global transformation, and the next generation of enterprise technology." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [tab, setTab] = useState("All");
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="border-t border-accent/40 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Knowledge Hub</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] max-w-3xl">
              Strategic insights for the digital frontier.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Expert perspectives on architectural precision, global transformation, and the next generation of enterprise technology.
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="border-y border-border bg-background sticky top-16 z-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-4 py-2 text-sm font-medium transition ${tab === t ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {t}
                {tab === t && <span className="absolute -bottom-3 left-3 right-3 h-0.5 bg-accent" />}
              </button>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section className="bg-surface py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden border border-border shadow-card">
              <img src={featImg} alt="Featured" loading="lazy" className="w-full h-72 lg:h-full object-cover" />
              <div className="p-8 lg:p-12">
                <span className="inline-flex rounded bg-accent/15 text-accent px-3 py-1 text-[11px] font-semibold tracking-wider uppercase">Featured Insight</span>
                <h2 className="mt-4 text-3xl font-bold text-foreground leading-tight">The Architect's Dilemma: Balancing Agility with Legacy Stability</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Modern enterprises face the critical challenge of upgrading core infrastructure without disrupting global operations. This deep dive explores the strategic frameworks used by world-class consultancies to navigate legacy migration.</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t1} alt="" className="h-10 w-10 rounded-md object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Julien Devereaux</div>
                    <div className="text-xs text-muted-foreground">Managing Director, Solutions Architecture</div>
                  </div>
                </div>
                <Link to="/blog/$slug" params={{ slug: "architects-dilemma" }} className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-primary uppercase tracking-wider hover:gap-2 transition-all">
                  Read the Full Article <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent */}
        <section className="bg-surface pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">Recent Publications</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a) => (
                <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="group rounded-xl overflow-hidden bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded bg-muted px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/70">{a.cat}</span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{a.read}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-foreground leading-snug group-hover:text-primary transition">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{a.desc}</p>
                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-[11px]">
                      <span className="text-muted-foreground">{a.author} · {a.date}</span>
                      <span className="font-semibold text-primary uppercase tracking-wider">Read More</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button className="rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">Load More Articles</button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Executive Intelligence,<br />Delivered.</h2>
              <p className="mt-4 text-white/80">Join 25,000+ technology leaders receiving our bi-weekly breakdown of digital transformation trends and architectural strategy.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubbed(true); }}
              className="flex flex-wrap gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="professional@email.com"
                className="flex-1 min-w-[240px] rounded-md bg-white px-4 py-3 text-sm text-foreground focus:outline-none"
              />
              <button className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-light transition">
                {subbed ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
