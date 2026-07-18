import type { EventSelection } from "./pricing";

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "in_progress"
  | "completed"
  | "cancelled";

export const STATUS_LABELS: Record<BookingStatus, string> = {
  pending: "Pending Review",
  confirmed: "Confirmed",
  in_progress: "In Progress",
  completed: "Completed",
  cancelled: "Cancelled",
};

export interface Booking {
  id: string; // human-friendly reference, e.g. "UTS-8FK2Q"
  createdAt: string; // ISO timestamp
  status: BookingStatus;

  // Contact
  name: string;
  phone: string;
  email?: string;
  eventDate?: string; // YYYY-MM-DD
  notes?: string;

  // Event configuration
  selection: EventSelection;
  estimatedTotal: number;
}

// Payload accepted by POST /api/bookings
export interface CreateBookingInput {
  name: string;
  phone: string;
  email?: string;
  eventDate?: string;
  notes?: string;
  selection: EventSelection;
}
