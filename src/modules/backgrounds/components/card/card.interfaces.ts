export interface CardData {
  index: string;
  name: string;
  starting_proficiencies: StartingProficiency[];
  language_options: LanguageOptions;
  starting_equipment: StartingEquipment[];
  starting_equipment_options: StartingEquipmentOption[];
  feature: Feature;
  personality_traits: Bonds;
  ideals: Ideals;
  bonds: Bonds;
  flaws: Bonds;
  url: string;
  updated_at: Date;
}

export interface Bonds {
  choose: number;
  type: string;
  from: BondsFrom;
}

export interface BondsFrom {
  option_set_type: string;
  options: PurpleOption[];
}

export interface PurpleOption {
  option_type: OptionType;
  string: string;
}

export enum OptionType {
  String = "string",
}

export interface Feature {
  name: string;
  desc: string[];
}

export interface Ideals {
  choose: number;
  type: string;
  from: IdealsFrom;
}

export interface IdealsFrom {
  option_set_type: string;
  options: FluffyOption[];
}

export interface FluffyOption {
  option_type: string;
  desc: string;
  alignments: StartingProficiency[];
}

export interface StartingProficiency {
  index: string;
  name: string;
  url: string;
}

export interface LanguageOptions {
  choose: number;
  type: string;
  from: LanguageOptionsFrom;
}

export interface LanguageOptionsFrom {
  option_set_type: string;
  resource_list_url: string;
}

export interface StartingEquipment {
  equipment: StartingProficiency;
  quantity: number;
}

export interface StartingEquipmentOption {
  choose: number;
  type: string;
  from: StartingEquipmentOptionFrom;
}

export interface StartingEquipmentOptionFrom {
  option_set_type: string;
  equipment_category: StartingProficiency;
}
