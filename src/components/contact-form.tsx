"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

// A generous list spanning every service the brand offers.
const INTERESTS = [
  "Wedding / Marriage",
  "Engagement",
  "Reception",
  "Sangeet / Cocktail Night",
  "Birthday Party",
  "Anniversary",
  "Naming Ceremony",
  "Baby Shower",
  "Housewarming",
  "Corporate Event",
  "Get-Together / Reunion",
  "Festival Celebration",
  "Retirement / Farewell",
  "Customised Function",
  "Surprise Gift",
  "Coorg Travel Guide / Trip",
  "Something Else",
];

export function ContactForm() {
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    if (name.length < 2) {
      toast.error("Please enter your name.");
      return;
    }
    const location = String(form.get("location") ?? "").trim();
    const budget = String(form.get("budget") ?? "").trim();
    const date = String(form.get("date") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    // Build a clean, readable WhatsApp enquiry.
    const text = [
      "Hi Mehfil Coorg, I'd like to enquire.",
      "",
      `👤 Name: ${name}`,
      location ? `📍 Location: ${location}` : "",
      `🎉 Interested in: ${interest}`,
      budget ? `💰 Budget: ${budget}` : "",
      date ? `🗓️ Date: ${date}` : "",
      message ? `📝 Details: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setSending(true);
    window.open(whatsappLink(text), "_blank");
    toast.success("Opening WhatsApp with your enquiry…");
    setSending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" placeholder="e.g. Madikeri, Coorg" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>Interested In</Label>
          <Select value={interest} onValueChange={setInterest}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {INTERESTS.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="budget">Budget / Price</Label>
          <Input id="budget" name="budget" inputMode="numeric" placeholder="e.g. ₹2,00,000" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="date">Preferred Date</Label>
          <Input id="date" name="date" type="date" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Details</Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Guest count, venue, theme, gift idea, anything you have in mind…"
        />
      </div>

      <Button
        type="submit"
        disabled={sending}
        className="w-full bg-[#25D366] font-semibold text-white hover:bg-[#20bd5a]"
      >
        <WhatsAppIcon className="size-5" />
        Send Enquiry on WhatsApp
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        This opens WhatsApp with your details pre-filled, just hit send.
      </p>
    </form>
  );
}
