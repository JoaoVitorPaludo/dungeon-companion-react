export interface CardData {
  higher_level: string[];
  index: string;
  name: string;
  desc: string[];
  range: string;
  components: string[];
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  damage: Damage;
  dc: Dc;
  school: School;
  classes: School[];
  subclasses: School[];
  url: string;
  updated_at: Date;
}

export interface School {
  index: string;
  name: string;
  url: string;
}

export interface Damage {
  damage_type: School;
  damage_at_character_level: { [key: string]: string };
}

export interface Dc {
  dc_type: School;
  dc_success: string;
}
