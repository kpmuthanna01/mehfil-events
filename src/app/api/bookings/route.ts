import { NextResponse } from "next/server";
import { createBooking, listBookings } from "@/lib/store";
import { validateCreateBooking } from "@/lib/validate";

// GET /api/bookings - list all bookings (newest first).
export async function GET() {
  return NextResponse.json({ bookings: listBookings() });
}

// POST /api/bookings - create a booking from a validated selection.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const result = validateCreateBooking(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const booking = createBooking(result.value);
  return NextResponse.json({ booking }, { status: 201 });
}
