import { api } from "../../service/api";

export const getAllDnDFeatures = async () => {
  const response = await api.get("/features");
  return response.data.results;
};

export const getFeaturesByIndex = async (index: string) => {
  const response = await api.get(`/features/${index}`);
  return response.data;
};
