export interface CardData {
  index: string;
  name: string;
  url: string;
  updated_at: Date;
  desc: string[];
  prerequisites: Prerequisites[];
}
interface Prerequisites {
  minimum_score: number;
  ability_score: AbilityScore;
}

interface AbilityScore {
  index: string;
  name: string;
  url: string;
}
