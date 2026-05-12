import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Share2, Link as LinkIcon, ArrowLeft } from "lucide-react";
import { articles } from "@/data/blog";
import t1 from "@/assets/team-1.webp";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.article?.title || "Blog"} — FluxtonX` },
      { name: "description", content: loaderData?.article?.desc },
    ],
  }),
  component: BlogPost,
});

function BlogPost() {
  const { article } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-surface border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Insights
            </Link>
            
            <div className="flex items-center gap-3">
              <span className="rounded bg-accent/15 text-accent px-3 py-1 text-[11px] font-semibold tracking-wider uppercase">{article.cat}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{article.read}</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] max-w-4xl">
              {article.title}
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <img src={t1} alt="Author" className="h-10 w-10 rounded-md object-cover" />
              <div>
                <div className="text-sm font-semibold text-foreground">{article.author}</div>
                <div className="text-xs text-muted-foreground">Strategist, FluxtonX Global</div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
            <img src={article.img} alt="Cover" className="w-full aspect-[16/7] object-cover rounded-xl shadow-2xl" />
          </div>
        </section>

        {/* Body + Sidebar */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_320px] gap-12">
            <article className="prose-blog">
              {article.content ? (
                article.content.map((p: string, idx: number) => (
                  <div key={idx} className="mb-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">Chapter {String(idx + 1).padStart(2, "0")}</p>
                    <p className="text-lg text-foreground/85 leading-relaxed">
                      {p}
                    </p>
                    {idx === 0 && (
                      <div className="my-10 p-8 rounded-2xl bg-surface border border-border">
                        <h3 className="text-xl font-bold text-primary mb-4">Key Strategic Takeaways</h3>
                        <ul className="space-y-4">
                          {[
                            "Architectural alignment with business outcomes is non-negotiable.",
                            "Legacy transition must prioritize data integrity over raw speed.",
                            "Security frameworks must be integrated, not appended."
                          ].map((item) => (
                            <li key={item} className="flex gap-3 text-sm text-foreground/80">
                              <CheckCircle2 className="h-5 w-5 text-accent flex-none" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-lg text-foreground/85 leading-relaxed">
                  Full article content coming soon. Stay tuned for more deep dives into digital transformation and architectural precision.
                </p>
              )}

              <div className="mt-16 pt-10 border-t border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">Conclusion</h3>
                <p className="text-lg text-foreground/85 leading-relaxed">
                  The path to digital excellence is paved with precise decisions and robust architecture. At FluxtonX, we remain committed to guiding our partners through these complex shifts with clarity and expertise.
                </p>
              </div>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              <div className="rounded-xl bg-primary text-primary-foreground p-8 shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold relative z-10">Executive Briefing</h3>
                <p className="mt-4 text-sm text-white/80 leading-relaxed relative z-10">Join 45,000+ executives receiving our bi-weekly briefing on digital precision and architectural leadership.</p>
                <div className="mt-6 space-y-3 relative z-10">
                  <input type="email" placeholder="Corporate Email" className="w-full rounded-md bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all" />
                  <button className="w-full rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-light transition shadow-lg">Subscribe Now</button>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 flex items-center justify-between shadow-sm">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">Share Insights</span>
                <div className="flex gap-2">
                  <button className="h-9 w-9 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-all"><Share2 className="h-4 w-4" /></button>
                  <button className="h-9 w-9 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition-all"><LinkIcon className="h-4 w-4" /></button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Recommended */}
        <section className="bg-surface py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Recommended Reading</p>
                <h2 className="text-3xl font-bold text-primary">Further Intelligence</h2>
              </div>
              <Link to="/blog" className="text-sm font-bold text-primary hover:underline">Explore All Insights →</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.filter(a => a.slug !== article.slug).slice(0, 3).map((a) => (
                <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="group rounded-xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="inline-block rounded bg-muted px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground/70 self-start">{a.cat}</span>
                    <h3 className="mt-4 text-base font-bold text-foreground leading-snug group-hover:text-primary transition line-clamp-2">{a.title}</h3>
                    <div className="mt-auto pt-4 flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                      <span>{a.read}</span>
                      <span className="text-primary font-bold">View Insight</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
