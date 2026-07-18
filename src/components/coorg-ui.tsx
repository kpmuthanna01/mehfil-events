import type { LucideIcon } from "lucide-react";

// Compact labelled info row (icon + text). Server-safe, shared by the Coorg
// page and the interactive card/dialog components.
export function InfoRow({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-start gap-1.5 text-[11px] leading-relaxed sm:text-xs">
      <Icon className="mt-0.5 size-3 shrink-0 text-brand-gold-deep" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

// Distinctive Coorg card header: emerald→gold gradient band with a frosted icon
// medallion and soft decorative circles.
export function CardBand({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative -mt-4 flex h-[60px] items-center justify-between overflow-hidden bg-gradient-to-br from-primary via-primary/85 to-brand-gold/60 px-3 sm:h-16">
      <span
        aria-hidden
        className="absolute -left-4 -top-5 size-14 rounded-full bg-white/10"
      />
      <span
        aria-hidden
        className="absolute -bottom-6 right-8 size-16 rounded-full bg-white/5"
      />
      <span className="relative grid size-9 place-items-center rounded-xl bg-background/90 text-brand-emerald shadow-sm ring-1 ring-white/40 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:size-10">
        <Icon className="size-4 sm:size-5" />
      </span>
      {children}
    </div>
  );
}
