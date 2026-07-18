import Link from "next/link";
import { Logo } from "@/components/logo";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const LINKS: { heading: string; items: { label: string; href: string }[] }[] = [
  {
    heading: "Explore",
    items: [
      { label: "Home", href: "/" },
      { label: "Menus", href: "/menu" },
      { label: "Coorg Guide", href: "/coorg" },
      { label: "Surprise Gifts", href: "/gifts" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Packages", href: "/packages" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <Reveal
        as="div"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <Logo size={38} />
            <span className="font-display text-xl font-bold">{SITE.name}</span>
          </div>
          <p className="max-w-sm text-sm text-primary-foreground/70">
            {SITE.tagline}. Groceries, cooks, catering and decoration under one
            roof, so you can just enjoy the celebration.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link href="/#estimator">Estimate Your Event</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Link columns */}
        {LINKS.map((col) => (
          <div key={col.heading}>
            <h3 className="mb-3 text-sm font-semibold text-primary-foreground">
              {col.heading}
            </h3>
            <ul className="space-y-2 text-sm">
              {col.items.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-primary-foreground/70 transition-colors hover:text-brand-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
