import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lightbulb, Compass, Award, Users } from "lucide-react";
import aboutImg from "@/assets/about-hero.jpg";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

const timeline = [
  { year: "2004", title: "Islamabad Founding", desc: "Founded in the heart of Islamabad with a focus on core banking systems and government digital infrastructure." },
  { year: "2010", title: "MENA Expansion", desc: "Established our Middle East headquarters in Dubai, scaling our cloud migration services across the GCC region." },
  { year: "2016", title: "European Hub", desc: "Opened London and Frankfurt offices, leading massive digital modernization projects for global financial leaders." },
  { year: "2024", title: "FluxtonX", desc: "Unveiling our intelligent transformation practice — AI, data, and the next decade of growth." },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "Unwavering ethical standards in every line of code and every strategic consultation. We build trust as deeply as we build systems." },
  { icon: Lightbulb, title: "Innovation", desc: "Pioneering beyond the edge of the possible. We don't just follow industry trends; we architect the next generation of standards." },
  { icon: Compass, title: "Precision", desc: "Eliminating ambiguity through meticulous planning. Our architectural precision ensures stability in the face of hyper-growth." },
];

const team = [
  { name: "Zaid Al-Hassan", role: "Chief Executive Officer", img: t1 },
  { name: "Elena Vost", role: "Chief Technology Officer", img: t2 },
  { name: "Marcus Thorne", role: "Head of Architecture", img: t3 },
  { name: "Sarah Jenkins", role: "VP, Global Strategy", img: t4 },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Company — FluxtonX" },
      { name: "description", content: "Pioneering digital excellence since day one. FluxtonX has remained committed to architectural precision and engineering integrity." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our Heritage</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-primary">
                Pioneering Digital Excellence Since Day One.
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
                From our humble beginnings in Islamabad to a global powerhouse in digital transformation, FluxtonX has remained committed to architectural precision and engineering integrity.
              </p>
            </div>
            <div className="relative">
              <img src={aboutImg} alt="FluxtonX office" width={900} height={700} className="w-full rounded-xl object-cover" loading="lazy" />
              <div className="absolute -bottom-6 left-6 bg-accent text-accent-foreground rounded-md px-6 py-4 shadow-card">
                <div className="text-2xl font-bold">20+ Years</div>
                <div className="text-[10px] uppercase tracking-wider mt-0.5">Engineering The Future</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="border-t border-accent/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            {[
              { t: "Our Mission", d: "To orchestrate seamless digital transformations for the world's most ambitious enterprises, bridging the gap between legacy stability and future-proof agility through uncompromising architectural standards." },
              { t: "Our Vision", d: "To become the global gold standard for digital infrastructure consultancy, recognized for our precision, integrity, and the enduring impact of the systems we build." },
            ].map((b) => (
              <div key={b.t}>
                <h2 className="text-2xl font-bold text-primary">{b.t}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Evolution</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">The Timeline of Impact</h2>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {timeline.map((t) => (
                <div key={t.year} className="rounded-xl bg-card border border-border p-6 shadow-card">
                  <div className="text-xs font-semibold text-muted-foreground tracking-wider">{t.year}</div>
                  <h3 className="mt-3 text-lg font-bold text-primary">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Foundations</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Our Core Values</h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-5 text-left">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
                  <v.icon className="h-7 w-7 text-accent" />
                  <h3 className="mt-4 text-xl font-bold text-foreground">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Executive Team</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Strategic Leadership</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((m) => (
                <figure key={m.name} className="rounded-xl overflow-hidden bg-card border border-border shadow-card">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full aspect-[3/4] object-cover" />
                  <figcaption className="p-5">
                    <div className="font-semibold text-foreground">{m.name}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{m.role}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Global Footprint + Recognition */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Presence</p>
              <h2 className="mt-3 text-3xl font-bold text-primary">Global Footprint</h2>
              <ul className="mt-8 space-y-5">
                {[
                  ["Islamabad, PK", "Regional Operations & R&D Center"],
                  ["Dubai, UAE", "MENA Strategic Hub"],
                  ["London, UK", "European Financial Markets HQ"],
                  ["Singapore", "APAC Transformation Center"],
                ].map(([c, d]) => (
                  <li key={c} className="border-l-2 border-accent pl-4">
                    <div className="font-semibold text-primary">{c}</div>
                    <div className="text-xs text-muted-foreground">{d}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-surface-2 grid place-items-center min-h-[280px] text-muted-foreground text-sm">
              <div className="text-center">
                <Users className="h-10 w-10 text-primary mx-auto" />
                <p className="mt-3 font-semibold text-primary">4 Global Hubs</p>
                <p className="text-xs">Serving 50+ countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="bg-surface py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary">Recognition</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  ["2023", "Global Cloud Excellence", "Infrastructure Innovation Award"],
                  ["2023", "Fintech Standards", "Security Excellence Badge"],
                  ["2021", "Digital Architects", "Boutique Agency of the Year"],
                  ["2020", "Transformation Lead", "Project of the Year — MENA"],
                ].map(([y, t, d]) => (
                  <div key={t} className="rounded-lg bg-card border border-border p-5">
                    <Award className="h-5 w-5 text-accent" />
                    <div className="mt-3 text-xs text-muted-foreground">{y}</div>
                    <div className="text-sm font-semibold text-primary mt-1">{t}</div>
                    <div className="text-xs text-muted-foreground mt-1">{d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Community Impact</h2>
              <div className="mt-6 rounded-xl bg-primary text-primary-foreground p-7">
                <h3 className="text-lg font-bold">Empowering Future Architects</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">We dedicate 5% of our annual profit to digital literacy programs and STEM scholarships in developing markets, ensuring the next generation of engineers has the tools to build a better world.</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div><div className="text-2xl font-bold text-accent">500k+</div><div className="text-[10px] uppercase tracking-wider text-white/70">Students Mentored</div></div>
                  <div><div className="text-2xl font-bold text-accent">$3M</div><div className="text-[10px] uppercase tracking-wider text-white/70">Grants Funded</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
