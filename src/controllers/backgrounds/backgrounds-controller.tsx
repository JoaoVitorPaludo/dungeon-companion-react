import { api } from "../../service/api";

export const getAllDnDBackgrounds = async () => {
  const response = await api.get("/backgrounds");
  return response.data.results;
};

export const getBackgroundsByIndex = async (index: string) => {
  const response = await api.get(`/backgrounds/${index}`);
  return response.data;
};
