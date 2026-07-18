"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SearchX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { StatusBadge } from "@/components/status-badge";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";
import { buildWhatsAppMessage } from "@/lib/message";
import {
  addonOption,
  cateringOption,
  decorOption,
  eventTypeName,
  formatINR,
} from "@/lib/pricing";
import type { Booking } from "@/lib/types";

export function TrackBooking() {
  const params = useSearchParams();
  const initialRef = params.get("ref") ?? "";

  const [ref, setRef] = useState(initialRef);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const lookup = useCallback(async (id: string) => {
    const clean = id.trim();
    if (!clean) return;
    setLoading(true);
    setError(null);
    setSearched(true);
    try {
      const res = await fetch(`/api/bookings/${encodeURIComponent(clean)}`);
      const data = await res.json();
      if (!res.ok) {
        setBooking(null);
        setError(data.error ?? "Booking not found.");
        return;
      }
      setBooking(data.booking as Booking);
    } catch {
      setBooking(null);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-lookup if a ?ref= was supplied (e.g. from the booking confirmation).
  useEffect(() => {
    if (initialRef) lookup(initialRef);
  }, [initialRef, lookup]);

  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-brand-emerald md:text-4xl">
          Track Your Booking
        </h1>
        <p className="mt-3 text-muted-foreground">
          Enter your reference (e.g. <span className="font-mono">UTS-XXXXX</span>)
          to see your event status and summary.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          lookup(ref);
        }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <div className="flex-1 space-y-1.5">
          <Label htmlFor="ref" className="sr-only">
            Booking reference
          </Label>
          <Input
            id="ref"
            value={ref}
            onChange={(e) => setRef(e.target.value)}
            placeholder="UTS-XXXXX"
            className="uppercase"
          />
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Searching…" : "Track"}
        </Button>
      </form>

      {/* Result */}
      {error && searched && !loading && (
        <Card className="mt-8 border-destructive/30">
          <CardContent className="py-8 text-center text-muted-foreground">
            <SearchX className="mx-auto mb-2 size-8 text-muted-foreground/60" />
            {error}
            <p className="mt-1 text-sm">Double-check the reference and try again.</p>
          </CardContent>
        </Card>
      )}

      {booking && !loading && (
        <Card className="mt-8">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <CardTitle className="font-mono text-xl text-brand-emerald">
                {booking.id}
              </CardTitle>
              <StatusBadge status={booking.status} />
            </div>
            <p className="text-sm text-muted-foreground">
              Booked by {booking.name}
              {booking.eventDate ? ` · Event on ${booking.eventDate}` : ""}
            </p>
          </CardHeader>

          <CardContent className="space-y-3 text-sm">
            <Line label="Event" value={eventTypeName(booking.selection.eventType)} />
            <Line label="Guests" value={`${booking.selection.guests} people`} />
            <Separator />
            <Line
              label={`Catering · ${cateringOption(booking.selection.catering).name}`}
            />
            <Line
              label={`Decoration · ${decorOption(booking.selection.decor).name}`}
            />
            <Line
              label="Add-ons"
              value={
                booking.selection.addons.length
                  ? booking.selection.addons
                      .map((a) => addonOption(a)?.name)
                      .filter(Boolean)
                      .join(", ")
                  : "None"
              }
            />
            <Separator />
            <div className="flex items-end justify-between pt-1">
              <span className="text-muted-foreground">Estimated total</span>
              <span className="font-display text-2xl font-extrabold text-brand-emerald">
                {formatINR(booking.estimatedTotal)}
              </span>
            </div>

            {booking.notes && (
              <p className="rounded-lg bg-secondary p-3 text-muted-foreground">
                <span className="font-medium text-foreground">Your notes:</span>{" "}
                {booking.notes}
              </p>
            )}

            <Button
              asChild
              className="mt-2 w-full bg-[#25D366] text-white hover:bg-[#20bd5a]"
            >
              <a
                href={whatsappLink(
                  buildWhatsAppMessage(booking.selection, {
                    name: booking.name,
                    reference: booking.id,
                    eventDate: booking.eventDate,
                  }),
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="mr-1 h-5 w-5" />
                Message us about this booking
              </a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function Line({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      {value ? (
        <span className="text-right font-medium text-foreground">{value}</span>
      ) : null}
    </div>
  );
}
