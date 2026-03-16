import { api } from "../../service/api";

export const getAllDnDSkills = async () => {
  const response = await api.get("/skills");
  return response.data.results;
};

export const getSkillByIndex = async (index: string) => {
  const response = await api.get(`/skills/${index}`);
  return response.data;
};
