import {
  Axe,
  BookOpen,
  Eye,
  Flame,
  Ghost,
  Leaf,
  Music,
  Sparkles,
  Star,
  Sun,
  Swords,
  Target,
  Wand2,
  type LucideIcon,
} from "lucide-react";

export const MONSTERS_ICONS: Record<string, LucideIcon> = {
  barbarian: Axe,
  bard: Music,
  cleric: Sun,
  druid: Leaf,
  fighter: Swords,
  monk: Flame,
  paladin: Star,
  ranger: Target,
  rogue: Eye,
  sorcerer: Sparkles,
  warlock: Ghost,
  wizard: Wand2,
};

export const MONSTERS_FALLBACK_ICON: LucideIcon = BookOpen;
