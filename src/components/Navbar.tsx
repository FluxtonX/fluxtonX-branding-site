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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white dark:bg-gray-900 transition-shadow ${scrolled ? "shadow-lg" : "border-b border-gray-200 dark:border-gray-700"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="FluxtonX" className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <div key={l.to} className="relative group">
              <Link
                to={l.to as any}
                className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
                {l.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-hover:opacity-100" />
                )}
              </Link>
              
              {l.hasDropdown && (
                <div className="absolute top-full left-0 pt-1 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-white shadow-lg rounded-xl border border-gray-100 py-2 min-w-48 overflow-hidden">
                    {services.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to as any}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
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
    </header>
  );
}

