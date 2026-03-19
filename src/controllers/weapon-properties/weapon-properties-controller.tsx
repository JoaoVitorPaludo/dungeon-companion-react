import { api } from "../../service/api";

export const getAllDnDWeaponProperties = async () => {
  const response = await api.get("/weapon-properties");
  return response.data.results;
};

export const getWeaponPropertyByIndex = async (index: string) => {
  const response = await api.get(`/weapon-properties/${index}`);
  return response.data;
};
