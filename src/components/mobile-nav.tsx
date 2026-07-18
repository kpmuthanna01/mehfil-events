"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calculator,
  Home,
  Star,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  match: (path: string) => boolean;
  primary?: boolean;
}

const ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: Home, match: (p) => p === "/" },
  { href: "/menu", label: "Menu", icon: UtensilsCrossed, match: (p) => p.startsWith("/menu") },
  { href: "/#estimator", label: "Estimate", icon: Calculator, match: () => false, primary: true },
  { href: "/#testimonials", label: "Reviews", icon: Star, match: () => false },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur sm:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4 items-center px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1.5">
        {ITEMS.map((item) => {
          const active = item.match(pathname);
          const Icon = item.icon;

          return (
            <li key={item.href} className="flex justify-center">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                aria-label={item.label}
                className={cn(
                  "group flex flex-col items-center gap-1 rounded-lg px-3 py-1.5 transition-colors",
                  item.primary
                    ? "text-brand-gold-deep"
                    : active
                      ? "text-brand-emerald"
                      : "text-muted-foreground",
                )}
              >
                <span
                  className={cn(
                    "grid place-items-center transition-transform duration-200 group-active:scale-90",
                    item.primary
                      ? "size-9 rounded-full bg-brand-gold text-primary shadow-md shadow-brand-gold/30"
                      : cn("size-6", active && "scale-110"),
                  )}
                >
                  <Icon className={item.primary ? "size-5" : "size-5"} />
                </span>
                <span className="text-[10px] font-medium">{item.label}</span>
                {/* Animated active underline (regular items only) */}
                {!item.primary && (
                  <span
                    className={cn(
                      "h-0.5 w-5 rounded-full bg-brand-emerald transition-transform duration-300 ease-out",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
