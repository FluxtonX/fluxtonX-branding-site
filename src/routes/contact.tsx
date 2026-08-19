import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, ArrowRight, HelpCircle, Headphones, Handshake, Star, ShieldCheck, ExternalLink } from "lucide-react";
import mapImg from "@/assets/contact-map.webp";
import { WriteGoogleReviewModal } from "@/components/WriteGoogleReviewModal";
import { GOOGLE_BUSINESS_CONFIG } from "@/data/reviews";

import { getSeoMeta, createBreadcrumbSchema, createLocalBusinessSchema } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    getSeoMeta({
      title: "Contact FluxtonX | Start Your Software & AI Project",
      description:
        "Get in touch with the FluxtonX engineering team. Schedule a consultation for custom software development, SaaS product engineering, or AI platforms.",
      keywords: [
        "Contact FluxtonX",
        "Hire Software Engineers Islamabad",
        "Custom Software Consultation",
        "AI Development Inquiry",
      ],
      canonicalPath: "/contact",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact FluxtonX",
          description:
            "Get in touch with FluxtonX for enterprise software engineering and AI solutions.",
          url: "https://fluxtonx.com/contact",
        },
        createLocalBusinessSchema(),
        createBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" },
        ]),
      ],
    }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="border-t border-accent/40 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Connect With Us</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
              Architecting Your Digital<br />Future.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
              Connect with our global consultants to explore how architectural precision can redefine your enterprise performance.
            </p>

            <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-10">
              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Global Headquarters</h2>
                <div className="mt-6 space-y-6">
                  <Info icon={MapPin} title="Islamabad Office" lines={["Aspire Building, Business Square", "Block C, Gulberg Greens", "Islamabad, Pakistan"]} />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Info icon={Phone} title="Phone" lines={["+92 51 234 5678", "+92 51 876 5432"]} />
                    <Info icon={Mail} title="Email" lines={["contact@fluxtonx.com", "press@fluxtonx.com"]} />
                  </div>
                  <Info icon={Clock} title="Working Hours" lines={["Monday — Friday: 09:00 – 18:00 (PKT)", "Weekend: Closed for strategic planning"]} />
                </div>
                <img src={mapImg} alt="Map" loading="lazy" className="mt-8 w-full rounded-xl object-cover aspect-[16/10]" />
              </div>

              {/* Form */}
              <div className="rounded-2xl bg-card border border-border p-7 sm:p-10 shadow-card">
                <h2 className="text-2xl font-bold text-foreground">Detailed Inquiry</h2>
                {submitted ? (
                  <div className="mt-8 rounded-lg bg-surface border border-accent p-6 text-center">
                    <h3 className="text-lg font-bold text-primary">Thank you</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Your inquiry has been routed to our consultancy team. Expect a response within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-8 space-y-5">
                    <Row>
                      <Field label="Full Name" placeholder="John Doe" required />
                      <Field label="Company Name" placeholder="Enterprise Corp" required />
                    </Row>
                    <Row>
                      <Field label="Business Email" type="email" placeholder="john@enterprise.com" required />
                      <Field label="Phone Number" type="tel" placeholder="+92 000 0000000" />
                    </Row>
                    <Row>
                      <Sel label="Country" options={["Pakistan", "United Kingdom", "United States", "UAE", "Saudi Arabia"]} />
                      <Sel label="Service Interest" options={["Cloud Transformation", "Applied Intelligence", "Cybersecurity", "Data Mastery"]} />
                    </Row>
                    <Sel label="Budget Range (USD)" options={["$50,000 - $100,000", "$100,000 - $250,000", "$250,000 - $500,000", "$500,000+"]} />
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Your Message</label>
                      <textarea rows={4} placeholder="How can our architects assist you?" className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition">
                      Submit Inquiry <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Support channels & Google Reviews */}
        <section className="bg-surface border-t border-accent/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Support & Client Trust</p>
                <h2 className="mt-1 text-2xl font-bold text-foreground">Dedicated Channels & Verified Credentials</h2>
              </div>
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-sm hover:bg-primary-dark transition"
              >
                <Star className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]" /> Review Us on Google
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Google Verified Review Card */}
              <div className="rounded-xl bg-card border-2 border-primary/20 p-7 shadow-card flex flex-col justify-between group hover:border-primary transition">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded-md bg-white shadow-sm border border-gray-100 grid place-items-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-accent">Google Verified</p>
                  <p className="mt-1 text-sm font-bold text-foreground">4.9 / 5.0 Star Rating</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Based on {GOOGLE_BUSINESS_CONFIG.totalReviews}+ enterprise reviews across UK, US, UAE & Pakistan.
                  </p>
                </div>
                <button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark uppercase tracking-wider"
                >
                  Leave Feedback →
                </button>
              </div>

              {[
                { icon: HelpCircle, t: "General Support", d: "Access our comprehensive knowledge hub or connect with our general concierge for basic inquiries.", a: "Help Center" },
                { icon: Headphones, t: "Technical Support", d: "Priority access for existing clients. Our technical architects are available 24/7 for critical system resolution.", a: "Submit Ticket" },
                { icon: Handshake, t: "Partnerships", d: "Explore collaborative opportunities within our global alliance ecosystem to drive mutual digital value.", a: "Partner Portal" },
              ].map((c) => (
                <div key={c.t} className="rounded-xl bg-card border border-border p-7 shadow-card flex flex-col justify-between">
                  <div>
                    <div className="h-9 w-9 rounded-md bg-primary/10 text-primary grid place-items-center"><c.icon className="h-5 w-5" /></div>
                    <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-accent">{c.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                  </div>
                  <a href="#" className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-accent uppercase tracking-wider">{c.a} →</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WriteGoogleReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />
    </div>
  );
}

function Info({ icon: Icon, title, lines }: any) {
  return (
    <div className="flex gap-4">
      <Icon className="h-5 w-5 text-primary flex-none mt-0.5" />
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {lines.map((l: string) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
      </div>
    </div>
  );
}
function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-5">{children}</div>;
}
function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</label>
      <input {...props} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary" />
    </div>
  );
}
function Sel({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</label>
      <select className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-primary">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
