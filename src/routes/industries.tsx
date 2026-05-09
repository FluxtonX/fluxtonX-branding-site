import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { industries } from "@/data/home";
import industryHero from "@/assets/industry-finance.jpg";

const sectors = [
  { slug: "finance", name: "Finance", desc: "Revolutionizing core banking systems with decentralized security and predictive analytics. We enable institutions to navigate complex regulatory landscapes while maximizing transactional efficiency." },
  { slug: "healthcare", name: "Healthcare", desc: "Enhancing patient outcomes through interoperable data platforms and AI-driven diagnostics. Our solutions prioritize privacy and speed to transform medical delivery systems globally." },
  { slug: "retail", name: "Retail", desc: "Unifying omnichannel experiences with real-time inventory precision and customer behavioral mapping. We build the digital infrastructure for modern, high-velocity commerce environments." },
  { slug: "education", name: "Education", desc: "Scaling academic excellence through immersive learning management systems and institutional automation. Empowering educators with data-backed insights for personalized student growth." },
  { slug: "government", name: "Government", desc: "Driving civic efficiency with secure citizen-portal architectures and transparent ledger technologies. Modernizing public infrastructure for the digital-first era of governance." },
  { slug: "logistics", name: "Logistics", desc: "Optimizing global supply chains through IoT integration and autonomous flow management. We provide the structural precision required for end-to-end visibility and resilience." },
];

const iconByLabel = Object.fromEntries(industries.map((i) => [i.label, i.icon]));

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | FluxtonX" },
      { name: "description", content: "FluxtonX serves healthcare, fitness, logistics, e-commerce, enterprise and AI industries worldwide." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-t border-accent/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Global Expertise</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-primary">
                Specialized Expertise Across Global Sectors
              </h1>
              <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
                At FluxtonX, we bridge the gap between complex industrial challenges and cutting-edge digital solutions. Our teams deliver architectural precision and strategic agility to the world's most vital economic engines.
              </p>
              <Link to="/case-studies" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">
                View Case Studies
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <img src={industryHero} alt="Skyscraper" width={800} height={600} className="w-full h-72 lg:h-[420px] object-cover" />
            </div>
          </div>
        </section>

        {/* Markets */}
        <section className="bg-surface border-t border-accent/40 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Key Markets</h2>
            <p className="mt-2 text-sm text-muted-foreground">Strategic digital frameworks tailored for institutional excellence.</p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sectors.map((s) => {
                const Icon = iconByLabel[s.name];
                return (
                  <Link 
                    key={s.slug} 
                    to="/industries/$slug" 
                    params={{ slug: s.slug }}
                    className="group rounded-xl bg-card border border-border p-7 hover:border-primary/40 hover:-translate-y-0.5 transition-all shadow-card flex flex-col"
                  >
                    {Icon && (
                      <div className="h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                    <h3 className="mt-5 text-xl font-bold text-foreground">{s.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0b1020] text-white border-b-4 border-accent">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Industry?</h2>
            <p className="mt-4 text-white/70">
              Join the global leaders partnering with FluxtonX to build the next generation of digital infrastructure.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent-light transition">
              Initiate Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
