import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { services, stats, industries, clients, testimonials, posts } from "@/data/home";
import { ConsultationCallBtn } from "@/components/ConsultationCallBtn";

import caseImg from "@/assets/case-banking.jpg";
import whyImg from "@/assets/why-team.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import logo from "@/assets/fluxtonx-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FluxtonX | Product Engineering & AI Solutions Company" },
      { name: "description", content: "FluxtonX helps startups and enterprises build scalable digital products with AI, mobile apps, SaaS and web development." },
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
      <ConsultationCallBtn />
    </div>
  );
}

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  const monitorRef = useRef<HTMLDivElement>(null);
  const analyticsRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const pieRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const dotCount = 20;
    const dots: HTMLDivElement[] = [];
    const positions = Array.from({ length: dotCount }, () => ({ x: 0, y: 0 }));
    const colors = ["#6366F1", "#818CF8", "#A855F7", "#EC4899", "#F472B6", "#60A5FA", "#38BDF8"];

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      const size = 20 * Math.pow(0.85, i);
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.position = "absolute";
      dot.style.borderRadius = "50%";
      dot.style.pointerEvents = "none";
      dot.style.zIndex = "1";
      dot.style.backgroundColor = colors[i % colors.length];
      dot.style.opacity = "0";
      dot.style.transition = `opacity 0.3s ease, transform ${50 + i * (350 / 19)}ms linear`;
      hero.appendChild(dot);
      dots.push(dot);
    }

    const glow = document.createElement("div");
    glow.style.width = "300px";
    glow.style.height = "300px";
    glow.style.position = "absolute";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.zIndex = "1";
    glow.style.background = "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)";
    glow.style.opacity = "0";
    glow.style.transition = "opacity 0.5s ease";
    let glowPos = { x: 0, y: 0 };
    hero.appendChild(glow);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current = { x, y };

      for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement("div");
        const size = Math.random() * 6 + 4;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.position = "absolute";
        sparkle.style.borderRadius = "50%";
        sparkle.style.pointerEvents = "none";
        sparkle.style.zIndex = "1";
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.left = `${x - size / 2}px`;
        sparkle.style.top = `${y - size / 2}px`;
        sparkle.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
        hero.appendChild(sparkle);

        const tx = (Math.random() - 0.5) * 100;
        const ty = (Math.random() - 0.5) * 100;
        
        requestAnimationFrame(() => {
          sparkle.style.transform = `translate(${tx}px, ${ty}px)`;
          sparkle.style.opacity = "0";
        });

        setTimeout(() => sparkle.remove(), 700);
      }

      // Layered Parallax
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      if (monitorRef.current) monitorRef.current.style.transform = `translate(${dx * 0.02}px, ${dy * 0.02}px) rotate(2deg)`;
      if (analyticsRef.current) analyticsRef.current.style.transform = `translate(${dx * 0.035}px, ${dy * 0.035}px) rotate(-3deg)`;
      if (codeRef.current) codeRef.current.style.transform = `translate(${dx * 0.015}px, ${dy * 0.015}px) rotate(1deg)`;
      if (notifRef.current) notifRef.current.style.transform = `translate(${dx * 0.04}px, ${dy * 0.04}px) rotate(-2deg)`;
      if (pieRef.current) pieRef.current.style.transform = `translate(${dx * 0.025}px, ${dy * 0.025}px) rotate(6deg)`;
      if (decorRef.current) decorRef.current.style.transform = `translate(${dx * 0.05}px, ${dy * 0.05}px)`;
    };

    const handleMouseEnter = () => {
      dots.forEach(d => d.style.opacity = "1");
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      dots.forEach(d => d.style.opacity = "0");
      glow.style.opacity = "0";
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseenter", handleMouseEnter);
    hero.addEventListener("mouseleave", handleMouseLeave);

    let animationId: number;
    const animate = () => {
      positions[0].x = mouseRef.current.x;
      positions[0].y = mouseRef.current.y;

      for (let i = 1; i < dotCount; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.35;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.35;
      }

      dots.forEach((dot, i) => {
        const size = parseFloat(dot.style.width);
        dot.style.left = "0";
        dot.style.top = "0";
        dot.style.transform = `translate(${positions[i].x - size / 2}px, ${positions[i].y - size / 2}px)`;
      });

      glowPos.x += (mouseRef.current.x - glowPos.x) * 0.08;
      glowPos.y += (mouseRef.current.y - glowPos.y) * 0.08;
      glow.style.left = "0";
      glow.style.top = "0";
      glow.style.transform = `translate(${glowPos.x - 150}px, ${glowPos.y - 150}px)`;

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseenter", handleMouseEnter);
      hero.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      dots.forEach(d => d.remove());
      glow.remove();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-surface cursor-none">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
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
              FluxtonX is a product engineering and AI solutions company helping startups, enterprises, and fast-growing businesses build scalable digital products with speed, precision, and long-term vision.
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
            <div ref={illustrationRef} className="relative w-full aspect-[4/3] max-w-[600px] mx-auto transition-transform duration-75 ease-out">
              {/* SVG Desk Platform */}
              <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto opacity-90" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="300" cy="180" rx="300" ry="180" fill="#1B2B6B" />
              </svg>
              
              {/* Card 1: Monitor (iMac style) */}
              <div ref={monitorRef} className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-72 bg-gray-800 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-1.5 transition-transform duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 h-full">
                  <div className="flex gap-1 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-2.5 w-3/4 bg-blue-600 rounded" />
                    <div className="h-2.5 w-1/2 bg-yellow-400 rounded" />
                    <div className="h-2.5 w-2/3 bg-blue-600 rounded" />
                  </div>
                  <div className="mt-10 text-center text-[11px] font-black tracking-widest text-gray-300 uppercase">FluxtonX</div>
                </div>
              </div>

              {/* Card 2: Analytics */}
              <div ref={analyticsRef} className="absolute top-20 left-4 z-30 bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-4 w-36 transition-transform duration-300 hover:scale-105">
                <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Growth</div>
                <div className="text-2xl font-bold text-blue-600">↑ 94%</div>
                <div className="mt-3 flex items-end gap-1 h-10">
                  <div className="w-2.5 bg-blue-600/20 h-3 rounded-t-sm" />
                  <div className="w-2.5 bg-blue-600/40 h-6 rounded-t-sm" />
                  <div className="w-2.5 bg-blue-600/60 h-4 rounded-t-sm" />
                  <div className="w-2.5 bg-blue-600/80 h-8 rounded-t-sm" />
                  <div className="w-2.5 bg-blue-600 h-10 rounded-t-sm" />
                </div>
              </div>

              {/* Card 3: Code Snippet */}
              <div ref={codeRef} className="absolute bottom-10 right-4 z-30 bg-slate-900 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-4 w-44 font-mono text-[10px] text-blue-300 transition-transform duration-300 hover:scale-105 border border-white/10">
                <div className="text-gray-500 mb-2">// Digital Strategy</div>
                <div className="flex gap-2"><span className="text-yellow-400">class</span> Enterprise <span className="text-white">{"{"}</span></div>
                <div className="pl-3">scale() <span className="text-white">{"{"}</span></div>
                <div className="pl-6 text-blue-400">precision: 100%</div>
                <div className="pl-3 text-white">{"}"}</div>
                <div className="text-white">{"}"}</div>
              </div>

              {/* Card 4: Notification */}
              <div ref={notifRef} className="absolute top-1/2 -right-8 -translate-y-1/2 z-40 bg-card rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.3)] px-4 py-2 flex items-center gap-2 transition-transform duration-300 hover:scale-110 border border-border">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-foreground">Cloud Ready</span>
              </div>

              {/* Card 5: Pie Chart Decorator */}
              <div ref={pieRef} className="absolute -bottom-10 left-10 z-30 bg-card rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] p-4 w-32 transition-transform duration-300 hover:scale-105 border border-border">
                <div className="relative w-12 h-12 mx-auto">
                  <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-muted" strokeWidth="4" />
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-primary" strokeWidth="4" strokeDasharray="75, 100" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-foreground">75%</div>
                </div>
                <div className="mt-2 text-center text-[10px] font-medium text-muted-foreground uppercase tracking-tighter">Performance</div>
              </div>

              {/* Decorators */}
              <div ref={decorRef} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-32 w-8 h-8 bg-yellow-400 rounded-lg opacity-80 shadow-md flex items-end justify-end p-1">
                  <div className="text-white text-[10px] leading-none">×</div>
                </div>
                <div className="absolute top-16 left-1/2 w-4 h-4 border-2 border-blue-400 rounded-sm rotate-45" />
                <div className="absolute bottom-24 right-1/4 w-6 h-6 bg-blue-600 rounded-full opacity-60" />
                <div className="absolute top-1/2 right-4 w-5 h-5 border-2 border-yellow-400 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsMarquee() {
  const getBrandColor = (name: string) => {
    const colors: Record<string, string> = {
      CivicAI: "bg-blue-600",
      Lumina: "bg-purple-500",
      Vertex: "bg-emerald-500",
      Apex: "bg-orange-500",
      NovaBank: "bg-cyan-500",
      HealthCore: "bg-rose-500",
      RetailX: "bg-violet-500",
      Meridian: "bg-amber-500",
      PrimeOps: "bg-teal-500",
      OrbitNet: "bg-indigo-500",
    };
    return colors[name] || "bg-primary";
  };

  return (
    <section className="border-y border-border bg-background py-12">
      <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
        Trusted by industry leaders worldwide
      </p>
      <div className="mt-8 overflow-hidden">
        <div className="flex gap-8 animate-marquee w-max py-2">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="flex items-center gap-3 border border-border rounded-xl px-5 py-2.5 bg-card shadow-sm whitespace-nowrap">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold ${getBrandColor(c)}`}>
                {c.charAt(0)}
              </div>
              <span className="text-foreground font-semibold text-base">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-yellow-400" />
            <span className="uppercase tracking-widest text-sm font-semibold text-yellow-500">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Architecture for a Digital Future
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-xl">
            We combine deep industry expertise with cutting-edge technology to deliver measurable digital transformation at enterprise scale.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link 
              key={s.slug} 
              to="/solutions/$slug" 
              params={{ slug: s.slug }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group cursor-pointer flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mt-6 mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-auto">
                <div className="w-0 group-hover:w-12 h-0.5 bg-primary transition-all duration-500 mt-4" />
                <div className="mt-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold flex items-center gap-1">
                  Learn more <span>→</span>
                </div>
              </div>
            </Link>
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
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Specialized Expertise</h2>
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
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-yellow-400" />
          <span className="uppercase tracking-widest text-sm font-semibold text-yellow-500">Case Studies</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
          Impact Delivered
        </h2>

        <div className="mt-16 group relative rounded-[2rem] overflow-hidden bg-card border border-border shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)] transition-all duration-500">
          <div className="grid lg:grid-cols-2">
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img 
                src={caseImg} 
                alt="Banking transformation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  Financial Services
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-muted-foreground text-xs font-medium">Digital Transformation</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Revolutionizing Digital Banking for Global FinCorp
              </h3>
              
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Architecting a cloud-native banking platform that scaled to 50M+ active users while maintaining 99.99% uptime and elite security standards.
              </p>

              <div className="mt-10 pt-10 border-t border-border grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-primary">40%</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Faster Transactions</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary">2.5×</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Revenue Growth</div>
                </div>
              </div>

              <div className="mt-12">
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-300">
                  Read Full Success Story <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const stack = ["Flutter", "React & Next.js", "Node.js", "Python", "AI Integrations", "Firebase", "AWS", "MongoDB", ".NET", "Scalable Cloud Infrastructure"];
  return (
    <section className="py-28 bg-background border-y border-border relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-4 block">Tech Ecosystem</span>
            <h2 className="text-3xl font-bold text-foreground leading-tight">Engineering Excellence Powered By Industry Standards</h2>
          </div>
          <div className="h-px flex-grow bg-border mb-3 hidden md:block" />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-16">
          {stack.map((t) => (
            <div 
              key={t} 
              className="group relative flex flex-col items-center transition-all duration-500"
            >
              <div className="relative">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-foreground/20 group-hover:text-foreground transition-all duration-500 uppercase cursor-default select-none">
                  {t}
                </span>
                {/* Accent Underline */}
                <div className="absolute -bottom-3 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </div>
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
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">The FluxtonX Advantage</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">Why Global Leaders Partner With Us</h2>
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
            <div className="text-3xl font-bold">5+</div>
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
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Latest Insights</h2>
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
