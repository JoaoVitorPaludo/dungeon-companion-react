import { api } from "../../service/api";

export const getAllDnDLanguages = async () => {
  const response = await api.get("/languages");
  return response.data.results;
};

export const getLanguagesByIndex = async (index: string) => {
  const response = await api.get(`/languages/${index}`);
  return response.data;
};
