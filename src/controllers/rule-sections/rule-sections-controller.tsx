import { api } from "../../service/api";

export const getAllDnDRuleSections = async () => {
  const response = await api.get("/rule-sections");
  return response.data.results;
};

export const getRuleSectionByIndex = async (index: string) => {
  const response = await api.get(`/rule-sections/${index}`);
  return response.data;
};
