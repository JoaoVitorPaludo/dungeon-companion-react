export interface CardData {
  index: string;
  name: string;
  desc: string;
  url: string;
  updated_at: string;
  subsections: Subsection[];
}

export interface Subsection {
  index: string;
  name: string;
  url: string;
}
export interface SubsectionDetail {
  index: string;
  name: string;
  desc: string;
  url: string;
  updated_at: string;
}
