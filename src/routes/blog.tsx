import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { articles, tabs } from "@/data/blog";
import featImg from "@/assets/case-energy.webp";
import t1 from "@/assets/team-1.webp";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Resources | FluxtonX" },
      { name: "description", content: "Read the latest insights on AI, product engineering, mobile development and technology from FluxtonX." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [tab, setTab] = useState("All");
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter(a => {
      const matchesTab = tab === "All" || a.category === tab;
      const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           a.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           a.cat.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [tab, searchQuery]);

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

        {/* Search & Tabs */}
        <section className="border-y border-border bg-background sticky top-16 z-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1">
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
            
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search insights..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-surface border border-border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary w-full md:w-64 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Featured - Only show when no search and on 'All' or relevant tab */}
        {(tab === "All" || tab === "Business") && searchQuery === "" && (
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
        )}

        {/* Recent / Filtered Results */}
        <section className="bg-surface pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {searchQuery ? `Search Results (${filteredArticles.length})` : tab === "All" ? "Recent Publications" : `${tab} Insights`}
              </h2>
              {filteredArticles.length > 0 && (
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <SlidersHorizontal className="h-3.5 w-3.5" /> SORT BY DATE
                </div>
              )}
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((a) => (
                  <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="group rounded-xl overflow-hidden bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded bg-muted px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/70">{a.cat}</span>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{a.read}</span>
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-foreground leading-snug group-hover:text-primary transition line-clamp-2">{a.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{a.desc}</p>
                      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-[11px]">
                        <span className="text-muted-foreground">{a.author} · {a.date}</span>
                        <span className="font-semibold text-primary uppercase tracking-wider">Read More</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-muted-foreground opacity-20" />
                </div>
                <h3 className="text-xl font-bold text-foreground">No insights found</h3>
                <p className="mt-2 text-muted-foreground">Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => { setTab("All"); setSearchQuery(""); }}
                  className="mt-6 text-sm font-semibold text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
            
            {filteredArticles.length > 6 && (
              <div className="mt-12 text-center">
                <button className="rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">Load More Articles</button>
              </div>
            )}
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
                className="flex-1 min-w-[240px] rounded-md bg-white px-4 py-3 text-sm text-foreground focus:outline-none shadow-inner"
              />
              <button className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-light transition shadow-lg">
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
