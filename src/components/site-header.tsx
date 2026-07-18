"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
  active?: (path: string) => boolean;
}

const LINKS: NavLink[] = [
  { href: "/", label: "Home", active: (p) => p === "/" },
  { href: "/menu", label: "Menu", active: (p) => p.startsWith("/menu") },
  { href: "/coorg", label: "Coorg Guide", active: (p) => p.startsWith("/coorg") },
  { href: "/gifts", label: "Gifts", active: (p) => p.startsWith("/gifts") },
  { href: "/#estimator", label: "Estimator" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 transition-all duration-300 sm:px-4",
          scrolled
            ? "border-border bg-background/80 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-transparent bg-background/50 backdrop-blur-md",
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2"
          aria-label={SITE.name}
        >
          <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            <Logo size={34} />
          </span>
          <span className="font-display text-lg font-bold text-brand-emerald sm:text-xl">
            {SITE.name}
          </span>
        </Link>

        {/* Center pill nav (tablet/desktop) */}
        <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-secondary/40 p-1 sm:flex">
          {LINKS.map((l) => {
            const isActive = l.active?.(pathname) ?? false;
            return (
              <Link
                key={l.label}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 lg:px-4",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-background hover:text-brand-emerald",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-1.5">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="group hidden bg-brand-gold font-semibold text-primary transition-transform hover:-translate-y-0.5 hover:bg-brand-gold/90 sm:inline-flex"
          >
            <Link href="/#estimator">
              Get an Estimate
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
