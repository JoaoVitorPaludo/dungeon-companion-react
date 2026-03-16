import {
  BookOpen,
  Sparkles,
  Mountain,
  Footprints,
  Cog,
  type LucideIcon,
} from "lucide-react";

export const SUBRACES_ICONS: Record<string, LucideIcon> = {
  "high-elf": Sparkles,
  "hill-dwarf": Mountain,
  "lightfoot-halfling": Footprints,
  "rock-gnome": Cog,
};

export const SUBRACES_FALLBACK_ICON: LucideIcon = BookOpen;
