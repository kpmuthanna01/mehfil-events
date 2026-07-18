import { Suspense } from "react";
import type { Metadata } from "next";
import { TrackBooking } from "@/components/track-booking";

export const metadata: Metadata = {
  title: "Track Booking | Mehfil Coorg",
  description: "Look up your event booking status by reference.",
};

export default function TrackPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-2xl px-5 py-24 text-center text-muted-foreground">
          Loading…
        </div>
      }
    >
      <TrackBooking />
    </Suspense>
  );
}
