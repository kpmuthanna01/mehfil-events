import type { Metadata } from "next";
import {
  ArrowRight,
  Boxes,
  Cake,
  Camera,
  Coffee,
  Flame,
  Flower2,
  Frame,
  Gem,
  Gift,
  HandHeart,
  Heart,
  MessageCircle,
  Music,
  PartyPopper,
  Send,
  ShoppingBag,
  ShoppingBasket,
  Sparkles,
  Sprout,
  Star,
  Ticket,
  TreePalm,
  Video,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";
import {
  GIFT_CATEGORIES,
  GIFT_ENQUIRY,
  GIFT_OCCASIONS,
  GIFT_STEPS,
  GIFT_WAYS,
  UNIQUE_GIFTS,
  giftItemEnquiry,
} from "@/lib/gifts";

export const metadata: Metadata = {
  title: "Surprise Gifts | Mehfil Coorg",
  description:
    "Book a surprise gift for any celebration in Coorg. Choose from curated hampers, flowers, cakes and keepsakes, or send us your own item and we present it as a surprise.",
};

const WAY_ICON = { shopping: ShoppingBag, send: Send } as const;
const STEP_ICON = {
  message: MessageCircle,
  gift: Gift,
  wand: Wand2,
  camera: Camera,
} as const;
const CATEGORY_ICON: Record<string, LucideIcon> = {
  coffee: Coffee,
  flower: Flower2,
  cake: Cake,
  keepsake: Frame,
  chocolate: Gift,
  balloon: PartyPopper,
  hamper: Boxes,
  note: Heart,
  jewellery: Gem,
  gourmet: ShoppingBasket,
  plant: Sprout,
  voucher: Ticket,
};

const UNIQUE_ICON: Record<string, LucideIcon> = {
  candle: Flame,
  picnic: TreePalm,
  bonfire: Star,
  video: Video,
  song: Music,
  camera: Camera,
};

const giftLink = whatsappLink(GIFT_ENQUIRY);

export default function GiftsPage() {
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
            For Every Celebration
          </Badge>
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight text-brand-emerald motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-100 motion-safe:duration-700 md:text-6xl">
            Surprise <span className="text-gold-shimmer">Gifts</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-200 motion-safe:duration-700">
            Make someone&apos;s day unforgettable. Choose a gift from us or send
            us your own, we wrap it, time it and reveal it as the perfect
            surprise at any wedding, birthday or celebration.
          </p>
          <div className="mt-8 flex justify-center motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-300 motion-safe:duration-700">
            <Button
              asChild
              size="lg"
              className="bg-brand-gold font-semibold text-primary shadow-lg shadow-brand-gold/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-gold/90"
            >
              <a href={giftLink} target="_blank" rel="noopener noreferrer">
                Book a Surprise Gift
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- TWO WAYS ---------- */}
      <section className="border-b border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <Head
            title="Two Easy Ways to Gift"
            subtitle="However you like to give, we make the surprise effortless."
          />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {GIFT_WAYS.map((w, i) => {
              const Icon = WAY_ICON[w.icon];
              return (
                <Reveal key={w.title} delay={i * 90} className="h-full [&>*]:h-full">
                  <Card className="group h-full rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-brand-gold/40">
                    <CardContent className="p-5 sm:p-6">
                      <span className="mb-4 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-brand-gold/25 text-brand-emerald transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                        <Icon className="size-6" />
                      </span>
                      <h3 className="font-display text-lg font-bold text-brand-emerald">
                        {w.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {w.detail}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Head
            title="How It Works"
            subtitle="From your idea to their smile, in four simple steps."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {GIFT_STEPS.map((s, i) => {
              const Icon = STEP_ICON[s.icon];
              return (
                <Reveal
                  key={s.title}
                  delay={(i % 4) * 80}
                  className="h-full [&>*]:h-full"
                >
                  <Card className="group relative h-full rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-brand-gold/40">
                    <CardContent className="p-3 sm:p-4">
                      <span className="absolute right-3 top-3 font-display text-2xl font-extrabold text-brand-gold/30">
                        {i + 1}
                      </span>
                      <span className="mb-3 grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-brand-gold/25 text-brand-emerald transition-transform duration-500 group-hover:scale-110 sm:size-12">
                        <Icon className="size-5 sm:size-6" />
                      </span>
                      <h3 className="font-semibold leading-snug text-brand-emerald">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
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

      {/* ---------- GIFT IDEAS ---------- */}
      <section className="border-y border-border bg-secondary/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Head
            title="Gift Ideas"
            subtitle="Tap any idea to ask about it on WhatsApp, or tell us your own and we'll make it happen."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {GIFT_CATEGORIES.map((c, i) => {
              const Icon = CATEGORY_ICON[c.icon] ?? Gift;
              return (
                <Reveal
                  key={c.title}
                  delay={(i % 4) * 80}
                  className="h-full [&>*]:h-full"
                >
                  <a
                    href={whatsappLink(giftItemEnquiry(c.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full focus:outline-none"
                  >
                    <Card className="h-full rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-brand-gold/40 group-focus-visible:ring-2 group-focus-visible:ring-brand-gold">
                      <CardContent className="p-3 sm:p-4">
                        <span className="mb-3 grid size-10 place-items-center rounded-xl bg-secondary text-brand-emerald transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:size-11">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="font-semibold leading-snug text-brand-emerald">
                          {c.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {c.detail}
                        </p>
                        <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#128C4A]">
                          <WhatsAppIcon className="size-3" />
                          Ask on WhatsApp
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- UNIQUE SURPRISES ---------- */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Head
            title="Something Unique"
            subtitle="Signature surprises you won't find on a shelf, tap one to plan it on WhatsApp."
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {UNIQUE_GIFTS.map((u, i) => {
              const Icon = UNIQUE_ICON[u.icon] ?? Sparkles;
              return (
                <Reveal
                  key={u.title}
                  delay={(i % 3) * 80}
                  className="h-full [&>*]:h-full"
                >
                  <a
                    href={whatsappLink(giftItemEnquiry(u.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full focus:outline-none"
                  >
                    <Card className="relative h-full overflow-hidden rounded-2xl ring-1 ring-brand-gold/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand-gold/60 group-focus-visible:ring-2 group-focus-visible:ring-brand-gold">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-brand-gold/15 blur-xl transition-transform duration-500 group-hover:scale-125"
                      />
                      <CardContent className="relative p-4 sm:p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-brand-gold text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:size-12">
                            <Icon className="size-5 sm:size-6" />
                          </span>
                          <Sparkles className="size-4 text-brand-gold-deep" />
                        </div>
                        <h3 className="font-display text-base font-bold leading-snug text-brand-emerald">
                          {u.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {u.detail}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#128C4A]">
                          <WhatsAppIcon className="size-3" />
                          Plan on WhatsApp
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- OCCASIONS ---------- */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Head
            title="Perfect for Any Occasion"
            subtitle="If it's worth celebrating, it's worth a surprise."
          />
          <Reveal className="flex flex-wrap justify-center gap-2.5">
            {GIFT_OCCASIONS.map((o) => (
              <span
                key={o}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-brand-gold/50"
              >
                <Sparkles className="size-3.5 text-brand-gold-deep" />
                {o}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-10">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-brand-gold/20 blur-2xl motion-safe:animate-float-blob-alt"
              />
              <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-brand-gold">
                    <HandHeart className="size-5" />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      Surprise Gifts
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">
                    Let&apos;s plan the perfect surprise
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-primary-foreground/80">
                    Message us with the occasion and your idea. Choose a gift
                    from us or send your own, we&apos;ll handle the wrapping,
                    timing and the big reveal.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="shrink-0 bg-[#25D366] font-semibold text-white hover:bg-[#20bd5a]"
                >
                  <a href={giftLink} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-5" />
                    Book on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Head({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Reveal className="mb-8 text-center sm:mb-10">
      <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
    </Reveal>
  );
}
