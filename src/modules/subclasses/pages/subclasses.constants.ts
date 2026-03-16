import {
  BookOpen,
  Flame,
  Shield,
  Sword,
  Crown,
  TreePine,
  Heart,
  Wand,
  Skull,
  Target,
  Hand,
  type LucideIcon,
} from "lucide-react";

export const SUBCLASSES_ICONS: Record<string, LucideIcon> = {
  berserker: Sword,
  champion: Crown,
  devotion: Shield,
  draconic: Flame,
  evocation: Wand,
  fiend: Skull,
  hunter: Target,
  land: TreePine,
  life: Heart,
  lore: BookOpen,
  "open-hand": Hand,
  thief: Target,
};

export const SUBCLASSES_FALLBACK_ICON: LucideIcon = BookOpen;
