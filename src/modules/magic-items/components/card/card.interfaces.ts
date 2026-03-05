export interface CardData {
  index: string;
  name: string;
  desc: string[];
  url: string;
  updated_at: Date;
  equipment_category: EquipmentCategory;
  image: string;
  rarity: {
    name: string;
  };
}

export interface EquipmentCategory {
  index: string;
  name: string;
  url: string;
}
