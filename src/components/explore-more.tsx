import Link from "next/link";
import { ArrowRight, Gift, MountainSnow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

const TEASERS = [
  {
    href: "/coorg",
    icon: MountainSnow,
    title: "Coorg Travel Guide",
    detail:
      "Planning a trip? Best time to visit, how to reach, top places, waterfalls, treks, food and a local guide, all in one place.",
    cta: "Explore Coorg",
  },
  {
    href: "/gifts",
    icon: Gift,
    title: "Surprise Gifts",
    detail:
      "Make someone's day. Choose a gift or send us your own, and we wrap, time and reveal it as the perfect surprise.",
    cta: "Send a Surprise",
  },
];

export function ExploreMore() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-8 text-center sm:mb-10">
          <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
            More Than Events
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Beyond celebrations, we help you experience Coorg and surprise the
            people you love.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {TEASERS.map((t, i) => (
            <Reveal key={t.href} delay={i * 100} className="h-full [&>*]:h-full">
              <Link href={t.href} className="group block h-full">
                <Card className="relative h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand-gold/50">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand-gold/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
                  />
                  <CardContent className="relative flex h-full flex-col p-6">
                    <span className="mb-4 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-brand-gold text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <t.icon className="size-7" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-brand-emerald">
                      {t.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {t.detail}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-gold-deep">
                      {t.cta}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
