export interface CardData {
  index: string;
  name: string;
  speed: number;
  ability_bonuses: AbilityBonus[];
  age: string;
  alignment: string;
  size: string;
  size_description: string;
  languages: Reference[];
  language_desc: string;
  traits: Reference[];
  subraces: Reference[];
  url: string;
  updated_at: string;
}

export interface AbilityBonus {
  ability_score: Reference;
  bonus: number;
}

export interface Reference {
  index: string;
  name: string;
  url: string;
}

export interface RacesCardProps {}
