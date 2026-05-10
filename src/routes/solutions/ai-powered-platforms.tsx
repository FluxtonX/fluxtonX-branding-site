import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrainCircuit, Cpu, LineChart, Zap, Search, Target, Code, ShieldCheck, Rocket, BarChart, Settings, Users } from "lucide-react";

export const Route = createFileRoute("/solutions/ai-powered-platforms")({
  head: () => ({
    meta: [
      { title: "AI-Powered Platforms | FluxtonX" },
      { name: "description", content: "We build intelligent AI systems that automate decisions, predict outcomes, and transform how your business operates" },
    ],
  }),
  component: AIPoweredPlatforms,
});

function AIPoweredPlatforms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=80" 
            alt="AI Neural Network" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Overlay */}
          <div 
            className="absolute inset-0 z-1" 
            style={{ background: "linear-gradient(135deg, rgba(10,15,60,0.85) 0%, rgba(30,58,138,0.75) 50%, rgba(10,15,60,0.90) 100%)" }}
          />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-24 h-1 bg-[#F5A800] rounded-full mx-auto mb-6" />
            <p className="text-yellow-400 text-sm font-semibold tracking-widest mb-4 uppercase">Our Services</p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
              AI-Powered Platforms
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              We build intelligent AI systems that automate decisions, predict outcomes, and transform how your business operates
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-full text-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
                Get Started
              </Link>
              <Link to="/case-studies" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg transition-all duration-300">
                View Our Work
              </Link>
            </div>

            {/* Stats Pills */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-12">
              {[
                "50+ AI Projects",
                "98% Accuracy Rate",
                "10x Faster Processing"
              ].map((stat) => (
                <div key={stat} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-white text-sm font-medium">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">What We Offer</h2>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: BrainCircuit, title: "Machine Learning Models", desc: "Custom ML models tailored to your specific business data and objectives." },
                { icon: Cpu, title: "Generative AI Integration", desc: "Leveraging LLMs and generative models to enhance creativity and productivity." },
                { icon: LineChart, title: "Predictive Analytics", desc: "Turn historical data into future insights with advanced forecasting algorithms." },
                { icon: Zap, title: "Automated Decisioning", desc: "Real-time AI systems that handle complex decision logic without manual intervention." },
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
                { icon: BarChart, title: "Data-Driven Approach", desc: "Our AI solutions are grounded in rigorous data analysis and validation." },
                { icon: Settings, title: "Custom Integration", desc: "We ensure AI fits seamlessly into your existing workflows and tech stack." },
                { icon: Users, title: "Expert Architects", desc: "Work with senior AI engineers who understand both tech and business." },
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
            <p className="mt-4 text-blue-100">Let's discuss how AI can transform your business operations.</p>
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
