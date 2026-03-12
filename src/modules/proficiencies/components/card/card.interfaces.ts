export interface CardData {
  index: string;
  type: string;
  name: string;
  classes: Classe[];
  races: Reference[];
  url: string;
  reference: Reference;
  updated_at: Date;
}

export interface Reference {
  index: string;
  name: string;
  url: string;
}
export interface Classe {
  index: string;
  name: string;
  url: string;
}

export interface ProficienciesCardProps {
  properties: Properties[] | null;
  cost: Cost;
  damage: Damage;
  desc: string[];
}
interface Properties {
  index: string;
  name: string;
  url: string;
}
interface Cost {
  quantity: 10;
  unit: "gp";
}
interface Damage {
  damage_dice: string;
}
