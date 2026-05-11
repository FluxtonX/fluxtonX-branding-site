import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FluxtonX" },
      { name: "description", content: "How FluxtonX collects, uses, and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="pt-28 pb-20 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Legal</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary">1. Information We Collect</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We collect information you provide directly — such as your name, work email, and project details when you contact us — along with usage data like pages visited, device type, and approximate location.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">2. How We Use Your Information</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Information is used to respond to inquiries, deliver contracted services, improve our website, and send relevant updates. We never sell personal data to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">3. Data Security</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              FluxtonX maintains technical and organizational safeguards including encryption in transit, role-based access controls, and regular security audits aligned with ISO 27001 and SOC 2 principles.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">4. Your Rights</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              You may request access to, correction of, or deletion of your personal data at any time by contacting privacy@fluxtonx.com.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">5. Contact</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              FluxtonX, Aspire Building, Business Square, Block C, Gulberg Greens, Islamabad, Pakistan — privacy@fluxtonx.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
