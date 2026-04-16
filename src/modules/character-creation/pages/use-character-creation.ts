import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { RPG_CHARACTER_SHEETS_PATH } from "../../../app/routes/routes.constants";
import { getRaceByIndex } from "../../../controllers/races/races-controller";
import { getSubraceByIndex } from "../../../controllers/subraces/subraces-controller";
import { getAllDnDRaces } from "../../../controllers/races/races-controller";
import {
  CHARACTER_CREATION_STEPS,
  DEFAULT_RACE_CARD_CONTENT,
  RACE_CARD_CONTENT_MAP,
} from "./character-creation.constants";
import type {
  CharacterCreationState,
  RaceCardContent,
  RaceDetail,
  RaceOption,
  SubraceDetail,
} from "./character-creation.types";

interface UseCharacterCreationReturn {
  activeStep: number;
  headerTitle: string;
  headerSubtitle: string;
  steps: typeof CHARACTER_CREATION_STEPS;
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
  rightButtonDisabled: boolean;
  leftButtonLabel: string;
  rightButtonLabel: string;
  handleSelectRace: (raceIndex: string) => void;
  handleSelectSubrace: (subraceIndex: string) => void;
  handleLeftAction: () => void;
  handleRightAction: () => void;
}

export function useCharacterCreation(): UseCharacterCreationReturn {
  const navigate = useNavigate();
  const [characterCreationState, setCharacterCreationState] =
    useState<CharacterCreationState>({
      activeStep: 1,
      selectedRaceIndex: null,
      selectedSubraceIndex: null,
    });

  const racesQuery = useQuery<RaceOption[]>({
    queryKey: ["character-creation-races"],
    queryFn: getAllDnDRaces,
  });

  const raceDetailQuery = useQuery<RaceDetail>({
    enabled: Boolean(characterCreationState.selectedRaceIndex),
    queryKey: [
      "character-creation-race",
      characterCreationState.selectedRaceIndex,
    ],
    queryFn: () =>
      getRaceByIndex(characterCreationState.selectedRaceIndex ?? ""),
  });

  const subraceIndexes = useMemo(
    () => raceDetailQuery.data?.subraces.map((subrace) => subrace.index) ?? [],
    [raceDetailQuery.data],
  );

  const subraceDetailsQuery = useQuery<SubraceDetail[]>({
    enabled: subraceIndexes.length > 0,
    queryKey: [
      "character-creation-subraces",
      characterCreationState.selectedRaceIndex,
      subraceIndexes.join(","),
    ],
    queryFn: async () =>
      Promise.all(
        subraceIndexes.map((subraceIndex) => getSubraceByIndex(subraceIndex)),
      ),
  });

  const selectedSubrace = useMemo(
    () =>
      subraceDetailsQuery.data?.find(
        (subrace) =>
          subrace.index === characterCreationState.selectedSubraceIndex,
      ) ?? null,
    [characterCreationState.selectedSubraceIndex, subraceDetailsQuery.data],
  );

  const hasSubraces = subraceIndexes.length > 0;

  const isLoadingStepOne =
    racesQuery.isLoading ||
    raceDetailQuery.isLoading ||
    (hasSubraces && subraceDetailsQuery.isLoading);

  const hasStepOneError =
    racesQuery.isError ||
    raceDetailQuery.isError ||
    (hasSubraces && subraceDetailsQuery.isError);

  const canAdvanceStepOne = useMemo(() => {
    if (!characterCreationState.selectedRaceIndex) {
      return false;
    }

    if (hasSubraces && !characterCreationState.selectedSubraceIndex) {
      return false;
    }

    return true;
  }, [
    characterCreationState.selectedRaceIndex,
    characterCreationState.selectedSubraceIndex,
    hasSubraces,
  ]);

  const rightButtonDisabled = useMemo(() => {
    if (characterCreationState.activeStep === 1) {
      return !canAdvanceStepOne;
    }

    return true;
  }, [canAdvanceStepOne, characterCreationState.activeStep]);

  const handleSelectRace = useCallback((raceIndex: string) => {
    setCharacterCreationState((currentState) => ({
      ...currentState,
      selectedRaceIndex: raceIndex,
      selectedSubraceIndex: null,
    }));
  }, []);

  const handleSelectSubrace = useCallback((subraceIndex: string) => {
    setCharacterCreationState((currentState) => ({
      ...currentState,
      selectedSubraceIndex: subraceIndex,
    }));
  }, []);

  const handleLeftAction = useCallback(() => {
    if (characterCreationState.activeStep === 1) {
      navigate(RPG_CHARACTER_SHEETS_PATH);
      return;
    }

    setCharacterCreationState((currentState) => ({
      ...currentState,
      activeStep: Math.max(1, currentState.activeStep - 1),
    }));
  }, [characterCreationState.activeStep, navigate]);

  const handleRightAction = useCallback(() => {
    setCharacterCreationState((currentState) => {
      if (currentState.activeStep !== 1 || !canAdvanceStepOne) {
        return currentState;
      }

      return {
        ...currentState,
        activeStep: 2,
      };
    });
  }, [canAdvanceStepOne]);

  return {
    activeStep: characterCreationState.activeStep,
    headerTitle: "Jornada do Heroi",
    headerSubtitle: "Toda lenda tem um comeco. Qual e a sua origem?",
    steps: CHARACTER_CREATION_STEPS,
    races: racesQuery.data ?? [],
    raceDetail: raceDetailQuery.data ?? null,
    subraceDetails: subraceDetailsQuery.data ?? [],
    selectedRaceIndex: characterCreationState.selectedRaceIndex,
    selectedSubraceIndex: characterCreationState.selectedSubraceIndex,
    selectedSubrace,
    raceCardContentMap: RACE_CARD_CONTENT_MAP,
    defaultRaceCardContent: DEFAULT_RACE_CARD_CONTENT,
    hasSubraces,
    isLoadingStepOne,
    hasStepOneError,
    rightButtonDisabled,
    leftButtonLabel:
      characterCreationState.activeStep === 1 ? "Sair" : "Voltar",
    rightButtonLabel:
      characterCreationState.activeStep === 1 ? "Avancar" : "Em construcao",
    handleSelectRace,
    handleSelectSubrace,
    handleLeftAction,
    handleRightAction,
  };
}
