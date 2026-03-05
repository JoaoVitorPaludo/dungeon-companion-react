import { api } from "../../service/api";

export const getAllDnDMagicItems = async () => {
  const response = await api.get("/magic-items");
  return response.data.results;
};

export const getMagicItemsByIndex = async (index: string) => {
  const response = await api.get(`/magic-items/${index}`);
  return response.data;
};
