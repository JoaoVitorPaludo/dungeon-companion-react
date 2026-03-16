import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { getAllDnDSubclasses } from "../../../controllers/subclasses/subclasses-controller";

export interface Subclasse {
  index: string;
  name: string;
  url: string;
  level: number;
}
export const useSubclasses = () => {
  const { t } = useTranslation("subclasses");
  const theme = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["dnd-subclasses"],
    queryFn: getAllDnDSubclasses,
  });

  return { data, isLoading, t, theme, navigate };
};
