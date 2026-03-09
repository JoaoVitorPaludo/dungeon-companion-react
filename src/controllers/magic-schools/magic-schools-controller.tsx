import { api } from "../../service/api";

export const getAllDnDMagicSchools = async () => {
  const response = await api.get("/magic-schools");
  return response.data.results;
};

export const getMagicSchoolsByIndex = async (index: string) => {
  const response = await api.get(`/magic-schools/${index}`);
  return response.data;
};
