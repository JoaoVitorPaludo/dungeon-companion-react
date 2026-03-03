import { api } from "../../service/api";

export const getAllDnDFeats = async () => {
  const response = await api.get("/feats");
  return response.data.results;
};

export const getFeatsByIndex = async (index: string) => {
  const response = await api.get(`/feats/${index}`);
  return response.data;
};
