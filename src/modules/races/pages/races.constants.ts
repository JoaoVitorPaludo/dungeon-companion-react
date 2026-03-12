import {
  Axe,
  BookOpen,
  Flame,
  Hammer,
  Home,
  Moon,
  Sparkles,
  Star,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const RACES_ICONS: Record<string, LucideIcon> = {
  dragonborn: Flame,
  dwarf: Hammer,
  elf: Sparkles,
  gnome: Wrench,
  "half-elf": Star,
  "half-orc": Axe,
  halfling: Home,
  human: Users,
  tiefling: Moon,
};

export const RACES_FALLBACK_ICON: LucideIcon = BookOpen;
