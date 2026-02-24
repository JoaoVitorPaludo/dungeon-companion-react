import { api } from "../service/api";

export const getAllDnDCategories = async () => {
  const response = await api.get("/");
  return response;
};
