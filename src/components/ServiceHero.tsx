import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

interface ServiceHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  stats: string[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

export function ServiceHero({
  eyebrow = "Our Services",
  title,
  description,
  image,
  stats,
  primaryCta = { label: "Get Started", to: "/contact" },
  secondaryCta = { label: "View Our Work", to: "/case-studies" },
}: ServiceHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1020] text-white">
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 85% -10%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(800px 500px at 0% 100%, rgba(245,168,0,0.18), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1.5 text-xs font-medium tracking-wider uppercase text-white/80">
              <Sparkles className="h-3.5 w-3.5 text-[#F5A800]" />
              {eyebrow}
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight leading-[1.05]">
              {title}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to={primaryCta.to as any}
                className="group inline-flex items-center gap-2 rounded-full bg-white text-[#0b1020] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to={secondaryCta.to as any}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                {secondaryCta.label}
              </Link>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 max-w-xl">
              {stats.map((stat) => {
                const m = stat.match(/^([^\s]+)\s+(.+)$/);
                const value = m ? m[1] : stat;
                const label = m ? m[2] : "";
                return (
                  <div key={stat} className="bg-[#0b1020] p-4 sm:p-5">
                    <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                      {label || "Highlight"}
                    </dt>
                    <dd className="mt-1 text-lg sm:text-xl font-semibold text-white">
                      {value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Right: visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-purple-500/10 to-amber-400/20 blur-3xl" />
              <div className="relative aspect-square flex items-center justify-center">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -left-2 sm:-left-6 hidden sm:block">
                <div className="rounded-xl bg-white text-[#0b1020] shadow-xl px-4 py-3 border border-black/5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F5A800]">
                    Trusted Partner
                  </p>
                  <p className="text-sm font-semibold mt-0.5">
                    Enterprise-grade delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 sm:-left-8 hidden sm:block">
                <div className="rounded-xl bg-white text-[#0b1020] shadow-xl px-4 py-3 border border-black/5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F5A800]">
                    Trusted Partner
                  </p>
                  <p className="text-sm font-semibold mt-0.5">
                    Enterprise-grade delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
