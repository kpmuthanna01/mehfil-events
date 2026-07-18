"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { WhatsAppIcon } from "@/components/icons";
import { CategoryIcon } from "@/components/category-icon";
import { Reveal } from "@/components/reveal";
import { AnimatedNumber } from "@/components/animated-number";
import { BookingDialog } from "@/components/booking-dialog";
import { whatsappLink } from "@/lib/site";
import { buildWhatsAppMessage } from "@/lib/message";
import {
  ADDON_OPTIONS,
  CATERING_OPTIONS,
  DECOR_OPTIONS,
  EVENT_TYPES,
  GUEST_DEFAULT,
  GUEST_MAX,
  GUEST_MIN,
  calculateCost,
  cateringOption,
  decorOption,
  eventTypeName,
  formatINR,
  type AddonId,
  type CateringId,
  type DecorId,
  type EventSelection,
  type EventTypeId,
} from "@/lib/pricing";

export function Estimator() {
  // --- Single source of truth: the user's selection ---
  const [selection, setSelection] = useState<EventSelection>({
    eventType: "marriage",
    guests: GUEST_DEFAULT,
    catering: "premium-veg",
    decor: "floral",
    addons: [],
  });

  // Recompute the cost breakdown whenever the selection changes.
  const cost = useMemo(() => calculateCost(selection), [selection]);

  const set = <K extends keyof EventSelection>(
    key: K,
    value: EventSelection[K],
  ) => setSelection((prev) => ({ ...prev, [key]: value }));

  const toggleAddon = (id: AddonId, checked: boolean) =>
    setSelection((prev) => ({
      ...prev,
      addons: checked
        ? [...prev.addons, id]
        : prev.addons.filter((a) => a !== id),
    }));

  const catering = cateringOption(selection.catering);
  const decor = decorOption(selection.decor);

  return (
    <section id="estimator" className="border-y border-border bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
            Estimate Your Event Cost
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Adjust the options below and watch your estimate update instantly. No
            sign-up needed.
          </p>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-5">
          {/* ---------- FORM (left) ---------- */}
          <Card className="lg:col-span-3 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
            <CardContent className="space-y-7 pt-6">
              {/* Event Type */}
              <div className="space-y-2">
                <Label>Event Type</Label>
                <Select
                  value={selection.eventType}
                  onValueChange={(v) => set("eventType", v as EventTypeId)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {EVENT_TYPES.map((o) => (
                      <SelectItem key={o.id} value={o.id}>
                        <CategoryIcon
                          name={o.id}
                          className="size-4 text-brand-gold-deep"
                        />
                        {o.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selection.eventType === "custom" && (
                  <p className="text-xs text-muted-foreground">
                    Have something unique in mind? Pick your catering, decor and
                    add-ons below, then describe your vision in the booking notes,
                    our team will tailor every detail.
                  </p>
                )}
              </div>

              {/* Guest Count */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Guest Count</Label>
                  <span className="text-sm font-bold text-brand-emerald">
                    {selection.guests} guests
                  </span>
                </div>
                <Slider
                  min={GUEST_MIN}
                  max={GUEST_MAX}
                  step={10}
                  value={[selection.guests]}
                  onValueChange={([v]) => set("guests", v)}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{GUEST_MIN}</span>
                  <span>{GUEST_MAX}</span>
                </div>
              </div>

              {/* Catering Style */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Catering Style</Label>
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-1 text-xs font-medium text-brand-gold-deep hover:underline"
                  >
                    View full menu
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
                <Select
                  value={selection.catering}
                  onValueChange={(v) => set("catering", v as CateringId)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATERING_OPTIONS.map((o) => (
                      <SelectItem key={o.id} value={o.id}>
                        {o.name}
                        <span className="text-muted-foreground">
                          {formatINR(o.perPlate)}/plate
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  {catering.diet}
                </p>
              </div>

              {/* Decoration Tier */}
              <div className="space-y-2">
                <Label>Decoration Tier</Label>
                <Select
                  value={selection.decor}
                  onValueChange={(v) => set("decor", v as DecorId)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {DECOR_OPTIONS.map((o) => (
                      <SelectItem key={o.id} value={o.id}>
                        {o.name}
                        <span className="text-muted-foreground">
                          {formatINR(o.price)}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Add-ons */}
              <div className="space-y-3">
                <Label>Extra Add-ons</Label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {ADDON_OPTIONS.map((o) => {
                    const checked = selection.addons.includes(o.id);
                    return (
                      <label
                        key={o.id}
                        className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition hover:border-primary/50 ${
                          checked ? "border-primary bg-primary/5" : "border-border"
                        }`}
                      >
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(c) => toggleAddon(o.id, c === true)}
                          className="mt-0.5"
                        />
                        <CategoryIcon
                          name={o.id}
                          className="mt-0.5 size-4 shrink-0 text-brand-gold-deep"
                        />
                        <span className="text-sm leading-tight">
                          {o.name}
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {formatINR(o.price)}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ---------- SUMMARY (right) ---------- */}
          <div className="lg:sticky lg:top-24 lg:col-span-2">
            <Card className="overflow-hidden border-0 bg-primary text-primary-foreground motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-4 motion-safe:delay-150 motion-safe:duration-700">
              <CardHeader>
                <CardTitle className="font-display text-2xl">
                  Your Event Summary
                </CardTitle>
                <CardDescription className="text-primary-foreground/70">
                  Live estimate, updates as you choose.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 text-sm">
                <Row label="Event" value={eventTypeName(selection.eventType)} />
                <Row label="Guests" value={`${selection.guests} people`} />
                <Separator className="bg-primary-foreground/15" />

                <Row
                  label="Planning & Coordination"
                  value={formatINR(cost.eventBaseFee)}
                />
                <Row
                  label={`Catering · ${catering.name}`}
                  value={formatINR(cost.cateringTotal)}
                />
                <Row
                  muted
                  label={`${formatINR(catering.perPlate)} × ${selection.guests} plates`}
                />
                <Row
                  label={`Decoration · ${decor.name}`}
                  value={formatINR(cost.decorTotal)}
                />

                {selection.addons.length > 0 ? (
                  selection.addons.map((id) => {
                    const a = ADDON_OPTIONS.find((x) => x.id === id)!;
                    return (
                      <Row key={id} label={a.name} value={formatINR(a.price)} />
                    );
                  })
                ) : (
                  <Row muted label="Add-ons" value="None" />
                )}

                <Separator className="bg-primary-foreground/15" />

                <div className="flex items-end justify-between pt-1">
                  <span className="text-primary-foreground/70">
                    Estimated Total Cost
                  </span>
                  <span className="font-display text-3xl font-extrabold text-brand-gold">
                    <AnimatedNumber value={cost.total} format={formatINR} />
                  </span>
                </div>
                <p className="text-xs text-primary-foreground/50">
                  Indicative only. Final quote confirmed after consultation.
                </p>

                <div className="space-y-2 pt-3">
                  <BookingDialog selection={selection} total={cost.total}>
                    <Button className="w-full bg-brand-gold font-semibold text-primary hover:bg-brand-gold/90">
                      Book This Event
                    </Button>
                  </BookingDialog>

                  <Button
                    asChild
                    className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a]"
                  >
                    <a
                      href={whatsappLink(buildWhatsAppMessage(selection))}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="mr-1 h-5 w-5" />
                      Send Details via WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// One summary line. `muted` renders smaller, secondary text.
function Row({
  label,
  value,
  muted = false,
}: {
  label: string;
  value?: string;
  muted?: boolean;
}) {
  if (muted) {
    return (
      <div className="flex justify-between text-xs text-primary-foreground/50">
        <span>{label}</span>
        {value ? <span>{value}</span> : null}
      </div>
    );
  }
  return (
    <div className="flex justify-between gap-4">
      <span className="text-primary-foreground/85">{label}</span>
      <span className="whitespace-nowrap font-semibold">{value}</span>
    </div>
  );
}
