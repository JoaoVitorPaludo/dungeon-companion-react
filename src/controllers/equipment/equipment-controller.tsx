import { api } from "../../service/api";

export const getAllDnDEquipments = async () => {
  const response = await api.get("/equipment");
  return response.data.results;
};

export const getEquipmentByIndex = async (index: string) => {
  const response = await api.get(`/equipment/${index}`);
  return response.data;
};
