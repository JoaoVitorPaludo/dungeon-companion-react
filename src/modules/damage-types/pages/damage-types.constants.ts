import {
  Flame,
  Snowflake,
  Zap,
  Wind,
  Skull,
  Radiation,
  Shield,
  Sword,
  Wand2,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

export const DAMAGE_TYPES_ICONS: Record<string, LucideIcon> = {
  acid: Radiation,
  bludgeoning: Shield,
  cold: Snowflake,
  fire: Flame,
  force: Wand2,
  lightning: Zap,
  necrotic: Skull,
  piercing: Sword,
  poison: Skull,
  psychic: Wind,
  radiant: Zap,
  slashing: Sword,
  thunder: Wind,
};

export const DAMAGE_TYPES_FALLBACK_ICON: LucideIcon = BookOpen;
