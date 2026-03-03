import {
  ArrowDownToLine,
  BatteryLow,
  BookOpen,
  CircleSlash,
  EarOff,
  EyeOff,
  Ghost,
  Handshake,
  Heart,
  Link2,
  Lock,
  Moon,
  Mountain,
  Scan,
  Skull,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const CONDITIONS_ICONS: Record<string, LucideIcon> = {
  blinded: EyeOff,
  charmed: Heart,
  deafened: EarOff,
  exhaustion: BatteryLow,
  frightened: Ghost,
  grappled: Handshake,
  incapacitated: CircleSlash,
  invisible: Scan,
  paralyzed: Lock,
  petrified: Mountain,
  poisoned: Skull,
  prone: ArrowDownToLine,
  restrained: Link2,
  stunned: Zap,
  unconscious: Moon,
};

export const CONDITIONS_FALLBACK_ICON: LucideIcon = BookOpen;
