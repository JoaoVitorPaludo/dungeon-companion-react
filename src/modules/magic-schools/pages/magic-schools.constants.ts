import {
  BookOpen,
  Shield,
  Sparkles,
  Eye,
  Brain,
  Flame,
  Ghost,
  Skull,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export const MAGIC_SCHOOLS_ICONS: Record<string, LucideIcon> = {
  abjuration: Shield,
  conjuration: Sparkles,
  divination: Eye,
  enchantment: Brain,
  evocation: Flame,
  illusion: Ghost,
  necromancy: Skull,
  transmutation: FlaskConical,
};

export const MAGIC_SCHOOLS_FALLBACK_ICON: LucideIcon = BookOpen;
