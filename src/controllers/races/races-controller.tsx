import { api } from "../../service/api";

export const getAllDnDRaces = async () => {
  const response = await api.get("/races");
  return response.data.results;
};

export const getRaceByIndex = async (index: string) => {
  const response = await api.get(`/races/${index}`);
  return response.data;
};
