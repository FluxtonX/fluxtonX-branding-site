import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQAccordion } from "@/components/FAQAccordion";
import heroBg from "@/assets/solution-hero.jpg";
import devImg from "@/assets/solution-dev.jpg";
import bankingImg from "@/assets/case-banking.jpg";
import healthImg from "@/assets/case-health.jpg";
import manuImg from "@/assets/case-manufacturing.jpg";
import { Cloud, Shield, Zap, Smartphone, Atom, Cpu, Server, Database, ArrowRight, CheckCircle2 } from "lucide-react";

const SOLUTIONS: Record<string, { name: string; category: string; tagline: string; subhead: string }> = {
  "digital-transformation": { 
    name: "Digital Transformation", 
    category: "Digital Strategy", 
    tagline: "Strategic Realignment for the Modern Enterprise", 
    subhead: "Orchestrating seamless transitions from legacy complexity to high-velocity digital excellence." 
  },
  "cloud-native": { 
    name: "Cloud Native", 
    category: "Cloud Innovation", 
    tagline: "Engineering Resilient Cloud-First Ecosystems", 
    subhead: "Architecting elastic, multi-region cloud platforms that scale with your business velocity." 
  },
  "applied-intelligence": { 
    name: "Applied Intelligence", 
    category: "Applied Intelligence", 
    tagline: "Unlocking Value Through Advanced AI & ML", 
    subhead: "Deploying generative models and automated intelligence to redefine operational efficiency." 
  },
  "cybersecurity": { 
    name: "Cybersecurity", 
    category: "Infrastructure", 
    tagline: "Institutional-Grade Digital Fortification", 
    subhead: "Proactive threat detection and zero-trust protocols designed for the modern threat landscape." 
  },
  "data-mastery": { 
    name: "Data Mastery", 
    category: "Data & Analytics", 
    tagline: "Turning Raw Data Into Strategic Clarity", 
    subhead: "Modern data platforms, governance, and ML-ready pipelines for the intelligent enterprise." 
  },
  "app-development": { 
    name: "App Development", 
    category: "Infrastructure", 
    tagline: "Architecting Next-Generation Mobile & Web Experiences", 
    subhead: "Bridging the gap between ambitious business logic and seamless user engagement." 
  },
  "experience-design": { 
    name: "Experience Design", 
    category: "Digital Strategy", 
    tagline: "Human-Centric Design with Architectural Precision", 
    subhead: "Crafting interfaces that balance aesthetic beauty with uncompromising functional excellence." 
  },
  "enterprise-web": { 
    name: "Enterprise Web", 
    category: "Infrastructure", 
    tagline: "High-Performance Web Architectures", 
    subhead: "Modern web frameworks designed for massive concurrency and global content delivery." 
  },
};

const highlights = [
  { icon: Cloud, title: "Cloud-Native Engineering", desc: "Microservices-based approach for maximum uptime." },
  { icon: Shield, title: "Enterprise Security", desc: "Military-grade encryption and SOC2 compliance." },
  { icon: Zap, title: "Performance Optimized", desc: "Sub-100ms response times for critical interactions." },
];

const steps = ["Discovery", "Strategy", "Design", "Development", "Testing", "Deployment", "Support"];

const stack = [
  { icon: Atom, label: "React / Next.js" },
  { icon: Smartphone, label: "Flutter / React Native" },
  { icon: Cpu, label: "Node.js / Python" },
  { icon: Database, label: "PostgreSQL / MongoDB" },
  { icon: Cloud, label: "AWS / Azure / GCP" },
  { icon: Server, label: "Kubernetes / Docker" },
];

const stats = [
  { v: "99.9%", l: "System Uptime" },
  { v: "40%", l: "Faster Reduction" },
  { v: "2.5M+", l: "Daily Users" },
  { v: "12wk", l: "Avg. MVP Time" },
];

const successes = [
  { tag: "Fintech", title: "Global Neo-Bank Platform", desc: "Scaling a cross-border payment system to 1.2M active users across Europe." },
  { tag: "Healthcare", title: "Telehealth Integration", desc: "A secure, HIPAA-compliant patient portal connecting 300+ clinics nationwide." },
  { tag: "Logistics", title: "Real-Time Supply Chain AI", desc: "Optimizing route optimization and warehouse tracking for a Fortune 500 retailer." },
];

const faqs = [
  { q: "How do you ensure application security?", a: "Our security-first approach incorporates automated penetration testing, regular code audits, and strict adherence to ISO 27001 standards from day one of development." },
  { q: "What is the typical development timeline?", a: "Most enterprise MVPs ship in 12 weeks. Larger initiatives are scoped into 6-week increments with measurable milestones along the way." },
  { q: "Do you provide ongoing maintenance?", a: "Yes — we offer 24/7 SLA-backed support and a continuous improvement program covering security patches, performance tuning, and feature evolution." },
  { q: "Can you integrate with legacy enterprise systems?", a: "Absolutely. Our integration practice spans SAP, Oracle, mainframe, and proprietary middleware via API gateways and event-driven architectures." },
];

