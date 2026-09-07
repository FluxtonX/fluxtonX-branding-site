import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Linkedin,
  Github,
  Globe,
  ExternalLink,
  Code2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Cpu,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationCallBtn } from "@/components/ConsultationCallBtn";
import { teamMembers, TeamMember } from "@/data/team";
import {
  getSeoMeta,
  createTeamCollectionSchema,
  createPersonSchema,
  createBreadcrumbSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/team")({
  head: () =>
    getSeoMeta({
      title: "Executive Leadership & Engineering Team | FluxtonX",
      description:
        "Meet the executive leadership and software architects powering FluxtonX. Led by Founder & CEO Muhammad Nasir alongside Lead Software Architect Muhammad Mudassir (Founder of MedVoryx) and our senior engineering team.",
      keywords: [
        "Muhammad Nasir FluxtonX",
        "Muhammad Nasir CEO",
        "FluxtonX Leadership",
        "Muhammad Mudassir",
        "Muhammad Mudassir FluxtonX",
        "MedVoryx",
        "MedVoryx Founder",
        "FluxtonX Engineering Team",
        "Full-Stack Software Architects",
        "AI Engineers Islamabad",
        "Custom Software Development Team",
      ],
      canonicalPath: "/team",
      jsonLd: [
        createTeamCollectionSchema(teamMembers),
        createBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Team", url: "/team" },
        ]),
        ...teamMembers.map((m) => createPersonSchema(m)),
      ],
    }),
  component: TeamPage,
});

const CATEGORIES = [
  "All",
  "Leadership",
  "Full-Stack",
  "Mobile",
  "Design",
] as const;

function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const nasir = teamMembers.find((m) => m.id === "muhammad-nasir");

  const filteredMembers = teamMembers.filter((m) => {
    if (selectedCategory === "All") return true;
    if (m.category === selectedCategory) return true;
    if (selectedCategory === "Mobile" && m.skills.some((s) => s.toLowerCase().includes("flutter") || s.toLowerCase().includes("mobile"))) return true;
    if (selectedCategory === "Full-Stack" && m.skills.some((s) => s.toLowerCase().includes("react") || s.toLowerCase().includes("next"))) return true;
    return false;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface via-background to-background py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              World-Class Engineering Talent
            </div>
            
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
              The Engineers & Architects Powering{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
                FluxtonX
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are a team of visionary software architects, full-stack engineers, AI specialists, and product designers dedicated to crafting high-performance digital ecosystems.
            </p>

            {/* Quick stats banner */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: "Engineering Excellence", val: "100%" },
                { label: "Global Deployments", val: "200+" },
                { label: "Client Satisfaction", val: "98%" },
                { label: "Core Technologies", val: "25+" },
              ].map((s, idx) => (
                <div key={idx} className="rounded-xl border border-border/80 bg-card/60 backdrop-blur-sm p-4 text-center">
                  <div className="text-2xl font-extrabold text-primary">{s.val}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Spotlight: Executive Leadership (CEO & Founder) */}
        <section className="py-16 sm:py-20 bg-surface/50 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Strategic & Executive Leadership
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
                  Leadership Spotlight
                </h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Guiding corporate strategy, product vision, and global enterprise partnerships.
              </p>
            </div>

            {/* Muhammad Nasir Spotlight Card */}
            {nasir && (
              <div className="max-w-3xl mx-auto relative group rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    <Award className="h-3 w-3" />
                    Founder & CEO
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="relative shrink-0">
                    <img
                      src={nasir.img}
                      alt={nasir.name}
                      className="h-28 w-28 sm:h-32 sm:w-32 rounded-2xl object-cover object-top border-2 border-primary/30 shadow-md group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground p-1.5 rounded-lg shadow">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {nasir.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      {nasir.role}
                    </p>

                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-surface-2 px-2.5 py-1 rounded-md">
                      <span>Organization:</span>
                      <span className="font-bold text-foreground">FluxtonX</span>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {nasir.bio}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {nasir.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-primary/10 text-primary px-2 py-0.5 text-[11px] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                      <a
                        href={nasir.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                      >
                        <Linkedin className="h-3.5 w-3.5" /> LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* All Engineers & Specialists Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Full Team Directory
                </p>
                <h2 className="mt-1 text-3xl font-bold text-foreground">
                  Our Engineering Roster
                </h2>
              </div>

              {/* Discipline filter */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-surface border border-border text-muted-foreground hover:text-foreground hover:bg-surface-2"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  id={member.id}
                  className="rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-square overflow-hidden bg-surface-2">
                    <img
                      src={member.img}
                      alt={member.name}
                      className={`w-full h-full object-cover ${member.imgPosition || "object-top"} group-hover:scale-105 transition-transform duration-500`}
                      loading="lazy"
                    />
                    {member.badge && (
                      <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {member.badge}
                      </div>
                    )}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 bg-white/90 dark:bg-surface/90 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md text-[#0A66C2]"
                      aria-label={`${member.name} LinkedIn Profile`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {member.name}
                        </h3>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-surface-2 text-muted-foreground shrink-0">
                          {member.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <p className="text-xs font-semibold text-primary">
                          {member.role}
                        </p>
                        {member.venture && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {member.venture.role} @ {member.venture.name}
                          </span>
                        )}
                      </div>

                      <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-4">
                        {member.bio}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-border/60">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {member.skills.slice(0, 5).map((skill) => (
                          <span
                            key={skill}
                            className="rounded bg-surface-2 text-muted-foreground px-2 py-0.5 text-[10px] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                        >
                          View Profile <ExternalLink className="h-3 w-3" />
                        </a>
                        <span className="text-[11px] text-muted-foreground">
                          FluxtonX Team
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Tech Philosophy */}
        <section className="py-20 bg-surface border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Engineering Culture
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Architectural Rigor. Relentless Innovation.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                At FluxtonX, our engineering principles focus on building resilient, scalable, and secure applications. From venture incubation like MedVoryx to enterprise cloud migrations, our team approaches every challenge with an operator mindset.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Full-stack mastery across React, Next.js, Node.js, and TypeScript",
                  "High-performance cross-platform mobile apps with Flutter",
                  "Intelligent AI platform engineering and custom automation pipelines",
                  "Zero-Trust security architectures and financial-grade compliance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-sm"
                >
                  Join Our Engineering Team <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h3 className="text-xl font-bold text-foreground">
                Partner with Our Architects
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Have a complex software challenge or seeking a dedicated engineering team for your startup or enterprise?
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-2">
                  <div className="text-xl font-bold text-primary">1-on-1</div>
                  <div className="text-xs text-muted-foreground mt-1">Direct Technical Consultation</div>
                </div>
                <div className="p-4 rounded-xl bg-surface-2">
                  <div className="text-xl font-bold text-primary">24h</div>
                  <div className="text-xs text-muted-foreground mt-1">Fast Response Window</div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="w-full inline-flex justify-center items-center gap-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-5 py-3 text-sm font-semibold transition"
                >
                  Schedule an Architecture Review
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationCallBtn />
    </div>
  );
}
