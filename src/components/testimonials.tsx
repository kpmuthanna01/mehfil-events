import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

interface Testimonial {
  name: string;
  event: string;
  location: string;
  rating: number;
  quote: string;
}

// Representative reviews (sample content for the prototype).
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aparna & Rohan",
    event: "Wedding, 600 guests",
    location: "Madikeri",
    rating: 5,
    quote:
      "They handled everything, groceries, cooks, decor and even parking. We actually enjoyed our own wedding instead of managing vendors. Flawless.",
  },
  {
    name: "Farhan Sheikh",
    event: "Halal Reception, 350 guests",
    location: "Mysuru",
    rating: 5,
    quote:
      "The halal kitchen was prepared separately exactly as promised, and the biryani was the talk of the evening. Professional and respectful throughout.",
  },
  {
    name: "Meera Jain",
    event: "Naming Ceremony, 150 guests",
    location: "Bengaluru",
    rating: 5,
    quote:
      "A strict Jain Satvik menu with no onion or garlic, done beautifully. It's rare to find a team that understands our requirements so well.",
  },
  {
    name: "Suresh Nachappa",
    event: "Housewarming, 200 guests",
    location: "Virajpet",
    rating: 5,
    quote:
      "The traditional Kodava spread, Pandi curry, kadambuttu, was authentic to the last detail. On-site supervision meant zero stress for our family.",
  },
  {
    name: "TechNova Pvt Ltd",
    event: "Corporate Annual Day, 800 guests",
    location: "Bengaluru",
    rating: 5,
    quote:
      "Multi-cuisine live counters, sound and stage, all coordinated to the minute. Our employees are still talking about the food.",
  },
  {
    name: "Priya & Family",
    event: "Customised Function, 120 guests",
    location: "Kushalnagar",
    rating: 5,
    quote:
      "We had an unusual theme in mind and they built the whole event around it. Truly custom, and priced fairly. Highly recommend.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "size-4 fill-brand-gold text-brand-gold"
              : "size-4 text-muted-foreground/30"
          }
        />
      ))}
    </div>
  );
}

function initials(name: string): string {
  const parts = name.replace(/&.*/, "").trim().split(" ").filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
            Loved by Families & Businesses Alike
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Every faith, every community, every kind of celebration. Here&apos;s
            what our clients say.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90} className="h-full [&>*]:h-full">
              <Card className="relative flex h-full flex-col transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <CardContent className="flex flex-1 flex-col pt-6">
                <Quote className="absolute right-5 top-5 size-8 text-brand-gold/20" />
                <Stars rating={t.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
                    {initials(t.name)}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-brand-emerald">
                      {t.name}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      {t.event} · {t.location}
                    </div>
                  </div>
                </div>
              </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
