import { api } from "../../service/api";

export const getAllDnDAbilityScores = async () => {
  const response = await api.get("/ability-scores");
  return response.data.results;
};

export const getAbilityScoreByIndex = async (index: string) => {
  const response = await api.get(`/ability-scores/${index}`);
  return response.data;
};

export const getSkillByIndex = async (index: string) => {
  const response = await api.get(`/skills/${index}`);
  return response.data;
};
