export interface CardData {
  special: any[];
  index: string;
  name: string;
  equipment_category: Category;
  gear_category: Category;
  cost: Cost;
  weight: number;
  desc: string[];
  url: string;
  updated_at: Date;
  contents: any[];
  properties: Properties[];
}

export interface Cost {
  quantity: number;
  unit: string;
}

export interface Category {
  index: string;
  name: string;
  url: string;
}

export interface Properties {
  index: string;
  name: string;
  url: string;
}
