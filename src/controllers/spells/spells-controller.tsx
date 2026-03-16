import { api } from "../../service/api";

export const getAllDnDSpells = async () => {
  const response = await api.get("/spells");
  return response.data.results;
};

export const getSpellByIndex = async (index: string) => {
  const response = await api.get(`/spells/${index}`);
  return response.data;
};
