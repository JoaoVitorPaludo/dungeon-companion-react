export interface CardData {
  index: string;
  races: Race[];
  subraces: any[];
  name: string;
  desc: string[];
  proficiencies: Proficiency[];
  url: string;
  updated_at: Date;
}

export interface Race {
  index: string;
  name: string;
  url: string;
}
export interface Proficiency {
  index: string;
  name: string;
  url: string;
}
