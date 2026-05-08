import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Crown, Star, Award, TrendingUp, Mail, Megaphone } from "lucide-react";
import partnersImg from "@/assets/partners-hero.jpg";

const tiers = [
  { tag: "Strategic Partners", icon: Crown, items: [
    { name: "Tech Giant A", desc: "Seamless cloud infrastructure integration for enterprise scalability." },
    { name: "Network Corp", desc: "Global connectivity solutions for distributed digital ecosystems." },
  ]},
  { tag: "Gold Partners", icon: Star, items: [
    { name: "DataFlow", desc: "Advanced analytics and real-time data processing tools." },
    { name: "Secure Core", desc: "Cybersecurity frameworks built for modern threat landscapes." },
  ]},
  { tag: "Silver Partners", icon: Award, items: [
    { name: "Apiflex", desc: "Specialized API management and integration services." },
    { name: "UX Logic", desc: "Human-centric design systems for enterprise applications." },
  ]},
];

const benefits = [
  { icon: TrendingUp, t: "Market Expansion", d: "Access our global client base and joint-marketing opportunities." },
  { icon: Mail, t: "Technical Enablement", d: "Direct access to FluxtonX APIs and specialized engineering support." },
  { icon: Megaphone, t: "Co-Marketing Fuel", d: "White-label resources, webinars, and global event presence." },
];

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — FluxtonX" },
      { name: "description", content: "FluxtonX partners with world-class technology providers to deliver architectural precision and digital transformation at a global scale." },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Ecosystem Collaboration</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
                Building the Future Together
              </h1>
              <p className="mt-6 max-w-lg text-base text-muted-foreground leading-relaxed">
                FluxtonX partners with world-class technology providers to deliver architectural precision and digital transformation at a global scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#tiers" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">Explore Tiers</a>
                <a href="#apply" className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">Apply Now</a>
              </div>
            </div>
            <img src={partnersImg} alt="Partners ecosystem" loading="lazy" className="rounded-xl w-full object-cover aspect-[4/3]" />
          </div>
        </section>

        {/* Tiers */}
        <section id="tiers" className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Partnership Tiers</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Our Global Network</h2>

            <div className="mt-12 grid lg:grid-cols-3 gap-8 text-left">
              {tiers.map((t) => (
                <div key={t.tag}>
                  <div className="flex items-center gap-2 pb-4 border-b border-border">
                    <t.icon className="h-5 w-5 text-accent" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">{t.tag}</h3>
                  </div>
                  <div className="mt-6 space-y-4">
                    {t.items.map((p) => (
                      <div key={p.name} className="rounded-xl bg-card border border-border p-6 shadow-card">
                        <div className="rounded bg-muted px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 inline-block">{p.name}</div>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section id="apply" className="border-t border-accent/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Growth & Opportunity</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Become a Partner</h2>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-md">
                Unlock exclusive resources, co-marketing opportunities, and technical support to accelerate your organization's growth within the FluxtonX ecosystem.
              </p>
              <ul className="mt-8 space-y-5 max-w-md">
                {benefits.map((b) => (
                  <li key={b.t} className="flex gap-4">
                    <div className="h-9 w-9 rounded-md bg-primary/10 text-primary grid place-items-center flex-none"><b.icon className="h-4 w-4" /></div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{b.t}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{b.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-card border border-border p-7 sm:p-10 shadow-card">
              <h3 className="text-2xl font-bold text-foreground">Partner Application</h3>
              <p className="mt-2 text-sm text-muted-foreground">Complete the form and our alliances team will contact you within 48 hours.</p>

              {submitted ? (
                <div className="mt-8 rounded-lg bg-surface border border-accent p-6 text-center">
                  <h4 className="font-bold text-primary">Application submitted</h4>
                  <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-6 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <In label="Organization Name" placeholder="e.g. Global Tech Solutions" required />
                    <In label="Business Website" placeholder="https://" />
                    <In label="Contact Name" placeholder="Full name" required />
                    <In label="Work Email" type="email" placeholder="email@company.com" required />
                  </div>
                  <Se label="Preferred Tier" options={["Strategic Partner", "Gold Partner", "Silver Partner"]} />
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Partnership Goals</label>
                    <textarea rows={4} placeholder="Tell us how you'd like to collaborate..." className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <button type="submit" className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function In({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</label>
      <input {...props} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
function Se({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</label>
      <select className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
