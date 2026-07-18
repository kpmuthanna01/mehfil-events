import { Badge } from "@/components/ui/badge";
import { STATUS_LABELS, type BookingStatus } from "@/lib/types";

const STYLES: Record<BookingStatus, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  confirmed: "bg-emerald-100 text-emerald-800 border-emerald-200",
  in_progress: "bg-blue-100 text-blue-800 border-blue-200",
  completed: "bg-slate-100 text-slate-700 border-slate-200",
  cancelled: "bg-red-100 text-red-700 border-red-200",
};

export function StatusBadge({ status }: { status: BookingStatus }) {
  return (
    <Badge variant="outline" className={STYLES[status]}>
      {STATUS_LABELS[status]}
    </Badge>
  );
}
