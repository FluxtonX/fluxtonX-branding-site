import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Youtube } from "lucide-react";
import logo from "@/assets/fluxtonx-logo.webp";
import { GOOGLE_BUSINESS_CONFIG } from "@/data/reviews";

const cols = [
  { title: "Services", links: ["Cloud Native", "Data Mastery", "Cyber Resilience", "AI Engineering", "Digital Strategy"] },
  { title: "Industries", links: ["Finance", "Healthcare", "Retail", "Government", "Logistics"] },
  { title: "Company", links: ["About Us", "Engineering Team", "Careers", "Partners", "Contact Us"] },
  { title: "Resources", links: ["Blog & Insights", "Case Studies", "Whitepapers", "Events", "Support"] },
];

export function Footer() {
  return (
    <footer className="bg-[#0b1020] text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="FluxtonX" className="h-9 w-auto" />

            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Global digital transformation through architectural precision. We empower enterprises to lead the next era of intelligent technology.
            </p>

            {/* Google Reviews Badge in Footer */}
            <a
              href={GOOGLE_BUSINESS_CONFIG.getWriteReviewUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 hover:bg-white/10 hover:border-white/20 transition group"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white shadow-xs">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
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
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-white">4.9</span>
                  <div className="flex text-[#FBBC05] text-[10px]">★★★★★</div>
                </div>
                <p className="text-[10px] text-white/60 group-hover:text-white/80 transition">
                  Google Verified • 48+ Reviews
                </p>
              </div>
            </a>

            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}
              className="mt-6 flex max-w-sm rounded-md overflow-hidden border border-white/15"
            >
              <input
                type="email"
                required
                placeholder="Your work email"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none"
              />
              <button className="bg-accent px-4 text-sm font-semibold text-accent-foreground hover:bg-accent-light transition">
                Subscribe
              </button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => {
                  let to = "/";
                  if (l === "About Us") to = "/about";
                  else if (l === "Engineering Team") to = "/team";
                  else if (l === "Careers") to = "/careers";
                  else if (l === "Partners") to = "/partners";
                  else if (l === "Contact Us" || l === "Support") to = "/contact";
                  else if (l === "Blog & Insights") to = "/blog";
                  else if (l === "Case Studies") to = "/case-studies";
                  else if (c.title === "Services") to = "/solutions";
                  else if (c.title === "Industries") to = "/industries";

                  return (
                    <li key={l}>
                      <Link to={to} className="text-sm hover:text-white transition-colors">{l}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} FluxtonX. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-white/60">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
          <div className="flex items-center gap-3">
            {[Linkedin, Twitter, Github, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-8 w-8 grid place-items-center rounded-full border border-white/15 hover:border-accent hover:text-accent transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
