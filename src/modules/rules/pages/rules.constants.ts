import {
  Axe,
  Backpack,
  BookOpen,
  Brain,
  Scroll,
  Sparkles,
  Swords,
  type LucideIcon,
} from "lucide-react";

export const RULES_ICONS: Record<string, LucideIcon> = {
  adventuring: Backpack,
  appendix: BookOpen,
  combat: Swords,
  equipment: Axe,
  spellcasting: Sparkles,
  "using-ability-scores": Brain,
};

export const RULES_FALLBACK_ICON: LucideIcon = Scroll;
