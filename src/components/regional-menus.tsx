"use client";

import { useState } from "react";
import { Check, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { REGIONAL_MENUS, type RegionId } from "@/lib/menu";
import { cn } from "@/lib/utils";

// Classic Indian veg / non-veg mark: a filled dot inside a bordered square.
function DietMark({
  kind,
  className,
}: {
  kind?: "veg" | "nonveg";
  className?: string;
}) {
  if (!kind) return null;
  const isVeg = kind === "veg";
  return (
    <span
      role="img"
      aria-label={isVeg ? "Vegetarian" : "Non-Vegetarian"}
      title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
      className={cn(
        "inline-flex size-4 shrink-0 items-center justify-center rounded-[3px] border-[1.5px]",
        isVeg ? "border-emerald-600" : "border-red-600",
        className,
      )}
    >
      <span
        className={cn(
          "size-2 rounded-full",
          isVeg ? "bg-emerald-600" : "bg-red-600",
        )}
      />
    </span>
  );
}

export function RegionalMenus() {
  const [active, setActive] = useState<RegionId>(REGIONAL_MENUS[0].id);
  const region = REGIONAL_MENUS.find((r) => r.id === active) ?? REGIONAL_MENUS[0];

  const hasVeg = region.sections.some((s) => s.kind === "veg");
  const hasNonVeg = region.sections.some((s) => s.kind === "nonveg");

  return (
    <section id="regional" className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
            Regional Specialities
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Authentic Karnataka, Coorg &amp; Kerala spreads, vegetarian and
            non-vegetarian, cooked by specialist regional chefs.
          </p>
        </Reveal>

        {/* Region selector: horizontal scroll on mobile, centered on desktop */}
        <div className="no-scrollbar -mx-5 mb-8 flex snap-x gap-3 overflow-x-auto px-5 pb-1 sm:mx-0 sm:justify-center sm:px-0">
          {REGIONAL_MENUS.map((r) => {
            const isActive = r.id === active;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setActive(r.id)}
                aria-pressed={isActive}
                className={cn(
                  "flex shrink-0 snap-start items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-95",
                  isActive
                    ? "border-transparent bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-brand-emerald",
                )}
              >
                <MapPin className="size-4" />
                {r.name}
              </button>
            );
          })}
        </div>

        {/* Content re-mounts per region so it animates on switch */}
        <div
          key={region.id}
          className="motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-3 motion-safe:duration-500"
        >
          {/* Region banner */}
          <div className="mb-6 rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-brand-emerald">
                  {region.name}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  {region.tagline}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                {hasVeg && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                    <DietMark kind="veg" /> Veg
                  </span>
                )}
                {hasNonVeg && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                    <DietMark kind="nonveg" /> Non-Veg
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Course cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {region.sections.map((section) => (
              <Card
                key={section.title}
                className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-brand-gold/40"
              >
                <CardContent>
                  <div className="mb-2.5 flex items-center justify-between gap-2 border-b border-border pb-2">
                    <h4 className="font-semibold text-brand-emerald">
                      {section.title}
                    </h4>
                    <DietMark kind={section.kind} />
                  </div>
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
            Every dish is fully customisable and can be served plated, family
            style or as a live counter.
          </p>
        </div>
      </div>
    </section>
  );
}
