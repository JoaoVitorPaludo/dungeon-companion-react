import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { RPG_CHARACTER_SHEETS_PATH } from "../../../app/routes/routes.constants";
import {
  getAllDnDClasses,
  getClassesByIndex,
} from "../../../controllers/classes/classes-controller";
import { getRaceByIndex } from "../../../controllers/races/races-controller";
import { getSubraceByIndex } from "../../../controllers/subraces/subraces-controller";
import { getAllDnDRaces } from "../../../controllers/races/races-controller";
import {
  CLASS_CARD_CONTENT_MAP,
  CHARACTER_CREATION_STEPS,
  DEFAULT_CLASS_CARD_CONTENT,
  DEFAULT_RACE_CARD_CONTENT,
  RACE_CARD_CONTENT_MAP,
} from "./character-creation.constants";
import type {
  ClassCardContent,
  ClassDetail,
  ClassOption,
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
  classes: ClassOption[];
  classDetail: ClassDetail | null;
  selectedRaceIndex: string | null;
  selectedSubraceIndex: string | null;
  selectedSubrace: SubraceDetail | null;
  selectedClassIndex: string | null;
  raceCardContentMap: Record<string, RaceCardContent>;
  defaultRaceCardContent: RaceCardContent;
  classCardContentMap: Record<string, ClassCardContent>;
  defaultClassCardContent: ClassCardContent;
  hasSubraces: boolean;
  isLoadingStepOne: boolean;
  hasStepOneError: boolean;
  isLoadingStepTwo: boolean;
  hasStepTwoError: boolean;
  rightButtonDisabled: boolean;
  leftButtonLabel: string;
  rightButtonLabel: string;
  handleSelectRace: (raceIndex: string) => void;
  handleSelectSubrace: (subraceIndex: string) => void;
  handleSelectClass: (classIndex: string) => void;
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
      selectedClassIndex: null,
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

  const classesQuery = useQuery<ClassOption[]>({
    queryKey: ["character-creation-classes"],
    queryFn: getAllDnDClasses,
  });

  const classDetailQuery = useQuery<ClassDetail>({
    enabled: Boolean(characterCreationState.selectedClassIndex),
    queryKey: [
      "character-creation-class",
      characterCreationState.selectedClassIndex,
    ],
    queryFn: () =>
      getClassesByIndex(characterCreationState.selectedClassIndex ?? ""),
  });

  const isLoadingStepOne =
    racesQuery.isLoading ||
    raceDetailQuery.isLoading ||
    (hasSubraces && subraceDetailsQuery.isLoading);

  const hasStepOneError =
    racesQuery.isError ||
    raceDetailQuery.isError ||
    (hasSubraces && subraceDetailsQuery.isError);

  const isLoadingStepTwo =
    classesQuery.isLoading ||
    (Boolean(characterCreationState.selectedClassIndex) &&
      classDetailQuery.isLoading);

  const hasStepTwoError = classesQuery.isError || classDetailQuery.isError;

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

  const canAdvanceStepTwo = useMemo(
    () => Boolean(characterCreationState.selectedClassIndex),
    [characterCreationState.selectedClassIndex],
  );

  const rightButtonDisabled = useMemo(() => {
    if (characterCreationState.activeStep === 1) {
      return !canAdvanceStepOne;
    }

    if (characterCreationState.activeStep === 2) {
      return !canAdvanceStepTwo;
    }

    return true;
  }, [canAdvanceStepOne, canAdvanceStepTwo, characterCreationState.activeStep]);

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

  const handleSelectClass = useCallback((classIndex: string) => {
    setCharacterCreationState((currentState) => ({
      ...currentState,
      selectedClassIndex: classIndex,
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
      if (currentState.activeStep === 1) {
        if (!canAdvanceStepOne) {
          return currentState;
        }

        return {
          ...currentState,
          activeStep: 2,
        };
      }

      if (currentState.activeStep === 2) {
        if (!canAdvanceStepTwo) {
          return currentState;
        }

        return {
          ...currentState,
          activeStep: 3,
        };
      }

      return currentState;
    });
  }, [canAdvanceStepOne, canAdvanceStepTwo]);

  return {
    activeStep: characterCreationState.activeStep,
    headerTitle: "Jornada do Heroi",
    headerSubtitle: "Toda lenda tem um comeco. Qual e a sua origem?",
    steps: CHARACTER_CREATION_STEPS,
    races: racesQuery.data ?? [],
    raceDetail: raceDetailQuery.data ?? null,
    subraceDetails: subraceDetailsQuery.data ?? [],
    classes: classesQuery.data ?? [],
    classDetail: classDetailQuery.data ?? null,
    selectedRaceIndex: characterCreationState.selectedRaceIndex,
    selectedSubraceIndex: characterCreationState.selectedSubraceIndex,
    selectedSubrace,
    selectedClassIndex: characterCreationState.selectedClassIndex,
    raceCardContentMap: RACE_CARD_CONTENT_MAP,
    defaultRaceCardContent: DEFAULT_RACE_CARD_CONTENT,
    classCardContentMap: CLASS_CARD_CONTENT_MAP,
    defaultClassCardContent: DEFAULT_CLASS_CARD_CONTENT,
    hasSubraces,
    isLoadingStepOne,
    hasStepOneError,
    isLoadingStepTwo,
    hasStepTwoError,
    rightButtonDisabled,
    leftButtonLabel:
      characterCreationState.activeStep === 1 ? "Sair" : "Voltar",
    rightButtonLabel:
      characterCreationState.activeStep <= 2 ? "Avancar" : "Em construcao",
    handleSelectRace,
    handleSelectSubrace,
    handleSelectClass,
    handleLeftAction,
    handleRightAction,
  };
}
