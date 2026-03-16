import { api } from "../../service/api";

export const getAllDnDTraits = async () => {
  const response = await api.get("/traits");
  return response.data.results;
};

export const getTraitByIndex = async (index: string) => {
  const response = await api.get(`/traits/${index}`);
  return response.data;
};
