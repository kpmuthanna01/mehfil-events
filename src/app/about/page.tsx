import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mehfil Coorg is an all-in-one event and experiences team based in Coorg, handling groceries, cooks, catering, decoration, gifts and travel, so you can simply enjoy the celebration.",
};

const VALUES = [
  { icon: Users, title: "One Team, Everything Handled", detail: "Groceries, cooks, catering, decor and on-site management, no juggling vendors." },
  { icon: Leaf, title: "Local to the Core", detail: "Rooted in Coorg, we know the produce, the people and the places better than anyone." },
  { icon: HeartHandshake, title: "Welcoming to All", detail: "Menus and celebrations for every diet, belief and community, everyone feels at home." },
  { icon: ShieldCheck, title: "Zero-Stress Promise", detail: "A dedicated manager on the ground so your family can relax and enjoy the day." },
  { icon: Sparkles, title: "Little Touches, Big Moments", detail: "Surprise gifts, thoughtful details and reveals that people remember for years." },
  { icon: MapPin, title: "Events & Escapes", detail: "From grand weddings to a quiet Coorg getaway, we plan celebrations and trips alike." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-bg border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <h1 className="font-display text-4xl font-extrabold text-brand-emerald md:text-5xl">
            About <span className="text-gold-shimmer">Mehfil Coorg</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Where every celebration comes together, and where every guest to
            Coorg feels looked after.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-5 px-5">
          <Reveal>
            <p className="text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              Mehfil Coorg began with a simple belief, that the people hosting a
              celebration should get to enjoy it too. So we took on everything
              that usually causes stress: the grocery runs, the cooks, the
              catering, the decoration and the hundred little things on the day.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              Being local to Coorg, we bring the region&apos;s warmth, its
              famous flavours and its stunning backdrops to every event, and we
              welcome every diet, belief and community to the table. Over time
              we grew beyond events into surprise gifts and a complete Coorg
              travel guide, so whether you&apos;re celebrating or exploring,
              you&apos;re in good hands.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mb-8 text-center sm:mb-10">
            <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
              What We Stand For
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80} className="h-full [&>*]:h-full">
                <Card className="group h-full rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-brand-gold/40">
                  <CardContent className="p-3 sm:p-4">
                    <span className="mb-3 grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-brand-gold/25 text-brand-emerald transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:size-12">
                      <v.icon className="size-5 sm:size-6" />
                    </span>
                    <h3 className="font-semibold leading-snug text-brand-emerald">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {v.detail}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-gold font-semibold text-primary transition-transform hover:-translate-y-0.5 hover:bg-brand-gold/90"
            >
              <Link href="/#contact">
                Plan With Us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
