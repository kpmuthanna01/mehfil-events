import Link from "next/link";
import { Logo } from "@/components/logo";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <Reveal
        as="div"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2"
      >
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Logo size={38} />
            <span className="font-display text-xl font-bold">{SITE.name}</span>
          </div>
          <p className="max-w-sm text-sm text-primary-foreground/70">
            {SITE.tagline}. Groceries, cooks, catering and decoration under one
            roof, so you can just enjoy the celebration.
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-sm text-primary-foreground/70">
            Ready to plan your day?
          </p>
          <div className="mt-3 flex gap-3 sm:justify-end">
            <Button asChild variant="secondary">
              <Link href="/#estimator">Estimate Your Event</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/menu">View Menus</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
