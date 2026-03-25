export interface CardData {
  index: string;
  name: string;
  url: string;
  updated_at: Date;
  desc: string[];
  prerequisites: PrerequisitesLevel[];
  class: Class;
}

interface AbilityScore {
  index: string;
  name: string;
  url: string;
}
interface Class {
  index: string;
  name: string;
  url: string;
}

interface PrerequisitesLevel {
  level: number;
  type: string;
}
interface Prerequisites {
  minimum_score: number;
  ability_score: AbilityScore;
}
export type PrerequisitesType = PrerequisitesLevel | Prerequisites;
