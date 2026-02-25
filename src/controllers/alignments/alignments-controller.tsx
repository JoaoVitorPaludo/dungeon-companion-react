import { api } from "../../service/api";

export const getAllDnDAlignments = async () => {
  const response = await api.get("/alignments");
  return response.data.results;
};

export const getAlignmentsByIndex = async (index: string) => {
  const response = await api.get(`/alignments/${index}`);
  return response.data;
};
