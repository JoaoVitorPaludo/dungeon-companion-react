import { api } from "../../service/api";

export const getAllDnDSubclasses = async () => {
  const response = await api.get("/subclasses");
  return response.data.results;
};

export const getSubclassByIndex = async (index: string) => {
  const response = await api.get(`/subclasses/${index}`);
  return response.data;
};
