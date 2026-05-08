import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/70">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          {it.to ? (
            <Link to={it.to as any} className="hover:text-white">{it.label}</Link>
          ) : (
            <span className="text-white">{it.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="h-3 w-3 opacity-60" />}
        </span>
      ))}
    </nav>
  );
}
