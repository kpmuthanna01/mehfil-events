import { Card, CardContent } from "@/components/ui/card";
import { CategoryIcon } from "@/components/category-icon";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    icon: "catering",
    tint: "bg-secondary text-brand-emerald",
    title: "Full-Scale Catering & Specialized Cooks",
    desc: "Handling everything from traditional regional dishes to international buffets.",
  },
  {
    icon: "grocery",
    tint: "bg-accent text-brand-gold-deep",
    title: "Wholesale Grocery Management",
    desc: "We buy, transport, and manage inventory, with zero wastage for you.",
  },
  {
    icon: "decor",
    tint: "bg-secondary text-brand-emerald",
    title: "Theme & Floral Decoration",
    desc: "Stage, entrance, and seating decor tailored to the event.",
  },
  {
    icon: "supervision",
    tint: "bg-accent text-brand-gold-deep",
    title: "Complete On-Site Supervision",
    desc: "An event manager on the ground so you don't have to stress.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
            What We Bring to the Table
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Four pillars that cover every corner of your celebration.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="h-full [&>*]:h-full">
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <CardContent className="pt-6">
                  <div
                    className={`mb-4 grid h-12 w-12 place-items-center rounded-xl transition-transform duration-300 hover:scale-110 ${s.tint}`}
                  >
                    <CategoryIcon name={s.icon} className="size-6" />
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-brand-emerald sm:text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
