import type {
  RaceCardContent,
  RaceDetail,
  RaceOption,
  SubraceDetail,
} from "../../pages/character-creation/character-creation.types";

export interface Step01RaceSelectionProps {
  races: RaceOption[];
  raceDetail: RaceDetail | null;
  subraceDetails: SubraceDetail[];
  selectedRaceIndex: string | null;
  selectedSubraceIndex: string | null;
  selectedSubrace: SubraceDetail | null;
  raceCardContentMap: Record<string, RaceCardContent>;
  defaultRaceCardContent: RaceCardContent;
  hasSubraces: boolean;
  isLoadingStepOne: boolean;
  hasStepOneError: boolean;
  handleSelectRace: (raceIndex: string) => void;
  handleSelectSubrace: (subraceIndex: string) => void;
}
