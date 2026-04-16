import type { SteppItem } from "../../../components/ui/stepp-component";

export interface CharacterCreationStep extends SteppItem {}

export interface RaceOption {
  index: string;
  name: string;
  url: string;
}

export interface RaceReference {
  index: string;
  name: string;
  url: string;
}

export interface RaceAbilityBonus {
  bonus: number;
  ability_score: RaceReference;
}

export interface RaceDetail {
  index: string;
  name: string;
  speed: number;
  size: string;
  size_description: string;
  alignment: string;
  age: string;
  language_desc: string;
  ability_bonuses: RaceAbilityBonus[];
  languages: RaceReference[];
  traits: RaceReference[];
  subraces: RaceReference[];
}

export interface SubraceDetail {
  index: string;
  name: string;
  desc: string | string[];
  ability_bonuses: RaceAbilityBonus[];
  language_options?: {
    choose: number;
  };
  racial_traits: RaceReference[];
}

export interface CharacterCreationState {
  activeStep: number;
  selectedRaceIndex: string | null;
  selectedSubraceIndex: string | null;
  selectedClassIndex: string | null;
}

export interface RaceCardContent {
  description: string;
  imageSrc: string;
}

export interface ClassOption {
  index: string;
  name: string;
  url: string;
}

export interface ClassReference {
  index: string;
  name: string;
  url: string;
}

export interface ClassProficiencyChoice {
  desc: string;
  choose: number;
  type: string;
}

export interface ClassDetail {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: ClassProficiencyChoice[];
  proficiencies: ClassReference[];
  saving_throws: ClassReference[];
  subclasses: ClassReference[];
}

export interface ClassCardContent {
  subtitle: string;
  imageSrc: string;
}
