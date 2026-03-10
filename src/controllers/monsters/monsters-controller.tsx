import { api } from "../../service/api";

export const getAllDnDMonsters = async () => {
  const response = await api.get("/monsters");
  return response.data.results;
};

export const getMonstersByIndex = async (index: string) => {
  const response = await api.get(`/monsters/${index}`);
  return response.data;
};
