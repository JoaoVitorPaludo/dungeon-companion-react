import { api } from "../../service/api";

export const getAllDnDEquipmentsCategories = async () => {
  const response = await api.get("/equipment-categories");
  return response.data.results;
};

export const getEquipmentCategoryByIndex = async (index: string) => {
  const response = await api.get(`/equipment-categories/${index}`);
  return response.data;
};
