"use client";

import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CATERING_OPTIONS, formatINR } from "@/lib/pricing";
import { MENUS } from "@/lib/menu";

export function MenuShowcase() {
  return (
    <section id="menu" className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
            Explore Our Menus
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            A taste for every table: pure veg, Jain &amp; Satvik, halal, regional
            non-veg and grand multi-cuisine buffets. Every menu is fully
            customisable for your event.
          </p>
        </div>

        <Tabs defaultValue={CATERING_OPTIONS[0].id} className="w-full">
          {/* Style selector: horizontal scroll on mobile, wraps on desktop */}
          <TabsList className="no-scrollbar mx-auto flex h-auto w-full max-w-3xl snap-x snap-mandatory justify-start gap-1 overflow-x-auto bg-secondary/60 p-1.5 sm:flex-wrap sm:justify-center">
            {CATERING_OPTIONS.map((o) => (
              <TabsTrigger
                key={o.id}
                value={o.id}
                className="shrink-0 snap-start whitespace-nowrap text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:whitespace-normal sm:text-sm"
              >
                {o.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATERING_OPTIONS.map((o) => {
            const menu = MENUS[o.id];
            return (
              <TabsContent key={o.id} value={o.id} className="mt-6 sm:mt-8">
                {/* Style header */}
                <div className="mb-5 flex flex-col gap-2 rounded-2xl bg-secondary/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-emerald sm:text-2xl">
                      {o.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="mt-1 bg-accent text-accent-foreground"
                    >
                      {menu.note}
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-1.5 sm:block sm:text-right">
                    <div className="font-display text-xl font-extrabold text-brand-gold-deep sm:text-2xl">
                      {formatINR(o.perPlate)}
                    </div>
                    <div className="text-xs text-muted-foreground">per plate</div>
                  </div>
                </div>

                {/* Menu sections */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {menu.sections.map((section) => (
                    <Card
                      key={section.title}
                      className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-brand-gold/40"
                    >
                      <CardContent>
                        <h4 className="mb-2.5 flex items-center gap-2 font-semibold text-brand-emerald">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                          {section.title}
                        </h4>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check className="mt-0.5 size-3.5 shrink-0 text-brand-gold-deep" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <p className="mt-6 text-center text-xs text-muted-foreground">
                  Menus are indicative and fully customisable. Allergen-friendly,
                  diabetic and kids&apos; options available on request.
                </p>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
