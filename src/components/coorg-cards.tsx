"use client";

import {
  ArrowRight,
  Car,
  Castle,
  Clock,
  Compass,
  Droplets,
  Footprints,
  Landmark,
  MapPin,
  Mountain,
  Navigation,
  PawPrint,
  Tag,
  Trees,
  type LucideIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardBand, InfoRow } from "@/components/coorg-ui";
import {
  CLUSTERS,
  type Difficulty,
  type Place,
  type PlaceKind,
  type Trek,
  type Waterfall,
} from "@/lib/coorg";

interface Row {
  icon: LucideIcon;
  text: string;
}

const PLACE_META: Record<PlaceKind, { icon: LucideIcon; label: string }> = {
  viewpoint: { icon: Mountain, label: "Viewpoint" },
  waterfall: { icon: Droplets, label: "Waterfall" },
  wildlife: { icon: PawPrint, label: "Wildlife" },
  spiritual: { icon: Landmark, label: "Landmark" },
  nature: { icon: Trees, label: "Nature" },
  heritage: { icon: Castle, label: "Heritage" },
};

const DIFF_STYLE: Record<Difficulty, string> = {
  Easy: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Moderate: "bg-amber-100 text-amber-800 border-amber-200",
  Hard: "bg-red-100 text-red-800 border-red-200",
};

const clusterName = (id: Place["cluster"]) =>
  CLUSTERS.find((c) => c.id === id)?.name ?? "";

const mapsLink = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${query} Coorg Karnataka`,
  )}`;

// -----------------------------------------------------------------------------
// Shared card + detail dialog
// -----------------------------------------------------------------------------
function CoorgCard({
  icon: Icon,
  badge,
  title,
  detail,
  cardRows,
  rows,
  mapsQuery,
}: {
  icon: LucideIcon;
  badge: React.ReactNode;
  title: string;
  detail: string;
  cardRows: Row[];
  rows: Row[];
  mapsQuery: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group block h-full w-full text-left focus:outline-none"
          aria-label={`View details for ${title}`}
        >
          <Card className="h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand-gold/50 group-focus-visible:ring-2 group-focus-visible:ring-brand-gold">
            <CardBand icon={Icon}>{badge}</CardBand>
            <CardContent className="p-3 sm:p-4">
              <h3 className="font-display text-sm font-bold leading-snug text-brand-emerald sm:text-base">
                {title}
              </h3>
              <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                {detail}
              </p>
              <div className="mt-3 space-y-1.5 border-t border-border pt-2.5">
                {cardRows.map((r) => (
                  <InfoRow key={r.text} icon={r.icon} text={r.text} />
                ))}
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-gold-deep">
                View details
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </CardContent>
          </Card>
        </button>
      </DialogTrigger>

      <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-md">
        <div className="relative flex h-24 items-center justify-between overflow-hidden bg-gradient-to-br from-primary via-primary/85 to-brand-gold/60 px-5">
          <span aria-hidden className="absolute -left-5 -top-8 size-24 rounded-full bg-white/10" />
          <span aria-hidden className="absolute -bottom-10 right-10 size-28 rounded-full bg-white/5" />
          <span className="relative grid size-14 place-items-center rounded-2xl bg-background/90 text-brand-emerald shadow ring-1 ring-white/40">
            <Icon className="size-7" />
          </span>
          <span className="relative">{badge}</span>
        </div>

        <div className="p-5">
          <DialogHeader className="text-left">
            <DialogTitle className="font-display text-xl text-brand-emerald">
              {title}
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
              {detail}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-2.5 rounded-xl bg-secondary/50 p-4">
            {rows.map((r) => (
              <InfoRow key={r.text} icon={r.icon} text={r.text} />
            ))}
          </div>

          <Button
            asChild
            className="mt-4 w-full bg-brand-gold font-semibold text-primary hover:bg-brand-gold/90"
          >
            <a href={mapsQuery} target="_blank" rel="noopener noreferrer">
              <MapPin className="size-4" />
              Get Directions
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// -----------------------------------------------------------------------------
// Typed wrappers
// -----------------------------------------------------------------------------
export function PlaceCard({ place }: { place: Place }) {
  const meta = PLACE_META[place.kind];
  const badge = (
    <Badge className="bg-background/85 text-[10px] font-medium text-brand-emerald backdrop-blur sm:text-xs">
      {meta.label}
    </Badge>
  );
  return (
    <CoorgCard
      icon={meta.icon}
      badge={badge}
      title={place.name}
      detail={place.detail}
      cardRows={[
        { icon: MapPin, text: place.location },
        { icon: Car, text: place.distance },
      ]}
      rows={[
        { icon: MapPin, text: place.location },
        { icon: Car, text: place.distance },
        { icon: Compass, text: clusterName(place.cluster) },
        { icon: Tag, text: meta.label },
      ]}
      mapsQuery={mapsLink(place.name)}
    />
  );
}

export function WaterfallCard({ item }: { item: Waterfall }) {
  const badge = (
    <Badge className="bg-background/85 text-[10px] font-medium text-brand-emerald backdrop-blur sm:text-xs">
      Falls
    </Badge>
  );
  return (
    <CoorgCard
      icon={Droplets}
      badge={badge}
      title={item.name}
      detail={item.detail}
      cardRows={[{ icon: MapPin, text: item.distance }]}
      rows={[
        { icon: MapPin, text: item.distance },
        { icon: Navigation, text: item.reach },
      ]}
      mapsQuery={mapsLink(item.name)}
    />
  );
}

export function TrekCard({ item }: { item: Trek }) {
  const badge = (
    <Badge
      variant="outline"
      className={`text-[10px] sm:text-xs ${DIFF_STYLE[item.difficulty]}`}
    >
      {item.difficulty}
    </Badge>
  );
  return (
    <CoorgCard
      icon={Footprints}
      badge={badge}
      title={item.name}
      detail={item.detail}
      cardRows={[
        { icon: MapPin, text: item.distance },
        { icon: Clock, text: item.duration },
      ]}
      rows={[
        { icon: MapPin, text: item.distance },
        { icon: Clock, text: item.duration },
        { icon: Navigation, text: item.reach },
      ]}
      mapsQuery={mapsLink(item.name)}
    />
  );
}
