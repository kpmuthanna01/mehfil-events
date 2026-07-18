import { NextResponse } from "next/server";
import { getBooking } from "@/lib/store";

// GET /api/bookings/:id - fetch a single booking by its reference id.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const booking = getBooking(id);

  if (!booking) {
    return NextResponse.json({ error: "Booking not found." }, { status: 404 });
  }

  return NextResponse.json({ booking });
}
