import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Binoculars,
  CalendarDays,
  Camera,
  Car,
  CloudRain,
  Coffee,
  Droplets,
  Leaf,
  MapPin,
  Mountain,
  Navigation,
  Plane,
  Route,
  ShieldAlert,
  Shield,
  Sun,
  Sword,
  Tent,
  Thermometer,
  TrainFront,
  Trophy,
  UserRound,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/reveal";
import { SayTheWord } from "@/components/say-the-word";
import { CardBand } from "@/components/coorg-ui";
import { PlaceCard, TrekCard, WaterfallCard } from "@/components/coorg-cards";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";
import {
  CLUSTERS,
  EXPERIENCES,
  FAMOUS_FOR,
  FOODS,
  GUIDE_ENQUIRY,
  GUIDE_SERVICES,
  HISTORY,
  ITINERARIES,
  PLACES,
  REACH,
  SEASONS,
  SPANS,
  TREKS,
  WATERFALLS,
} from "@/lib/coorg";

export const metadata: Metadata = {
  title: "Coorg Guide | Mehfil Coorg",
  description:
    "The complete Coorg (Kodagu) travel guide: best time to visit, how to reach, top places, 1–3 day itineraries, food to try and the best things to do.",
};

const SEASON_ICON = { sun: Sun, rain: CloudRain, leaf: Leaf } as const;
const REACH_ICON = { plane: Plane, train: TrainFront, car: Car } as const;
const ACTIVITY_ICON = {
  mountain: Mountain,
  coffee: Coffee,
  waves: Waves,
  binoculars: Binoculars,
  camera: Camera,
  tent: Tent,
} as const;

const FAMOUS_ICON = {
  coffee: Coffee,
  mountain: Mountain,
  sword: Sword,
  droplets: Droplets,
  trophy: Trophy,
  shield: Shield,
} as const;

const GUIDE_ICON = {
  guide: UserRound,
  bike: Bike,
  route: Route,
} as const;

const QUICK_FACTS = [
  { icon: Thermometer, label: "Altitude", value: "~900–1,700 m" },
  { icon: CalendarDays, label: "Best time", value: "Oct – Mar" },
  { icon: MapPin, label: "Region", value: "Kodagu, Karnataka" },
];

