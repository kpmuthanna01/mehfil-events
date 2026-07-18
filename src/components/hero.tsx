import Link from "next/link";
import { ArrowRight, CalendarCheck, ChevronDown, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const STATS = [
  { icon: CalendarCheck, value: "500+", label: "Events Managed" },
  { icon: Users, value: "2 Lakh+", label: "Guests Served" },
  { icon: Star, value: "4.9/5", label: "Client Rating" },
];

export function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      {/* Animated decorative glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-brand-emerald/15 blur-3xl motion-safe:animate-float-blob" />
        <div className="absolute -right-16 top-24 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl motion-safe:animate-float-blob-alt" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-emerald/10 blur-3xl motion-safe:animate-float-blob-alt" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
        <Badge
          variant="secondary"
          className="mb-5 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-700"
        >
          Groceries · Cooks · Catering · Decor
        </Badge>

        <h1 className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-tight text-brand-emerald motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-100 motion-safe:duration-700 sm:text-5xl md:text-6xl">
          We Handle Everything: Groceries, Cooks &amp; Decor.
          <span className="text-gold-shimmer text-brand-gold-deep"> You Just Enjoy.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-200 motion-safe:duration-700 md:text-xl">
          One team for your entire celebration, from the first grocery run to
          the final floral centerpiece. No juggling vendors. No stress. Just a
          beautiful event.
        </p>

        <p className="mx-auto mt-5 max-w-xl text-xl font-semibold text-brand-emerald motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-300 motion-safe:duration-700 md:text-2xl">
          Just say <span className="text-gold-shimmer">the word</span>, we handle
          everything else.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-300 motion-safe:duration-700 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group bg-brand-gold font-semibold text-primary shadow-lg shadow-brand-gold/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-gold/90"
          >
            <Link href="#estimator">
              Estimate Your Event Cost
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="transition-transform hover:-translate-y-0.5">
            <Link href="#services">See What We Do</Link>
          </Button>
        </div>

        {/* Trust stats */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-500 motion-safe:duration-700 sm:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border/60 bg-card/60 px-3 py-4 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <s.icon className="mx-auto mb-1.5 size-5 text-brand-gold-deep" />
              <div className="font-display text-xl font-extrabold text-brand-emerald sm:text-2xl">
                {s.value}
              </div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground motion-safe:animate-in motion-safe:fade-in-0 motion-safe:delay-700 motion-safe:duration-700">
          Trusted for Marriages · Naming Ceremonies · Housewarmings · Birthdays
        </p>

        {/* Scroll cue */}
        <Link
          href="#estimator"
          aria-label="Scroll to estimator"
          className="mx-auto mt-10 hidden size-10 place-items-center rounded-full border border-border/60 text-brand-emerald transition-colors hover:bg-card motion-safe:animate-bounce sm:grid"
        >
          <ChevronDown className="size-5" />
        </Link>
      </div>
    </section>
  );
}
