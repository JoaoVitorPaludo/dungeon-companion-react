import {
  BookOpen,
  Brain,
  Dumbbell,
  Eye,
  Shield,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const ALIGNMENTS_ICONS: Record<string, LucideIcon> = {
  cha: Sparkles, // Charisma  - carisma, persuasão
  str: Dumbbell, // Strength  - força física
  con: Shield, // Constitution - resistência, saúde
  dex: Zap, // Dexterity - agilidade, reflexos
  int: Brain, // Intelligence - conhecimento, magia
  wis: Eye, // Wisdom - percepção, intuição
};

export const ALIGNMENTS_FALLBACK_ICON: LucideIcon = BookOpen;
