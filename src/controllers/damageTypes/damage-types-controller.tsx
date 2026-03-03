import { api } from "../../service/api";

export const getAllDnDDamageTypes = async () => {
  const response = await api.get("/damage-types");
  return response.data.results;
};

export const getDamageTypesByIndex = async (index: string) => {
  const response = await api.get(`/damage-types/${index}`);
  return response.data;
};
