import { api } from "../../service/api";

export const getAllDnDAbilityScores = async () => {
  const response = await api.get("/ability-scores");
  return response.data.results;
};
