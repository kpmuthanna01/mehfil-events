import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Crown, Sparkles, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Simple event packages for Coorg, Silver, Gold and Royal, or build your own with the live estimator. Catering, decor, coordination and add-ons included.",
};

interface Package {
  icon: typeof Sparkles;
  name: string;
  from: string;
  tagline: string;
  features: string[];
  popular?: boolean;
}

const PACKAGES: Package[] = [
  {
    icon: Sparkles,
    name: "Silver",
    from: "₹1,50,000",
    tagline: "Perfect for intimate functions",
    features: [
      "Planning & on-site coordination",
      "Standard veg catering",
      "Basic traditional decoration",
      "Grocery management & cooks",
      "On-site event manager",
    ],
  },
  {
    icon: Star,
    name: "Gold",
    from: "₹3,50,000",
    tagline: "Our most popular choice",
    popular: true,
    features: [
      "Everything in Silver",
      "Premium veg or non-veg catering",
      "Elegant floral decoration",
      "Live food counters",
      "Professional photography",
      "Sound system & DJ",
    ],
  },
  {
    icon: Crown,
    name: "Royal",
    from: "₹7,00,000+",
    tagline: "The full, grand experience",
    features: [
      "Everything in Gold",
      "Grand multi-cuisine buffet",
      "Grand Royal Palace decor",
      "Traditional dancers & fireworks",
      "Valet & guest parking",
      "Dedicated planning team",
    ],
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-bg border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <h1 className="font-display text-4xl font-extrabold text-brand-emerald md:text-5xl">
            Event <span className="text-gold-shimmer">Packages</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Simple, transparent starting points, or build your own with the live
            estimator. Every package is fully customisable.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="h-full [&>*]:h-full">
              <Card
                className={`relative flex h-full flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  p.popular
                    ? "ring-2 ring-brand-gold"
                    : "hover:ring-brand-gold/40"
                }`}
              >
                {p.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-primary shadow">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
                  <span className="mb-3 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-brand-gold/25 text-brand-emerald">
                    <p.icon className="size-6" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-brand-emerald">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-4">
                    <span className="text-xs text-muted-foreground">from</span>
                    <div className="font-display text-3xl font-extrabold text-brand-gold-deep">
                      {p.from}
                    </div>
                  </div>

                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-border pt-5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-gold-deep" />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`mt-6 w-full font-semibold ${
                      p.popular
                        ? "bg-brand-gold text-primary hover:bg-brand-gold/90"
                        : ""
                    }`}
                    variant={p.popular ? "default" : "outline"}
                  >
                    <a
                      href={whatsappLink(
                        `Hi Mehfil Coorg, I'm interested in the ${p.name} package. Please share details.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="size-4" />
                      Enquire on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-2xl px-5 text-center">
          <p className="text-sm text-muted-foreground">
            Prices are indicative and scale with guest count and choices. Want an
            exact figure?
          </p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/#estimator">
              Build Your Own Estimate
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
