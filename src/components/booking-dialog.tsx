"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon } from "@/components/icons";
import { formatINR, type EventSelection } from "@/lib/pricing";
import { buildWhatsAppMessage } from "@/lib/message";
import { whatsappLink } from "@/lib/site";
import type { Booking } from "@/lib/types";

interface BookingDialogProps {
  selection: EventSelection;
  total: number;
  children: React.ReactNode; // the trigger button
}

export function BookingDialog({ selection, total, children }: BookingDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState<Booking | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      eventDate: String(form.get("eventDate") ?? ""),
      notes: String(form.get("notes") ?? ""),
      selection,
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setConfirmed(data.booking as Booking);
      toast.success(`Booking ${data.booking.id} received!`);
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setConfirmed(null);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setTimeout(reset, 200); // clear after close animation
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {confirmed ? (
          // ---------- SUCCESS STATE ----------
          <div className="text-center">
            <DialogHeader>
              <div className="mx-auto mb-2 grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle2 className="size-8" />
              </div>
              <DialogTitle className="font-display text-2xl">
                Booking Received!
              </DialogTitle>
              <DialogDescription>
                Your reference is{" "}
                <span className="font-mono font-semibold text-brand-emerald">
                  {confirmed.id}
                </span>
                . Save it to track your event status anytime.
              </DialogDescription>
            </DialogHeader>

            <div className="my-4 rounded-lg bg-secondary p-4 text-left text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated total</span>
                <span className="font-semibold">
                  {formatINR(confirmed.estimatedTotal)}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                asChild
                className="bg-[#25D366] text-white hover:bg-[#20bd5a]"
              >
                <a
                  href={whatsappLink(
                    buildWhatsAppMessage(confirmed.selection, {
                      name: confirmed.name,
                      reference: confirmed.id,
                      eventDate: confirmed.eventDate,
                    }),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="mr-1 h-5 w-5" />
                  Send Details via WhatsApp
                </a>
              </Button>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          // ---------- FORM STATE ----------
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">
                Confirm Your Booking
              </DialogTitle>
              <DialogDescription>
                Estimated total{" "}
                <span className="font-semibold text-brand-emerald">
                  {formatINR(total)}
                </span>
                . Share your details and we&apos;ll reach out with a final quote.
              </DialogDescription>
            </DialogHeader>

            <div className="my-4 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name *</Label>
                <Input id="name" name="name" required placeholder="e.g. Aparna K." />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    inputMode="tel"
                    placeholder="9812345678"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="eventDate">Event date</Label>
                  <Input id="eventDate" name="eventDate" type="date" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="notes">Anything special?</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Dietary needs, venue, theme ideas…"
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? "Submitting…" : "Confirm Booking"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
