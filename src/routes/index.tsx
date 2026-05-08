import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services, stats, industries, clients, testimonials, posts } from "@/data/home";
import heroImg from "@/assets/hero-tech.jpg";
import caseImg from "@/assets/case-banking.jpg";
import whyImg from "@/assets/why-team.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FluxtonX — Transforming Businesses Through Intelligent Technology" },
      { name: "description", content: "FluxtonX partners with global enterprises to deliver architectural precision in digital transformation, cloud-first operations, and AI-driven acceleration." },
    ],
  }),
  component: Home,
});

const blogImgs = [blog1, blog2, blog3];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ClientsMarquee />
        <WhatWeDo />
        <StatsBar />
        <Industries />
        <CaseStudy />
        <TechStack />
        <WhyUs />
        <Testimonials />
        <Insights />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 text-primary px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Global Digital Excellence
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-primary">
              Transforming Businesses Through{" "}
              <span className="text-foreground">Intelligent</span>{" "}
              <span className="text-accent">Technology</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              FluxtonX partners with global enterprises to deliver architectural precision in digital transformation, cloud-first operations, and AI-driven acceleration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/solutions" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition shadow-[0_8px_24px_-8px_rgba(26,61,191,0.5)]">
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">
                Talk to an Expert
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
              <img src={heroImg} alt="Intelligent technology visualization" width={1280} height={896} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsMarquee() {
  return (
    <section className="border-y border-border bg-background py-10">
      <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
        Trusted by industry leaders worldwide
      </p>
      <div className="mt-6 overflow-hidden">
        <div className="flex gap-16 animate-marquee w-max">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="text-2xl font-bold tracking-tight text-muted-foreground/70 hover:text-primary transition whitespace-nowrap">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">What We Do</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Architecture for a Digital Future</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-border bg-card p-7 hover:border-primary/40 hover:-translate-y-0.5 transition-all shadow-card hover:shadow-card-hover">
              <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-bold tracking-tight">{s.value}</div>
              <div className="mt-2 text-xs font-semibold tracking-[0.18em] uppercase text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Industries</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Specialized Expertise</h2>
          </div>
          <Link to="/industries" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark">
            View all industries <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((i) => (
            <div key={i.label} className="group rounded-xl border border-border bg-card p-6 text-center hover:border-accent hover:-translate-y-0.5 transition-all shadow-card">
              <div className="mx-auto h-10 w-10 rounded-lg bg-muted text-primary grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs font-semibold tracking-[0.16em] uppercase text-foreground/80">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Case Studies</p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Impact Delivered</h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-card shadow-card">
          <img src={caseImg} alt="Banking transformation" width={1024} height={768} loading="lazy" className="w-full h-72 lg:h-full object-cover" />
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold tracking-wider uppercase">Financial Services</span>
            <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground leading-tight">Revolutionizing Digital Banking for Global FinCorp</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Architecting a cloud-native banking platform that scaled to 50M+ active users while maintaining 99.99% uptime and elite security standards.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-accent">40%</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Faster Transactions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">2.5×</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Revenue Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const stack = ["AWS", "Azure", "GCP", "Kubernetes", "Snowflake", "Databricks", "PyTorch", "React", "Postgres", "Kafka"];
  return (
    <section className="py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">Engineering Excellence Powered By</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-6 items-center">
          {stack.map((t) => (
            <div key={t} className="text-center text-sm font-semibold text-foreground/70 hover:text-primary transition">{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { title: "Architectural Insights", desc: "We don't just build software, we engineer resilient digital ecosystems that stand the test of time and scale." },
    { title: "Elite Engineering Talent", desc: "Our team comprises tested, accredited architects and domain experts with a proven track record in global consulting." },
    { title: "Strategic Partnership", desc: "We align our technical execution with your high-level business objectives to drive tangible ROI." },
  ];
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">The FluxtonX Advantage</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">Why Global Leaders Partner With Us</h2>
          <ul className="mt-8 space-y-6">
            {items.map((it) => (
              <li key={it.title} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 flex-none text-accent" />
                <div>
                  <h4 className="font-semibold text-foreground">{it.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img src={whyImg} alt="FluxtonX leadership team" width={1024} height={768} loading="lazy" className="w-full rounded-2xl object-cover shadow-card" />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl px-6 py-5 shadow-card hidden sm:block">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-[11px] uppercase tracking-wider text-white/70 mt-1">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="mx-auto h-10 w-10 text-accent" />
        <blockquote className="mt-6 text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-snug">
          "{t.quote}"
        </blockquote>
        <div className="mt-8">
          <div className="font-semibold text-foreground">{t.name}</div>
          <div className="text-sm text-muted-foreground">{t.role}</div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)} className="h-10 w-10 grid place-items-center rounded-full border border-border bg-background hover:border-primary hover:text-primary transition" aria-label="Previous">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${idx === i ? "bg-primary w-8" : "bg-border w-3"}`} aria-label={`Go to ${idx + 1}`} />
            ))}
          </div>
          <button onClick={() => setI((p) => (p + 1) % testimonials.length)} className="h-10 w-10 grid place-items-center rounded-full border border-border bg-background hover:border-primary hover:text-primary transition" aria-label="Next">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Knowledge Hub</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Latest Insights</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark">
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-border bg-card hover:-translate-y-0.5 transition-all shadow-card hover:shadow-card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={blogImgs[idx]} alt={p.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">{p.category}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition">{p.title}</h3>
                <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground px-8 py-14 lg:px-16 lg:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -left-10 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Ready to Transform Your Business?</h2>
              <p className="mt-3 text-white/80 max-w-2xl">Join the global enterprises who have accelerated their digital journey with FluxtonX's architectural precision.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-light transition">
                Get a Consultation
              </Link>
              <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
