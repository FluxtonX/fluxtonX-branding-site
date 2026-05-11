import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "@/assets/fluxtonx-logo.png";
import { ThemeToggle } from "./ThemeToggle";

const menuSections = {
  design: {
    title: "Design & Branding",
    links: [
      { label: "Market Research", to: "/solutions/ui-ux-design" },
      { label: "Product Branding", to: "/solutions/ui-ux-design" },
      { label: "UI/UX Design", to: "/solutions/ui-ux-design" },
    ],
  },
  engineering: {
    title: "Engineering",
    links: [
      { label: "Mobile Application Development", to: "/solutions/mobile-app-development" },
      { label: "Web Application Development", to: "/solutions/web-platforms-dashboards" },
      { label: "Custom Software Development", to: "/solutions/saas-product-engineering" },
      { label: "Application Re-engineering", to: "/solutions/enterprise-workflow-automation" },
    ],
  },
  operations: {
    title: "Operations & Security",
    links: [
      { label: "Cloud Engineering & DevOps", to: "/solutions/ai-powered-platforms" },
      { label: "Application Security Audit", to: "/solutions/fintech-payment-systems" },
      { label: "Dedicated SOC Team", to: "/solutions/fintech-payment-systems" },
      { label: "Dedicated SOC", to: "/solutions/fintech-payment-systems" },
      { label: "Dedicated SIEM Team", to: "/solutions/fintech-payment-systems" },
      { label: "Application Security Team", to: "/solutions/fintech-payment-systems" },
    ],
  },
};

const otherSections = [
  {
    key: "about",
    title: "About Us",
    description: "Discover who we are, our mission and what drives FluxtonX forward.",
    cta: { label: "Learn more about us", to: "/about" },
  },
  {
    key: "careers",
    title: "Careers",
    description: "Join a team that's building the future. Explore open positions across engineering, design and security.",
    cta: { label: "View open positions", to: "/careers" },
  },
  {
    key: "blogs",
    title: "Blogs",
    description: "Insights, stories and engineering deep-dives from the FluxtonX team.",
    cta: { label: "Read our blog", to: "/blog" },
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 bg-white dark:bg-surface transition-all ${
          scrolled ? "shadow-sm" : "border-b border-gray-100 dark:border-border"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={close}>
            <img src={logo} alt="FluxtonX" className="h-9 w-auto" />
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 sm:px-7 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center h-11 w-11 rounded-md border border-gray-200 dark:border-border bg-white dark:bg-surface-2 hover:bg-gray-50 dark:hover:bg-surface-2 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-50 bg-white dark:bg-surface transition-all duration-300 overflow-y-auto ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="min-h-full flex flex-col">
          {/* Top bar inside overlay */}
          <div className="sticky top-0 z-10 bg-white/95 dark:bg-surface/95 backdrop-blur border-b border-gray-100 dark:border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2" onClick={close}>
                <img src={logo} alt="FluxtonX" className="h-9 w-auto" />
              </Link>
              <button
                onClick={close}
                className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-gray-200 dark:border-border bg-white dark:bg-surface-2 hover:bg-gray-50 dark:hover:bg-surface-2 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1">
            {/* Services accordion */}
            <div className="border-b border-gray-200 dark:border-border pb-8">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="text-2xl sm:text-3xl font-medium text-foreground">Services</span>
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-gray-50 dark:bg-surface-2 border border-gray-200 dark:border-border">
                  {servicesOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  servicesOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                    {Object.entries(menuSections).map(([key, section]) => (
                      <div key={key}>
                        <h3 className="text-base font-semibold text-foreground mb-5">
                          {section.title}
                        </h3>
                        <ul className="space-y-4">
                          {section.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                to={link.to as any}
                                onClick={close}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Careers CTA strip */}
                  <div className="mt-10 flex items-center justify-end gap-2 text-sm">
                    <span className="font-semibold text-foreground">Looking to join our Team?</span>
                    <Link
                      to="/careers"
                      onClick={close}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Look into Open Positions
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other sections */}
            {otherSections.map((sec) => {
              const isOpen = expanded === sec.key;
              return (
                <div key={sec.key} className="border-b border-gray-200 dark:border-border">
                  <button
                    onClick={() => setExpanded(isOpen ? null : sec.key)}
                    className="w-full flex items-center justify-between py-6 text-left"
                  >
                    <span className="text-2xl sm:text-3xl font-medium text-foreground">
                      {sec.title}
                    </span>
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-gray-50 dark:bg-surface-2 border border-gray-200 dark:border-border">
                      {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base text-muted-foreground max-w-2xl mb-4">
                        {sec.description}
                      </p>
                      <Link
                        to={sec.cta.to as any}
                        onClick={close}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        {sec.cta.label} →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
