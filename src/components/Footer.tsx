import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Youtube } from "lucide-react";
import logo from "@/assets/fluxtonx-logo.png";

const cols = [
  { title: "Solutions", links: ["Cloud Native", "Data Mastery", "Cyber Resilience", "AI Engineering", "Digital Strategy"] },
  { title: "Industries", links: ["Finance", "Healthcare", "Retail", "Government", "Logistics"] },
  { title: "Company", links: ["About Us", "Leadership", "Careers", "Newsroom", "Partners"] },
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
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} FluxtonX. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
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
