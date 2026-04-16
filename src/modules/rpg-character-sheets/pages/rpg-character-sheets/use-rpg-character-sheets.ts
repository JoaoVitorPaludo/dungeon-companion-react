import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {
  CHARACTER_CREATION_PATH,
  RPG_CHARACTER_SHEET_DETAIL_BASE_PATH,
} from "../../../../app/routes/routes.constants";
import type { RpgCharacterSummary } from "../../rpg-character-sheets.types";

interface UseRpgCharacterSheetsReturn {
  greeting: string;
  subtitle: string;
  emptyMessage: string;
  characters: RpgCharacterSummary[];
  handleCreateCharacter: () => void;
  handleOpenCharacter: (characterId: string) => void;
}

export function useRpgCharacterSheets(): UseRpgCharacterSheetsReturn {
  const navigate = useNavigate();
  const { t } = useTranslation("rpgCharacterSheets");

  const mockCharacters: RpgCharacterSummary[] = [
    {
      id: "elira-dawnbringer",
      name: "Elira Dawnbringer",
      race: "High Elf",
      characterClass: "Wizard",
      level: 7,
      campaign: "Shadows of Neverwinter",
      updatedAt: t("updatedAt.elira"),
    },
    {
      id: "brakka-ironhide",
      name: "Brakka Ironhide",
      race: "Half-Orc",
      characterClass: "Fighter",
      level: 5,
      campaign: "Citadel of Embers",
      updatedAt: t("updatedAt.brakka"),
    },
    {
      id: "mira-thistlefoot",
      name: "Mira Thistlefoot",
      race: "Lightfoot Halfling",
      characterClass: "Rogue",
      level: 4,
      campaign: "The Gilded Veil",
      updatedAt: t("updatedAt.mira"),
    },
  ];

  function handleCreateCharacter() {
    navigate(CHARACTER_CREATION_PATH);
  }

  function handleOpenCharacter(characterId: string) {
    navigate(`${RPG_CHARACTER_SHEET_DETAIL_BASE_PATH}/${characterId}`);
  }

  return {
    greeting: t("greeting"),
    subtitle: t("subtitle"),
    emptyMessage: t("emptyMessage"),
    characters: mockCharacters,
    handleCreateCharacter,
    handleOpenCharacter,
  };
}
