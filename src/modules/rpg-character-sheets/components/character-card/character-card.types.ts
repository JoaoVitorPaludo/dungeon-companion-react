import type { RpgCharacterSummary } from "../../rpg-character-sheets.types";

export interface CharacterCardProps {
  character: RpgCharacterSummary;
  onOpen: (characterId: string) => void;
}
