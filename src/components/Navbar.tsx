import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/fluxtonx-logo.png";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { to: "/solutions", label: "Services", hasDropdown: true },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "Company" },
  { to: "/blog", label: "Resources" },
];

const services = [
  { label: "AI-Powered Platforms", to: "/solutions/ai-powered-platforms" },
  { label: "Mobile App Development", to: "/solutions/mobile-app-development" },
  { label: "SaaS Product Engineering", to: "/solutions/saas-product-engineering" },
  { label: "Fintech & Payment Systems", to: "/solutions/fintech-payment-systems" },
  { label: "Enterprise Workflow Automation", to: "/solutions/enterprise-workflow-automation" },
  { label: "Web Platforms & Dashboards", to: "/solutions/web-platforms-dashboards" },
  { label: "UI/UX Design", to: "/solutions/ui-ux-design" },
];

const megaMenuData = {
  design: {
    title: "Design & UI",
    links: [
      { label: "UI/UX Design", to: "/solutions/ui-ux-design" },
      { label: "Brand Identity", to: "/solutions/brand-identity" },
      { label: "Design Systems", to: "/solutions/design-systems" },
    ],
  },
  engineering: {
    title: "Engineering",
    links: [
      { label: "Mobile App Development", to: "/solutions/mobile-app-development" },
      { label: "Web Platforms & Dashboards", to: "/solutions/web-platforms-dashboards" },
      { label: "SaaS Product Engineering", to: "/solutions/saas-product-engineering" },
      { label: "Enterprise Workflow Automation", to: "/solutions/enterprise-workflow-automation" },
    ],
  },
  intelligence: {
    title: "Intelligence & Fintech",
    links: [
      { label: "AI-Powered Platforms", to: "/solutions/ai-powered-platforms" },
      { label: "Fintech & Payment Systems", to: "/solutions/fintech-payment-systems" },
      { label: "Cloud Infrastructure", to: "/solutions/cloud-infrastructure" },
      { label: "API Integrations", to: "/solutions/api-integrations" },
    ],
  },
};


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white dark:bg-gray-900 transition-all ${scrolled ? "shadow-lg" : "border-b border-gray-200 dark:border-gray-700"
        }`}
    >

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="FluxtonX" className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <div key={l.to} className="relative group">
              {l.hasDropdown ? (
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${servicesOpen ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  {l.label}
                  <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${servicesOpen ? "rotate-180 opacity-100" : ""}`} />
                </button>
              ) : (
                <Link
                  to={l.to as any}
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              )}
            </div>
          ))}
        </nav>


        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Contact Sales
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors"
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((l) => (
              <div key={l.to}>
                {l.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex w-full items-center justify-between px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-muted rounded-md"
                    >
                      {l.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 flex flex-col gap-1 mt-1">
                        {services.map((s) => (
                          <Link
                            key={s.to}
                            to={s.to as any}
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={l.to as any}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-muted rounded-md"
                  >
                    {l.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 text-center rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Mega Menu */}
      <div className="hidden md:block">
        {servicesOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
              onClick={() => setServicesOpen(false)}
            />
            <div
              className={`fixed left-0 right-0 top-16 bg-white shadow-2xl border-t border-gray-100 z-50 transition-all duration-300 ${servicesOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
            >
              <div className="max-w-7xl mx-auto px-8 py-10">
                <div className="flex justify-end mb-6">
                  <Link
                    to="/contact"
                    onClick={() => setServicesOpen(false)}
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    Looking to start a project? Get in touch →
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-12">
                  {Object.entries(megaMenuData).map(([key, section]) => (
                    <div key={key}>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                        {section.title}
                      </h3>
                      <div className="space-y-1">
                        {section.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to as any}
                            onClick={() => setServicesOpen(false)}
                            className="block py-2 text-gray-600 hover:text-blue-600 text-sm transition-colors duration-150"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Strip */}
              <div className="bg-gray-50 border-t border-gray-100 px-8 py-4">
                <div className="max-w-7xl mx-auto px-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=120&q=80"
                        alt="Ready to build"
                        className="w-16 h-16 rounded-xl object-cover shadow-sm"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800">Ready to Build?</h4>
                        <p className="text-xs text-gray-500">Let's turn your idea into reality</p>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      onClick={() => setServicesOpen(false)}
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Talk to us →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>

  );
}

