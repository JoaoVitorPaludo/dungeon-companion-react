export interface CardData {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: ProficiencyChoice[];
  proficiencies: Proficiency[];
  saving_throws: Proficiency[];
  starting_equipment: StartingEquipment[];
  starting_equipment_options: StartingEquipmentOption[];
  class_levels: string;
  multi_classing: MultiClassing;
  subclasses: Proficiency[];
  url: string;
  updated_at: Date;
}

export interface MultiClassing {
  prerequisites: Prerequisite[];
  proficiencies: Proficiency[];
}

export interface Prerequisite {
  ability_score: Proficiency;
  minimum_score: number;
}

export interface Proficiency {
  index: string;
  name: string;
  url: string;
}

export interface ProficiencyChoice {
  desc: string;
  choose: number;
  type: string;
  from: ProficiencyChoiceFrom;
}

export interface ProficiencyChoiceFrom {
  option_set_type: string;
  options: PurpleOption[];
}

export interface PurpleOption {
  option_type: string;
  item: Proficiency;
}

export interface StartingEquipment {
  equipment: Proficiency;
  quantity: number;
}

export interface StartingEquipmentOption {
  desc: string;
  choose: number;
  type: string;
  from: StartingEquipmentOptionFrom;
}

export type StartingEquipmentOptionFrom =
  | StartingEquipmentOptionsArrayFrom
  | StartingEquipmentCategoryFrom;

export interface StartingEquipmentOptionsArrayFrom {
  option_set_type: "options_array";
  options: StartingEquipmentOptionItem[];
}

export interface StartingEquipmentCategoryFrom {
  option_set_type: "equipment_category";
  equipment_category: Proficiency;
}

export type StartingEquipmentOptionItem =
  | CountedReferenceOption
  | MultipleOption
  | ChoiceOption
  | EquipmentCategoryOption;

export interface CountedReferenceOption {
  option_type: "counted_reference";
  count: number;
  of: Proficiency;
  prerequisites?: OptionPrerequisite[];
}

export interface MultipleOption {
  option_type: "multiple";
  items: CountedReferenceOption[];
}

export interface ChoiceOption {
  option_type: "choice";
  choice: Choice;
}

export interface EquipmentCategoryOption {
  option_type: "equipment_category";
  equipment_category: Proficiency;
}

export interface OptionPrerequisite {
  type: string;
  proficiency: Proficiency;
}

export interface Choice {
  desc: string;
  choose: number;
  type: string;
  from: ChoiceFrom;
}

export interface ChoiceFrom {
  option_set_type: "equipment_category";
  equipment_category: Proficiency;
}
