import dragonbornPlaceholder from "../../../assets/races-placeholders/dragonborn.svg";
import dwarfPlaceholder from "../../../assets/races-placeholders/dwarf.svg";
import elfPlaceholder from "../../../assets/races-placeholders/elf.svg";
import gnomePlaceholder from "../../../assets/races-placeholders/gnome.svg";
import halfElfPlaceholder from "../../../assets/races-placeholders/half-elf.svg";
import halfOrcPlaceholder from "../../../assets/races-placeholders/half-orc.svg";
import halflingPlaceholder from "../../../assets/races-placeholders/halfling.svg";
import humanPlaceholder from "../../../assets/races-placeholders/human.svg";
import tieflingPlaceholder from "../../../assets/races-placeholders/tiefling.svg";
import defaultPlaceholder from "../../../assets/races-placeholders/default.svg";
import type {
  ClassCardContent,
  CharacterCreationStep,
  RaceCardContent,
} from "./character-creation.types";

export const CHARACTER_CREATION_STEPS: CharacterCreationStep[] = [
  { id: 1, label: "steps.step1" },
  { id: 2, label: "steps.step2" },
  { id: 3, label: "steps.step3" },
  { id: 4, label: "steps.step4" },
  { id: 5, label: "steps.step5" },
  { id: 6, label: "steps.step6" },
  { id: 7, label: "steps.step7" },
];

export const RACE_CARD_CONTENT_MAP: Record<string, RaceCardContent> = {
  dragonborn: {
    descriptionKey: "raceDescriptions.dragonborn",
    imageSrc: dragonbornPlaceholder,
  },
  dwarf: {
    descriptionKey: "raceDescriptions.dwarf",
    imageSrc: dwarfPlaceholder,
  },
  elf: {
    descriptionKey: "raceDescriptions.elf",
    imageSrc: elfPlaceholder,
  },
  gnome: {
    descriptionKey: "raceDescriptions.gnome",
    imageSrc: gnomePlaceholder,
  },
  "half-elf": {
    descriptionKey: "raceDescriptions.halfElf",
    imageSrc: halfElfPlaceholder,
  },
  "half-orc": {
    descriptionKey: "raceDescriptions.halfOrc",
    imageSrc: halfOrcPlaceholder,
  },
  halfling: {
    descriptionKey: "raceDescriptions.halfling",
    imageSrc: halflingPlaceholder,
  },
  human: {
    descriptionKey: "raceDescriptions.human",
    imageSrc: humanPlaceholder,
  },
  tiefling: {
    descriptionKey: "raceDescriptions.tiefling",
    imageSrc: tieflingPlaceholder,
  },
};

export const DEFAULT_RACE_CARD_CONTENT: RaceCardContent = {
  descriptionKey: "raceDescriptions.default",
  imageSrc: defaultPlaceholder,
};

export const CLASS_CARD_CONTENT_MAP: Record<string, ClassCardContent> = {
  barbarian: {
    subtitleKey: "classSubtitles.barbarian",
    imageSrc: defaultPlaceholder,
  },
  bard: {
    subtitleKey: "classSubtitles.bard",
    imageSrc: defaultPlaceholder,
  },
  cleric: {
    subtitleKey: "classSubtitles.cleric",
    imageSrc: defaultPlaceholder,
  },
  druid: {
    subtitleKey: "classSubtitles.druid",
    imageSrc: defaultPlaceholder,
  },
  fighter: {
    subtitleKey: "classSubtitles.fighter",
    imageSrc: defaultPlaceholder,
  },
  monk: {
    subtitleKey: "classSubtitles.monk",
    imageSrc: defaultPlaceholder,
  },
  paladin: {
    subtitleKey: "classSubtitles.paladin",
    imageSrc: defaultPlaceholder,
  },
  ranger: {
    subtitleKey: "classSubtitles.ranger",
    imageSrc: defaultPlaceholder,
  },
  rogue: {
    subtitleKey: "classSubtitles.rogue",
    imageSrc: defaultPlaceholder,
  },
  sorcerer: {
    subtitleKey: "classSubtitles.sorcerer",
    imageSrc: defaultPlaceholder,
  },
  warlock: {
    subtitleKey: "classSubtitles.warlock",
    imageSrc: defaultPlaceholder,
  },
  wizard: {
    subtitleKey: "classSubtitles.wizard",
    imageSrc: defaultPlaceholder,
  },
};

export const DEFAULT_CLASS_CARD_CONTENT: ClassCardContent = {
  subtitleKey: "classSubtitles.default",
  imageSrc: defaultPlaceholder,
};
