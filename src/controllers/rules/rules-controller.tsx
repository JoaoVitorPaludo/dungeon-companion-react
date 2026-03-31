import { api } from "../../service/api";

export const getAllDnDRules = async () => {
  const response = await api.get("/rules");
  return response.data.results;
};

export const getRuleByIndex = async (index: string) => {
  const response = await api.get(`/rules/${index}`);
  return response.data;
};
export const getRulesSectionIndex = async (index: string) => {
  const response = await api.get(`/rule-sections/${index}`);
  return response.data;
};
