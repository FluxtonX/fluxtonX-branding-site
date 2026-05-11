import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Plane, BadgeDollarSign, GraduationCap, Users, Clock, Globe2, Sparkles, Quote, ArrowRight } from "lucide-react";
import careersImg from "@/assets/careers-hero.jpg";
import aboutImg from "@/assets/about-hero.jpg";
import t4 from "@/assets/team-4.jpg";

const benefits = [
  { icon: Heart, t: "Holistic Wellness", d: "Comprehensive private medical insurance, mental health support, and gym memberships for all employees globally." },
  { icon: Plane, t: "Remote Freedom", d: "Work from anywhere. We provide a $2,500 home-office stipend and access to premium co-working spaces." },
  { icon: BadgeDollarSign, t: "Equity & Wealth", d: "Competitive base salaries paired with meaningful equity grants and performance-based accelerators." },
  { icon: GraduationCap, t: "Learning Stipend", d: "$5,000 annual budget for conferences, certifications, or high-level strategic education." },
  { icon: Users, t: "Family Support", d: "24 weeks of fully paid parental leave regardless of gender or path to parenthood." },
  { icon: Clock, t: "Flexible Time", d: "Unlimited PTO with a mandatory 3-week minimum to ensure everyone recharges at high levels." },
];

const jobs = [
  { dept: "Engineering", title: "Senior Distributed Systems Engineer", loc: "Remote", type: "Full-time" },
  { dept: "Engineering", title: "Lead Cloud Architect", loc: "London, UK", type: "Full-time" },
  { dept: "Design", title: "Principal Product Designer", loc: "New York, Hybrid", type: "Full-time" },
  { dept: "Product", title: "VP of Global Digital Strategy", loc: "Remote, Global", type: "Full-time" },
];

const tabs = ["All Roles", "Engineering", "Design", "Product"];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | FluxtonX" },
      { name: "description", content: "Join the FluxtonX team and work on cutting edge AI and product engineering projects." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const [tab, setTab] = useState("All Roles");
  const [submitted, setSubmitted] = useState(false);
  const filtered = jobs.filter((j) => tab === "All Roles" || j.dept === tab);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Careers</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-primary">
                Architect the Future of Digital Commerce.
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
                Join a global collective of strategists, engineers, and designers dedicated to dismantling complexity and building enterprise-grade precision.
              </p>
              <a href="#openings" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">
                View Open Roles <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <img src={careersImg} alt="FluxtonX office" width={900} height={700} loading="lazy" className="rounded-xl w-full object-cover" />
          </div>
        </section>

        {/* Culture grid */}
        <section className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Culture</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Life at FluxtonX</h2>
            <div className="mt-10 grid lg:grid-cols-3 gap-5">
              <div className="rounded-xl bg-card border border-border p-7 shadow-card lg:col-span-2">
                <h3 className="text-xl font-bold text-foreground">Precision over speed.</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Our engineering culture is rooted in architectural integrity. We don't just ship code, we build lasting digital infrastructure.</p>
              </div>
              <div className="rounded-xl bg-primary text-primary-foreground p-7 shadow-card">
                <Globe2 className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-lg font-bold">Global Reach</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">With hubs in London, Dubai, and Saudi Arabia, our footprint is as wide as our impact.</p>
              </div>
              <div className="rounded-xl bg-card border border-border p-7 shadow-card">
                <Sparkles className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-semibold text-foreground">Continuous Growth</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Annual education stipends and mentorship from industry veterans.</p>
              </div>
              <div className="rounded-xl overflow-hidden lg:col-span-2 relative">
                <img src={aboutImg} alt="" loading="lazy" className="w-full h-full object-cover absolute inset-0" />
                <div className="relative bg-gradient-to-t from-black/70 to-transparent p-7 min-h-[200px] flex items-end">
                  <p className="text-sm text-white max-w-md italic">"FluxtonX provides the autonomy of a startup with the strategic weight of a global consultancy."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Benefits</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Designed for Elite Performance.</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {benefits.map((b) => (
                <div key={b.t}>
                  <b.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-3 text-base font-semibold text-foreground">{b.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section id="openings" className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Openings</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Architectural Vacancies</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {tabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`rounded-md px-4 py-2 text-xs font-semibold transition ${tab === t ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground/70 hover:border-primary"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {filtered.map((j) => (
                <div key={j.title} className="rounded-xl bg-card border border-border p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 shadow-card">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-accent">{j.dept}</div>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{j.title}</h3>
                    <div className="mt-1 text-xs text-muted-foreground">{j.loc} · {j.type}</div>
                  </div>
                  <button className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary-dark transition">Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <img src={t4} alt="Sarah Chen" loading="lazy" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground rounded-md px-4 py-2">
                <div className="text-sm font-bold">Sarah Chen</div>
                <div className="text-[10px] uppercase tracking-wider">Director of Cloud Strategy</div>
              </div>
            </div>
            <div>
              <Quote className="h-10 w-10 text-accent" />
              <blockquote className="mt-4 text-2xl lg:text-3xl font-medium text-foreground leading-snug">
                "At FluxtonX, we don't follow trends. We architect the standards that others follow. The level of intellectual rigor here is unlike any other consultancy I've worked for."
              </blockquote>
              <p className="mt-6 text-sm text-muted-foreground">Sarah joined our London team in 2021 and has since led three of our largest global banking transformations, defining the blueprint for zero-latency cross-border settlements.</p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-surface py-20 border-t border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-primary">Submit Your Credentials</h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">Formalize your interest. Our recruitment partners review all applications with strategic precision.</p>

            {submitted ? (
              <div className="mt-10 rounded-xl bg-card border border-accent p-8 text-center">
                <h3 className="text-lg font-bold text-primary">Application received</h3>
                <p className="mt-2 text-sm text-muted-foreground">Our team will review your credentials and respond within 5 business days.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="mt-10 rounded-xl bg-card border border-border p-6 sm:p-8 shadow-card space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" placeholder="Alexander Wright" required />
                  <Field label="Email Address" type="email" placeholder="alexander.wright@fluxtonx.com" required />
                  <Field label="Phone Number" type="tel" placeholder="+1 (000) 000-0000" />
                  <Select label="Target Position" options={["Select Department", "Engineering", "Design", "Product"]} />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Resume / CV Upload</label>
                  <div className="mt-2 rounded-md border-2 border-dashed border-border bg-surface px-4 py-8 text-center text-sm text-muted-foreground hover:border-primary transition cursor-pointer">
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" id="resume" />
                    <label htmlFor="resume" className="cursor-pointer">Drop PDF here or Browse Files</label>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Strategic Cover Letter</label>
                  <textarea rows={4} placeholder="Define your impact on previous digital transformation projects..." className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
                <button type="submit" className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</label>
      <input {...props} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</label>
      <select className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
