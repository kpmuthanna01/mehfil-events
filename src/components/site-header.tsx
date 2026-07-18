import Link from "next/link";
import { Logo } from "@/components/logo";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={38} />
          <span className="font-display text-xl font-bold text-brand-emerald">
            {SITE.name}
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-6">
          <Link
            href="/#services"
            className="hidden text-sm font-medium text-muted-foreground transition hover:text-brand-emerald sm:inline"
          >
            Services
          </Link>
          <Link
            href="/menu"
            className="hidden text-sm font-medium text-muted-foreground transition hover:text-brand-emerald sm:inline"
          >
            Menu
          </Link>
          <Link
            href="/#estimator"
            className="hidden text-sm font-medium text-muted-foreground transition hover:text-brand-emerald sm:inline"
          >
            Estimator
          </Link>
          <Link
            href="/#testimonials"
            className="hidden text-sm font-medium text-muted-foreground transition hover:text-brand-emerald sm:inline"
          >
            Reviews
          </Link>
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/#estimator">Get an Estimate</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
