import { api } from "../../service/api";

export const getAllDnDClasses = async () => {
  const response = await api.get("/classes");
  return response.data.results;
};

export const getClassesByIndex = async (index: string) => {
  const response = await api.get(`/classes/${index}`);
  return response.data;
};