export default function CoorgPage() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero-bg relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-6 h-72 w-72 rounded-full bg-brand-emerald/15 blur-3xl motion-safe:animate-float-blob" />
          <div className="absolute -right-16 top-20 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl motion-safe:animate-float-blob-alt" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
          <Badge
            variant="secondary"
            className="mb-5 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-700"
          >
            The Scotland of India
          </Badge>
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight text-brand-emerald motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-100 motion-safe:duration-700 md:text-6xl">
            Coorg <span className="text-gold-shimmer">Guide</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-200 motion-safe:duration-700">
            Misty hills, coffee estates and roaring waterfalls. Everything you
            need to plan the perfect trip, best time, routes, top sights,
            itineraries, food and things to do.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-300 motion-safe:duration-700 sm:gap-6">
            {QUICK_FACTS.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-border/60 bg-card/60 px-3 py-4 backdrop-blur-sm"
              >
                <f.icon className="mx-auto mb-1.5 size-5 text-brand-gold-deep" />
                <div className="font-display text-sm font-extrabold text-brand-emerald sm:text-base">
                  {f.value}
                </div>
                <div className="text-[11px] text-muted-foreground">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HISTORY & WHY FAMOUS ---------- */}
      <section className="border-b border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            title="History & Heritage"
            subtitle="A proud little kingdom in the Western Ghats, and why the world knows it."
          />

          {/* History narrative */}
          <Reveal className="mx-auto max-w-3xl space-y-4">
            {HISTORY.map((para) => (
              <p
                key={para}
                className="text-center text-[15px] leading-relaxed text-muted-foreground sm:text-base"
              >
                {para}
              </p>
            ))}
          </Reveal>

          {/* Why famous */}
          <Reveal className="mb-8 mt-14 text-center">
            <h3 className="font-display text-2xl font-bold text-brand-emerald md:text-3xl">
              Why Coorg is Famous
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {FAMOUS_FOR.map((f, i) => {
              const Icon = FAMOUS_ICON[f.icon];
              return (
                <Reveal
                  key={f.title}
                  delay={(i % 3) * 80}
                  className="h-full [&>*]:h-full"
                >
                  <Card className="group h-full rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-brand-gold/40">
                    <CardContent className="p-3 sm:p-4">
                      <span className="mb-3 grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-brand-gold/25 text-brand-emerald transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:size-12">
                        <Icon className="size-5 sm:size-6" />
                      </span>
                      <h4 className="font-semibold leading-snug text-brand-emerald">
                        {f.title}
                      </h4>
                      <p className="mt-1 line-clamp-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {f.detail}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- BEST TIME ---------- */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            title="Best Time to Visit"
            subtitle="Coorg is beautiful year-round, here's what each season feels like."
          />
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {SEASONS.map((s, i) => {
              const Icon = SEASON_ICON[s.icon];
              return (
                <Reveal key={s.title} delay={i * 90} className="h-full [&>*]:h-full">
                  <Card
                    className={`h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                      s.best ? "ring-2 ring-brand-gold/50" : ""
                    }`}
                  >
                    <CardContent className="flex h-full flex-col">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="grid size-10 place-items-center rounded-xl bg-secondary text-brand-emerald">
                          <Icon className="size-5" />
                        </span>
                        {s.best && (
                          <Badge className="bg-brand-gold text-primary">
                            Recommended
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-semibold text-brand-emerald">
                        {s.title}
                      </h3>
                      <p className="text-sm font-medium text-brand-gold-deep">
                        {s.months} · {s.temp}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {s.detail}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- HOW TO REACH ---------- */}
      <section className="border-y border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            title="How to Reach Coorg"
            subtitle="No airport or railway in Coorg itself, here are your options. (Distances approximate.)"
          />
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {REACH.map((m, i) => {
              const Icon = REACH_ICON[m.icon];
              return (
                <Reveal key={m.title} delay={i * 90} className="h-full [&>*]:h-full">
                  <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <CardContent>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-brand-emerald">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="font-semibold text-brand-emerald">
                          {m.title}
                        </h3>
                      </div>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {m.lines.map((line) => (
                          <li key={line} className="flex items-start gap-2">
                            <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-brand-gold-deep" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- PLACES BY CLUSTER ---------- */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            title="Places to Visit"
            subtitle="Grouped into three easy clusters so you can plan by area, not zig-zag across the district."
          />

          <div className="space-y-14">
            {CLUSTERS.map((cluster) => {
              const items = PLACES.filter((p) => p.cluster === cluster.id);
              return (
                <div key={cluster.id}>
                  <Reveal className="mb-5 flex items-baseline gap-3">
                    <h3 className="font-display text-xl font-bold text-brand-emerald sm:text-2xl">
                      {cluster.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {cluster.blurb}
                    </span>
                  </Reveal>

                  <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                    {items.map((p, i) => (
                      <Reveal
                        key={p.name}
                        delay={(i % 3) * 80}
                        className="h-full [&>*]:h-full"
                      >
                        <PlaceCard place={p} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* End-to-end spans */}
          <Reveal className="mt-14">
            <h3 className="mb-4 text-center font-display text-xl font-bold text-brand-emerald sm:text-2xl">
              End-to-End Distances
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {SPANS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-secondary/40 p-5"
                >
                  <div className="mb-1 flex items-center gap-2 font-semibold text-brand-emerald">
                    <Navigation className="size-4 text-brand-gold-deep" />
                    {s.label}
                  </div>
                  <p className="text-sm text-muted-foreground">{s.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- WATERFALLS ---------- */}
      <section className="border-y border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            title="Waterfalls"
            subtitle="Coorg comes alive with cascades, especially in and just after the monsoon."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {WATERFALLS.map((w, i) => (
              <Reveal
                key={w.name}
                delay={(i % 3) * 80}
                className="h-full [&>*]:h-full"
              >
                <WaterfallCard item={w} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TREKS & TRAILS ---------- */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            title="Treks & Trails"
            subtitle="From gentle sunrise ridges to Coorg's highest peaks, a trail for every level."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {TREKS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={(i % 3) * 80}
                className="h-full [&>*]:h-full"
              >
                <TrekCard item={t} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-gold/40 bg-brand-gold/10 p-4 text-sm">
            <ShieldAlert className="mt-0.5 size-5 shrink-0 text-brand-gold-deep" />
            <p className="text-foreground/80">
              <span className="font-semibold text-brand-emerald">Permits: </span>
              major treks like Kumara Parvatha, Nishani Motte and Brahmagiri need
              permits booked in advance via the Karnataka Eco-Tourism website, the
              forest department regulates entry to protect the wildlife corridors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- ITINERARIES ---------- */}
      <section className="border-y border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <SectionHead
            title="Suggested Itineraries"
            subtitle="Short on time or making a long weekend of it, pick a plan."
          />
          <Tabs defaultValue={ITINERARIES[0].id} className="w-full">
            <TabsList className="mx-auto mb-6 flex w-full max-w-sm bg-secondary/70 p-1.5">
              {ITINERARIES.map((it) => (
                <TabsTrigger
                  key={it.id}
                  value={it.id}
                  className="flex-1 gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Route className="size-4" />
                  {it.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {ITINERARIES.map((it) => (
              <TabsContent key={it.id} value={it.id}>
                <Card>
                  <CardContent>
                    <h3 className="mb-4 font-display text-xl font-bold text-brand-emerald">
                      {it.title}
                    </h3>
                    <ol className="space-y-3">
                      {it.stops.map((stop, idx) => (
                        <li key={stop} className="flex gap-3">
                          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-gold text-xs font-bold text-primary">
                            {idx + 1}
                          </span>
                          <span className="pt-0.5 text-sm text-muted-foreground">
                            {stop}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* ---------- FOOD ---------- */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            title="Food to Try"
            subtitle="Bold, earthy Kodava cuisine, some of the best food in South India."
          />
          <Reveal className="flex flex-wrap justify-center gap-2.5">
            {FOODS.map((food) => (
              <span
                key={food}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-brand-gold/50"
              >
                <UtensilsCrossed className="size-3.5 text-brand-gold-deep" />
                {food}
              </span>
            ))}
          </Reveal>
          <Reveal className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="transition-transform hover:-translate-y-0.5"
            >
              <Link href="/menu">
                See these on our Coorg menu
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ---------- UNIQUE EXPERIENCES ---------- */}
      <section className="border-t border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            title="Unique Experiences"
            subtitle="Beyond the sightseeing, this is how you really feel Coorg."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {EXPERIENCES.map((a, i) => {
              const Icon = ACTIVITY_ICON[a.icon];
              return (
                <Reveal
                  key={a.title}
                  delay={(i % 3) * 80}
                  className="h-full [&>*]:h-full"
                >
                  <Card className="group h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand-gold/50">
                    <CardBand icon={Icon} />
                    <CardContent className="p-3 sm:p-4">
                      <h3 className="font-display text-sm font-bold leading-snug text-brand-emerald sm:text-base">
                        {a.title}
                      </h3>
                      <p className="mt-1 line-clamp-4 text-xs leading-relaxed text-muted-foreground">
                        {a.detail}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- LOCAL GUIDE ---------- */}
      <section id="guide" className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead
            title="Explore With a Local Guide"
            subtitle="New to Coorg? Let a local show you the real thing, hidden falls, the best viewpoints and the tastiest Kodava food."
          />

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {GUIDE_SERVICES.map((g, i) => {
              const Icon = GUIDE_ICON[g.icon];
              return (
                <Reveal
                  key={g.title}
                  delay={(i % 3) * 80}
                  className="h-full [&>*]:h-full"
                >
                  <Card className="group h-full rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-brand-gold/40">
                    <CardContent className="p-3 sm:p-4">
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-brand-gold/25 text-brand-emerald transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:size-12">
                          <Icon className="size-5 sm:size-6" />
                        </span>
                        <Badge className="bg-accent text-[10px] text-accent-foreground sm:text-xs">
                          {g.price}
                        </Badge>
                      </div>
                      <h3 className="font-semibold leading-snug text-brand-emerald">
                        {g.title}
                      </h3>
                      <p className="mt-1 line-clamp-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {g.detail}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          {/* WhatsApp booking banner */}
          <Reveal className="mt-8">
            <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-8">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand-gold/20 blur-2xl motion-safe:animate-float-blob-alt"
              />
              <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">
                    Message us before you arrive
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-primary-foreground/80">
                    Tell us your dates on WhatsApp and we&apos;ll line up your
                    guide, two-wheeler, permits and stay in advance, so
                    everything is ready the moment you reach Coorg.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="shrink-0 bg-[#25D366] font-semibold text-white hover:bg-[#20bd5a]"
                >
                  <a
                    href={whatsappLink(GUIDE_ENQUIRY)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="size-5" />
                    Book a Guide on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <SayTheWord />
    </>
  );
}

function SectionHead({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Reveal className="mb-8 text-center sm:mb-10">
      <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
    </Reveal>
  );
}
