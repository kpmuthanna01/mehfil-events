import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

// Closing value-prop banner: "Just say the word."
export function SayTheWord() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Animated decorative glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-10 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl motion-safe:animate-float-blob" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand-emerald/40 blur-3xl motion-safe:animate-float-blob-alt" />
      </div>

      <Reveal className="relative mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
          Weddings · Ceremonies · Corporate · Custom
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">
          Just say <span className="text-gold-shimmer">the word.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/80">
          Tell us the occasion, that&apos;s it. Groceries, cooks, catering and
          decor: we manage every last detail while you simply enjoy the day.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group bg-brand-gold font-semibold text-primary shadow-lg shadow-brand-gold/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-gold/90"
          >
            <Link href="/#estimator">
              Estimate Your Event
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/menu">Explore Menus</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
