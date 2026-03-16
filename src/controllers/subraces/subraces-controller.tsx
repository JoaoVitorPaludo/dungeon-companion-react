import { api } from "../../service/api";

export const getAllDnDSubraces = async () => {
  const response = await api.get("/subraces");
  return response.data.results;
};

export const getSubraceByIndex = async (index: string) => {
  const response = await api.get(`/subraces/${index}`);
  return response.data;
};
