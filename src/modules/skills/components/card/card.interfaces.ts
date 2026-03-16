export interface CardData {
  index: string;
  name: string;
  url: string;
  updated_at: string;
  ability_score: AbilityScore;
  desc: string[];
}
interface AbilityScore {
  index: string;
  name: string;
  url: string;
}
