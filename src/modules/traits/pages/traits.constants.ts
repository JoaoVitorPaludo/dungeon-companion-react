import {
  BookOpen,
  Shield,
  Flame,
  Eye,
  Sword,
  Heart,
  Mountain,
  Languages,
  Sparkles,
  Brain,
  Footprints,
  Dice5,
  Skull,
  Target,
  Hammer,
  Wrench,
  Moon,
  type LucideIcon,
} from "lucide-react";

export const TRAITS_ICONS: Record<string, LucideIcon> = {
  "artificers-lore": BookOpen,
  brave: Shield,
  "breath-weapon": Flame,
  "damage-resistance": Shield,
  darkvision: Eye,

  "draconic-ancestry": Flame,
  "draconic-ancestry-black": Flame,
  "draconic-ancestry-blue": Flame,
  "draconic-ancestry-brass": Flame,
  "draconic-ancestry-bronze": Flame,
  "draconic-ancestry-copper": Flame,
  "draconic-ancestry-gold": Flame,
  "draconic-ancestry-green": Flame,
  "draconic-ancestry-red": Flame,
  "draconic-ancestry-silver": Flame,
  "draconic-ancestry-white": Flame,

  "dwarven-combat-training": Sword,
  "dwarven-resilience": Shield,
  "dwarven-toughness": Heart,

  "elf-weapon-training": Sword,
  "extra-language": Languages,
  "fey-ancestry": Sparkles,

  "gnome-cunning": Brain,
  "halfling-nimbleness": Footprints,

  "hellish-resistance": Flame,
  "high-elf-cantrip": Sparkles,
  "infernal-legacy": Skull,

  "keen-senses": Eye,
  lucky: Dice5,
  menacing: Skull,
  "naturally-stealthy": Footprints,

  "relentless-endurance": Heart,
  "savage-attacks": Target,

  "skill-versatility": Brain,
  stonecunning: Mountain,

  tinker: Hammer,
  "tool-proficiency": Wrench,

  trance: Moon,
};

export const TRAITS_FALLBACK_ICON: LucideIcon = BookOpen;
