import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — FluxtonX" },
      { name: "description", content: "How FluxtonX uses cookies and similar tracking technologies." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <main className="pt-28 pb-20 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Legal</p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Cookie Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary">What Are Cookies?</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Cookies are small text files placed on your device to help websites remember preferences, measure performance, and improve user experience.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">Types of Cookies We Use</h2>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground list-disc pl-5">
              <li><strong className="text-foreground">Essential</strong> — required for navigation and core functionality such as theme selection.</li>
              <li><strong className="text-foreground">Analytics</strong> — anonymized usage data to help us improve content and performance.</li>
              <li><strong className="text-foreground">Preference</strong> — remember your language and regional settings.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">Managing Cookies</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Most browsers allow you to refuse or delete cookies through their settings. Disabling some cookies may impact site functionality.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-primary">Contact</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              For questions about our use of cookies, email privacy@fluxtonx.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
