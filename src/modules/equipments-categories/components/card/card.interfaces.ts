export interface CardData {
  equipment: EquipmentCategory[];
  index: string;
  name: string;
  url: string;
  updated_at: Date;
}
interface EquipmentCategory {
  index: string;
  name: string;
  url: string;
}
