import { api } from "../../service/api";

export const getAllDnDConditions = async () => {
  const response = await api.get("/conditions");
  return response.data.results;
};

export const getConditionsByIndex = async (index: string) => {
  const response = await api.get(`/conditions/${index}`);
  return response.data;
};
