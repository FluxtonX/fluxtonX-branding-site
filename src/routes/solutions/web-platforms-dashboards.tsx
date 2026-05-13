import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import heroImg from "@/assets/service-web-platforms.png";
import { Globe, Layout, LineChart, Zap, Search, Target, Code, ShieldCheck, Rocket, BarChart, Settings, Users } from "lucide-react";

export const Route = createFileRoute("/solutions/web-platforms-dashboards")({
  head: () => ({
    meta: [
      { title: "Web Platforms & Dashboards | FluxtonX" },
      { name: "description", content: "Scalable web applications and data-rich dashboards built with React and Next.js for maximum performance" },
    ],
  }),
  component: WebPlatformsDashboards,
});

function WebPlatformsDashboards() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <ServiceHero
          title="Web Platforms & Dashboards"
          description="Scalable web applications and data-rich dashboards built with React and Next.js for maximum performance"
          image={heroImg}
          stats={["200+ Dashboards","Real-time Data","Lightning Fast"]}
        />

        {/* What We Offer */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">What We Offer</h2>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Globe, title: "Modern Web Apps", desc: "Building fast, responsive, and SEO-friendly applications using React and Next.js." },
                { icon: Layout, title: "Custom Dashboards", desc: "Visualizing complex data through intuitive and interactive administrative interfaces." },
                { icon: LineChart, title: "Data Visualization", desc: "Integrating powerful charting and reporting tools to turn data into clear insights." },
                { icon: Zap, title: "Performance Optimization", desc: "Ensuring lightning-fast load times and smooth user interactions across all devices." },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800 hover:shadow-lg transition">
                  <item.icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Our Process</h2>
            <div className="mt-16 relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 dark:bg-gray-700 -translate-y-1/2" />
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                {[
                  { label: "Discovery", icon: Search },
                  { label: "Planning", icon: Target },
                  { label: "Development", icon: Code },
                  { label: "Testing", icon: ShieldCheck },
                  { label: "Deployment", icon: Rocket },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white dark:bg-blue-900/50 border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl shadow-sm z-10">
                      {i + 1}
                    </div>
                    <p className="mt-4 font-semibold text-gray-900 dark:text-white">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FluxtonX */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Why Choose FluxtonX</h2>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: BarChart, title: "Modern Frameworks", desc: "We use cutting-edge tech like React and Next.js for superior speed and DX." },
                { icon: Settings, title: "Highly Customizable", desc: "Platforms built from the ground up to match your specific branding and needs." },
                { icon: Users, title: "Collaborative Design", desc: "Close partnership between our engineers and your stakeholders throughout." },
              ].map((item, i) => (
                <div key={i} className="text-center p-8">
                  <item.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto" />
                  <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-blue-600 py-20 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white">Ready to Build Something Amazing?</h2>
            <p className="mt-4 text-blue-100">Let's discuss how we can build your next high-performance web platform.</p>
            <Link to="/contact" className="mt-10 inline-flex items-center rounded-md bg-white px-8 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
