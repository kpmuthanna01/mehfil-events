import Link from "next/link";
import { ArrowRight, Check, UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { CATERING_OPTIONS, formatINR } from "@/lib/pricing";
import { MENUS } from "@/lib/menu";

// A few highlight dishes per style, pulled from the middle (mains) sections.
function highlights(id: (typeof CATERING_OPTIONS)[number]["id"]): string[] {
  const sections = MENUS[id].sections;
  const mains = sections.find((s) => /main|signature/i.test(s.title)) ?? sections[1];
  return mains.items.slice(0, 4);
}

export function MenuPreview() {
  return (
    <section id="menu" className="border-y border-border bg-secondary/40 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-8 text-center sm:mb-10">
          <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
            A Menu for Every Table
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Pure veg, Jain &amp; Satvik, halal, regional non-veg and grand
            multi-cuisine buffets, crafted so every guest feels at home.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {CATERING_OPTIONS.map((o, i) => (
            <Reveal
              key={o.id}
              delay={(i % 3) * 90}
              className="h-full [&>*]:h-full"
            >
              <Card className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-brand-gold/40">
              <CardContent className="flex flex-1 flex-col">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-brand-emerald">
                      <UtensilsCrossed className="size-4" />
                    </span>
                    <h3 className="font-semibold leading-tight text-brand-emerald">
                      {o.name}
                    </h3>
                  </div>
                  <span className="whitespace-nowrap font-display text-lg font-bold text-brand-gold-deep">
                    {formatINR(o.perPlate)}
                  </span>
                </div>

                <Badge
                  variant="secondary"
                  className="mb-4 w-fit bg-accent text-accent-foreground"
                >
                  {o.diet}
                </Badge>

                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {highlights(o.id).map((dish) => (
                    <li key={dish} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-brand-gold-deep" />
                      {dish}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/menu"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-emerald hover:underline"
                >
                  View full menu
                  <ArrowRight className="size-3.5" />
                </Link>
              </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-brand-gold font-semibold text-primary transition-transform duration-200 hover:scale-105 hover:bg-brand-gold/90"
          >
            <Link href="/menu">
              Explore All Menus
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
