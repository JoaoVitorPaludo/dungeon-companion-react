import { useNavigate } from "react-router";
import {
  RPG_CHARACTER_SHEET_CREATE_PATH,
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

const MOCK_CHARACTERS: RpgCharacterSummary[] = [
  {
    id: "elira-dawnbringer",
    name: "Elira Dawnbringer",
    race: "High Elf",
    characterClass: "Wizard",
    level: 7,
    campaign: "Shadows of Neverwinter",
    updatedAt: "Atualizada ha 2 dias",
  },
  {
    id: "brakka-ironhide",
    name: "Brakka Ironhide",
    race: "Half-Orc",
    characterClass: "Fighter",
    level: 5,
    campaign: "Citadel of Embers",
    updatedAt: "Atualizado hoje",
  },
  {
    id: "mira-thistlefoot",
    name: "Mira Thistlefoot",
    race: "Lightfoot Halfling",
    characterClass: "Rogue",
    level: 4,
    campaign: "The Gilded Veil",
    updatedAt: "Atualizada ontem",
  },
];

export function useRpgCharacterSheets(): UseRpgCharacterSheetsReturn {
  const navigate = useNavigate();

  function handleCreateCharacter() {
    navigate(RPG_CHARACTER_SHEET_CREATE_PATH);
  }

  function handleOpenCharacter(characterId: string) {
    navigate(`${RPG_CHARACTER_SHEET_DETAIL_BASE_PATH}/${characterId}`);
  }

  return {
    greeting: "Saudacoes, Joao Vitor",
    subtitle: "A taverna esta em silencio, mas os destinos aguardam sua escolha.",
    emptyMessage:
      "Nenhum personagem foi criado ainda. Quando voce iniciar uma ficha, ela aparecera aqui.",
    characters: MOCK_CHARACTERS,
    handleCreateCharacter,
    handleOpenCharacter,
  };
}
