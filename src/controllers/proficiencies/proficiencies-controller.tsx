import { api } from "../../service/api";

export const getAllDnDProficiencies = async () => {
  const response = await api.get("/proficiencies");
  return response.data.results;
};

export const getProficienciesByIndex = async (index: string) => {
  const response = await api.get(`/proficiencies/${index}`);
  return response.data;
};

export const getProficienciesDetailsByUrl = async (index: string) => {
  const response = await api.get(`/equipment/${index}`);
  return response.data;
};
