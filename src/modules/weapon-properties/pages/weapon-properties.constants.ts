import {
  BookOpen,
  Target,
  Feather,
  Weight,
  Loader,
  Hand,
  Ruler,
  Sparkles,
  ArrowUp,
  Swords,
  Repeat,
  type LucideIcon,
} from "lucide-react";

export const WEAPON_PROPERTIES_ICONS: Record<string, LucideIcon> = {
  ammunition: Target,
  finesse: Feather,
  heavy: Weight,
  light: Feather,
  loading: Loader,
  monk: Hand,
  reach: Ruler,
  special: Sparkles,
  thrown: ArrowUp,
  "two-handed": Swords,
  versatile: Repeat,
};

export const WEAPON_PROPERTIES_FALLBACK_ICON: LucideIcon = BookOpen;
