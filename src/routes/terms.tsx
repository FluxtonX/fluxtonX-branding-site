import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — FluxtonX" },
      { name: "description", content: "The terms governing your use of FluxtonX websites and services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="pt-28 pb-20 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Legal</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary">1. Acceptance of Terms</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              By accessing fluxtonx.com or engaging FluxtonX for services, you agree to these Terms of Service and our Privacy Policy.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">2. Use of the Website</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              The site is provided for informational purposes. You may not use it to transmit malicious code, infringe intellectual property, or attempt unauthorized access.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">3. Intellectual Property</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              All content, branding, and source code on this site are the property of FluxtonX or its licensors and are protected by international copyright and trademark laws.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">4. Engagements & SOWs</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Specific service engagements are governed by a separate Statement of Work or Master Services Agreement signed by both parties.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">5. Limitation of Liability</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              To the fullest extent permitted by law, FluxtonX is not liable for indirect, incidental, or consequential damages arising from use of this website.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">6. Governing Law</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              These terms are governed by the laws of the Islamic Republic of Pakistan, without regard to conflict-of-laws principles.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
