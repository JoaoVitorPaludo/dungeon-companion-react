import {
  Axe,
  BookOpen,
  Eye,
  Flame,
  Ghost,
  Hammer,
  Home,
  Leaf,
  Moon,
  Skull,
  Sparkles,
  Sun,
  Swords,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const LANGUAGES_ICONS: Record<string, LucideIcon> = {
  abyssal: Skull,
  celestial: Sun,
  common: BookOpen,
  "deep-speech": Eye,
  draconic: Flame,
  dwarvish: Hammer,
  elvish: Sparkles,
  giant: Swords,
  gnomish: Wrench,
  goblin: Axe,
  halfling: Home,
  infernal: Ghost,
  orc: Axe,
  primordial: Wind,
  sylvan: Leaf,
  undercommon: Moon,
};

export const LANGUAGES_FALLBACK_ICON: LucideIcon = BookOpen;