export const Route = createFileRoute("/solutions/$slug")({
  head: ({ params }) => {
    const s = SOLUTIONS[params.slug] ?? SOLUTIONS["app-development"];
    return {
      meta: [
        { title: `${s.name} — FluxtonX` },
        { name: "description", content: s.subhead },
      ],
    };
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const { slug } = Route.useParams();
  const sol = SOLUTIONS[slug] ?? SOLUTIONS["app-development"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 opacity-25">
            <img src={heroBg} alt="" width={1400} height={700} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <Breadcrumb items={[
              { label: "Solutions", to: "/solutions" },
              { label: sol.category },
              { label: sol.name },
            ]} />
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-4xl">{sol.tagline}</h1>
            <p className="mt-5 text-base lg:text-lg text-white/80 max-w-2xl leading-relaxed">{sol.subhead}</p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Overview</p>
            <div className="mt-3 grid lg:grid-cols-[1.4fr_1fr] gap-10">
              <div>
                <h2 className="text-3xl font-bold text-primary">Scalable Architecture for a Mobile-First World</h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">FluxtonX provides end-to-end application development services designed for modern enterprises. We don't just build apps; we engineer digital ecosystems that integrate seamlessly with your existing cloud infrastructure and business workflows.</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Our methodology combines rigorous architectural planning with agile execution, ensuring that every line of code contributes to long-term scalability and operational resilience. From complex ERP integrations to high-performance consumer applications, we deliver excellence at every touchpoint.</p>
              </div>
              <div className="rounded-xl bg-surface-2 p-7">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">Key Highlights</p>
                <ul className="mt-5 space-y-5">
                  {highlights.map((h) => (
                    <li key={h.title} className="flex items-start gap-3">
                      <h.icon className="h-5 w-5 text-accent flex-none mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{h.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{h.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Stepper */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Methodology</p>
            <h2 className="mt-3 text-3xl font-bold text-primary">Our Strategic Process</h2>

            <div className="mt-12 relative">
              <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border" />
              <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-3 relative">
                {steps.map((s, i) => (
                  <li key={s} className="text-center">
                    <div className={`mx-auto h-12 w-12 grid place-items-center rounded-md font-bold text-sm border-2 ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground/70 border-border"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-3 text-sm font-semibold text-foreground">{s}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground leading-snug">Stakeholder alignment and quick discovery.</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Ecosystem</p>
              <h2 className="mt-3 text-3xl font-bold text-primary">Elite Tech Stack</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-md">We leverage industry-leading technologies to build robust, future-proof applications that grow with your business.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stack.map((t) => (
                <div key={t.label} className="rounded-xl border border-border bg-card p-5 text-center hover:border-primary/40 transition shadow-card">
                  <t.icon className="mx-auto h-7 w-7 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary text-primary-foreground border-y-4 border-accent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-4xl sm:text-5xl font-bold text-accent">{s.v}</div>
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Impact</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-bold text-primary">Success Stories</h2>
              <Link to="/case-studies" className="text-sm font-semibold text-primary hover:text-primary-dark">View All Cases →</Link>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {successes.map((s, i) => (
                <article key={s.title} className="rounded-xl overflow-hidden border border-border bg-card shadow-card hover:shadow-card-hover transition">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img src={[bankingImg, healthImg, manuImg][i]} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">{s.tag}</span>
                    <h3 className="mt-2 text-base font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Engineered by Talent */}
        <section className="py-20 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Expertise</p>
              <h2 className="mt-3 text-3xl font-bold text-primary">Engineered by Global Talent</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Our development teams are comprised of senior architects and domain experts located across four global hubs. We bring a diverse range of perspectives to solve the most complex technical challenges.</p>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                <div className="rounded-lg bg-card border border-border p-5">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">Senior Architects</div>
                </div>
                <div className="rounded-lg bg-card border border-border p-5">
                  <div className="text-2xl font-bold text-primary">12+</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">Core Technologies</div>
                </div>
              </div>
            </div>
            <img src={devImg} alt="Engineering team" width={900} height={700} loading="lazy" className="w-full rounded-2xl object-cover shadow-card" />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-accent">FAQ</p>
            <h2 className="mt-3 text-center text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            <div className="mt-10">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-2 border-y border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Ready to Architect Your Digital Future?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Schedule a deep-dive consultation with our solution architects to discuss your project requirements.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">
                Schedule a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/case-studies" className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">
                Download Solutions Brief
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

