import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lightbulb, Compass, Award, Users, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import aboutImg from "@/assets/about-hero.jpg";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";
import ubaid from "@/assets/team-ubaid.jpg";
import nasir from "@/assets/team-nasir.png";
import rahmat from "@/assets/team-rahmat.png";
import mudassir from "@/assets/team-mudassir.png";

const timeline = [
  { year: "2021", title: "FluxtonX Founding", desc: "Founded in 2021 by Muhammad Nasir, FluxtonX was built with a mission to turn ambitious ideas into real-world technology solutions that create measurable business impact." },
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
  { name: "Muhammad Nasir", role: "CEO & Business Developer", img: nasir, linkedin: "https://www.linkedin.com/in/muhammadnasirpk44" },
  { name: "Obaid Ullah", role: "Full Stack Web Developer", img: ubaid, linkedin: "https://www.linkedin.com/in/obaid-ullah-b01835266/" },
  { name: "Rahmat U", role: "UI/UX Product Designer", img: rahmat, linkedin: "https://www.linkedin.com/in/rahmat-u-9a63b1243/" },
  { name: "Muhammad Mudassir", role: "Full Stack Developer", img: mudassir, linkedin: "https://www.linkedin.com/in/muhammad-mudassir5/" },
];

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Islamabad", coordinates: [73.0479, 33.6844] as [number, number] },
  { name: "Dubai", coordinates: [55.2708, 25.2048] as [number, number] },
  { name: "London", coordinates: [-0.1276, 51.5074] as [number, number] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] as [number, number] },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Company — FluxtonX" },
      { name: "description", content: "FluxtonX is a product engineering and AI solutions company helping startups, enterprises, and fast-growing businesses build scalable digital products with speed, precision, and long-term vision." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">About FluxtonX</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
                FluxtonX: Product Engineering & AI Solutions
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
                FluxtonX is a product engineering and AI solutions company helping startups, enterprises, and fast-growing businesses build scalable digital products with speed, precision, and long-term vision.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Our team combines deep technical expertise with strong business understanding, allowing us to move beyond traditional development and become long-term technology partners for our clients. Over the years, we have contributed to products serving thousands of users globally.
              </p>
            </div>
            <div className="relative">
              <img src={aboutImg} alt="FluxtonX office" width={900} height={700} className="w-full rounded-xl object-cover" loading="lazy" />
              <div className="absolute -bottom-6 left-6 bg-accent text-accent-foreground rounded-md px-6 py-4 shadow-card">
                <div className="text-2xl font-bold">Since 2021</div>
                <div className="text-[10px] uppercase tracking-wider mt-0.5">Engineering The Future</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="border-t border-accent/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
              {[
                { t: "Our Mission", d: "We do not simply build applications — we help businesses solve operational challenges, automate workflows, improve customer experiences, and launch products capable of long-term growth." },
                { t: "Our Vision", d: "What makes FluxtonX different is our operator mindset. As technology continues evolving through AI and automation, FluxtonX is positioning itself at the intersection of product engineering, intelligent systems, and scalable digital infrastructure." },
              ].map((b) => (
              <div key={b.t}>
                <h2 className="text-2xl font-bold text-foreground">{b.t}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Evolution</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">The Timeline of Impact</h2>
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
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Foundations</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Our Core Values</h2>
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

        {/* Leadership Carousel */}
        <section className="bg-surface py-20 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Executive Team</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Strategic Leadership</h2>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={scrollPrev}
                  className="p-3 rounded-full border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={scrollNext}
                  className="p-3 rounded-full border border-border bg-card hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex gap-6">
                {team.map((m) => (
                  <figure 
                    key={m.name} 
                    className="embla__slide flex-[0_0_280px] min-w-0 relative rounded-xl overflow-hidden bg-card border border-border shadow-card group"
                  >
                    <img src={m.img} alt={m.name} loading="lazy" className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105" />
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm shadow-md p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <figcaption className="p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent absolute bottom-0 inset-x-0">
                      <div className="font-semibold text-white">{m.name}</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/70 mt-0.5">{m.role}</div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Footprint + Recognition */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Presence</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground">Global Footprint</h2>
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
            <div className="rounded-xl bg-surface-2 p-6 flex flex-col items-center justify-between min-h-[320px]">
              <div className="w-full h-full max-h-[240px]">
                <ComposableMap projectionConfig={{ scale: 145 }}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#DBEAFE"
                          stroke="#FFFFFF"
                          strokeWidth={0.5}
                          style={{
                            default: { outline: "none" },
                            hover: { fill: "#93C5FD", outline: "none" },
                            pressed: { outline: "none" },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                  {markers.map(({ name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates}>
                      <circle r={8} fill="#1A3DBF" opacity={0.3} className="animate-ping" />
                      <circle r={4} fill="#1A3DBF" />
                      <text
                        textAnchor="middle"
                        dy={-12}
                        style={{ fontFamily: "inherit", fill: "#1A3DBF", fontSize: 8, fontWeight: 600 }}
                      >
                        {name}
                      </text>
                    </Marker>
                  ))}
                </ComposableMap>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-bold text-primary">4 Global Hubs</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Serving 50+ countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="bg-surface py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Recognition</h2>
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
                <p className="mt-3 text-sm text-white/80 leading-relaxed">Today, we continue partnering with founders, agencies, and enterprises worldwide to build impactful technology products that drive innovation and growth.</p>
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
