import {
  Award,
  Baby,
  Briefcase,
  Brush,
  Cake,
  Camera,
  Car,
  ChefHat,
  ClipboardList,
  Drama,
  Flower2,
  Gem,
  Gift,
  Heart,
  HeartHandshake,
  House,
  Martini,
  Music,
  PartyPopper,
  ShoppingCart,
  Sparkles,
  Users,
  Wand2,
  type LucideIcon,
} from "lucide-react";

// Maps our string keys (stored in pricing/menu data) to Lucide icon components.
// Keeping the data layer free of JSX means it stays usable on the server.
const ICONS: Record<string, LucideIcon> = {
  // Events
  marriage: Gem,
  engagement: Heart,
  reception: Martini,
  naming: Baby,
  "baby-shower": Gift,
  housewarming: House,
  birthday: Cake,
  anniversary: HeartHandshake,
  corporate: Briefcase,
  "get-together": Users,
  festival: PartyPopper,
  retirement: Award,
  custom: Wand2,
  // Add-ons
  photography: Camera,
  "sound-dj": Music,
  dancers: Drama,
  valet: Car,
  mehndi: Brush,
  fireworks: Sparkles,
  // Services
  catering: ChefHat,
  grocery: ShoppingCart,
  decor: Flower2,
  supervision: ClipboardList,
};

export function CategoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
