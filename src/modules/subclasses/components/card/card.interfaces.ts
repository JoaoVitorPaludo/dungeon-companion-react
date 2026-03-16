export interface CardData {
  index: string;
  class: Class;
  name: string;
  subclass_flavor: string;
  desc: string[];
  spells: Spell[];
  subclass_levels: string;
  url: string;
  updated_at: Date;
}

export interface Class {
  index: string;
  name: string;
  url: string;
  type?: Type;
}

export enum Type {
  Level = "level",
}

export interface Spell {
  prerequisites: Class[];
  spell: Class;
}
